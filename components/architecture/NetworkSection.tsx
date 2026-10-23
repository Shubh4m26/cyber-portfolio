"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Router,
  Shield,
  Lock,
} from "lucide-react";

const network = [
  {
    icon: Globe,
    title: "Internet",
    color: "text-cyan-400",
  },
  {
    icon: Router,
    title: "Router",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Firewall",
    color: "text-orange-400",
  },
  {
    icon: Lock,
    title: "Secure VPN Tunnel",
    color: "text-green-400",
    subtitle:
      "IPSec • WireGuard • OpenVPN • OpenConnect • Cisco AnyConnect",
  },
  {
    icon: Shield,
    title: "OPNsense Gateway",
    color: "text-cyan-400",
  },
];

export default function NetworkSection() {
  return (
    <div className="flex flex-col items-center">

      {network.map((item, index) => {

        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex flex-col items-center w-full"
          >

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              className="
                w-full
                max-w-[320px]
                sm:max-w-[380px]
                rounded-[28px]
                border-2
                border-cyan-500/20
                bg-[#101826]
                backdrop-blur-xl
                p-5
                sm:p-6
                shadow-2xl
              "
            >

              <div className="flex items-start gap-4">

                <Icon
                  size={30}
                  className={`${item.color} shrink-0`}
                />

                <div className="min-w-0">

                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-6 break-words">
                      {item.subtitle}
                    </p>
                  )}

                </div>

              </div>

            </motion.div>

            {index !== network.length - 1 && (

              <div className="relative h-12 sm:h-16">

                <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-cyan-500" />

                <motion.div
                  animate={{
                    y: [0, 34, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-3
                    h-3
                    rounded-full
                    bg-cyan-400
                  "
                />

              </div>

            )}

          </div>
        );
      })}
    </div>
  );
}