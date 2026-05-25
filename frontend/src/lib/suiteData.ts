export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "AIReviewResponseManager",
    "ownership": "AIReviewResponseManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Review Requests",
      "Review Replies",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISocialProofGenerator",
    "ownership": "AISocialProofGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Review Replies",
      "Google Business Posts",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISocialMediaManager",
    "ownership": "AISocialMediaManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Google Business Posts",
      "Local SEO",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiMarketingCopyGenerator",
    "ownership": "AiMarketingCopyGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Local SEO",
      "Feedback Inbox",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISEOContentWriter",
    "ownership": "AISEOContentWriter contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Feedback Inbox",
      "Testimonial Library",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIBrandVoiceConsistencyChecker",
    "ownership": "AIBrandVoiceConsistencyChecker contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Local Business Reputation.",
    "coverage": [
      "Testimonial Library",
      "Brand Tone",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '6', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '48', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '14', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '342', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Review Requests operating view",
  "Review Replies operating view",
  "Google Business Posts operating view",
  "Local SEO operating view",
  "Feedback Inbox operating view",
  "Testimonial Library operating view",
  "Brand Tone operating view",
  "Competitor Watch operating view"
];
export const workflowHighlights = [
  "Review Requests workflow with records, AI assist, approvals, audit, and reporting",
  "Review Replies workflow with records, AI assist, approvals, audit, and reporting",
  "Google Business Posts workflow with records, AI assist, approvals, audit, and reporting",
  "Local SEO workflow with records, AI assist, approvals, audit, and reporting",
  "Feedback Inbox workflow with records, AI assist, approvals, audit, and reporting",
  "Testimonial Library workflow with records, AI assist, approvals, audit, and reporting"
];
