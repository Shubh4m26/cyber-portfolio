
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) return;

    const navbarOffset = 100;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.history.pushState(null, "", href);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0b1120]/80 backdrop-blur-xl px-6 py-4 shadow-2xl">

        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="font-bold tracking-wider text-cyan-400 text-lg"
        >
          SS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) =>
                handleNavigation(event, link.href)
              }
              className="text-sm text-zinc-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-3 rounded-2xl border border-white/10 bg-[#111827]/95 backdrop-blur-xl overflow-hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) =>
                handleNavigation(event, link.href)
              }
              className="block px-6 py-4 text-zinc-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
