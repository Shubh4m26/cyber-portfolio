
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
        <div className="flex h-[calc(100%-12rem)] flex-col p-5 sm:p-6">
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

          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 flex w-fit items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
          >
            View Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close project details"
              className="absolute right-5 top-5 rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Project Details
            </span>

            <h3 className="mt-3 pr-10 text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h3>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white">
                Project Overview
              </h4>

              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-400 sm:text-base">
                {description}
              </p>
            </div>

            <div className="mt-7">
              <h4 className="text-sm font-semibold text-white">
                Technologies Used
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/[0.05] px-3 py-1.5 text-xs text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-8 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Close Details
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
