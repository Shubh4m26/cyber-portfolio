# ==========================================
# Sysmon & Wazuh Deployment Doctor Script
# ==========================================

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host " RUNNING ENDPOINT HEALTH DIAGNOSTICS" -ForegroundColor Cyan
Write-Host "==================================================`n" -ForegroundColor Cyan

$Passed = 0
$Failed = 0

function Report-Status {
    param (
        [string]$TestName,
        [bool]$Success,
        [string]$FailReason
    )
    if ($Success) {
        Write-Host "[ PASS ] " -ForegroundColor Green -NoNewline
        Write-Host "$TestName"
        $script:Passed++
    } else {
        Write-Host "[ FAIL ] " -ForegroundColor Red -NoNewline
        Write-Host "$TestName"
        Write-Host "         Reason: $FailReason" -ForegroundColor Yellow
        $script:Failed++
    }
}

# 1. Check Administrative Privileges
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
Report-Status -TestName "Administrator Privileges Check" -Success $isAdmin -FailReason "Script is not running with elevated privileges. Please run PowerShell as Administrator."

# 2. Check Internet Connectivity (Sysinternals Domain)
try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $request = [System.Net.WebRequest]::Create("https://live.sysinternals.com")
    $request.Timeout = 5000
    $response = $request.GetResponse()
    $response.Close()
    Report-Status -TestName "Network Access to Microsoft Sysinternals" -Success $true
} catch {
    Report-Status -TestName "Network Access to Microsoft Sysinternals" -Success $false -FailReason "Cannot reach live.sysinternals.com via HTTPS. Check internet connection or firewall."
}

# 3. Check Sysmon Service Status
$sysmonService = Get-Service -Name "Sysmon*" -ErrorAction SilentlyContinue | Select-Object -First 1
if ($sysmonService) {
    if ($sysmonService.Status -eq 'Running') {
        Report-Status -TestName "Sysmon Service Status" -Success $true
    } else {
        Report-Status -TestName "Sysmon Service Status" -Success $false -FailReason "Sysmon service is installed but currently $($sysmonService.Status)."
    }
} else {
    Report-Status -TestName "Sysmon Service Status" -Success $false -FailReason "Sysmon service is not installed on this system."
}

# 4. Check Sysmon Event Log Operational Channel
try {
    $sysmonLog = Get-WinEvent -ListLog "Microsoft-Windows-Sysmon/Operational" -ErrorAction Stop
    if ($sysmonLog.IsEnabled) {
        Report-Status -TestName "Sysmon Event Log Channel Enabled" -Success $true
    } else {
        Report-Status -TestName "Sysmon Event Log Channel Enabled" -Success $false -FailReason "Sysmon event log channel exists but is currently disabled."
    }
} catch {
    Report-Status -TestName "Sysmon Event Log Channel Enabled" -Success $false -FailReason "Sysmon event log channel 'Microsoft-Windows-Sysmon/Operational' not found."
}

# 5. Check Wazuh Agent Installation & Service Status
$wazuhService = Get-Service -Name "wazuh" -ErrorAction SilentlyContinue
if ($wazuhService) {
    if ($wazuhService.Status -eq 'Running') {
        Report-Status -TestName "Wazuh Agent Service Status" -Success $true
    } else {
        Report-Status -TestName "Wazuh Agent Service Status" -Success $false -FailReason "Wazuh service is installed but currently $($wazuhService.Status)."
    }
} else {
    Report-Status -TestName "Wazuh Agent Service Status" -Success $false -FailReason "Wazuh Agent service ('wazuh') is not installed."
}

# 6. Check Wazuh ossec.conf Sysmon Integration
$WazuhConfPath = "C:\Program Files (x86)\ossec-agent\ossec.conf"
if (Test-Path $WazuhConfPath) {
    try {
        [xml]$xml = Get-Content $WazuhConfPath
        $sysmonChannel = $xml.ossec_config.localfile | Where-Object { $_.location -eq "Microsoft-Windows-Sysmon/Operational" }
        
        if ($sysmonChannel -and $sysmonChannel.log_format -eq "eventchannel") {
            Report-Status -TestName "Wazuh ossec.conf Sysmon Integration" -Success $true
        } else {
            Report-Status -TestName "Wazuh ossec.conf Sysmon Integration" -Success $false -FailReason "Sysmon eventchannel node is missing from ossec.conf."
        }
    } catch {
        Report-Status -TestName "Wazuh ossec.conf Sysmon Integration" -Success $false -FailReason "Failed to parse ossec.conf XML."
    }
} else {
    Report-Status -TestName "Wazuh ossec.conf Sysmon Integration" -Success $false -FailReason "ossec.conf file not found at $WazuhConfPath."
}

# 7. Check Wazuh Connection State File
$WazuhStatePath = "C:\Program Files (x86)\ossec-agent\wazuh-agent.state"
if (Test-Path $WazuhStatePath) {
    $stateLine = Select-String -Path $WazuhStatePath -Pattern "^status=" | Select-Object -First 1
    if ($stateLine -and $stateLine.Line -match "connected") {
        Report-Status -TestName "Wazuh Manager Connection State" -Success $true
    } else {
        $statusVal = if ($stateLine) { $stateLine.Line } else { "Unknown" }
        Report-Status -TestName "Wazuh Manager Connection State" -Success $false -FailReason "Wazuh agent is not connected to manager. Current state: $statusVal"
    }
} else {
    Report-Status -TestName "Wazuh Manager Connection State" -Success $false -FailReason "Wazuh state file not found at $WazuhStatePath."
}

# Summary Report
$summaryColor = if ($Failed -eq 0) { "Green" } else { "Red" }
Write-Host "`n--------------------------------------------------"
Write-Host " DIAGNOSTIC SUMMARY: $Passed PASSED | $Failed FAILED" -ForegroundColor $summaryColor
Write-Host "--------------------------------------------------`n"