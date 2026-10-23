"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
}

export default function ArchitectureBox({
  icon,
  title,
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.3 }}
      className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#0f172a]/80
        backdrop-blur-xl
        p-5
        sm:p-6
        shadow-xl
        hover:border-cyan-400
        hover:shadow-cyan-500/20
        transition-all
        h-full
      "
    >
      <div className="flex items-center gap-3 mb-5">

        <div className="text-cyan-400 shrink-0">
          {icon}
        </div>

        <h3 className="text-base sm:text-lg font-bold leading-tight">
          {title}
        </h3>

      </div>

      <div className="text-sm sm:text-base">
        {children}
      </div>

    </motion.div>
  );
}