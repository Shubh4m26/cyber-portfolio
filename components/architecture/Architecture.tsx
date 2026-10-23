"use client";

import SectionTitle from "../ui/SectionTitle";

import NetworkSection from "./NetworkSection";
import SocCard from "./SocCard";
import WindowsCard from "./WindowsCard";
import ClientCard from "./ClientCard";
import ArchitectureConnections from "./ArchitectureConnections";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <SectionTitle
        subtitle="FLAGSHIP PROJECT"
        title="Enterprise SOC Architecture"
      />

      {/* Show connection lines only on desktop */}
      <div className="hidden lg:block">
        <ArchitectureConnections />
      </div>

      {/* Network */}
      <NetworkSection />

      {/* Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-16 lg:mt-24 items-start">

        <SocCard />

        <WindowsCard />

        <ClientCard />

      </div>
    </section>
  );
}