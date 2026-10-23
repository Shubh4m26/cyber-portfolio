
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Network,
  Globe,
  ChartNoAxesCombined,
} from "lucide-react";

import { Skill } from "./SkillData";

interface Props {
  skill: Skill;
  onClick: () => void;
}

const logoMap: Record<string, string> = {
  wazuh: "wazuh.png",
  "active-directory": "AD.png",
  "alert-monitoring": "alert monit.webp",
  bash: "bash.png",
  "burp-suite": "burpsuite.png",
  docker: "docker.png",
  cyberark: "cyberark.png",
  "detection-engineering": "detection engg.png",
  fortigate: "Fotigate.png",
  forescout: "forescout.png",
  "gtb-dlp": "GTb dlp.png",
  linux: "linux.png",
  opnsense: "opensense.png",
  "owasp-top-10": "owasp.png",
  powershell: "powershell.png",
  python: "python.png",
  qualys: "qualys.png",
  "risk-assessment": "risk assesment.jpg",
  sentinelone: "sentinelone.png",
  thehive: "thehive.jpg",
  vapt: "vapt.png",
  vlan: "vlan.jpg",
  vpn: "vpn.png",
  "web-security": "web security.webp",
  "windows-server": "win-server.png",
};

const fallbackMap: Record<string, React.ElementType> = {
  wazuh: Shield,
  "detection-engineering": Activity,
  "alert-monitoring": Activity,
  vpn: Network,
  vlan: Network,
  "web-security": Globe,
  "risk-assessment": ChartNoAxesCombined,
};

export default function TechnologyCard({ skill, onClick }: Props) {
  const logo = logoMap[skill.id];
  const Icon = fallbackMap[skill.id] ?? Shield;

  const [imageError, setImageError] = useState(false);

  const logoPath = logo
    ? `/logos/${logo.split("/").map(encodeURIComponent).join("/")}`
    : "";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="
        group flex w-full flex-col items-center
        rounded-2xl border border-white/[0.08]
        bg-[#11121f] p-5 text-center
        transition-all duration-300
        hover:border-violet-500/50
        hover:bg-[#171829]
        hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-violet-400
      "
    >
      {/* Larger logo container */}
      <div
        className="
          flex h-[120px] w-[120px] shrink-0
          items-center justify-center
          overflow-hidden rounded-2xl
          border border-white/[0.08]
          bg-white p-2
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          transition-all duration-300
          group-hover:border-violet-400/40
          group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
        "
      >
        {logo && !imageError ? (
          <img
            src={logoPath}
            alt={`${skill.title} logo`}
            className="h-full w-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <Icon
            size={48}
            strokeWidth={1.6}
            className="text-violet-500"
          />
        )}
      </div>

      {/* Technology name */}
      <h2
        className="
          mt-4 text-sm font-semibold tracking-wide
          text-zinc-200 transition-colors
          group-hover:text-white
        "
      >
        {skill.title}
      </h2>

      {/* Category */}
      <p
        className="
          mt-2 text-[9px] font-medium uppercase
          tracking-[0.12em] text-violet-400
        "
      >
        {skill.category}
      </p>

      {/* Hover indicator */}
      <div
        className="
          mt-4 h-[2px] w-8 rounded-full
          bg-white/10 transition-all duration-300
          group-hover:w-14 group-hover:bg-violet-400
        "
      />
    </motion.button>
  );
}
