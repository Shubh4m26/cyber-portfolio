
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle,
  FolderGit2,
  BookOpen,
  Wrench,
  Cpu,
  TriangleAlert,
  GraduationCap,
} from "lucide-react";

import { Skill } from "./SkillData";

interface Props {
  skill: Skill | null;
  onClose: () => void;
}

export default function SkillModal({ skill, onClose }: Props) {
  return (
    <AnimatePresence>
      {skill && (
        <>
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 15 }}
            transition={{ duration: 0.2 }}
            className="
              fixed left-1/2 top-1/2 z-50
              w-[95%] max-w-4xl
              -translate-x-1/2 -translate-y-1/2
              overflow-y-auto
              max-h-[90vh]
              rounded-2xl
              border border-white/[0.10]
              bg-[#0f172a]
              shadow-2xl
            "
          >
            {/* Header */}
            <div
              className="
                sticky top-0 z-10
                flex items-center justify-between
                border-b border-white/[0.08]
                bg-[#0f172a]/95
                px-6 py-5
                backdrop-blur-xl
              "
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-cyan-400">
                  {skill.title}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {skill.category}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close skill details"
                className="
                  rounded-lg p-2
                  text-zinc-400
                  transition-colors
                  hover:bg-white/[0.06]
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-400
                "
              >
                <X size={21} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-9 p-6 sm:p-8">

              {/* Overview */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Overview
                </h3>

                <p className="text-sm leading-7 text-zinc-300">
                  {skill.overview}
                </p>
              </section>

              {/* What I Built */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <Wrench size={19} className="text-cyan-400" />
                  What I Built
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {skill.built.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#111827]
                        p-4
                        text-sm leading-6 text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/30
                        hover:bg-[#151e2e]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Responsibilities */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <CheckCircle size={19} className="text-cyan-400" />
                  Key Responsibilities
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {skill.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#111827]
                        p-4
                        text-sm leading-6 text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/30
                        hover:bg-[#151e2e]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <Cpu size={19} className="text-cyan-400" />
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border border-white/[0.10]
                        bg-[#111827]
                        px-3 py-2
                        text-sm text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/[0.06]
                        hover:text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Challenges */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <TriangleAlert size={19} className="text-orange-400" />
                  Challenges Solved
                </h3>

                <div className="space-y-3">
                  {skill.challenges.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#111827]
                        p-4
                        text-sm leading-6 text-zinc-300
                        transition-all duration-200
                        hover:border-orange-400/25
                        hover:bg-[#151e2e]
                      "
                    >
                      <span className="mr-2 text-orange-400">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Lessons */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <GraduationCap size={19} className="text-cyan-400" />
                  Lessons Learned
                </h3>

                <div className="space-y-3">
                  {skill.lessons.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#111827]
                        p-4
                        text-sm leading-6 text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/30
                        hover:bg-[#151e2e]
                      "
                    >
                      <span className="mr-2 text-cyan-400">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Projects */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <FolderGit2 size={19} className="text-cyan-400" />
                  Related Projects
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((project) => (
                    <span
                      key={project}
                      className="
                        rounded-lg
                        border border-white/[0.10]
                        bg-[#111827]
                        px-3 py-2
                        text-sm text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/40
                        hover:text-cyan-300
                      "
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </section>

              {/* Related Blogs */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <BookOpen size={19} className="text-cyan-400" />
                  Related Blogs
                </h3>

                <div className="space-y-3">
                  {skill.blogs.map((blog) => (
                    <div
                      key={blog}
                      className="
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#111827]
                        p-4
                        text-sm leading-6 text-zinc-300
                        transition-all duration-200
                        hover:border-cyan-400/30
                        hover:bg-[#151e2e]
                      "
                    >
                      {blog}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
