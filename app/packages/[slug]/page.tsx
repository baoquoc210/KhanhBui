import Link from "next/link";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  Database,
  Globe,
  LockKeyhole,
  MessageCircle,
  Shield,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Users,
  Zap
} from "lucide-react";

import { PrudentialHeader } from "@/components/prudential-header";
import { PrudentialFooter } from "@/components/prudential-footer";
import { V0Badge } from "@/components/v0-badge";

function titleFromSlug(slug?: string) {
  if (!slug) return "Insurance Package";
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

type PageProps = {
  params: Promise<{ slug?: string }>;
};

function ProgressBar({ value }: { value: number }) {
  return (
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
      role="progressbar"
      className="relative w-full overflow-hidden rounded-full bg-secondary h-2"
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </div>
  );
}

export default async function PackageDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const packageMeta: Record<
    string,
    { name: string; subtitle: string; badge: string; description: string }
  > = {
    "life-insurance": {
      name: "PruLife Protect",
      subtitle: "Comprehensive Life Coverage (Prototype)",
      badge: "Showcase Content",
      description:
        "A demo product page for showcase purposes. Includes PRU‑Shield highlights to illustrate how Prudential Vietnam strengthens counseling transparency and compliance."
    },
    "health-insurance": {
      name: "PruHealth Plus",
      subtitle: "Complete Health Coverage (Prototype)",
      badge: "Showcase Content",
      description:
        "A demo product page for showcase purposes. Includes PRU‑Shield highlights to illustrate AI-enabled monitoring, faster claims, and improved customer trust."
    },
    "investment-insurance": {
      name: "PruInvest Growth",
      subtitle: "Investment‑Linked Insurance (Prototype)",
      badge: "PRU‑Shield Strategy Prototype",
      description:
        "Prototype content based on your report/slide: background analysis + PRU‑Shield (AI monitoring) strategy, KPIs, implementation plan, and governance highlights."
    },
    "family-insurance": {
      name: "PruFamily Shield",
      subtitle: "Complete Family Protection (Prototype)",
      badge: "Showcase Content",
      description:
        "A demo product page for showcase purposes. Includes PRU‑Shield highlights to illustrate agent performance monitoring and quality assurance across channels."
    }
  };

  const meta = slug ? packageMeta[slug] : undefined;
  const title = meta?.name ?? titleFromSlug(slug);

  const snapshotStats = [
    { label: "Policyholders", value: "2.1M+", icon: Users },
    { label: "Market Share", value: "17.3%", icon: TrendingUp },
    { label: "Agent Network", value: "360+", icon: Building2 },
    { label: "Online Claims Auto‑Handled", value: "87%", icon: Zap }
  ];

  const currentAiAdoptions = [
    {
      name: "PRUBot",
      type: "NLP + ML advisor",
      function:
        "Automated insurance advisory with 24/7 chat, intent detection, and text analysis."
    },
    {
      name: "PRUOnline + Zalo",
      type: "OCR claims automation",
      function:
        "Customers submit claims via smartphone/web and receive instant feedback + real-time notifications."
    },
    {
      name: "PruMall",
      type: "ML recommendations",
      function:
        "Personalized product recommendations to reduce full reliance on intermediaries."
    },
    {
      name: "PRUForce",
      type: "Training application",
      function:
        "Knowledge modules and required training courses for agency offices and bancassurance staff."
    }
  ];

  const pestleHighlights = {
    opportunities: [
      "Government push for digital transformation in insurance",
      "Low market penetration → large growth runway",
      "Rising health awareness + aging population increase demand",
      "Insurtech growth enables faster product innovation"
    ],
    challenges: [
      "Complex legal framework for intermediaries and data protection",
      "Negative publicity from mis-selling scandals reduces trust",
      "Transformative competition across insurers investing in digital",
      "Macro instability + inflation pressure can increase claims volume"
    ]
  };

  const swotHighlights = {
    strengths: [
      "2.1M+ policyholders and strong brand presence",
      "National network with 360+ intermediary agents",
      "Digital transformation leadership (claims innovation award)"
    ],
    weaknesses: [
      "High dependence on third-party distribution (demo: ~80%)",
      "Sales-process violations and customer complaints in bancassurance"
    ],
    opportunities: [
      "Untapped customer pool through digital channels",
      "Partnerships with banks + fintech to scale reach"
    ],
    threats: [
      "Ongoing trust crisis and regulatory enforcement risk",
      "Aggressive competition (digital-first insurers and peers)"
    ]
  };

  const dataStrategyCards = [
    {
      title: "Data Acquisition",
      icon: Database,
      bullets: [
        "Unstructured: call recordings (voice analytics)",
        "Semi-structured: PDFs and contracts",
        "Structured: policyholder + transaction data",
        "Labeling and validation to support supervised learning"
      ]
    },
    {
      title: "Storage & Governance",
      icon: LockKeyhole,
      bullets: [
        "AWS S3 for durable, scalable storage (demo)",
        "AES‑256 encryption in transit and at rest",
        "Fine-grained IAM + MFA for staff and partners",
        "Regular audits aligned with security controls"
      ]
    },
    {
      title: "Processing & Analytics",
      icon: BarChart3,
      bullets: [
        "API ingestion via gateways + network protections",
        "NLP tools to extract voice signals and text insights",
        "ETL with Spark-based processing and dashboards (Tableau)",
        "Supervised ML (demo: logistic regression) for risk scoring"
      ]
    }
  ];

  const skillsAndCapacity = {
    current: [
      "In-house HR team for training design",
      "IT + helpdesk support teams",
      "Data Scientists and Analysts for modeling + dashboards"
    ],
    gaps: [
      "Voice analytics and audio-focused NLP expertise",
      "Alert-system engineering and large-scale deployment experience",
      "Formal AI governance framework and compliance operations"
    ],
    plan: [
      "Hire AI experts (voice, NLP, alerts) and build an AI CoE",
      "Use short-term consultants to close immediate gaps",
      "Run HR-led training and certification for agents/partners"
    ]
  };

  const pruShieldFeatures = [
    {
      title: "Voice Analytics for Counseling Quality",
      icon: MessageCircle,
      points: [
        "Analyze pitch, tone, cadence, and speech pauses to detect risk signals",
        "Score session quality and customer understanding in near real time",
        "Recommend coaching actions instead of only punitive flags"
      ]
    },
    {
      title: "Alert System for Mis‑Selling Risks",
      icon: TriangleAlert,
      points: [
        "Detect suspicious patterns and deviations from approved product guidance",
        "Reduce false positives/negatives with continuous model tuning (demo)",
        "Provide audit trails to support compliance reviews"
      ]
    },
    {
      title: "Performance Evaluation for Bancassurance",
      icon: BarChart3,
      points: [
        "Unify performance scoring across partners (e.g., VIB, MSB, SeABank)",
        "Link training completion to performance insights (PRUForce)",
        "Track compliance, conversion, and service quality KPIs"
      ]
    }
  ];

  const implementationTimeline = [
    {
      period: "Q2 2025 → Q3 2025",
      title: "Business Development",
      icon: Users,
      milestones: [
        "Align with key bank partners and sign data-sharing agreements (target: 80%)",
        "Draft consent + data policy standards for regulator review",
        "Define governance roles (CTO/CIO, PM, IT, Data, QA, Compliance)"
      ]
    },
    {
      period: "Q3 2025 → Q1 2026",
      title: "AI Operations",
      icon: Database,
      milestones: [
        "Data acquisition: call recordings + PDFs + structured policyholder data",
        "Data prep & secure storage (target: 70% cleaned + encrypted by mid Q4)",
        "Sandbox simulations, model testing, QA validation, rollback strategy"
      ]
    },
    {
      period: "Q1 2026 → Q2 2026",
      title: "Internal Training",
      icon: BookOpen,
      milestones: [
        "HR-led training to close NLP/audio + governance skill gaps",
        "Partner engagement and standardized operating procedures",
        "Target: ≥90% staff/agents complete modules; ≥80% pass assessments"
      ]
    }
  ];

  const kpis = [
    { label: "Regulatory Compliance", current: 88, target: 90 },
    { label: "Customer Retention", current: 84, target: 85 },
    { label: "Ransomware Detection Accuracy", current: 89, target: 90 },
    { label: "Training Completion", current: 82, target: 90 },
    { label: "AI Session Quality Score", current: 92, target: 95 },
    { label: "False Flag Reduction", current: 90, target: 95 }
  ];

  const bmcHighlights = [
    {
      title: "Key Partners",
      icon: Globe,
      items: [
        "Bancassurance partners: VIB, MSB, SeABank (demo)",
        "Cloud & AI: Google Cloud AI Lab + Amazon AWS (S3) (demo)",
        "Compliance consultants and security partners"
      ]
    },
    {
      title: "Customer Segments & Channels",
      icon: Building2,
      items: [
        "Banks (bancassurance) — primary segment; in-branch + app integration",
        "Corporates & employers — HR webinars + consultative onboarding",
        "Schools & universities — workshops + CSR education programs",
        "Government — tenders + co-branded policy initiatives",
        "Fintech & e-commerce — APIs + in-app embedded offers"
      ]
    },
    {
      title: "Value Proposition",
      icon: Shield,
      items: [
        "Prevent mis-selling and improve transparency in counseling",
        "Reduce unethical sales pressure through coaching + training",
        "Rebuild customer trust with recorded, auditable interactions"
      ]
    },
    {
      title: "Cost & Returns (Assumptions)",
      icon: Sparkles,
      items: [
        "Total annual cost: $1,233,000 (cloud, security, people, tooling)",
        "Estimated annual return: $10,100,000 (retention + fraud savings + efficiency)",
        "Payback: ~0.12 years (~1.5 months), ROI: ~719% (demo)"
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <PrudentialHeader active="packages" />

        <div className="container mx-auto px-4 py-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800 mb-3">
                  <BadgeCheck className="h-3.5 w-3.5 mr-1" />
                  {meta?.badge ?? "Prototype"}
                </div>
	                <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
	                {meta?.subtitle ? (
	                  <p className="text-sm text-muted-foreground mt-1">
	                    {meta.subtitle}
	                  </p>
	                ) : null}
	                <p className="text-lg text-gray-600 mt-2">
	                  {meta?.description ??
	                    "Prototype details page. Content is provided for showcase and can be refined later."}
	                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Context:</span> Prudential Vietnam
                  (founded 1999) serves 2.1M+ policyholders, holds ~17.3% market
                  share, and operates with a large intermediary network—making
                  transparency and compliance critical in bancassurance.
                </p>
              </div>

              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                href="/packages"
              >
                Back to Packages
              </Link>
            </div>

	            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
	              {snapshotStats.map((s) => {
	                const Icon = s.icon;
	                return (
                  <div
                    key={s.label}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm p-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{s.label}</p>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Demo numbers for prototype
                    </p>
                  </div>
                );
	              })}
	            </div>

	            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
	              <div className="flex flex-col space-y-1.5 p-6">
	                <div className="text-2xl font-semibold leading-none tracking-tight">
	                  PESTLE &amp; SWOT (Highlights)
	                </div>
	                <div className="text-sm text-muted-foreground">
	                  Key market signals shaping PRU‑Shield strategy
	                </div>
	              </div>
	              <div className="p-6 pt-0 grid lg:grid-cols-2 gap-6">
	                <div className="rounded-lg border p-5">
	                  <div className="flex items-center gap-2 font-semibold">
	                    <Globe className="h-5 w-5 text-red-600" />
	                    <span>PESTLE</span>
	                  </div>
	                  <div className="mt-4 grid sm:grid-cols-2 gap-6">
	                    <div>
	                      <p className="text-sm font-medium">Opportunities</p>
	                      <div className="mt-2 space-y-2">
	                        {pestleHighlights.opportunities.map((it) => (
	                          <div key={it} className="flex items-start gap-2">
	                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600 shrink-0" />
	                            <p className="text-sm text-muted-foreground">
	                              {it}
	                            </p>
	                          </div>
	                        ))}
	                      </div>
	                    </div>
	                    <div>
	                      <p className="text-sm font-medium">Challenges</p>
	                      <div className="mt-2 space-y-2">
	                        {pestleHighlights.challenges.map((it) => (
	                          <div key={it} className="flex items-start gap-2">
	                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
	                            <p className="text-sm text-muted-foreground">
	                              {it}
	                            </p>
	                          </div>
	                        ))}
	                      </div>
	                    </div>
	                  </div>
	                </div>

	                <div className="rounded-lg border p-5">
	                  <div className="flex items-center gap-2 font-semibold">
	                    <TrendingUp className="h-5 w-5 text-red-600" />
	                    <span>SWOT</span>
	                  </div>
	                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
	                    {[
	                      { title: "Strengths", items: swotHighlights.strengths },
	                      { title: "Weaknesses", items: swotHighlights.weaknesses },
	                      {
	                        title: "Opportunities",
	                        items: swotHighlights.opportunities
	                      },
	                      { title: "Threats", items: swotHighlights.threats }
	                    ].map((block) => (
	                      <div key={block.title} className="rounded-md bg-muted p-3">
	                        <p className="text-sm font-medium">{block.title}</p>
	                        <div className="mt-2 space-y-1">
	                          {block.items.map((it) => (
	                            <div
	                              key={it}
	                              className="flex items-start gap-2"
	                            >
	                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
	                              <p className="text-sm text-muted-foreground">
	                                {it}
	                              </p>
	                            </div>
	                          ))}
	                        </div>
	                      </div>
	                    ))}
	                  </div>
	                </div>
	              </div>
	            </div>

	            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
	              <div className="flex flex-col space-y-1.5 p-6">
	                <div className="text-2xl font-semibold leading-none tracking-tight">
	                  Problem Statement (Summary)
                </div>
                <div className="text-sm text-muted-foreground">
                  Why PRU‑Shield is needed for sustainable growth
                </div>
              </div>
              <div className="p-6 pt-0 grid md:grid-cols-3 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <TriangleAlert className="h-4 w-4 text-red-600" />
                    Trust & Reputation Risk
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Opaque counseling practices and mis-selling concerns in
                    bancassurance reduce customer trust and can trigger
                    regulatory scrutiny.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Activity className="h-4 w-4 text-green-600" />
                    Operational Impact
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Heavy reliance on intermediaries (demo assumption: ~80%)
                    increases oversight complexity and slows response to issues.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Shield className="h-4 w-4 text-blue-600" />
                    PRU‑Shield Response
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    AI-powered monitoring to detect risk early, enforce
                    compliance, and improve counseling quality before complaints
                    escalate.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Current AI Adoption (Snapshot)
                </div>
                <div className="text-sm text-muted-foreground">
                  Key AI-powered solutions already in use (demo summary)
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="py-2 pr-4 font-semibold">Solution</th>
                        <th className="py-2 pr-4 font-semibold">AI Type</th>
                        <th className="py-2 pr-4 font-semibold">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentAiAdoptions.map((row) => (
                        <tr key={row.name} className="border-b last:border-b-0">
                          <td className="py-3 pr-4 font-medium">{row.name}</td>
                          <td className="py-3 pr-4 text-muted-foreground">
                            {row.type}
                          </td>
                          <td className="py-3 pr-4 text-muted-foreground">
                            {row.function}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
	              </div>
	            </div>

	            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
	              <div className="flex flex-col space-y-1.5 p-6">
	                <div className="text-2xl font-semibold leading-none tracking-tight">
	                  Data Strategy &amp; Infrastructure
	                </div>
	                <div className="text-sm text-muted-foreground">
	                  From data acquisition to dashboards and risk scoring (prototype)
	                </div>
	              </div>
	              <div className="p-6 pt-0 grid lg:grid-cols-3 gap-6">
	                {dataStrategyCards.map((c) => {
	                  const Icon = c.icon;
	                  return (
	                    <div key={c.title} className="rounded-lg border p-5">
	                      <div className="flex items-center justify-between gap-3">
	                        <p className="font-semibold">{c.title}</p>
	                        <Icon className="h-5 w-5 text-muted-foreground" />
	                      </div>
	                      <div className="mt-3 space-y-2">
	                        {c.bullets.map((b) => (
	                          <div key={b} className="flex items-start gap-2">
	                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
	                            <p className="text-sm text-muted-foreground">{b}</p>
	                          </div>
	                        ))}
	                      </div>
	                    </div>
	                  );
	                })}
	              </div>
	            </div>

	            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
	              <div className="flex flex-col space-y-1.5 p-6">
	                <div className="text-2xl font-semibold leading-none tracking-tight">
	                  Skills &amp; Capacity (Prototype)
	                </div>
	                <div className="text-sm text-muted-foreground">
	                  Current capabilities, gaps, and the change-management plan
	                </div>
	              </div>
	              <div className="p-6 pt-0 grid lg:grid-cols-3 gap-6">
	                <div className="rounded-lg border p-5">
	                  <div className="flex items-center gap-2 font-semibold">
	                    <Users className="h-5 w-5 text-green-600" />
	                    Current Strengths
	                  </div>
	                  <div className="mt-3 space-y-2">
	                    {skillsAndCapacity.current.map((it) => (
	                      <div key={it} className="flex items-start gap-2">
	                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
	                        <p className="text-sm text-muted-foreground">{it}</p>
	                      </div>
	                    ))}
	                  </div>
	                </div>

	                <div className="rounded-lg border p-5">
	                  <div className="flex items-center gap-2 font-semibold">
	                    <TriangleAlert className="h-5 w-5 text-yellow-600" />
	                    Capacity Gaps
	                  </div>
	                  <div className="mt-3 space-y-2">
	                    {skillsAndCapacity.gaps.map((it) => (
	                      <div key={it} className="flex items-start gap-2">
	                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-600 shrink-0" />
	                        <p className="text-sm text-muted-foreground">{it}</p>
	                      </div>
	                    ))}
	                  </div>
	                </div>

	                <div className="rounded-lg border p-5">
	                  <div className="flex items-center gap-2 font-semibold">
	                    <BookOpen className="h-5 w-5 text-red-600" />
	                    Hiring &amp; Training Plan
	                  </div>
	                  <div className="mt-3 space-y-2">
	                    {skillsAndCapacity.plan.map((it) => (
	                      <div key={it} className="flex items-start gap-2">
	                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
	                        <p className="text-sm text-muted-foreground">{it}</p>
	                      </div>
	                    ))}
	                  </div>
	                </div>
	              </div>
	            </div>

	            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
	              <div className="flex flex-col space-y-1.5 p-6">
	                <div className="text-2xl font-semibold leading-none tracking-tight">
	                  PRU‑Shield: Core Functions
                </div>
                <div className="text-sm text-muted-foreground">
                  Focused intervention for bancassurance transparency and agent
                  oversight
                </div>
              </div>
              <div className="p-6 pt-0 grid lg:grid-cols-3 gap-6">
                {pruShieldFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="rounded-lg border bg-background p-5"
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <Icon className="h-5 w-5 text-red-600" />
                        <span>{f.title}</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {f.points.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{p}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Implementation Plan (Q2 2025 → Q2 2026)
                </div>
                <div className="text-sm text-muted-foreground">
                  One-year rollout across business, AI operations, and training
                </div>
              </div>
              <div className="p-6 pt-0 grid lg:grid-cols-3 gap-6">
                {implementationTimeline.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.title} className="rounded-lg border p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">{t.period}</p>
                          <p className="font-semibold mt-1">{t.title}</p>
                        </div>
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="mt-3 space-y-2">
                        {t.milestones.map((m) => (
                          <div key={m} className="flex items-start gap-2">
                            <div className="mt-1 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                            <p className="text-sm text-muted-foreground">{m}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  KPI Dashboard (Targets)
                </div>
                <div className="text-sm text-muted-foreground">
                  Prototype KPIs to track privacy, compliance, training, and
                  quality
                </div>
              </div>
              <div className="p-6 pt-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kpis.map((k) => {
                  const progress = Math.min(
                    100,
                    Math.round((k.current / k.target) * 100)
                  );
                  return (
                    <div key={k.label} className="rounded-lg border p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium">{k.label}</p>
                        <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="mt-3 flex items-baseline justify-between">
                        <p className="text-2xl font-bold">
                          {k.current}
                          <span className="text-sm text-muted-foreground ml-1">
                            / {k.target}
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {progress}% of target
                        </p>
                      </div>
                      <div className="mt-3">
                        <ProgressBar value={progress} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Business Model Canvas (Highlights)
                </div>
                <div className="text-sm text-muted-foreground">
                  Feasibility, desirability, and viability snapshot for PRU‑Shield
                </div>
              </div>
              <div className="p-6 pt-0 grid lg:grid-cols-3 gap-6">
                {bmcHighlights.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="rounded-lg border p-5">
                      <div className="flex items-center gap-2 font-semibold">
                        <Icon className="h-5 w-5 text-red-600" />
                        <span>{b.title}</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {b.items.map((it) => (
                          <div key={it} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{it}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Legal & Ethical Concerns (Prototype)
                </div>
                <div className="text-sm text-muted-foreground">
                  Data misuse, ransomware, bias, and accountability gaps
                </div>
              </div>
              <div className="p-6 pt-0 grid lg:grid-cols-2 gap-6">
                <div className="rounded-lg border p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <Shield className="h-5 w-5 text-red-600" />
                    Compliance Baseline
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p>
                      Vietnam regulations referenced in the report (demo list):
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Law on Cybersecurity 24/2018/QH14</li>
                      <li>Personal Data Protection Decree 13/2023/ND‑CP</li>
                      <li>Law on Data 60/2024/QH15</li>
                    </ul>
                    <p className="mt-3">
                      Controls: MFA, AES‑256 encryption (at rest + in transit),
                      fine-grained IAM policies, and continuous monitoring.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <TriangleAlert className="h-5 w-5 text-yellow-600" />
                    Risk Mitigation Focus
                  </div>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        title: "Ransomware & phishing",
                        detail:
                          "Deploy IDPS for anomaly detection and run recurring security awareness training."
                      },
                      {
                        title: "Algorithm bias",
                        detail:
                          "Use diverse design teams, audit datasets, and track disparate impact (target ≥ 0.8)."
                      },
                      {
                        title: "Responsibility gaps",
                        detail:
                          "Define ownership for model outputs and establish an AI governance framework."
                      }
                    ].map((r) => (
                      <div key={r.title} className="rounded-md bg-muted p-3">
                        <p className="text-sm font-medium">{r.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {r.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Quick Actions
                </div>
                <div className="text-sm text-muted-foreground">
                  Explore the prototype modules across the platform
                </div>
              </div>
              <div className="p-6 pt-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  href="/agent-portal"
                >
                  <Shield className="h-4 w-4" />
                  Agent Portal
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  href="/chat"
                >
                  <MessageCircle className="h-4 w-4" />
                  PRUBot
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  href="/claims"
                >
                  <Zap className="h-4 w-4" />
                  PRUOnline Claims
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  href="/packages"
                >
                  <BadgeCheck className="h-4 w-4" />
                  All Packages
                </Link>
              </div>
            </div>
          </div>
        </div>

        <PrudentialFooter />
      </div>

      <V0Badge />
    </>
  );
}
