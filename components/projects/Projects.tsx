
"use client";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <SectionTitle
        subtitle="PROJECTS"
        title="Featured Engineering Projects"
      />

      <p className="text-zinc-400 max-w-3xl mb-14 leading-8">
        Security engineering projects covering SOC operations, detection
        engineering, SIEM deployment, infrastructure automation and
        practical security assessment.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* Project 1: Wazuh SOC */}
        <ProjectCard
          slug="enterprise-soc-engineering"
          title="Enterprise SOC Engineering & Detection Operations"
          description="Independently onboarded clients and endpoints into a Wazuh SOC environment, automated agent and Sysmon deployment, developed custom detection rules, investigated and tuned alert noise, validated detections through Logtest and practical testing, and supported phishing investigation, remediation, reporting and backup operations."
          technologies={[
            "Wazuh",
            "Detection Engineering",
            "Sysmon",
            "PowerShell",
            "TheHive",
            "Restic",
            "Incident Response",
          ]}
        />

        {/* Project 2: IBM QRadar */}
        <ProjectCard
          slug="ibm-qradar-deployment"
          title="IBM QRadar CE Deployment & Detection Validation"
          description="Independently deployed IBM QRadar Community Edition, resolved licensing issues, onboarded Windows through WinCollect and Linux endpoints, collected and analyzed endpoint and network activity, and performed attack simulations to observe and investigate generated security alerts."
          technologies={[
            "IBM QRadar CE",
            "WinCollect",
            "Windows",
            "Linux",
            "SIEM",
            "Log Analysis",
          ]}
        />

        {/* Project 3: SOC Infrastructure */}
        <ProjectCard
          slug="soc-infrastructure-automation"
          title="Enterprise SOC Infrastructure & Automation"
          description="Worked on SOC infrastructure deployment involving Docker, Wazuh, TheHive, firewall and VPN connectivity, Windows infrastructure and centralized monitoring. Supported endpoint deployment automation, multi-site log collection, infrastructure configuration and operational maintenance."
          technologies={[
            "Docker",
            "Wazuh",
            "TheHive",
            "FortiGate",
            "OPNsense",
            "Windows Server",
          ]}
        />

        {/* Project 4: Security Assessment Lab */}
        <ProjectCard
          slug="security-assessment-lab"
          title="Security Assessment Lab"
          description="Practiced vulnerability assessment and web application security testing in a lab environment using Burp Suite. Explored HTTP traffic analysis, OWASP Top 10 concepts and common web application vulnerabilities through practical security testing workflows."
          technologies={[
            "Burp Suite",
            "OWASP",
            "VAPT",
            "Web Security",
            "HTTP Analysis",
          ]}
        />

      </div>
    </section>
  );
}
