import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["AIReviewResponseManager","AISocialProofGenerator","AISocialMediaManager","AiMarketingCopyGenerator","AISEOContentWriter","AIBrandVoiceConsistencyChecker"];

const features = [
  {
    slug: "review-requests",
    title: "Review Requests",
    href: "/review-requests",
    category: "Reputation",
    icon: Bot,
    summary: "Review Requests combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Review Requests queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Review Requests", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "review-replies",
    title: "Review Replies",
    href: "/review-replies",
    category: "Reputation",
    icon: Workflow,
    summary: "Review Replies combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Review Replies queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Review Replies", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "google-business-posts",
    title: "Google Business Posts",
    href: "/google-business-posts",
    category: "Local SEO",
    icon: Users,
    summary: "Google Business Posts combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Google Business Posts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Google Business Posts", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    href: "/local-seo",
    category: "Growth",
    icon: CalendarCheck,
    summary: "Local SEO combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Local SEO queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Local SEO", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "feedback-inbox",
    title: "Feedback Inbox",
    href: "/feedback-inbox",
    category: "Customer Voice",
    icon: Mail,
    summary: "Feedback Inbox combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Feedback Inbox queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Feedback Inbox", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "testimonial-library",
    title: "Testimonial Library",
    href: "/testimonial-library",
    category: "Growth",
    icon: MessageSquareText,
    summary: "Testimonial Library combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Testimonial Library queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Testimonial Library", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "brand-tone",
    title: "Brand Tone",
    href: "/brand-tone",
    category: "Governance",
    icon: BarChart3,
    summary: "Brand Tone combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Brand Tone queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Brand Tone", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "competitor-watch",
    title: "Competitor Watch",
    href: "/competitor-watch",
    category: "Analytics",
    icon: ClipboardList,
    summary: "Competitor Watch combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Competitor Watch queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Competitor Watch", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "service-pages",
    title: "Service Pages",
    href: "/service-pages",
    category: "Local SEO",
    icon: FileText,
    summary: "Service Pages combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Service Pages queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Service Pages", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "reputation-dashboard",
    title: "Reputation Dashboard",
    href: "/reputation-dashboard",
    category: "Analytics",
    icon: PackageCheck,
    summary: "Reputation Dashboard combines donor project behavior into the AI Local Business Reputation operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Reputation Dashboard queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Reputation Dashboard", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI Local Business Reputation documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI Local Business Reputation alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI Local Business Reputation source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI Local Business Reputation users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI Local Business Reputation assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI Local Business Reputation AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Reputation",
    "features": [
      "Review Requests",
      "Review Replies"
    ]
  },
  {
    "name": "Local SEO",
    "features": [
      "Google Business Posts",
      "Service Pages"
    ]
  },
  {
    "name": "Growth",
    "features": [
      "Local SEO",
      "Testimonial Library"
    ]
  },
  {
    "name": "Customer Voice",
    "features": [
      "Feedback Inbox"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Brand Tone"
    ]
  },
  {
    "name": "Analytics",
    "features": [
      "Competitor Watch",
      "Reputation Dashboard"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI Local Business Reputation"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
