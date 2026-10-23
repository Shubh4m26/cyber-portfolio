
export interface ProjectSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  technologies: string[];
  overview: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "enterprise-soc-engineering",
    title: "Enterprise SOC Engineering & Detection Operations",
    description:
      "Client production SOC engineering covering Wazuh detection research, process execution investigation, rule modification, custom detection development, validation, and incident response.",
    date: "Production SOC",
    category: "Detection Engineering & Security Operations",
    technologies: [
      "Wazuh",
      "Windows Event Analysis",
      "Sysmon",
      "PowerShell",
      "Detection Engineering",
      "TheHive",
      "Restic",
      "Incident Response",
    ],
    overview:
      "Worked in a client production SOC environment investigating security alerts, analyzing process execution context, and engineering Wazuh detection logic. Researched potential attacker bypass methods, modified existing rules, developed custom and child rules, and validated detection behavior using Wazuh Logtest and a testing environment before preparing changes for production.",
    sections: [
      {
        title: "Production Endpoint Onboarding & Automation",
        content:
          "Supported client endpoint onboarding and integration into the production Wazuh monitoring environment.",
        bullets: [
          "Assisted clients with Wazuh agent installation and endpoint onboarding.",
          "Developed automation files for Wazuh agent deployment across endpoints.",
          "Developed automation to support Sysmon deployment.",
          "Supported endpoint configuration and log collection.",
        ],
      },
      {
        title: "Critical Alert Investigation & Process Execution Analysis",
        content:
          "Investigated critical-level alerts by reconstructing process execution context and checking whether observed activity matched the expected behavior of legitimate services.",
        bullets: [
          "Reviewed the initiating user and security context, including NT AUTHORITY\\SYSTEM and service-related execution.",
          "Investigated which process initiated the activity and what process it spawned.",
          "Analyzed parent-child process relationships and PowerShell execution.",
          "Reviewed command activity, executable or script paths, and file extensions.",
          "Investigated whether file paths and execution behavior matched the expected service operation.",
          "Examined legitimate backup and antivirus activity before determining whether further investigation was required.",
        ],
      },
      
      {
        title: "Production Alert Investigation Workflow",
        content:
          "Investigated critical alerts by correlating user identity, process execution, parent-child relationships, command activity, and file paths to distinguish expected service behavior from potentially suspicious execution.",
        bullets: [
          "Reviewed the alert severity, initiating account, and execution context.",
          "Identified the process responsible for initiating the activity and examined its parent and child processes.",
          "Investigated whether NT AUTHORITY\\SYSTEM activity originated from an expected Windows service or scheduled operation.",
          "Correlated executable paths, command activity, file extensions, and process relationships with the expected service behavior.",
          "Investigated suspicious execution patterns and potential detection bypass scenarios.",
          "Modified existing detection logic or developed additional rules where detection requirements were identified.",
          "Validated detection behavior using Wazuh Logtest and practical testing before preparing changes for production."
        ],
      },

      {
        title: "Adversarial Detection Research & Rule Engineering",
        content:
          "Researched attack behavior and potential detection bypass methods before fine-tuning detection logic. Modified existing rules and developed custom or child rules to address identified detection requirements.",
        bullets: [
          "Investigated how attackers could potentially bypass existing detection rules.",
          "Researched attack behavior and analyzed detection conditions.",
          "Modified existing Wazuh rules to address identified detection gaps.",
          "Fine-tuned file-path matching and regex conditions where applicable.",
          "Incorporated parent-child process relationships and user-account mapping into detection logic.",
          "Created custom and child rules for additional security requirements.",
          "Worked on detection coverage involving access control, Active Directory, PowerShell, Microsoft Office, antivirus, ERP servers, and endpoint activity.",
        ],
      },
      {
        title: "Detection Validation Before Production",
        content:
          "Validated detection logic through Wazuh Logtest and practical testing in a testing environment before preparing changes for production.",
        bullets: [
          "Used Wazuh Logtest to evaluate detection behavior.",
          "Performed practical testing to generate relevant security events.",
          "Triggered alerts and checked whether detection logic behaved as expected.",
          "Reviewed potential detection gaps and refined rules based on validation findings.",
          "Prepared tested detection changes before introducing them into production.",
        ],
      },
      {
        title: "Phishing Investigation & Remediation",
        content:
          "Identified phishing-related activity, communicated with the client, and supported investigation and remediation.",
        bullets: [
          "Guided investigation using relevant file hashes.",
          "Supported suspicious-file identification and removal.",
          "Reviewed scheduled tasks and potential persistence.",
          "Investigated suspicious processes and related artifacts.",
          "Supported remediation and follow-up checks.",
        ],
      },
      {
        title: "SOC Operations & Maintenance",
        content:
          "Supported ongoing production SOC operations through client reporting, ticket management, backup health checks, and maintenance.",
        bullets: [
          "Prepared fortnightly client security reports.",
          "Managed TheHive tickets for suspicious alerts requiring attention or clarification.",
          "Worked on Restic backup operations.",
          "Performed daily backup health checks and infrastructure maintenance.",
          "Explored Wazuh CDB functionality; further research and implementation remained pending.",
        ],
      },
    ],
  },

  {
  slug: "ibm-qradar-deployment",
  title: "IBM QRadar CE Deployment & Detection Validation",
  description:
    "Independent QRadar CE deployment, licensing troubleshooting, Windows and Linux log-source onboarding, WinCollect integration, network activity visibility, and practical security event investigation.",
  date: "SIEM Engineering",
  category: "SIEM Deployment & Detection",
  technologies: [
    "IBM QRadar CE",
    "WinCollect",
    "Windows Event Logs",
    "Linux",
    "SIEM",
    "Log Analysis",
    "Security Event Investigation",
  ],
  overview:
    "Independently deployed IBM QRadar Community Edition on a separate machine and worked through deployment and licensing issues. Integrated Windows endpoints using WinCollect, onboarded Linux log sources, inspected collected events, enabled Linux network activity visibility, and performed practical Windows activity testing to investigate QRadar-generated alerts.",
  sections: [
    {
      title: "Independent QRadar CE Deployment & Licensing",
      content:
        "Built a separate QRadar Community Edition environment to explore SIEM deployment, log-source integration, and security event investigation.",
      bullets: [
        "Independently deployed IBM QRadar Community Edition on a separate machine.",
        "Investigated and resolved a licensing issue encountered during deployment.",
        "Prepared the environment for endpoint log collection and event investigation.",
        "Validated the deployment through subsequent log-source integration and security activity testing.",
      ],
    },
    {
      title: "Windows Endpoint Integration — WinCollect",
      content:
        "Worked on Windows endpoint onboarding and event collection using WinCollect to bring endpoint security events into QRadar.",
      bullets: [
        "Configured Windows endpoint log collection using WinCollect.",
        "Worked with Windows event collection and port 514.",
        "Onboarded Windows log sources into the QRadar environment.",
        "Inspected collected Windows events and their representation within QRadar.",
        "Reviewed endpoint event information to support security investigation.",
      ],
    },
    {
      title: "Linux Log Collection & Network Activity",
      content:
        "Integrated Linux log sources and worked on enabling network activity visibility to inspect collected events and understand endpoint activity within QRadar.",
      bullets: [
        "Worked on Linux log-source onboarding and collection.",
        "Inspected Linux logs received by the SIEM.",
        "Enabled Linux network activity visibility.",
        "Reviewed collected network-related events.",
        "Used event data to understand Linux activity and SIEM investigation workflows.",
      ],
    },
    {
      title: "Windows Security Activity & Alert Investigation",
      content:
        "Performed practical activity testing on a Windows endpoint and investigated the resulting QRadar alerts to understand how endpoint activity was collected and represented in the SIEM.",
      bullets: [
        "Generated practical security-related activity on a Windows endpoint.",
        "Investigated the resulting QRadar alerts.",
        "Reviewed event details and associated endpoint activity.",
        "Analyzed collected events to understand detection and investigation behavior.",
        "Used practical testing to explore the relationship between endpoint activity, collected logs, and SIEM alerts.",
      ],
    },
    {
      title: "SIEM Deployment & Investigation Workflow",
      content:
        "Worked through the end-to-end SIEM workflow from deployment and log-source onboarding to event inspection and practical security activity investigation.",
      bullets: [
        "Deployed and prepared the QRadar CE environment.",
        "Integrated Windows and Linux log sources.",
        "Inspected collected endpoint and network-related events.",
        "Performed practical activity testing and investigated generated alerts.",
        "Built hands-on experience with SIEM deployment, event collection, and security investigation.",
      ],
    },
  ],
},


