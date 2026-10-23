import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Sharma | SOC Analyst & Cybersecurity Engineer",

  description:
    "Cybersecurity Portfolio of Shubham Sharma specializing in Enterprise SOC, Wazuh SIEM, Docker, FortiGate, OPNsense, TheHive, Active Directory, Detection Engineering and Security Automation.",

  keywords: [
    "Shubham Sharma",
    "Cybersecurity",
    "SOC Analyst",
    "Wazuh",
    "SIEM",
    "TheHive",
    "Docker",
    "FortiGate",
    "OPNsense",
    "Active Directory",
    "Detection Engineering",
    "PowerShell",
    "MSSP",
    "Security Engineer",
  ],

  authors: [
    {
      name: "Shubham Sharma",
    },
  ],

  creator: "Shubham Sharma",

  openGraph: {
    title: "Shubham Sharma | Cybersecurity Portfolio",
    description:
      "Enterprise SOC, Wazuh SIEM, Docker Infrastructure, Detection Engineering and Security Automation.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Sharma | Cybersecurity Portfolio",
    description:
      "SOC Analyst • Wazuh • Docker • FortiGate • Detection Engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#030712] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}