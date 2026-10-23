"use client";

import { motion } from "framer-motion";
import {
  Container,
  Server,
  Monitor,
  Laptop,
  Router,
} from "lucide-react";

export default function ClientCard() {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="rounded-[28px] border-2 border-orange-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-8 shadow-2xl hover:shadow-orange-500/20 transition-all h-full"
    >
      <div className="flex items-center gap-3 mb-6">

        <Container
          className="text-orange-400 shrink-0"
          size={30}
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-orange-400">
            Client Infrastructure
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Docker Host
          </p>
        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <Server
            className="text-cyan-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Wazuh Worker
          </span>
        </div>

        <hr className="border-zinc-700" />

        <div className="flex items-center gap-3">
          <Laptop
            className="text-green-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Windows Endpoints
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Monitor
            className="text-blue-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Linux Endpoints
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Router
            className="text-yellow-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Syslog Devices
          </span>
        </div>

      </div>
    </motion.div>
  );
}