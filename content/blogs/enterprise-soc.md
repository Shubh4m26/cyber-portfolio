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
featured: true,
readingTime: "20 min read"
---

# Building an Enterprise SOC with Wazuh, Docker, VPN Connectivity & TheHive

## Introduction

Modern organizations operate across multiple systems, networks, and geographical locations. Windows endpoints generate authentication events, Linux servers produce system logs, firewalls record network activity, and applications generate their own security-related events.

Although these systems contain valuable security information, investigating them individually becomes difficult as the environment grows.

Consider an organization operating multiple Windows endpoints, Linux servers, and a remote office. An employee reports repeated account lockouts. The domain controller records authentication failures, the endpoint contains additional activity, and the firewall may provide information about the source of the connections.

Without centralized monitoring, an analyst must access multiple systems, identify the relevant time period, and manually correlate events.

This creates an operational challenge.

The problem is not simply collecting logs. The objective is to establish a monitoring environment that can collect security telemetry, process events, generate meaningful alerts, and provide analysts with sufficient context to investigate suspicious activity.

In this project, I explored the design and implementation of an enterprise-style Security Operations Center using Wazuh, Docker, VPN connectivity, OPNsense, Windows and Linux endpoints, and TheHive.

The objective was to understand how security monitoring infrastructure can be deployed, how remote telemetry can reach a centralized environment, and how SIEM alerts can be incorporated into an investigation workflow.

Rather than treating the SIEM as an isolated application, the project focuses on the complete monitoring architecture, including network connectivity, endpoint collection, event processing, centralized visibility, and incident management.

---

## 1. Understanding the SOC Architecture

A Security Operations Center requires multiple components working together.

Endpoints generate security events. Collection agents gather relevant telemetry. Network infrastructure provides connectivity between systems. The SIEM processes and analyzes events, while analysts use dashboards and investigation tools to review activity.

For this project, the architecture was designed around centralized monitoring with a separate collection environment for remote infrastructure.

The environment included:

- Internet connectivity
- Router
- Firewall
- VPN connectivity
- OPNsense gateway
- Docker host
- Wazuh Manager
- Wazuh Indexer
- Wazuh Dashboard
- TheHive
- Windows infrastructure
- Client-side Wazuh worker
- Windows and Linux endpoints

Each component serves a specific purpose within the monitoring workflow.

### 1.1 Endpoint and collection layer

The endpoint layer consists of Windows and Linux systems that generate security-related telemetry.

Windows systems can provide authentication events, account activity, operating-system events, and other security information depending on the configured audit policy.

Linux systems provide authentication logs, system logs, service activity, and other relevant events depending on the distribution and collection configuration.

The Wazuh agent is responsible for collecting configured telemetry and communicating with the monitoring environment.

For remote infrastructure, the client-side worker provides an additional collection and forwarding component.

This allows the remote environment to communicate with the central monitoring architecture through a controlled network path.

The collection layer is important because the quality of the SIEM depends directly on the quality and availability of the telemetry it receives.

If an endpoint does not generate the required event, or the collection configuration does not capture it, the central monitoring platform cannot reliably analyze that activity.

### 1.2 Network and security layer

The network layer establishes communication between the remote environment and the central SOC.

The architecture includes routing, firewall policy, VPN connectivity, and the OPNsense gateway.

These components determine how telemetry travels between the remote collection environment and the central monitoring services.

The VPN provides an encrypted communication path between the participating networks.

However, VPN connectivity alone does not establish complete security.

Firewall rules must still restrict communication to the required destinations and services.

For example, a remote worker should communicate with the intended monitoring endpoint without automatically receiving unrestricted access to the central SOC network.

This separation reduces unnecessary network exposure and makes the monitoring architecture easier to manage.

### 1.3 Central SOC layer

The central SOC environment contains the primary monitoring and investigation components.

Wazuh Manager processes security events and applies detection logic.

Wazuh Indexer stores and indexes monitoring data for searching and analysis.

Wazuh Dashboard provides the analyst interface for reviewing alerts and investigating events.

TheHive provides a separate case-management environment for documenting investigations.

The separation of these responsibilities makes the architecture easier to understand and troubleshoot.

An endpoint collection issue, detection issue, indexing issue, and case-management issue should not be treated as the same problem.

Each component must be validated independently.

---

## 2. Designing the Monitoring Environment

Before deploying the services, it is important to understand what the monitoring environment needs to accomplish.

A SOC architecture should not be designed only around the availability of software.

