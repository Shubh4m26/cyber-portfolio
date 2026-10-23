
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Project Visual Preview */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-blue-950/60 sm:h-56">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
        </div>

        <div className="relative flex flex-col items-center gap-3">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
            <Code2 size={32} />
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-200/70">
            Engineering Project
          </span>
        </div>

        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
          {technologies.length} Technologies
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            {title}
          </h3>

          <ArrowUpRight
            className="shrink-0 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={22}
          />
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400 sm:text-base">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}

          {technologies.length > 4 && (
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="mt-6 flex w-fit items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
