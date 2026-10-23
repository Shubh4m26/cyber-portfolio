export default function ArchitectureConnections() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
    >
      {/* OPNsense -> Center */}

      <line
        x1="600"
        y1="170"
        x2="600"
        y2="260"
        stroke="#06b6d4"
        strokeWidth="2"
      />

      {/* Center -> SOC */}

      <line
        x1="600"
        y1="260"
        x2="250"
        y2="260"
        stroke="#06b6d4"
        strokeWidth="2"
      />

      {/* Center -> Windows */}

      <line
        x1="600"
        y1="260"
        x2="600"
        y2="310"
        stroke="#8b5cf6"
        strokeWidth="2"
      />

      {/* Center -> Client */}

      <line
        x1="600"
        y1="260"
        x2="950"
        y2="260"
        stroke="#f59e0b"
        strokeWidth="2"
      />

      {/* VPN Tunnel */}

      <line
        x1="300"
        y1="390"
        x2="900"
        y2="390"
        stroke="#22d3ee"
        strokeDasharray="10 10"
        strokeWidth="3"
      />

      {/* Arrow */}

      <polygon
        points="900,390 885,382 885,398"
        fill="#22d3ee"
      />
    </svg>
  );
}