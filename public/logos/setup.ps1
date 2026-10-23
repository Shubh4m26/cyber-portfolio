# 1. Require Administrative Privileges
$currentPrincipal = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Error "Error: This installer must be executed as Administrator."
    Exit 1
}

$ErrorActionPreference = "Stop"

# Get the directory where the script/exe is located
$ScriptDir = $PSScriptRoot
if (-not $ScriptDir) { $ScriptDir = Get-Location }

# Search for the XML config file in the current directory
$LocalConfigFile = Get-ChildItem -Path $ScriptDir -Filter "*sysmonconfig*.xml" | Select-Object -First 1 -ExpandProperty FullName

if (-not $LocalConfigFile) {
    Write-Error "Error: Could not find any XML configuration file starting with 'sysmonconfig' in $ScriptDir"
    Exit 1
}

Write-Host "[+] Found configuration file: $LocalConfigFile" -ForegroundColor Green

# 2. Prepare Temp Folder & Copy Config
$WorkingDir = "$env:TEMP\SysmonDeploy"
if (-not (Test-Path $WorkingDir)) { New-Item -ItemType Directory -Path $WorkingDir | Out-Null }

$TempConfigFile = Join-Path -Path $WorkingDir -ChildPath "sysmonconfig.xml"
Copy-Item -Path $LocalConfigFile -Destination $TempConfigFile -Force

# 3. Download Sysmon64
$SysmonExe = Join-Path -Path $WorkingDir -ChildPath "Sysmon64.exe"
if (-not (Test-Path $SysmonExe)) {
    Write-Host "[+] Downloading Sysmon64.exe from Microsoft Sysinternals..." -ForegroundColor Yellow
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri "https://live.sysinternals.com/tools/Sysmon64.exe" -OutFile $SysmonExe
}

# 4. Install Sysmon
Write-Host "[+] Installing Sysmon Service..." -ForegroundColor Yellow
Start-Process -FilePath $SysmonExe -ArgumentList "-accepteula -i `"$TempConfigFile`"" -Wait -NoNewWindow

# 5. Configure Wazuh Agent
$WazuhConfPath = "C:\Program Files (x86)\ossec-agent\ossec.conf"
if (Test-Path $WazuhConfPath) {
    Write-Host "[+] Wazuh Agent detected. Updating ossec.conf..." -ForegroundColor Yellow
    [xml]$xml = Get-Content $WazuhConfPath

    $sysmonChannelExists = $xml.ossec_config.localfile | Where-Object { $_.location -eq "Microsoft-Windows-Sysmon/Operational" }

    if (-not $sysmonChannelExists) {
        $localfileNode = $xml.CreateElement("localfile")
        
        $locationNode = $xml.CreateElement("location")
        $locationNode.InnerText = "Microsoft-Windows-Sysmon/Operational"
        $localfileNode.AppendChild($locationNode) | Out-Null
        
        $logFormatNode = $xml.CreateElement("log_format")
        $logFormatNode.InnerText = "eventchannel"
        $localfileNode.AppendChild($logFormatNode) | Out-Null
        
        $xml.ossec_config.AppendChild($localfileNode) | Out-Null
        
        Copy-Item -Path $WazuhConfPath -Destination "$WazuhConfPath.bak" -Force
        $xml.Save($WazuhConfPath)
        
        Write-Host "[+] Restarting Wazuh Agent..." -ForegroundColor Green
        Restart-Service -Name "wazuh" -Force -ErrorAction SilentlyContinue
    } else {
        Write-Host "[+] Sysmon channel is already configured in Wazuh ossec.conf." -ForegroundColor Green
    }
} else {
    Write-Warning "[!] Wazuh Agent not found at $WazuhConfPath."
}

# Cleanup
Remove-Item -Path $WorkingDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "[+] Sysmon and Wazuh setup finished!" -ForegroundColor Green