{
  slug: "soc-infrastructure-automation",
  title: "SOC Infrastructure Engineering & Distributed Monitoring",
  description:
    "Designed and worked on distributed Wazuh monitoring infrastructure involving centralized management, client-side monitoring, Docker-based deployment, log forwarding, firewall connectivity, and endpoint integration.",

  date: "SOC Infrastructure Engineering",
  category: "SIEM Infrastructure & Network Security",

  technologies: [
    "Wazuh 4.14.5",
    "Docker",
    "Docker Compose",
    "Wazuh Master-Worker",
    "Filebeat",
    "Syslog",
    "FortiGate",
    "OPNsense",
    "VPN",
    "Windows",
    "Linux",
  ],

  overview:
    "Worked on SOC monitoring infrastructure connecting centralized Wazuh components with distributed endpoint and client-side monitoring. The architecture involved Docker-based Wazuh deployment, master-worker communication, log forwarding, firewall and VPN connectivity, and troubleshooting event collection across network boundaries. Investigated how endpoint events travel from the monitored environment to centralized security monitoring and how infrastructure connectivity affects log visibility.",

  sections: [
    {
      title: "Centralized Wazuh Deployment & Architecture",

      content:
        "Worked on a centralized Wazuh architecture using Docker-based deployment, separating monitoring components and investigating how distributed monitoring environments communicate.",

      bullets: [
        "Worked with Wazuh 4.14.5 deployment using Docker and Docker Compose.",
        "Configured and investigated the centralized Wazuh manager, indexer, and dashboard architecture.",
        "Worked with master-worker architecture for distributed monitoring.",
        "Investigated Wazuh cluster communication and worker integration requirements.",
        "Worked with cluster communication on TCP port 1516.",
        "Reviewed manager-side configuration and connectivity requirements for distributed monitoring.",
      ],
    },

    {
      title: "Client-Side Worker & Centralized Log Forwarding",

      content:
        "Worked on connecting a client-side Wazuh monitoring environment with centralized SOC infrastructure, including worker integration and forwarding collected security events.",

      bullets: [
        "Worked on a Wazuh worker deployment at the client-side monitoring environment.",
        "Investigated connectivity between the worker and centralized monitoring infrastructure.",
        "Worked with Filebeat-based forwarding of Wazuh alert data.",
        "Investigated forwarding of collected security events toward the centralized environment.",
        "Worked with Syslog-based log collection on UDP port 514.",
        "Reviewed the relationship between endpoint event collection, worker processing, and centralized alert visibility.",
      ],
    },

    {
      title: "Firewall, VPN & Network Connectivity",

      content:
        "Worked on network connectivity scenarios involving client environments, firewall boundaries, VPN connectivity, and centralized SOC monitoring.",

      bullets: [
        "Worked with FortiGate firewall infrastructure in VPN connectivity scenarios.",
        "Worked with OPNsense firewall configuration in the monitoring environment.",
        "Investigated connectivity between client-side and centralized monitoring networks.",
        "Worked with VPN connectivity requirements for distributed SOC infrastructure.",
        "Reviewed network segmentation and communication requirements between monitoring components.",
        "Investigated firewall rules and connectivity limitations affecting communication between environments.",
        "Worked on connectivity troubleshooting involving Windows-hosted Docker infrastructure and virtualized network environments.",
      ],
    },

    {
      title: "Monitoring Infrastructure & Endpoint Integration",

      content:
        "Worked on the integration of endpoint monitoring, security event collection, and supporting infrastructure components used in SOC operations.",

      bullets: [
        "Worked with Wazuh agent integration and endpoint monitoring.",
        "Supported Windows endpoint onboarding and Sysmon integration.",
        "Investigated endpoint log collection and monitoring requirements.",
        "Worked with Linux-based monitoring components and security event collection.",
        "Reviewed how endpoint events are collected and made available for centralized monitoring.",
        "Worked on monitoring infrastructure supporting client security operations.",
      ],
    },

    {
      title: "Infrastructure Troubleshooting & Log Visibility",

      content:
        "Investigated monitoring and connectivity issues affecting security event collection, forwarding, and visibility across the SOC infrastructure.",

      bullets: [
        "Investigated connectivity requirements between Wazuh components.",
        "Reviewed Filebeat forwarding and centralized event visibility.",
        "Worked on identifying network and configuration issues affecting monitoring.",
        "Investigated communication requirements across firewall and VPN boundaries.",
        "Reviewed differences between endpoint event collection and centralized alert visibility.",
        "Worked on troubleshooting monitoring infrastructure and log collection workflows.",
      ],
    },

    {
      title: "SOC Integration & Operational Support",

      content:
        "Worked with supporting security operations components and infrastructure workflows used for monitoring, investigation, and operational maintenance.",

      bullets: [
        "Worked with Wazuh monitoring and security event collection.",
        "Supported endpoint integration and monitoring infrastructure.",
        "Worked with TheHive ticketing workflows for suspicious security events.",
        "Worked with Restic backup operations and daily backup health checks.",
        "Supported infrastructure maintenance and operational monitoring.",
        "Investigated infrastructure requirements supporting distributed SOC operations.",
      ],
    },
  ],
},



