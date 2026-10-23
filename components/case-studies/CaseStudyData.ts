
export interface CaseStudy {
  id: string;
  title: string;
  duration: string;
  role: string;
  difficulty: number;
  problem: string;
  solution: string[];
  challenges: string[];
  technologies: string[];
  outcome: string[];
  lessons: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-soc",
    title: "Enterprise SOC Platform from Scratch",
    duration: "4+ Months",
    role: "SOC Analyst / Infrastructure Engineer",
    difficulty: 5,
    problem:
      "Designed and deployed a centralized SOC architecture capable of securely collecting logs from multiple client locations while maintaining scalability and operational efficiency.",

    solution: [
      "Designed MSSP-style architecture",
      "Deployed Wazuh Manager using Docker",
      "Configured Wazuh Worker deployment",
      "Integrated TheHive",
      "Configured FortiGate & OPNsense VPN connectivity",
      "Created PowerShell deployment automation",
      "Implemented centralized dashboard"
    ],

    challenges: [
      "Worker ↔ Manager secure communication",
      "Docker networking",
      "VPN connectivity",
      "Agent onboarding",
      "Rule tuning",
      "Reducing false positives"
    ],

    technologies: [
      "Wazuh",
      "Docker",
      "TheHive",
      "FortiGate",
      "OPNsense",
      "Windows Server",
      "PowerShell",
      "Linux"
    ],

    outcome: [
      "Centralized monitoring",
      "Scalable SOC architecture",
      "Automated deployment",
      "Improved operational visibility"
    ],

    lessons: [
      "Good architecture is more important than adding tools.",
      "Automation reduces operational effort.",
      "Detection engineering requires continuous improvement."
    ]
  },

  {
    id: "automation",
    title: "Security Infrastructure Automation",
    duration: "Ongoing",
    role: "Automation Engineer",
    difficulty: 4,

    problem:
      "Reduce repetitive deployment tasks while improving consistency.",

    solution: [
      "PowerShell automation",
      "Agent deployment scripts",
      "Configuration automation",
      "Operational standardization"
    ],

    challenges: [
      "Windows compatibility",
      "Deployment consistency",
      "Error handling"
    ],

    technologies: [
      "PowerShell",
      "Windows",
      "Docker",
      "Wazuh"
    ],

    outcome: [
      "Reduced deployment time",
      "Repeatable deployments",
      "Less manual effort"
    ],

    lessons: [
      "Automate repetitive work whenever possible."
    ]
  },

  {
    id: "infrastructure",
    title: "Enterprise Infrastructure Deployment",
    duration: "Production",
    role: "Infrastructure Engineer",
    difficulty: 4,

    problem:
      "Build secure enterprise infrastructure supporting SOC operations.",

    solution: [
      "Active Directory",
      "DNS",
      "File Server",
      "Mail Server",
      "VPN",
      "VLAN"
    ],

    challenges: [
      "Network segmentation",
      "Identity management",
      "Service integration"
    ],

    technologies: [
      "Windows Server",
      "Active Directory",
      "FortiGate",
      "OPNsense"
    ],

    outcome: [
      "Secure infrastructure",
      "Centralized administration"
    ],

    lessons: [
      "Proper planning simplifies future scaling."
    ]
  },

  {
    id: "vapt",
    title: "Security Assessment Lab",
    duration: "Continuous Learning",
    role: "Security Analyst",
    difficulty: 3,

    problem:
      "Practice secure assessment methodologies in controlled lab environments.",

    solution: [
      "Web application testing",
      "OWASP validation",
      "Burp Suite analysis"
    ],

    challenges: [
      "Finding root causes",
      "Reducing false positives"
    ],

    technologies: [
      "Burp Suite",
      "OWASP",
      "VAPT"
    ],

    outcome: [
      "Improved testing methodology",
      "Better vulnerability understanding"
    ],

    lessons: [
      "Always validate findings before reporting."
    ]
  }
];
