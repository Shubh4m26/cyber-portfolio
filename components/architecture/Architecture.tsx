
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Shield,
  Activity,
  X,
  CheckCircle2,
  Layers,
  Workflow,
  Ticket,
  ArrowRight,
  Monitor,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

type ArchitectureType = "wazuh" | "qradar";

const deployments = {
  wazuh: {
    title: "Wazuh SOC Infrastructure",
    subtitle: "SIEM · Security Monitoring · Detection Engineering",
    logo: "/logos/wazuh.png",
    description:
      "Designed around endpoint fleet size, event volume, retention requirements, and whether monitoring is hosted at the client site or managed centrally.",
    models: [
      {
        title: "All-in-One Deployment",
        description:
          "Wazuh Manager, Indexer, and Dashboard are deployed on a single node. Suitable when the endpoint fleet and event-processing requirements can be handled by one system.",
        components: [
          "Wazuh Manager",
          "Wazuh Indexer",
          "Wazuh Dashboard",
        ],
      },
      {
        title: "Distributed / Multi-Node Deployment",
        description:
          "Wazuh components are distributed across multiple nodes according to workload and availability requirements. Indexer capacity can be expanded to support higher event volumes and storage requirements.",
        components: [
          "Wazuh Manager",
          "Indexer cluster",
          "Wazuh Dashboard",
        ],
      },
      {
        title: "Client-Site Deployment",
        description:
          "The Wazuh infrastructure is hosted at the client premises. Agents and supported log sources send telemetry to the client-side Wazuh environment for local monitoring and processing.",
        components: [
          "Client-side Wazuh infrastructure",
          "Endpoint agents",
          "Syslog sources",
        ],
      },
      {
        title: "Managed SOC — Master / Worker",
        description:
          "A Wazuh Worker Manager is deployed at the client location to collect and forward endpoint and syslog telemetry. The Worker communicates with the central Master Manager over an encrypted WAN/VPN connection. The central SOC hosts the Manager, Indexer, and Dashboard components used for centralized monitoring and operations.",
        components: [
          "Client: Wazuh Worker Manager",
          "Client: Endpoint agents and Syslog",
          "Secure WAN / VPN",
          "SOC: Wazuh Master Manager",
          "SOC: Indexer and Dashboard",
        ],
      },
    ],
  },

  qradar: {
    title: "IBM QRadar SOC Infrastructure",
    subtitle: "SIEM · Event Processing · Network Flows",
    logo: "/logos/Logo_IBM-qradar.png",
    description:
      "QRadar architecture is selected according to event rate, flow volume, retention, endpoint fleet, and whether collection and processing are located at the client or central SOC.",
    models: [
      {
        title: "All-in-One Deployment",
        description:
          "QRadar Console and core event and flow processing capabilities are deployed within one appliance or supported deployment configuration, according to sizing and platform requirements.",
        components: [
          "QRadar Console",
          "Event processing",
          "Flow processing",
        ],
      },
      {
        title: "Client-Site Deployment",
        description:
          "QRadar infrastructure is hosted at the client premises. Event and flow sources are collected and processed within the client environment according to the selected architecture.",
        components: [
          "Client-side QRadar deployment",
          "Event sources",
          "Network flow sources",
        ],
      },
      {
        title: "Managed SOC / Distributed Deployment",
        description:
          "Event Collectors and Flow Collectors can be placed at the client site to collect endpoint and network telemetry. Events and flows are forwarded over a secure WAN/VPN to the central SOC, where processing and console components are hosted.",
        components: [
          "Client: Event Collector",
          "Client: Flow Collector",
          "Secure WAN / VPN",
          "SOC: Event Processor",
          "SOC: Flow Processor",
          "SOC: QRadar Console",
          "SOC: Data Node, when required",
        ],
      },
      {
        title: "Capacity & Scale",
        description:
          "The architecture can be expanded according to event rate, flow volume, retention, and workload. Additional processing or storage capacity is selected based on validated sizing and platform requirements.",
        components: [
          "Event processing capacity",
          "Flow processing capacity",
          "Data Nodes, when required",
          "Console and deployment management",
        ],
      },
    ],
  },
};

