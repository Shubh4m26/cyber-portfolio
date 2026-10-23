"use client";

import { motion } from "framer-motion";

interface Props {
  year: string;
  company: string;
  role: string;
}

export default function ExperienceCard({
  year,
  company,
  role,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <p className="text-cyan-400 font-semibold">
        {year}
      </p>

      <h3 className="mt-3 text-xl font-bold">
        {company}
      </h3>

      <p className="mt-2 text-zinc-400">
        {role}
      </p>
    </motion.div>
  );
}