It should be designed around the operational requirements of the organization.

The primary requirements considered in this project were centralized monitoring, remote telemetry collection, secure network communication, endpoint visibility, and structured investigation.

### 2.1 Centralized visibility

The first requirement was to establish a centralized location where security events could be reviewed.

Without centralized visibility, an analyst may need to investigate Windows authentication events, Linux system logs, and firewall activity through separate interfaces.

This increases investigation time and makes correlation difficult.

Centralized monitoring provides a common environment where relevant events can be searched and reviewed.

It also helps analysts understand whether multiple events are related to the same endpoint, account, or time period.

### 2.2 Secure remote connectivity

The second requirement was to establish a secure connection between the remote collection environment and the central monitoring infrastructure.

The remote worker should communicate with the central monitoring endpoint through the intended VPN and firewall configuration.

The design should avoid unnecessary direct exposure of monitoring services.

The network path should also be documented so that connectivity problems can be investigated systematically.

### 2.3 Endpoint monitoring

The third requirement was to onboard Windows and Linux systems.

Endpoint onboarding includes agent installation, configuration, registration, communication validation, and verification of the expected event sources.

The goal is not simply to display an endpoint as connected.

The goal is to confirm that the required telemetry is actually being collected.

### 2.4 Investigation workflow

The final requirement was to establish a structured investigation process.

When an alert requires additional analysis, the analyst should be able to document the event, affected systems, investigation notes, evidence, and outcome.

TheHive provides a case-management environment for this purpose.

This creates a workflow that extends beyond alert generation and supports investigation continuity.

---

## 3. Architecture and Component Responsibilities

The monitoring environment was organized into separate functional components.

### 3.1 Router and firewall

The router provides network connectivity between the relevant network segments.

The firewall controls which communication is permitted between the remote environment and the central SOC.

In a monitoring architecture, firewall policy should be based on the required communication paths.

For example, endpoint telemetry should be permitted to reach the designated collection or monitoring service.

Administrative access should be restricted to authorized management systems.

This reduces unnecessary exposure and makes network access easier to review.

### 3.2 VPN connectivity

VPN connectivity provides the protected communication path between the remote environment and the central monitoring infrastructure.

The VPN configuration must account for:

- Peer addresses
- VPN address assignments
- Routing
- Firewall policy
- Required application ports
- Return traffic
- Authentication
- Certificate or key management

A successful VPN connection does not necessarily mean that the monitoring application is reachable.

The application must also be listening on the expected interface, and the network must permit the required protocol and port.

### 3.3 OPNsense gateway

OPNsense provides gateway and firewall functionality within the network architecture.

Its role is to help control communication between network segments and the monitoring environment.

The gateway configuration should be reviewed alongside routing and firewall policy.

When remote telemetry is not reaching the central monitoring environment, the gateway can be one of the components investigated.

However, the investigation should begin by identifying where communication fails rather than assuming that the firewall is responsible.

### 3.4 Docker host

Docker provides the deployment platform for the monitoring services.

Containerization allows the services to be managed through a consistent deployment structure.

It also makes service configuration and troubleshooting more organized.

However, containerization does not eliminate the need for persistent storage, resource planning, network configuration, access control, and backups.

A container can be running while the application inside it is not functioning correctly.

For this reason, service health must be validated at the application level.

### 3.5 Wazuh Manager

Wazuh Manager receives security events and processes them using the configured decoders and detection rules.

When an event matches the relevant detection conditions, Wazuh can generate an alert.

The Manager is therefore a central part of the monitoring workflow.

Its effectiveness depends on the quality of the collected telemetry and the accuracy of the detection logic.

A rule cannot reliably detect activity if the required event source is unavailable or the expected fields are missing.

### 3.6 Wazuh Indexer

The Indexer provides storage and indexing capabilities for monitoring data.

Indexing allows analysts to search and review events without manually accessing each endpoint.

The Indexer also introduces operational considerations.

As the number of endpoints and event volume increases, storage consumption and indexing workload increase.

The monitoring environment must therefore account for event volume, retention requirements, storage performance, and resource availability.

### 3.7 Wazuh Dashboard

The Dashboard provides the interface through which analysts review monitoring data.

Analysts can use it to inspect alerts, search events, review endpoint status, and investigate activity.

A dashboard should not be treated as proof that the monitoring environment is healthy.

The underlying collection and processing pipeline must also be validated.

### 3.8 TheHive

TheHive provides a structured environment for managing investigations.

