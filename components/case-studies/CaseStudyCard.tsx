
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { CaseStudy } from "./CaseStudyData";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-cyan-500/20 bg-[#0f172a]/80 backdrop-blur-xl p-8 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-cyan-400 text-sm">{study.role}</p>
          <h2 className="mt-2 text-3xl font-bold">{study.title}</h2>
        </div>

        <div className="flex">
          {Array.from({ length: study.difficulty }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="#22d3ee"
              className="text-cyan-400"
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <div>
          <h3 className="font-semibold text-cyan-400 mb-2">Problem</h3>
          <p className="text-zinc-300 leading-7">{study.problem}</p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400 mb-2">Solution</h3>
          <ul className="space-y-2">
            {study.solution.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400 mb-2">Challenges</h3>
          <div className="flex flex-wrap gap-2">
            {study.challenges.map((item) => (
              <span
                key={item}
                className="rounded-full border border-orange-500/30 px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400 mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400 mb-2">Outcome</h3>
          <ul className="space-y-2">
            {study.outcome.map((o) => (
              <li key={o}>✓ {o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">
        <span className="text-zinc-400">Duration: {study.duration}</span>
        <div className="flex items-center gap-2 text-cyan-400">
          <span>Case Study</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}
