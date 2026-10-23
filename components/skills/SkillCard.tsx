"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: string[];
  onSkillClick?: (skill: string) => void;
}

export default function SkillCard({
  title,
  skills,
  onSkillClick,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 lg:p-7 h-full"
    >
      <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-5 sm:mb-6">
        {title}
      </h3>

      <div className="space-y-3 sm:space-y-4">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => onSkillClick?.(skill)}
            className="flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-green-400"
            />

            <span className="text-sm sm:text-base leading-6">
              {skill}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}