It allows analysts to record case information, document investigation activity, maintain ownership, and track case status.

TheHive complements Wazuh by providing an investigation workflow.

The SIEM identifies and presents security events.

The case-management platform helps analysts organize the work required to investigate those events.

---

## 4. Deploying the SOC Services with Docker

The central monitoring environment was deployed using Docker.

Containerization provides a consistent approach to service deployment and management.

Instead of installing every monitoring component directly on the operating system, the services can be managed through their container configurations.

The Wazuh Manager, Indexer, Dashboard, and TheHive form the primary application components.

Each service has its own responsibilities and configuration requirements.

### 4.1 Understanding service dependencies

The monitoring services must communicate correctly.

The Manager processes events.

The Indexer stores searchable data.

The Dashboard provides visibility.

TheHive supports case management.

The complete workflow depends on the communication and configuration between these components.

A service being available does not automatically prove that the complete monitoring pipeline is working.

For example, the Dashboard may be accessible while the Indexer is unavailable.

Similarly, the Manager may receive events while the expected alerts are not visible through the Dashboard.

Each stage must be checked independently.

### 4.2 Container networking

Container networking determines how services communicate with one another and with systems outside the Docker environment.

The configuration should clearly identify which services need internal communication and which services require external access.

Administrative interfaces should not be exposed unnecessarily.

The network configuration should also avoid conflicting address ranges and unintended routing behavior.

When troubleshooting container communication, inspect the service configuration, network membership, listening ports, and application logs.

### 4.3 Persistent storage

Persistent storage is important for services that maintain indexed data, configuration, or application state.

Container recreation should not unintentionally remove required monitoring data.

The deployment should identify which directories or volumes contain persistent information.

Configuration files should be backed up separately from application data where appropriate.

A reliable deployment should also include a documented recovery process.

### 4.4 Resource planning

A monitoring environment requires sufficient CPU, memory, and storage.

The Indexer can consume significant resources depending on the volume of collected events and the retention period.

The Manager also requires resources for event processing.

The Dashboard and TheHive introduce additional application workloads.

Capacity planning should therefore consider:

- Number of endpoints
- Event volume
- Peak event rate
- Storage requirements
- Retention period
- Search workload
- Available memory
- Disk performance

Without measured workload data, endpoint capacity should not be estimated from the fact that the services successfully run in a lab.

---

## 5. Remote-Site Connectivity and VPN Architecture

Remote monitoring introduces additional network considerations.

The central SOC must receive telemetry from infrastructure that may be located outside its local network.

In this project, VPN connectivity was used to establish communication between remote infrastructure and the central monitoring environment.

The remote collection environment and central SOC remain separate network locations.

The VPN provides the communication path between them.

### 5.1 Establishing connectivity

The first step is to confirm that the VPN tunnel is established.

Next, verify that the remote worker has the expected VPN address.

The route to the central monitoring network should then be checked.

Finally, validate communication with the required application service.

This sequence helps identify whether the problem is related to VPN connectivity, routing, firewall policy, or the monitoring application itself.

### 5.2 Firewall policy

Firewall rules should permit only the required communication.

A monitoring architecture should not automatically allow unrestricted access between the VPN network and the SOC network.

The required source, destination, protocol, and port should be documented.

Administrative interfaces should be restricted to approved management access.

The firewall configuration should also account for return traffic and the expected routing path.

### 5.3 Remote telemetry flow

The logical telemetry workflow is:

Remote endpoint → Collection agent → Client-side worker → Secure network path → Central monitoring environment

The exact forwarding behavior depends on the configured deployment.

The purpose of the architecture is to provide a controlled communication path for remote telemetry.

The central monitoring environment then processes and stores the events according to its configuration.

### 5.4 Troubleshooting remote communication

Consider an illustrative situation in which a remote Windows endpoint generates a security event, but the central Dashboard does not display it.

The investigation should begin at the endpoint.

First, confirm that the event exists locally.

Next, determine whether the agent collects the event.

Then verify that the worker receives the telemetry.

After that, check whether the worker can communicate with the central monitoring endpoint through the VPN.

Finally, inspect the central Manager, indexing layer, and Dashboard.

This approach prevents unnecessary changes to detection rules when the actual problem is network connectivity or event collection.

---

## 6. Windows Endpoint Onboarding

Windows endpoint onboarding is an important part of establishing security visibility.

Windows systems generate a variety of security-related events.

However, the available telemetry depends on the configured audit policy and collection settings.

