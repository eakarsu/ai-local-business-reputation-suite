export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "review-requests-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Review Requests workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Review Requests request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "review-replies-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Review Replies workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Review Replies request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "google-business-posts-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Google Business Posts workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Google Business Posts request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "local-seo-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Local SEO workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Local SEO request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "feedback-inbox-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Feedback Inbox workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Feedback Inbox request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "testimonial-library-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Testimonial Library workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Testimonial Library request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "brand-tone-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Brand Tone workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Brand Tone request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "competitor-watch-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Competitor Watch workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Competitor Watch request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "service-pages-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Service Pages workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Service Pages request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ],
  "reputation-dashboard-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Reputation Dashboard workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Reputation Dashboard request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Local Business Reputation Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Local Business Reputation Suite"
    }
  ]
};
