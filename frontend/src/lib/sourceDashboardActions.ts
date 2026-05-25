export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "review-requests",
    "label": "Review Requests",
    "description": "Review Requests actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/review-requests",
    "sourceProjects": [
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter"
    ],
    "examples": [
      "Open Review Requests",
      "Review Reputation",
      "Run Review Requests AI check"
    ],
    "count": 5
  },
  {
    "id": "review-replies",
    "label": "Review Replies",
    "description": "Review Replies actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/review-replies",
    "sourceProjects": [
      "AISocialProofGenerator",
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker"
    ],
    "examples": [
      "Open Review Replies",
      "Review Reputation",
      "Run Review Replies AI check"
    ],
    "count": 5
  },
  {
    "id": "google-business-posts",
    "label": "Google Business Posts",
    "description": "Google Business Posts actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/google-business-posts",
    "sourceProjects": [
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker",
      "AIReviewResponseManager"
    ],
    "examples": [
      "Open Google Business Posts",
      "Review Local SEO",
      "Run Google Business Posts AI check"
    ],
    "count": 5
  },
  {
    "id": "local-seo",
    "label": "Local SEO",
    "description": "Local SEO actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/local-seo",
    "sourceProjects": [
      "AiMarketingCopyGenerator",
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker",
      "AIReviewResponseManager",
      "AISocialProofGenerator"
    ],
    "examples": [
      "Open Local SEO",
      "Review Growth",
      "Run Local SEO AI check"
    ],
    "count": 5
  },
  {
    "id": "feedback-inbox",
    "label": "Feedback Inbox",
    "description": "Feedback Inbox actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/feedback-inbox",
    "sourceProjects": [
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker",
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AISocialMediaManager"
    ],
    "examples": [
      "Open Feedback Inbox",
      "Review Customer Voice",
      "Run Feedback Inbox AI check"
    ],
    "count": 5
  },
  {
    "id": "testimonial-library",
    "label": "Testimonial Library",
    "description": "Testimonial Library actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/testimonial-library",
    "sourceProjects": [
      "AIBrandVoiceConsistencyChecker",
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AISocialMediaManager",
      "AiMarketingCopyGenerator"
    ],
    "examples": [
      "Open Testimonial Library",
      "Review Growth",
      "Run Testimonial Library AI check"
    ],
    "count": 5
  },
  {
    "id": "brand-tone",
    "label": "Brand Tone",
    "description": "Brand Tone actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/brand-tone",
    "sourceProjects": [
      "AIReviewResponseManager",
      "AISocialProofGenerator",
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter"
    ],
    "examples": [
      "Open Brand Tone",
      "Review Governance",
      "Run Brand Tone AI check"
    ],
    "count": 5
  },
  {
    "id": "competitor-watch",
    "label": "Competitor Watch",
    "description": "Competitor Watch actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/competitor-watch",
    "sourceProjects": [
      "AISocialProofGenerator",
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker"
    ],
    "examples": [
      "Open Competitor Watch",
      "Review Analytics",
      "Run Competitor Watch AI check"
    ],
    "count": 5
  },
  {
    "id": "service-pages",
    "label": "Service Pages",
    "description": "Service Pages actions optimized from donor dashboards and exposed as one AI Local Business Reputation action group.",
    "href": "/service-pages",
    "sourceProjects": [
      "AISocialMediaManager",
      "AiMarketingCopyGenerator",
      "AISEOContentWriter",
      "AIBrandVoiceConsistencyChecker",
      "AIReviewResponseManager"
    ],
    "examples": [
      "Open Service Pages",
      "Review Local SEO",
      "Run Service Pages AI check"
    ],
    "count": 5
  }
];