The onboarding process should therefore include both agent installation and event validation.

### 6.1 Agent installation and registration

The Wazuh agent must be installed and configured to communicate with the intended monitoring endpoint.

The endpoint should be assigned the correct configuration.

After installation, verify that the agent is running and that communication is established.

The endpoint should also be identifiable within the monitoring environment.

### 6.2 Windows event collection

Windows event collection depends on the configured event sources.

Authentication events can help identify successful and unsuccessful logons.

System events can provide additional information about operating-system activity.

Other event sources may provide context about account activity, processes, and security configuration.

The collection configuration should be based on the monitoring requirements.

Collecting every possible event without a defined use case can increase data volume and investigation complexity.

### 6.3 Validation

After onboarding, generate or identify a known event.

Confirm that the event exists locally.

Then verify that it reaches the monitoring environment.

The event should contain the fields needed for analysis.

If the event is missing, investigate the collection configuration before changing detection logic.

A connected agent does not necessarily mean that the expected event sources are enabled.

---

## 7. Linux Endpoint Onboarding

Linux systems provide valuable security telemetry.

Depending on the distribution and configuration, relevant sources may include authentication logs, system logs, service activity, and application events.

The exact file paths and logging behavior vary across distributions.

For this reason, the collection configuration should be based on the actual system.

### 7.1 Log source identification

Before configuring collection, identify which log sources are relevant to the monitoring objective.

Authentication logs may provide information about login activity.

System logs may provide service and operating-system context.

Application logs may provide additional information about security-relevant behavior.

The collection policy should document which sources are enabled and why.

### 7.2 Agent configuration

The Wazuh agent must be configured to collect the required sources.

The configuration should account for the actual log location, file permissions, and expected event format.

If the agent cannot read a source, the events will not be available centrally.

### 7.3 Validation

After configuring collection, verify that the expected events are being received.

Check the endpoint first.

Then inspect the collection and central monitoring stages.

This helps distinguish an endpoint logging issue from a collection or transport issue.

---

## 8. Active Directory and Identity Monitoring

Active Directory provides important identity-related telemetry.

Authentication events can help analysts understand account activity and investigate suspicious logons.

However, identity events must be interpreted in context.

Repeated authentication failures may result from incorrect passwords, expired credentials, service-account configuration, or malicious activity.

A detection should not automatically classify every authentication failure as an incident.

### 8.1 Identity event visibility

The monitoring design should identify which systems generate the relevant authentication events.

Domain controller telemetry and endpoint telemetry may provide different perspectives.

The collection configuration should clearly document which sources are monitored.

### 8.2 Authentication investigation

When investigating suspicious authentication activity, analysts should consider:

- Account involved
- Source endpoint
- Destination system
- Event timestamps
- Authentication result
- Related successful logons
- Repeated failures
- Known service-account activity

The purpose is to understand the activity rather than simply count failed authentication events.

### 8.3 Detection tuning

Detection rules should account for the environment's normal authentication behavior.

A threshold that is too low may generate unnecessary alerts.

A threshold that is too high may delay detection.

The rule should also provide sufficient context for investigation.

A useful alert should help the analyst identify the account, source, time window, and relevant event details.

---

## 9. Detection Engineering: From Event to Investigation

Detection engineering is the process of converting security telemetry into meaningful detection logic.

A detection rule should be based on a defined behavior and the availability of the required event data.

The objective is not to generate as many alerts as possible.

The objective is to identify activity that deserves investigation while maintaining useful context.

### 9.1 Illustrative scenario: Repeated authentication failures

Consider an organization where a Windows account experiences repeated unsuccessful authentication attempts.

The user reports that the account was locked.

The SOC analyst begins by identifying the affected account and the relevant time window.

The analyst then searches the available authentication events.

The investigation considers whether the failures originated from one endpoint or multiple systems.

The analyst also checks whether successful authentication occurred after the failures.

Additional endpoint and network events may provide context.

This helps determine whether the activity is consistent with a user mistake, a stale credential, or suspicious behavior.

This scenario is illustrative and should not be presented as a confirmed incident unless it matches an observed event in the project.

### 9.2 Detection logic

A detection rule for repeated authentication failures may consider:

- Event type
- Account
- Source endpoint
- Time window
- Number of failures
- Related authentication activity

The rule should be tested against representative events.

The detection threshold should reflect the environment.

The rule should also provide useful context to the analyst.

An alert that contains only a generic message may require additional investigation before the analyst can understand what happened.

