"use client";

import { motion } from "framer-motion";
import {
  Server,
  Users,
  Mail,
  Folder,
} from "lucide-react";

export default function WindowsCard() {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="rounded-[28px] border-2 border-blue-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-8 shadow-2xl hover:shadow-blue-500/20 transition-all h-full"
    >
      <div className="flex items-center gap-3 mb-6">

        <Server
          className="text-blue-400 shrink-0"
          size={30}
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            Windows Infrastructure
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Windows Server 2022
          </p>
        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <Users
            className="text-cyan-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Active Directory
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail
            className="text-green-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            Mail Server
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Folder
            className="text-yellow-400 shrink-0"
            size={20}
          />
          <span className="text-sm sm:text-base">
            File Server
          </span>
        </div>

      </div>
    </motion.div>
  );
}