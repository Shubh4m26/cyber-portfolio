
"use client";

import { motion } from "framer-motion";
import SocCards from "../cards/SocCards";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8 pt-24 pb-20"
      id="home"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-cyan-400 mb-6 text-xs sm:text-sm"
        >
          SECURITY OPERATIONS • DETECTION • AUTOMATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none"
        >
          SHUBHAM
          <br />
          SHARMA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl text-gray-300 min-h-[48px]"
        >
          <Typewriter
            words={[
              "SOC Analyst",
              "Detection Engineering",
              "SIEM Engineering",
              "Incident Investigation",
              "Security Automation",
              "Cloud Security",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="max-w-3xl mx-auto mt-8 text-zinc-400 text-base sm:text-lg leading-7 sm:leading-8 px-2"
        >
          SOC Analyst working on production security operations, SIEM
          monitoring, detection engineering, and incident investigation.
          Experienced with Wazuh, IBM QRadar, endpoint onboarding,
          detection rule tuning, security automation, and SOC infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-center"
          >
            View Projects
          </a>

          <a
            href="/Shubham_resume_MJ.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition text-center"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/5 transition text-center"
          >
            Contact Me
          </a>
        </motion.div>

        <div className="mt-16">
          <SocCards />
        </div>

      </div>
    </section>
  );
}
