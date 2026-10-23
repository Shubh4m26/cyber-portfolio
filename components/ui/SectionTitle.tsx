
"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-14 lg:mb-16 max-w-4xl"
    >
      <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs sm:text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
        {title}
      </h2>
    </motion.div>
  );
}