### 9.3 Alert investigation

When an alert is generated, the analyst should validate the underlying event.

The alert title is not sufficient evidence by itself.

The analyst should review the event details, identify the affected account and endpoint, and compare related activity.

The investigation should record the evidence supporting the conclusion.

If the activity is benign, document why.

If the activity is suspicious, record the next investigation step.

If the activity is confirmed as an incident, follow the organization's escalation and response process.

---

## 10. TheHive Integration and Incident Management

Wazuh provides monitoring and alerting.

TheHive provides a structured environment for managing investigations.

These functions complement one another.

An alert may require investigation beyond the initial event review.

The analyst may need to collect additional evidence, communicate with another team, track remediation, and document the final outcome.

A case-management platform helps preserve this information.

### 10.1 Alert-to-case workflow

The investigation workflow can be organized as follows:

1. Wazuh generates an alert.
2. The analyst reviews the alert and supporting events.
3. The analyst determines whether the alert requires a tracked investigation.
4. A TheHive case is created or updated.
5. The case records the affected account, endpoint, timestamps, and evidence.
6. The analyst documents investigative actions.
7. The case is assigned and its status updated.
8. The final disposition is recorded.

Case creation may be manual or automated depending on the actual integration configuration.

The workflow should not assume that every Wazuh alert automatically becomes a TheHive case.

### 10.2 Case documentation

A professional investigation record should include a clear summary.

The analyst should document what triggered the investigation, which systems were involved, and what evidence was reviewed.

The case should also record the current status and next action.

The final conclusion should distinguish observed facts from assumptions.

For example:

Observed fact:

Multiple authentication failures were recorded for the same account.

Investigation question:

Were the attempts generated by a legitimate user, a service, or suspicious activity?

Conclusion:

The conclusion should be based on the evidence available during the investigation.

### 10.3 Investigation continuity

Case management becomes especially useful when an investigation requires multiple analysts.

Without a structured record, the next analyst may need to repeat the original investigation.

A case provides continuity by preserving:

- Investigation summary
- Evidence
- Analyst notes
- Ownership
- Status
- Next action
- Final disposition

This improves the quality of investigation handoffs.

---

## 11. Troubleshooting the Monitoring Pipeline

A monitoring pipeline should be investigated from the endpoint toward the analyst interface.

This approach helps identify the stage where the event stopped progressing.

### 11.1 Endpoint event missing

First, confirm that the event exists locally.

If it does not exist, investigate the endpoint's audit policy, application behavior, or logging configuration.

The SIEM cannot detect an event that was never generated or collected.

### 11.2 Agent not reporting

If the event exists locally but is not visible through the agent, inspect the agent status and collection configuration.

Confirm that the required source is enabled.

Verify that the agent can access the relevant log source.

Then check communication with the intended monitoring endpoint.

### 11.3 Remote worker communication failure

If the worker receives telemetry but the central Manager does not, investigate the network path.

Check:

- VPN status
- Routes
- Firewall rules
- Destination address
- Listening service
- Required application port
- Return traffic
- Application logs

A successful ping does not guarantee that the monitoring application can communicate.

### 11.4 Manager receives events but no alert appears

If the event reaches the Manager but no alert is generated, review the detection logic.

Confirm that the event is decoded correctly.

Check whether the expected fields are present.

Verify that the rule conditions match the actual event.

If the rule uses a threshold or frequency condition, confirm that the required sequence of events occurred.

### 11.5 Alert missing from Dashboard

If the alert exists in the Manager but is not visible through the Dashboard, inspect the indexing and search stages.

Confirm that the data is available.

Check the time range and filters.

Verify that the correct index or data source is being queried.

This separates detection problems from indexing and visualization problems.

### 11.6 TheHive case not created

First determine whether case creation is manual or automated.

If an integration is configured, inspect its endpoint, authentication, permissions, payload, and error logs.

Validate the workflow using a controlled test alert.

Confirm that the resulting case contains the expected information.

---

## 12. Security and Operational Readiness

A functional SOC lab is not automatically production-ready.

A production monitoring environment requires additional operational controls.

### 12.1 Access control

Administrative access to the Manager, Indexer, Dashboard, Docker host, VPN, and TheHive should be restricted.

Use individual accounts where supported.

Administrative interfaces should not be exposed directly to the public Internet.

Access should be limited to authorized users and approved management networks.

### 12.2 Certificates and secrets

VPN keys, API tokens, service passwords, and certificates must be handled securely.

Secrets should not be committed to public repositories.

