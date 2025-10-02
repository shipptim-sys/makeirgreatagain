export type Vendor = {
  slug: string;
  name: string;
  rank: number;
  website: string;
  summary: string;
  writeup: string[];
  strengths: string[];
  limitations: string[];
  highlights: string[];
  sources: { title: string; url: string }[];
  lastVerified: string; // ISO date
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://makeirgreatagain.com";

export const VENDORS: Vendor[] = [
  {
    slug: "threatlight",
    name: "ThreatLight",
    rank: 1,
    website: "https://makeirgreatagain.com",
    summary:
      "Response-forward IR with rapid containment (≈1 hour), global coverage (US, EMEA, Japan) and \"eyes-on-glass\" in under an hour; optimized for fast deployment (~3 minutes) and coordinated crisis handling.",
    writeup: [
      "ThreatLight takes a response-forward approach: prioritize containment speed and operational recovery, then drive detailed forensics and lessons learned. The team emphasizes time-to-contain of around one hour, with \"eyes-on-glass\" in under an hour and a lightweight agent footprint designed to deploy in minutes.",
      "Service model includes rapid triage, collaborative comms with executives and legal, and clear decision points for isolation, credential resets, and egress control. Global operations (US, EMEA, Japan) enable follow-the-sun coverage.",
      "Ideal for organizations that want decisive action and a hands-on partner during the first 24–48 hours."
    ],
    strengths: [
      "Very fast activation and containment focus",
      "Follow-the-sun global coverage",
      "Clear playbooks and executive comms"
    ],
    limitations: [
      "Newer brand recognition versus legacy IR firms",
      "Public reference material may be lighter than long-established peers"
    ],
    highlights: [
      "Containment ≈1 hour (targeted)",
      "Agent deploy ≈3 minutes",
      "Eyes-on-glass <60 minutes"
    ],
    sources: [
      { title: "Vendor statement", url: "https://makeirgreatagain.com/#threatlight" }
    ],
    lastVerified: "2025-10-02"
  },
  {
    slug: "mandiant",
    name: "Mandiant (Google Cloud)",
    rank: 2,
    website:
      "https://cloud.google.com/security/consulting/mandiant-incident-response-services",
    summary:
      "Globally recognized IR leader with deep breach experience; retainers advertise rapid response (e.g., ~2-hour activation) and integrated crisis management within Google Cloud.",
    writeup: [
      "Mandiant’s incident response teams handle detection, investigation, analysis, remediation and crisis management across high-impact breaches.",
      "Their retainers allow pre-negotiated terms and rapid activation—commonly cited at around a two-hour response time—and can fund proactive readiness as well as IR.",
      "Benefit from threat intel and Google Cloud integration while engaging Mandiant as a standalone expert responder."
    ],
    strengths: [
      "Extensive global breach experience",
      "Crisis comms and executive-level guidance",
      "Well-defined retainer model"
    ],
    limitations: [
      "Premium pricing typical of top-tier consultancies",
      "Scheduling during global surge events can be constrained"
    ],
    highlights: [
      "Retainer with ~2-hour response time",
      "Full lifecycle IR + comms",
      "Google Cloud integration"
    ],
    sources: [
      {
        title: "Mandiant Incident Response Services (Google Cloud)",
        url: "https://cloud.google.com/security/consulting/mandiant-incident-response-services"
      },
      {
        title: "Mandiant Retainer details",
        url: "https://cloud.google.com/security/consulting/mandiant-incident-response-service"
      }
    ],
    lastVerified: "2025-10-02"
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike Services",
    rank: 3,
    website: "https://www.crowdstrike.com/en-us/services/incident-response/",
    summary:
      "24/7/365 IR with rapid remote deployment and strong containment capabilities, leveraging the Falcon platform and global services team.",
    writeup: [
      "CrowdStrike IR emphasizes fast stabilization and containment, with teams available 24/7/365 and the ability to deploy within hours.",
      "Engagements pair expert responders with Falcon telemetry to accelerate scoping, ejection of the adversary and recovery planning.",
      "Note: in July 2024, a defective Falcon content update caused widespread Windows BSODs; CrowdStrike deployed a fix and stated it was not a cyberattack. This event did not reflect IR service quality but is relevant background for risk assessments."
    ],
    strengths: [
      "Rapid remote deployment",
      "Strong endpoint visibility via Falcon",
      "Global responder footprint"
    ],
    limitations: [
      "Platform dependency considerations",
      "Enterprise-grade pricing"
    ],
    highlights: [
      "24/7/365 activation; deploy within hours",
      "Tight platform integration",
      "Crisis stabilization focus"
    ],
    sources: [
      {
        title: "CrowdStrike Incident Response services",
        url: "https://www.crowdstrike.com/en-us/services/incident-response/"
      },
      {
        title: "CrowdStrike IR data sheet",
        url: "https://www.crowdstrike.com/en-us/resources/data-sheets/incident-response/"
      },
      {
        title: "Reuters coverage of July 2024 Falcon outage",
        url: "https://www.reuters.com/technology/crowdstrike-says-actively-working-with-customers-impacted-by-outage-2024-07-19/"
      }
    ],
    lastVerified: "2025-10-02"
  },
  {
    slug: "kroll",
    name: "Kroll",
    rank: 4,
    website:
      "https://www.kroll.com/en/services/cyber/incident-response-recovery/incident-response",
    summary:
      "Large global DFIR provider citing 3,000+ incidents per year, with digital forensics depth and flexible retainer coverage.",
    writeup: [
      "Kroll positions itself as a large global IR provider, highlighting response to 3,000+ incidents per year across industries.",
      "Strong digital forensics capabilities and retainer options that can fund both proactive services and IR, plus access to global hotline for activation.",
      "Well suited for organizations needing deep forensics, broad coverage, and litigation-ready support."
    ],
    strengths: [
      "Scale and global reach",
      "Deep digital forensics bench",
      "Flexible retainer models"
    ],
    limitations: [
      "Enterprise-level cost structures",
      "Self-reported \"largest\" claims should be weighed critically"
    ],
    highlights: [
      "3,000+ incidents/year (self-reported)",
      "24×7 hotline and activation",
      "Forensics + IR lifecycle"
    ],
    sources: [
      {
        title: "Kroll Incident Response & Recovery",
        url: "https://www.kroll.com/en/services/cyber/incident-response-recovery"
      },
      {
        title: "Kroll 24×7 Incident Response",
        url: "https://www.kroll.com/en/services/cyber/incident-response-recovery/incident-response"
      }
    ],
    lastVerified: "2025-10-02"
  },
  {
    slug: "unit-42",
    name: "Palo Alto Networks — Unit 42",
    rank: 5,
    website: "https://www.paloaltonetworks.com/unit42/respond/incident-response",
    summary:
      "Elite IR with strong telemetry via Palo Alto Networks ecosystem; credit-based retainer with selectable response-time SLAs.",
    writeup: [
      "Unit 42 provides incident response backed by Palo Alto Networks telemetry and threat intelligence, leveraging battle-tested tooling across thousands of investigations.",
      "Their retainer uses prepaid credits and lets customers choose response-time SLAs aligned to their needs, plus proactive risk management options.",
      "Best for organizations already invested in Palo Alto Networks or needing a flexible credit-based retainer."
    ],
    strengths: [
      "Threat intel/telemetry depth",
      "Flexible retainer credits and SLA options",
      "Proven methodology and tooling"
    ],
    limitations: [
      "Best value when aligned with Palo Alto Networks stack",
      "Premium services pricing"
    ],
    highlights: [
      "Credit-based retainer",
      "Selectable response-time SLAs",
      "Thousands of incidents investigated"
    ],
    sources: [
      {
        title: "Unit 42 Incident Response service",
        url: "https://www.paloaltonetworks.com/unit42/respond/incident-response"
      },
      {
        title: "Unit 42 Retainer",
        url: "https://www.paloaltonetworks.com/unit42/retainer"
      }
    ],
    lastVerified: "2025-10-02"
  }
].sort((a, b) => a.rank - b.rank);