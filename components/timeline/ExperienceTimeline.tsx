"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "Sep 2025",
    title: "Tata STRIVE",
    role: "Cybersecurity Training Program",
    description:
      "Completed practical cybersecurity training focused on security operations, SIEM fundamentals, network security, vulnerability assessment, and security investigation. Developed foundational knowledge through cybersecurity labs and hands-on exercises.",
    responsibilities: [
      "Studied SOC operations, security event monitoring, and SIEM fundamentals using Splunk, Wazuh, and IBM QRadar.",
      "Practiced networking concepts, security fundamentals, and vulnerability assessment techniques through cybersecurity labs.",
      "Explored cryptography, digital forensics, and security investigation methodologies.",
    ],
    skills: [
      "SOC Fundamentals",
      "Splunk",
      "Wazuh",
      "IBM QRadar",
      "Networking",
      "VAPT",
      "Cryptography",
      "Digital Forensics",
    ],
  },
  {
    year: "Jan 2026",
    title: "NodeSec Technology",
    role: "Cybersecurity Associate",
    description:
      "Supported enterprise endpoint security, data protection, privileged access security, and vulnerability management operations using security platforms and enterprise security tools.",
    responsibilities: [
      "Worked with endpoint security, Data Loss Prevention (DLP), and security monitoring technologies to support enterprise security operations.",
      "Supported endpoint security operations using SentinelOne and Forescout, including endpoint visibility and security monitoring.",
      "Worked with CyberArk to support privileged access security and access control operations.",
      "Supported vulnerability management and patch management workflows using Qualys and Kaseya Patch Management.",
    ],
    skills: [
      "GTB Technologies DLP",
      "SentinelOne",
      "CyberArk",
      "Forescout",
      "Qualys",
      "Kaseya Patch Management",
    ],
  },
  {
    year: "Apr 2026 – Present",
    title: "Mobisec Technology",
    role: "SOC Analyst",
    description:
      "Working across production security operations, SIEM engineering, detection development, endpoint onboarding, and incident investigation. Focused on improving security visibility through centralized monitoring, detection logic, and security infrastructure.",
    responsibilities: [
      "Investigate production SOC alerts by correlating endpoint telemetry, process execution, command-line activity, file paths, and parent-child process relationships to identify suspicious behavior and support incident triage.",
      "Develop, modify, and fine-tune custom detection rules for endpoint activity, PowerShell, Active Directory, access control, and security-related events.",
      "Validate detection logic using Wazuh testing environments and Wazuh Logtest before production implementation.",
      "Develop PowerShell automation for Wazuh agent and Sysmon deployment, supporting consistent endpoint onboarding and security telemetry collection.",
      "Investigate phishing incidents, coordinate remediation, and examine suspicious processes, scheduled tasks, and persistence indicators.",
      "Work with SIEM platforms, endpoint telemetry, log collection, and SOC infrastructure to support centralized security monitoring.",
    ],
    skills: [
      "Wazuh SIEM",
      "IBM QRadar",
      "Log Collection",
      "Endpoint Onboarding",
      "Detection Engineering",
      "Rule Creation & Tuning",
      "Incident Triage",
      "Incident Investigation",
      "TheHive",
      "Docker",
      "FortiGate",
      "OPNsense",
      "Active Directory",
      "PowerShell",
      "VPN Infrastructure",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      {/* Section heading */}
      <div className="mb-12 lg:mb-16 text-center">
        <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-cyan-400 text-xs sm:text-sm">
          EXPERIENCE
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
          Professional Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-zinc-400">
          My professional journey across cybersecurity training,
          enterprise security operations, SIEM engineering,
          detection development, and incident investigation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-cyan-500/60 ml-3 sm:ml-6">

        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-12 sm:mb-16 ml-7 sm:ml-10"
          >
            {/* Timeline marker */}
            <div className="absolute -left-[34px] sm:-left-[54px] top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-400 border-4 border-[#030712]" />

            {/* Date */}
            <p className="text-cyan-400 font-semibold text-sm sm:text-base">
              {item.year}
            </p>

            {/* Experience card */}
            <div className="mt-3 rounded-2xl border border-cyan-500/20 bg-[#111827] p-5 sm:p-7 transition-colors duration-300 hover:border-cyan-500/40">

              {/* Company and role */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                  {item.role}
                </p>
              </div>

              {/* Professional overview */}
              <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-zinc-300">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  Key Responsibilities
                </h4>

                <ul className="mt-4 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm sm:text-base leading-7 text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-7">
                <h4 className="text-sm font-semibold text-zinc-300">
                  Technologies & Skills
                </h4>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs sm:text-sm text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}