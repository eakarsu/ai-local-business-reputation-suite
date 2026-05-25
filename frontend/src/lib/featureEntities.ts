export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'],
    rows: [
      { id: slug + '-1', name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: slug + '-2', name: secondName, status: 'In progress', owner: 'AI Operations', amount: '$980', dueDate: '2026-06-11', priority: 'Medium' },
      { id: slug + '-3', name: title + ' quality review', status: 'Queued', owner: 'Quality Review', amount: '$640', dueDate: '2026-06-18', priority: 'Normal' },
    ],
  };
}

const entitySeeds = [
  [
    "review-requests",
    "Review Requests Records",
    "Review Requests intake 1",
    "Open",
    "Review Requests follow-up 1",
    "Operations Lead",
    "$1,200"
  ],
  [
    "review-replies",
    "Review Replies Records",
    "Review Replies intake 2",
    "Review",
    "Review Replies follow-up 2",
    "AI Specialist",
    "$1,550"
  ],
  [
    "google-business-posts",
    "Google Business Posts Records",
    "Google Business Posts intake 3",
    "Ready",
    "Google Business Posts follow-up 3",
    "Client Success",
    "$1,900"
  ],
  [
    "local-seo",
    "Local SEO Records",
    "Local SEO intake 4",
    "Needs attention",
    "Local SEO follow-up 4",
    "Delivery Manager",
    "$2,250"
  ],
  [
    "feedback-inbox",
    "Feedback Inbox Records",
    "Feedback Inbox intake 5",
    "Open",
    "Feedback Inbox follow-up 5",
    "Operations Lead",
    "$2,600"
  ],
  [
    "testimonial-library",
    "Testimonial Library Records",
    "Testimonial Library intake 6",
    "Review",
    "Testimonial Library follow-up 6",
    "AI Specialist",
    "$2,950"
  ],
  [
    "brand-tone",
    "Brand Tone Records",
    "Brand Tone intake 7",
    "Ready",
    "Brand Tone follow-up 7",
    "Client Success",
    "$3,300"
  ],
  [
    "competitor-watch",
    "Competitor Watch Records",
    "Competitor Watch intake 8",
    "Needs attention",
    "Competitor Watch follow-up 8",
    "Delivery Manager",
    "$3,650"
  ],
  [
    "service-pages",
    "Service Pages Records",
    "Service Pages intake 9",
    "Open",
    "Service Pages follow-up 9",
    "Operations Lead",
    "$4,000"
  ],
  [
    "reputation-dashboard",
    "Reputation Dashboard Records",
    "Reputation Dashboard intake 10",
    "Review",
    "Reputation Dashboard follow-up 10",
    "AI Specialist",
    "$4,350"
  ],
  [
    "documents",
    "Documents Records",
    "Documents intake 11",
    "Ready",
    "Documents follow-up 11",
    "Client Success",
    "$4,700"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications intake 12",
    "Needs attention",
    "Notifications follow-up 12",
    "Delivery Manager",
    "$5,050"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations intake 13",
    "Open",
    "Integrations follow-up 13",
    "Operations Lead",
    "$5,400"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles intake 14",
    "Review",
    "Profiles follow-up 14",
    "AI Specialist",
    "$5,750"
  ]
];

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
