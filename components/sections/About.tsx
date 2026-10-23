
"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../timeline/ExperienceCard";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <SectionTitle
        subtitle="ABOUT ME"
        title="Engineering Security Infrastructure"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-zinc-300 leading-8 sm:leading-9">
            I focus on building and supporting enterprise
            Security Operations Center environments,
            combining security infrastructure deployment,
            SIEM engineering, endpoint onboarding and
            detection engineering. My experience includes
            working with Wazuh, IBM QRadar, Docker,
            FortiGate, OPNsense, Active Directory,
            Windows Server and PowerShell automation.
          </p>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-400 leading-8 sm:leading-9">
            My work includes deploying security monitoring
            infrastructure, integrating log sources,
            developing and tuning detection rules,
            investigating security alerts and supporting
            endpoint onboarding. I am also interested in
            building scalable security platforms through
            infrastructure automation, secure networking
            and centralized monitoring.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">

          <ExperienceCard
            year="Jan 2026"
            company="NodeSec Technologies"
            role="Cybersecurity Associate"
          />

          <ExperienceCard
            year="Apr 2026 - Present"
            company="Mobisec Technology"
            role="SOC Analyst"
          />

        </div>

      </div>
    </section>
  );
}
