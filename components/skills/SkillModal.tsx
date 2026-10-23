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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-500/20 bg-[#0f172a] shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 p-6">

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  {skill.title}
                </h2>

                <p className="text-zinc-400 mt-1">
                  {skill.category}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-zinc-800 transition"
              >
                <X />
              </button>

            </div>

            {/* Content */}
            <div className="p-6 space-y-10">

              {/* Overview */}

              <div>

                <h3 className="text-2xl font-semibold mb-3">
                  Overview
                </h3>

                <p className="text-zinc-300 leading-8">
                  {skill.overview}
                </p>

              </div>

              {/* Built */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <Wrench className="text-green-400" />
                  What I Built
                </h3>

                <div className="grid md:grid-cols-2 gap-3">

                  {skill.built.map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-[#111827] border border-cyan-500/10 p-4"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* Responsibilities */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <CheckCircle className="text-cyan-400" />
                  Key Responsibilities
                </h3>

                <div className="grid md:grid-cols-2 gap-3">

                  {skill.responsibilities.map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-[#111827] border border-cyan-500/10 p-4"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* Technologies */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <Cpu className="text-cyan-400" />
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3">

                  {skill.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Challenges */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <TriangleAlert className="text-orange-400" />
                  Challenges Solved
                </h3>

                <div className="space-y-3">

                  {skill.challenges.map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-[#111827] border border-orange-500/20 p-4"
                    >
                      • {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* Lessons */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <GraduationCap className="text-purple-400" />
                  Lessons Learned
                </h3>

                <div className="space-y-3">

                  {skill.lessons.map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-[#111827] border border-purple-500/20 p-4"
                    >
                      • {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* Projects */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <FolderGit2 className="text-cyan-400" />
                  Related Projects
                </h3>

                <div className="flex flex-wrap gap-3">

                  {skill.projects.map((project) => (

                    <span
                      key={project}
                      className="rounded-full border border-cyan-500/30 px-4 py-2 text-cyan-300"
                    >
                      {project}
                    </span>

                  ))}

                </div>

              </div>

              {/* Blogs */}

              <div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-5">
                  <BookOpen className="text-yellow-400" />
                  Related Blogs
                </h3>

                <div className="space-y-3">

                  {skill.blogs.map((blog) => (

                    <div
                      key={blog}
                      className="rounded-xl bg-[#111827] border border-cyan-500/10 p-4"
                    >
                      {blog}
                    </div>

                  ))}

                </div>

              </div>

              {/* Confidence */}

              <div>

                <h3 className="text-2xl font-semibold mb-4">
                  Confidence
                </h3>

                <div className="w-full h-4 rounded-full bg-zinc-800 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-cyan-400"
                  />

                </div>

                <p className="mt-3 text-cyan-400 font-semibold">
                  {skill.level}% Practical Experience
                </p>

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}