Certificates should have a documented lifecycle.

This includes issuance, renewal, expiry monitoring, and replacement.

### 12.3 Monitoring the monitoring platform

The SOC platform itself must be monitored.

The team should be able to identify when:

- An endpoint stops reporting.
- A worker loses connectivity.
- A VPN tunnel becomes unavailable.
- A monitoring service becomes unhealthy.
- Indexing falls behind.
- Storage approaches capacity.
- The Dashboard becomes unavailable.
- The case-management platform becomes unavailable.

A monitoring platform that silently stops receiving telemetry can create a false sense of security.

### 12.4 Backup and recovery

The deployment should identify which configuration and application data require backups.

Configuration backups should be maintained separately from persistent application data where appropriate.

The recovery process should document service dependencies and restoration order.

A backup is not sufficient unless restoration has been tested.

### 12.5 Data retention

Security logs may contain usernames, hostnames, IP addresses, and other sensitive information.

Retention should be based on investigative requirements, storage capacity, and applicable organizational policies.

The environment should document:

- What data is collected.
- Where the data is stored.
- Who can access it.
- How long it is retained.
- How it is backed up.
- How it is securely removed.

---

## 13. Engineering Lessons

The project reinforced several important engineering principles.

### A SIEM is a complete pipeline

Security monitoring depends on event generation, collection, transport, processing, indexing, and analyst visibility.

Each stage must be validated.

A Dashboard alone does not prove that the monitoring environment is working correctly.

### Network architecture is part of SOC engineering

VPN connectivity, routing, firewall policy, and return traffic determine whether remote telemetry can reach the central environment.

Secure connectivity must be designed alongside collection.

### Containerization requires operational planning

Docker simplifies service deployment and management.

However, persistence, resource allocation, network configuration, secrets, and backups remain essential.

### Detection quality depends on context

An alert becomes useful when the underlying telemetry is accurate and the detection logic reflects the environment.

Detection quality should not be measured only by alert volume.

### Case management preserves investigation reasoning

TheHive provides a structured place to record evidence, notes, ownership, status, and outcome.

This helps maintain investigation continuity.

### Documentation is part of the implementation

Architecture diagrams, configuration documentation, onboarding procedures, validation steps, and recovery notes make the environment easier to maintain.

---

## 14. Future Improvements

The next stage should focus on improving reliability, visibility, and detection quality.

Potential improvements include:

- Establishing a documented endpoint onboarding checklist.
- Validating telemetry after every onboarding.
- Monitoring endpoint and worker reporting status.
- Documenting VPN routes and firewall rules.
- Developing detection rules for relevant Windows and Linux events.
- Testing detection logic against representative telemetry.
- Improving alert context.
- Documenting alert-to-case handling.
- Establishing backup and recovery procedures.
- Measuring event volume and storage consumption.
- Reviewing access controls and secret handling.
- Extending monitoring to additional log sources based on defined use cases.

These improvements should be prioritized according to the actual environment and observed operational gaps.

---

## Conclusion

Building a SOC environment requires more than installing a SIEM and opening a dashboard.

The monitoring workflow depends on endpoint visibility, reliable collection, secure network connectivity, event processing, searchable storage, and a structured investigation process.

This project brought these elements together using Wazuh, Docker, VPN connectivity, OPNsense, Windows and Linux telemetry, and TheHive.

The architecture provides a practical foundation for understanding centralized security monitoring and remote telemetry collection.

It also highlights the engineering responsibilities that must be addressed before a lab environment can be considered production-ready.

The most important lesson is that security monitoring is an end-to-end engineering process.

A detection is only as useful as the telemetry behind it, the network path that delivers it, the context available to the analyst, and the investigation record that preserves the result.

The objective is not simply to collect more logs.

The objective is to build a monitoring environment that helps security teams understand activity, investigate threats, and make informed decisions.

---

## Implementation details to verify before publishing

Before publishing this article, verify the following against the actual project:

- Docker Compose services and image versions.
- Endpoint types and event sources onboarded.
- VPN technology used in the final configuration.
- Network routes and firewall rules.
- Ports configured for monitoring services.
- Remote worker forwarding configuration.
- TheHive integration method.
- Detection rules implemented and tested.
- Troubleshooting issues actually observed.
- Whether the environment was a lab, internal deployment, or production environment.

Use sanitized configuration examples and screenshots where available.

Do not publish private IP addresses, credentials, certificates, customer identifiers, or sensitive security logs.

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