"use client";

import { motion } from "framer-motion";
import SocCards from "../cards/SocCards";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 sm:px-6 lg:px-8 pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs text-cyan-400 mb-7">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white"
            >
              SHUBHAM
              <span className="block mt-2">
                SHARMA
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
            >
              <span className="text-white">
                SOC Analyst &
              </span>

              <span className="block text-cyan-400 mt-1">
                Cybersecurity Engineer
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 min-h-[32px] text-lg sm:text-xl text-gray-300"
            >
              <Typewriter
                words={[
                  "Detection Engineering",
                  "SIEM Engineering",
                  "Incident Investigation",
                  "Security Automation",
                  "SOC Infrastructure",
                  "Cloud Security",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-zinc-400"
            >
              Building and supporting security operations through
              SOC infrastructure, SIEM engineering, detection
              development, and incident investigation. Experienced
              with Wazuh, IBM QRadar, endpoint onboarding,
              detection rule tuning, and security automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-cyan-400"
              >
                View Projects →
              </a>

              <a
                href="/Shubham_resume_MJ.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-cyan-500/60 px-6 py-3.5 text-white transition duration-300 hover:bg-cyan-500/10"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3.5 text-white transition duration-300 hover:border-cyan-500/60 hover:bg-cyan-500/10"
              >
                Contact Me →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-[#080e18] shadow-[0_0_40px_rgba(0,200,230,0.04)]">

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                </div>

                <span className="font-mono text-xs text-zinc-400">
                  terminal.sh
                </span>

                <span className="text-xs text-cyan-400">
                  SOC
                </span>
              </div>

              <div className="min-h-[280px] sm:min-h-[320px] p-5 sm:p-7 font-mono text-xs sm:text-sm leading-7">
                <p className="text-cyan-400">
                  <span className="text-zinc-500">$</span>{" "}
                  whoami
                </p>

                <p className="mt-1 text-zinc-300">
                  shubham.sharma
                </p>

                <p className="mt-5 text-cyan-400">
                  <span className="text-zinc-500">$</span>{" "}
                  system --status
                </p>

                <p className="mt-1 text-zinc-300">
                  SOC Analyst
                </p>

                <p className="text-zinc-300">
                  SIEM: Wazuh | IBM QRadar
                </p>

                <p className="text-zinc-300">
                  Focus: Detection Engineering
                </p>

                <p className="mt-5 text-cyan-400">
                  <span className="text-zinc-500">$</span>{" "}
                  initialize monitoring
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-1 space-y-1"
                >
                  <p className="text-zinc-400">
                    {">"} Loading security operations...
                  </p>

                  <p className="text-zinc-400">
                    {">"} Initializing detection capabilities...
                  </p>

                  <p className="text-zinc-400">
                    {">"} Monitoring infrastructure...
                  </p>

                  <p className="text-cyan-400">
                    {">"} Security monitoring ready.
                  </p>
                </motion.div>

                <div className="mt-5 flex items-center gap-2 text-cyan-400">
                  <span>$</span>

                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    _
                  </motion.span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] sm:text-xs text-zinc-500">
                <span>SECURITY OPERATIONS</span>

                <span className="text-cyan-400">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <SocCards />
        </div>
      </div>
    </section>
  );
}