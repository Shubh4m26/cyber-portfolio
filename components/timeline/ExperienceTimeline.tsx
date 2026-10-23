
"use client";

import { motion } from "framer-motion";

interface Experience {
  year: string;
  title: string;
  role: string;
  skills: string[];
  responsibilities?: string[];
}

const timeline: Experience[] = [
  {
    year: "Sep 2025",
    title: "Tata STRIVE",
    role: "Cybersecurity Training Program",
    skills: [
      "SOC Fundamentals",
      "Splunk",
      "Wazuh",
      "IBM QRadar",
      "Networking",
      "Cybersecurity Labs",
      "VAPT",
      "Cryptography",
      "Digital Forensics",
    ],
  },
  {
    year: "Jan 2026",
    title: "NodeSec Technology",
    role: "Cybersecurity Associate",
    skills: [
      "GTB Technologies DLP",
      "SentinelOne",
      "CyberArk",
      "Forescout",
      "Qualys",
      "Kaseya Patch Management",
    ],
    responsibilities: [
      "Worked with endpoint security, DLP, and security monitoring technologies.",
      "Supported endpoint security operations using SentinelOne and Forescout.",
      "Worked with CyberArk for privileged access security.",
      "Supported vulnerability management and patch management workflows.",
    ],
  },
  {
    year: "Apr 2026 – Present",
    title: "Mobisec Technology",
    role: "SOC Analyst",
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
    responsibilities: [
      "Investigate production SOC alerts by analyzing security events, user context, process execution, command lines, file paths, and parent-child process relationships.",
      "Develop, modify, and fine-tune custom detection rules for endpoint activity, PowerShell, Active Directory, access control, and security-related events.",
      "Validate detection logic using Wazuh Logtest and testing environments before production implementation.",
      "Automate Wazuh agent and Sysmon deployment using PowerShell.",
      "Investigate phishing incidents, coordinate remediation, and check for suspicious processes, scheduled tasks, and persistence indicators.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <div className="mb-12 lg:mb-16 text-center">
        <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-cyan-400 text-xs sm:text-sm">
          EXPERIENCE
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
          Professional Journey
        </h2>
      </div>

      <div className="relative border-l-2 border-cyan-500 ml-3 sm:ml-6">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-12 sm:mb-16 ml-7 sm:ml-10"
          >
            <div className="absolute -left-[34px] sm:-left-[54px] top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-400 border-4 border-[#030712]" />

            <p className="text-cyan-400 font-semibold text-sm sm:text-base">
              {item.year}
            </p>

            <div className="mt-3 rounded-2xl border border-cyan-500/20 bg-[#111827] p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                {item.role}
              </p>

              {item.responsibilities && (
                <ul className="mt-5 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed"
                    >
                      <span className="text-cyan-400 mt-1 shrink-0">
                        ▹
                      </span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-cyan-500/30 text-xs sm:text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
