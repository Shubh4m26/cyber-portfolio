---
title: "Building an Enterprise SOC using Wazuh, Docker & TheHive"
description: "A practical walkthrough of designing and deploying an enterprise-grade Security Operations Center using Wazuh, Docker, TheHive, VPN connectivity and centralized monitoring."
date: "2026-07-04"
author: "Shubham Sharma"
tags:
  - Wazuh
  - Docker
  - SIEM
  - TheHive
  - SOC
readingTime: "10 min read"
featured: true
---

# Building an Enterprise SOC using Wazuh, Docker & TheHive

## Introduction

Modern organizations generate a massive amount of security events every day. Managing these logs manually is almost impossible, which is why Security Information and Event Management (SIEM) platforms are critical.

In this project I designed and deployed an enterprise-grade Security Operations Center using Wazuh, Docker, VPN connectivity and TheHive.

---

# Architecture

The environment consisted of:

- Internet
- Router
- Firewall
- VPN
- OPNsense Gateway
- Docker Host
- Wazuh Manager
- Wazuh Indexer
- Wazuh Dashboard
- TheHive
- Windows Infrastructure
- Client Wazuh Worker
- Windows & Linux Endpoints

---

# Deployment

The deployment was containerized using Docker.

Major services included:

- Wazuh Manager
- Wazuh Indexer
- Wazuh Dashboard
- TheHive

VPN connectivity was established to securely connect remote infrastructure with centralized monitoring.

---

# Challenges

Some of the practical challenges included:

- Secure VPN connectivity
- Docker networking
- Wazuh Worker registration
- Active Directory integration
- Enterprise log collection

---

# Lessons Learned

This project helped me understand:

- Enterprise SOC architecture
- Infrastructure planning
- Docker deployments
- SIEM implementation
- Security monitoring
- Incident management

---

# Conclusion

Designing an enterprise SOC requires much more than installing a SIEM solution. Network architecture, VPN connectivity, endpoint integration, incident management and infrastructure planning all play an important role in building a scalable monitoring environment.