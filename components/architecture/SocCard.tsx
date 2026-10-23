"use client";

import { motion } from "framer-motion";
import {
  Server,
  Container,
  Shield,
  Database,
  Monitor,
  Bug,
} from "lucide-react";

export default function SocCard() {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="rounded-[28px] border-2 border-cyan-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all h-full"
    >
      <div className="flex items-center gap-3 mb-6">

        <Server
          className="text-cyan-400 shrink-0"
          size={30}
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">
            SOC Infrastructure
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Ubuntu Server
          </p>
        </div>

      </div>

      <div className="rounded-xl border border-cyan-500/20 p-4 sm:p-5">

        <div className="flex items-center gap-2 mb-5">

          <Container
            className="text-cyan-400 shrink-0"
            size={22}
          />

          <span className="font-semibold text-sm sm:text-base">
            Docker Engine
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <Shield
              className="text-green-400 shrink-0"
              size={20}
            />
            <span className="text-sm sm:text-base">
              Wazuh Manager
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Database
              className="text-blue-400 shrink-0"
              size={20}
            />
            <span className="text-sm sm:text-base">
              Wazuh Indexer
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Monitor
              className="text-yellow-400 shrink-0"
              size={20}
            />
            <span className="text-sm sm:text-base">
              Wazuh Dashboard
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Bug
              className="text-purple-400 shrink-0"
              size={20}
            />
            <span className="text-sm sm:text-base">
              TheHive Server
            </span>
          </div>

        </div>

      </div>
    </motion.div>
  );
}