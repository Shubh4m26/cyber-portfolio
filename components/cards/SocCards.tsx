
"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Cpu,
  Activity,
} from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "SOC Operations",
    value: "Monitoring & Response",
    color: "text-green-400",
  },
  {
    icon: Server,
    title: "SIEM Platforms",
    value: "Wazuh + IBM QRadar",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    title: "SOC Infrastructure",
    value: "Docker · Networking · Security",
    color: "text-blue-400",
  },
  {
    icon: Activity,
    title: "Automation",
    value: "PowerShell · Security Workflows",
    color: "text-purple-400",
  },
];

export default function SocCards() {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <card.icon
              className={`w-8 h-8 mb-5 ${card.color}`}
            />

            <p className="text-zinc-400 text-sm">
              {card.title}
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {card.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
