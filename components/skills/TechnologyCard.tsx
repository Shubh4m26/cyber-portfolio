"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Skill } from "./SkillData";

interface Props {
  skill: Skill;
  onClick: () => void;
}

export default function TechnologyCard({
  skill,
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group cursor-pointer rounded-3xl border border-cyan-500/20 bg-[#0f172a]/80 backdrop-blur-xl p-7 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all"
    >
      {/* Category */}

      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
        {skill.category}
      </p>

      {/* Title */}

      <h2 className="mt-3 text-3xl font-bold">
        {skill.title}
      </h2>

      {/* Overview */}

      <p className="mt-4 text-zinc-400 line-clamp-3 leading-7">
        {skill.overview}
      </p>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-zinc-400">
            Practical Experience
          </span>

          <span className="font-semibold text-cyan-400">
            {skill.level}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${skill.level}%`,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full bg-cyan-400"
          />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-3 gap-3">

        <div className="rounded-xl bg-[#111827] p-3 text-center">

          <h3 className="text-xl font-bold text-cyan-400">
            {skill.projects.length}
          </h3>

          <p className="text-xs text-zinc-400">
            Projects
          </p>

        </div>

        <div className="rounded-xl bg-[#111827] p-3 text-center">

          <h3 className="text-xl font-bold text-cyan-400">
            {skill.blogs.length}
          </h3>

          <p className="text-xs text-zinc-400">
            Blogs
          </p>

        </div>

        <div className="rounded-xl bg-[#111827] p-3 text-center">

          <h3 className="text-xl font-bold text-cyan-400">
            {skill.technologies.length}
          </h3>

          <p className="text-xs text-zinc-400">
            Tech
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-cyan-400 font-medium">
          View Details
        </span>

        <ArrowRight
          className="group-hover:translate-x-2 transition"
          size={20}
        />

      </div>

    </motion.div>
  );
}