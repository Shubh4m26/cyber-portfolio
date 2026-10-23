"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#030712]" />

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
    </>
  );
}