function ArchitectureOverview() {
  const steps = [
    {
      title: "Data Sources",
      description: "Endpoints · Servers · Network devices",
      icon: Monitor,
    },
    {
      title: "Collection",
      description: "Agents · Syslog · Event / Flow Collectors",
      icon: Network,
    },
    {
      title: "Processing",
      description: "Analysis · Correlation · Detection",
      icon: Activity,
    },
    {
      title: "SOC Operations",
      description: "Dashboards · Investigation · Response",
      icon: Shield,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0d1220] p-6 sm:p-8">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
          <Network className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            SOC Architecture Overview
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Common security monitoring data flow
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="flex items-center gap-3">
              <div className="flex min-h-[100px] flex-1 items-center gap-4 rounded-xl border border-cyan-500/20 bg-[#111827] p-4">
                <Icon className="shrink-0 text-cyan-400" size={24} />

                <div>
                  <h4 className="font-semibold text-white">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden shrink-0 text-zinc-600 xl:block"
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-sm leading-6 text-zinc-500">
        Architecture varies by SIEM platform, endpoint fleet, event volume,
        retention requirements, and whether monitoring is hosted at the client
        site or managed centrally.
      </p>
    </div>
  );
}

function TicketingIntegration() {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-4">
        {/* TheHive logo */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
          <img
            src="/logos/thehive.jpg"
            alt="TheHive logo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Ticket size={17} className="text-emerald-400" />

            <h4 className="font-semibold text-white">
              TheHive — Incident & Case Management
            </h4>
          </div>

          <p className="mt-1 text-sm leading-6 text-zinc-400">
            SIEM alert integration with TheHive for centralized incident
            investigation, case tracking, collaboration, and closure.
          </p>
        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Ticketing Integration
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/[0.06] bg-[#0d1220] p-4">
          <h5 className="text-sm font-medium text-white">
            Operational Workflow
          </h5>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            SIEM alert → TheHive case → Analyst investigation → Mitigation →
            Closure
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-[#0d1220] p-4">
          <h5 className="text-sm font-medium text-white">
            Value to SOC Operations
          </h5>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Centralized case ownership, investigation notes, evidence,
            communication history, status tracking, and a consistent incident
            record for follow-up and reporting.
          </p>
        </div>
      </div>
    </div>
  );
}

function DeploymentDetails({
  platform,
  onClose,
}: {
  platform: ArchitectureType;
  onClose: () => void;
}) {
  const deployment = deployments[platform];
  const isWazuh = platform === "wazuh";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1220] shadow-2xl"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d1220]/95 p-5 backdrop-blur sm:p-7">
            <div className="flex min-w-0 items-center gap-4">
              {/* Larger modal logo */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                <img
                  src={deployment.logo}
                  alt={`${deployment.title} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white sm:text-2xl">
                  {deployment.title}
                </h3>

                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {deployment.subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close architecture details"
              className="ml-3 rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="space-y-8 p-5 sm:p-7">
            <p className="max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
              {deployment.description}
            </p>

            {/* Deployment Models */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Layers
                  className={isWazuh ? "text-cyan-400" : "text-violet-400"}
                  size={20}
                />

                <h4 className="text-lg font-semibold text-white">
                  Deployment Models
                </h4>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {deployment.models.map((model, index) => (
                  <div
                    key={model.title}
                    className="rounded-xl border border-white/[0.08] bg-[#111827] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${
                          isWazuh
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "bg-violet-500/10 text-violet-400"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <div>
                        <h5 className="font-semibold text-white">
                          {model.title}
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {model.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-white/[0.06] pt-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Key Components
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {model.components.map((component) => (
                          <span
                            key={component}
                            className={`rounded-lg border px-3 py-1.5 text-xs ${
                              isWazuh
                                ? "border-cyan-500/20 bg-cyan-500/[0.04] text-cyan-200"
                                : "border-violet-500/20 bg-violet-500/[0.04] text-violet-200"
                            }`}
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Managed SOC Data Flow */}
            <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Workflow
                  size={20}
                  className={isWazuh ? "text-cyan-400" : "text-violet-400"}
                />

                <h4 className="font-semibold text-white">
                  Managed SOC Data Flow
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                {(isWazuh
                  ? [
                      "Client Endpoints / Syslog",
                      "Wazuh Worker",
                      "Encrypted WAN / VPN",
                      "Wazuh Master",
                      "Indexer + Dashboard",
                    ]
                  : [
                      "Client Events / Flows",
                      "Event + Flow Collectors",
                      "Encrypted WAN / VPN",
                      "Event + Flow Processors",
                      "QRadar Console / Data Node",
                    ]
                ).map((step, index, array) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-[#0d1220] px-3 py-2 text-zinc-300">
                      {step}
                    </span>

                    {index < array.length - 1 && (
                      <ArrowRight size={14} className="text-zinc-600" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-zinc-500">
                Component placement and capacity are determined by client
                requirements, endpoint fleet, telemetry volume, and validated
                sizing. Secure connectivity is used for managed collection and
                forwarding.
              </p>
            </div>

            {/* TheHive Ticketing */}
            <TicketingIntegration />

            {/* Outcome */}
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#111827] p-4">
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-emerald-400"
              />

              <p className="text-sm leading-6 text-zinc-400">
                <span className="font-medium text-white">
                  Operational outcome:
                </span>{" "}
                centralized visibility, structured investigations, documented
                response actions, case ownership, and traceable incident
                communication.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function InfrastructureCard({
  platform,
  onClick,
}: {
  platform: ArchitectureType;
  onClick: () => void;
}) {
  const deployment = deployments[platform];
  const isWazuh = platform === "wazuh";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group w-full rounded-2xl border bg-[#0d1220] p-6 text-left transition-all sm:p-7 ${
        isWazuh
          ? "border-white/10 hover:border-cyan-400/40 hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)]"
          : "border-violet-500/20 hover:border-violet-400/50 hover:shadow-[0_12px_35px_rgba(139,92,246,0.08)]"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Larger, fitted platform logo */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
          <img
            src={deployment.logo}
            alt={`${deployment.title} logo`}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {deployment.title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-zinc-500">
            {deployment.subtitle}
          </p>
        </div>

        <ArrowRight
          size={20}
          className={`mt-1 shrink-0 transition-transform group-hover:translate-x-1 ${
            isWazuh ? "text-cyan-400" : "text-violet-400"
          }`}
        />
      </div>

      <p className="mt-5 text-sm leading-7 text-zinc-400">
        {deployment.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {deployment.models.map((model) => (
          <span
            key={model.title}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
          >
            {model.title}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span
          className={`text-sm font-medium ${
            isWazuh ? "text-cyan-400" : "text-violet-400"
          }`}
        >
          Explore architecture
        </span>

        <span className="text-xs text-zinc-600">
          View deployment details
        </span>
      </div>
    </motion.button>
  );
}

export default function Architecture() {
  const [selectedPlatform, setSelectedPlatform] =
    useState<ArchitectureType | null>(null);

  return (
    <section
      id="architecture"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-36"
    >
      <SectionTitle
        subtitle="FLAGSHIP PROJECT"
        title="Enterprise SOC Architecture"
      />

      <div className="mt-12">
        <ArchitectureOverview />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <InfrastructureCard
          platform="wazuh"
          onClick={() => setSelectedPlatform("wazuh")}
        />

        <InfrastructureCard
          platform="qradar"
          onClick={() => setSelectedPlatform("qradar")}
        />
      </div>

      <AnimatePresence>
        {selectedPlatform && (
          <DeploymentDetails
            platform={selectedPlatform}
            onClose={() => setSelectedPlatform(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
