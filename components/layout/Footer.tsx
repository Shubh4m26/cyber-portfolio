"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24 lg:mt-32">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">

          <h3 className="text-2xl font-bold">
            Shubham Sharma
          </h3>

          <p className="text-zinc-400 mt-2 text-sm sm:text-base">
            SOC Analyst • Security Infrastructure • Wazuh Engineer
          </p>

        </div>

        <div className="flex items-center gap-6 text-2xl">

          <a
            href="https://github.com/Shubh4m26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/linkedin.com/in/shubham-sharma-44656422a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shu6h4m45@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <Mail size={22} />
          </a>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500 px-4">

        © {new Date().getFullYear()} Shubham Sharma. Built with Next.js, Tailwind CSS & TypeScript.

      </div>

    </footer>
  );
}