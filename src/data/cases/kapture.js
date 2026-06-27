export const kapture = {
  slug: 'kapture',
  title: 'Kapture',
  domain: 'Banking · Insurance · Mortgage',

  metric: '80% faster processing · 99.5% accuracy · 50+ enterprise customers in 2 months',
  problem: 'Document-intensive workflows in financial services were slow, error-prone, and dependent on manual review at scale.',
  solution: 'Intelligent Document Processing platform that classifies, extracts, and validates unstructured financial documents end-to-end.',
  metaDescription: 'Kapture — AI product case study by Debajyoti Das. A hybrid OCR and LLM document processing platform that achieved 99.5% extraction accuracy and onboarded 50+ enterprise financial services customers within 2 months.',

  problemDetail: `Financial services organisations process millions of documents annually — loan applications, insurance claims, mortgage packages, KYC bundles. Every document is a structured decision waiting inside unstructured content. And for most organisations, the process of getting to that decision runs through manual extraction, human review, and re-keying into downstream systems.

The cost is measured in three ways: processing time (days where it should be hours), error rate (mis-keyed fields propagating downstream into risk decisions), and headcount (large back-office teams whose value is consumed by extraction rather than judgement). We saw this pattern consistently across lending, insurance underwriting, and mortgage origination — the problem was universal, the tolerance for it was declining.`,

  responsibilities: [
    'Product strategy',
    'Customer discovery',
    'Go-to-market',
  ],

  keyDecisions: [
    {
      decision: 'Hybrid OCR + LLM architecture over pure LLM extraction',
      rationale: `The instinct in 2023 was to solve this with a large language model end-to-end — feed the document in, get structured JSON out. In practice, LLM-only approaches were inconsistent on tabular financial data, expensive at document scale, and difficult to audit for compliance.

We built a hybrid architecture: OCR for structured extraction, LLM for classification and exception handling, with a validation layer comparing outputs against business rules. This gave us the speed of OCR, the flexibility of LLM, and the auditability that financial services compliance teams required.`,
    },
    {
      decision: 'Human-in-the-loop for low-confidence extractions',
      rationale: `A 99.5% accuracy rate sounds excellent — until you apply it to a 10,000-document mortgage package and realise 50 fields need human review. We designed the exception queue before we designed the extraction engine: every low-confidence output routes to a reviewer with the document in context, a pre-filled suggestion, and a one-click confirmation flow.

The review UX was what made the 99.5% figure commercially achievable — without it, customers would have needed to re-review everything to trust the system.`,
    },
  ],

  impact: [
    '50+ enterprise customers within 2 months of launch',
    '80% reduction in document processing time',
    'Extraction accuracy improved from 95% to 99.5%',
  ],

  learned: [
    {
      heading: 'The review queue is the product.',
      body: `Every IDP vendor promises high accuracy. What differentiates them is what happens at the accuracy boundary — the 0.5% of documents the model isn't confident about. Kapture's exception queue was the feature that won deals: financial services buyers are sophisticated about model limitations, and showing them a well-designed human-in-the-loop experience converted more than any accuracy benchmark.`,
    },
    {
      heading: 'Compliance readiness is a distribution unlock.',
      body: `Financial services procurement is slow and compliance-gated. We made the decision to invest in audit logging, data lineage, and explainable extraction outputs before we had customers asking for them. That readiness compressed sales cycles significantly — we could hand compliance teams a complete evidence package rather than building it reactively per prospect.`,
    },
    {
      heading: 'Speed of onboarding determines speed of growth.',
      body: `50+ enterprise customers in 2 months wasn't primarily a go-to-market achievement — it was a product architecture achievement. The decision to build a template library for common financial document types meant new customers could get to value in days rather than weeks of custom model training. Time to first document processed was the activation metric that drove word-of-mouth in a tight-knit industry.`,
    },
  ],

  technologies: ['OCR', 'Generative AI', 'Document Classification', 'Human-in-the-Loop', 'IDP'],
};
