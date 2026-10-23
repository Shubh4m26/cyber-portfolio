
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
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

const initialsMap: Record<string, string> = {
  wazuh: "W",
  "detection-engineering": "DE",
  "alert-monitoring": "AM",
  vpn: "VPN",
  vlan: "VLAN",
  "risk-assessment": "RA",
};

export default function TechnologyCard({ skill, onClick }: Props) {
  const logo = logoMap[skill.id];
  const Icon = fallbackMap[skill.id] ?? Shield;
  const initials = initialsMap[skill.id] ?? skill.title.slice(0, 2);

  const [imageError, setImageError] = useState(false);

  const logoPath = logo
    ? `/logos/${logo.split("/").map(encodeURIComponent).join("/")}`
    : "";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2 }}
      className="
        group relative flex min-h-[190px] w-full flex-col
        overflow-hidden rounded-2xl border border-white/[0.08]
        bg-[#0d1220] p-5 text-left
        transition-colors duration-300
        hover:border-cyan-400/40 hover:bg-[#111827]
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-cyan-400
      "
    >
      {/* Technology logo */}
      <div className="flex items-center justify-between">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl border border-white/[0.08]
            bg-[#151d2d] p-1.5
            transition-all duration-300
            group-hover:border-cyan-400/30
            group-hover:bg-cyan-400/10
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
              size={24}
              strokeWidth={1.8}
              className="text-cyan-400"
            />
          )}
        </div>

        <ArrowUpRight
          size={17}
          className="
            text-zinc-600 transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-cyan-400
          "
        />
      </div>

      {/* Skill information */}
      <div className="mt-4">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          {skill.title}
        </h2>

        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-400">
          {skill.category}
        </p>

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-zinc-400">
          {skill.overview}
        </p>
      </div>

      {/* Card footer */}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-[10px] text-zinc-500 transition-colors group-hover:text-cyan-400">
          Explore experience
        </span>

        <span className="text-[10px] font-medium text-zinc-600">
          {initials}
        </span>
      </div>
    </motion.button>
  );
}