{
  slug: "security-assessment-lab",
  title: "Web Application Security Assessment & VAPT Lab",
  description:
    "Hands-on web application security testing involving HTTP traffic interception, request and response analysis, authentication testing, vulnerability assessment, and OWASP security concepts.",
  date: "Security Assessment Lab",
  category: "Application Security & VAPT",
  technologies: [
    "Burp Suite",
    "OWASP",
    "HTTP/HTTPS",
    "Web Application Security",
    "Vulnerability Assessment",
    "Request Analysis",
    "Security Testing",
  ],
  overview:
    "Built practical experience with web application security assessment workflows, focusing on understanding application behavior, inspecting HTTP requests and responses, identifying potential security weaknesses, and evaluating application security controls. Used web security testing concepts and traffic analysis to understand how application inputs, authentication mechanisms, and server responses affect security.",
  sections: [
    {
      title: "HTTP Traffic Interception & Request Analysis",
      content:
        "Worked with Burp Suite to inspect web application traffic and understand communication between the browser and application server.",
      bullets: [
        "Intercepted and inspected HTTP requests and responses.",
        "Reviewed request methods, headers, parameters, and response behavior.",
        "Analyzed how application inputs were transmitted to the server.",
        "Examined server responses to understand application behavior.",
        "Used request inspection to support security testing and vulnerability analysis.",
      ],
    },
    {
      title: "Authentication & Access Control Assessment",
      content:
        "Studied authentication and access-control security concepts to understand how web applications protect user accounts, sessions, and restricted functionality.",
      bullets: [
        "Reviewed authentication-related request and response behavior.",
        "Studied session handling and access-control concepts.",
        "Investigated how application functionality should respond to unauthorized access attempts.",
        "Reviewed OWASP access-control security concepts.",
        "Analyzed potential security weaknesses in authentication and authorization workflows.",
      ],
    },
    {
      title: "Input Validation & Vulnerability Assessment",
      content:
        "Explored web application input handling and vulnerability assessment techniques to understand how applications process user-controlled data.",
      bullets: [
        "Reviewed application input parameters and request behavior.",
        "Studied input validation and server-side handling.",
        "Explored common web application vulnerability categories.",
        "Reviewed SQL injection and cross-site scripting concepts.",
        "Studied potential security weaknesses involving user-controlled input.",
        "Used application responses to understand security behavior during testing.",
      ],
    },
    {
      title: "OWASP Web Application Security",
      content:
        "Studied OWASP web application security concepts and assessment methodologies to understand common application security risks and their investigation workflows.",
      bullets: [
        "Reviewed OWASP-related web application security concepts.",
        "Studied injection-related security risks.",
        "Reviewed authentication and access-control weaknesses.",
        "Investigated security misconfiguration concepts.",
        "Studied how application behavior can expose security weaknesses.",
        "Used security testing concepts to improve understanding of web application protection mechanisms.",
      ],
    },
    {
      title: "Security Testing & Assessment Workflow",
      content:
        "Worked through a structured security assessment approach involving application behavior analysis, traffic inspection, vulnerability research, and review of potential security weaknesses.",
      bullets: [
        "Identified application functionality and relevant testing areas.",
        "Inspected HTTP traffic using Burp Suite.",
        "Reviewed application input and response behavior.",
        "Studied potential vulnerability categories and testing techniques.",
        "Analyzed application security concepts using OWASP guidance.",
        "Documented technical observations and areas requiring further investigation.",
      ],
    },
  ],
},

];

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
