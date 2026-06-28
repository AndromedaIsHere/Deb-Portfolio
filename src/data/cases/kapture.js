export const kapture = {
  slug: 'kapture',
  title: 'Kapture',
  domain: 'Banking · Insurance · Mortgage',

  metric: 'Intelligent Document Processing platform for enterprise document extraction',
  problem: 'Enterprises processing high volumes of documents faced long turnaround times, high manual effort, inconsistent data quality, and delayed business decisions.',
  solution: 'Low-code Intelligent Document Processing platform that helps enterprises classify, extract, validate, and operationalize information from documents, forms, images, emails, and other unstructured data sources.',
  metaDescription: 'Kapture — AI product case study by Debajyoti Das. A low-code Intelligent Document Processing platform that helped enterprises classify, extract, validate, and operationalize information from complex documents, forms, images, and emails.',

  businessContext: `Enterprises run on documents.

Loan applications, insurance claims, invoices, contracts, onboarding forms, KYC documents, medical records, real estate paperwork, emails, scanned images, and hand-filled forms all carry critical business information. But much of this information is trapped in unstructured or semi-structured formats.

The traditional process is slow and expensive: teams manually read documents, identify the document type, extract key fields, validate information, and enter it into downstream systems.

This creates four persistent problems: long processing times, high manual effort, inconsistent data quality, and delayed business decisions.

The opportunity was to build a configurable AI platform that could help enterprises process documents faster without forcing every customer into a rigid, one-size-fits-all workflow.

Kapture was built to make document intelligence operational — not just extract text, but help businesses convert document-heavy workflows into structured, validated, usable data.`,

  userSegmentation: `The product served multiple enterprise users.

Operations teams who process documents every day. Business users who define extraction rules and validation needs. Quality reviewers who verify exceptions and low-confidence outputs. IT teams who integrate the platform with enterprise systems. Business leaders who care about faster turnaround time, lower cost, and better process visibility.

I focused the product around two primary user groups: operations users and business configuration users.

Operations teams needed speed, accuracy, and a simple review experience. Business users needed flexibility — the ability to configure document types, extraction fields, validation rules, and workflows without depending on engineering for every change.

The core product insight was simple: IDP products fail when they are accurate in demos but hard to configure in real enterprise workflows.

Kapture had to be powerful enough for complex document extraction, but simple enough for business teams to adapt across use cases.`,

  problemPrioritisation: `The user problem was not just "extract text from documents."

Most enterprises already had some form of OCR, scanning, manual data entry, or document storage. The real problem was converting messy, varied, high-volume documents into structured information that downstream teams could trust.

I focused on four recurring failure modes.

Document variability. Enterprise documents rarely follow one clean template. The same business process may involve scanned forms, digital PDFs, images, emails, handwritten inputs, semi-structured tables, and multiple document layouts. A rigid extraction system breaks when the layout changes. The product needed to handle variation across document types, formats, and business cases.

Manual processing bottlenecks. Document-heavy workflows often depend on large operations teams manually reviewing, extracting, and entering information. This slows down turnaround time and creates operational dependency on human effort. The product needed to reduce repetitive manual work while keeping humans involved where judgment or validation was required.

Configuration dependency. Many enterprise AI solutions require heavy technical support to onboard a new document type or update extraction logic. That creates friction for customers. Every new form, field, rule, or validation requirement becomes an implementation project. Kapture needed to support low-code configuration so business teams could adapt workflows faster.

Trust and validation. Even if AI extracts the right data most of the time, enterprises still need confidence before pushing that data into business systems. Users need to know what was extracted, from where, with what confidence, what needs review, and what failed validation. The product needed a human-assisted review experience so users could validate exceptions and improve operational trust.`,

  whyAI: `Before positioning Kapture as an AI product, the key question was whether simpler automation could solve the problem.

Template-based OCR was not enough. Template OCR works when documents have predictable layouts. But enterprise document workflows often involve layout variation, scanned quality issues, multiple formats, and changing document structures. A fixed-template approach becomes difficult to maintain at scale.

Manual review was too slow. Manual processing can be accurate, but it does not scale efficiently. As document volume grows, enterprises either add more people or accept slower turnaround times. The product needed to reduce manual effort without removing human oversight where it mattered.

Rules alone could not manage document complexity. Rules are useful for validation and business logic. But rules alone struggle to classify varied documents, interpret unstructured information, handle layout differences, or extract fields from inconsistent formats. Rules were still important — but they needed to work alongside machine learning and human review.

AI was useful because the problem involved classification, extraction, and interpretation. Kapture needed to identify document types, extract fields, classify information, and support configurable workflows across different business scenarios. AI was justified because the product had to deal with document variability at enterprise scale.

The goal was not to replace operations teams. The goal was to help them process more documents with less repetitive effort and better consistency.`,

  solutionDesign: {
    overview: `Kapture was designed as a low-code Intelligent Document Processing platform, not a single-purpose extraction tool. The product direction was built around five principles.`,
    steps: [
      {
        title: 'Configurable workflows over hard-coded implementations',
        detail: `Enterprise customers have different document types, approval processes, validation rules, and integration needs. The product needed to let teams configure workflows for their specific use case without rebuilding the platform each time. This made Kapture more reusable across industries and business functions.`,
      },
      {
        title: 'Human-assisted AI over full automation',
        detail: `In document processing, full automation is not always the right goal. Some documents are messy. Some fields are ambiguous. Some outputs require business judgment. Kapture was designed with human review as part of the workflow — allowing users to validate, correct, and approve extracted information before it moved downstream.`,
      },
      {
        title: 'Classification and extraction as one workflow',
        detail: `Document processing starts before field extraction. The system first needs to understand what kind of document it is, what business process it belongs to, and which extraction configuration should apply. Kapture combined document classification and information extraction into a unified workflow so enterprises could process mixed document sets more effectively.`,
      },
      {
        title: 'Low-code configuration for business users',
        detail: `The platform needed to reduce dependency on engineering teams. Business users needed the ability to define document types, extraction fields, validation rules, and review workflows through configuration. This was important because document requirements change frequently, especially across industries like banking, insurance, and real estate.`,
      },
      {
        title: 'Enterprise deployment flexibility',
        detail: `Customers needed flexibility in how the platform was deployed. Some preferred cloud. Some required on-premise deployment. Others needed hybrid models because of data security, compliance, or infrastructure requirements. Kapture needed to support enterprise deployment choices rather than forcing one model.`,
      },
    ],
  },

  keyDecisions: [
    {
      decision: 'Platform over point solution',
      rationale: `The first major product decision was to build Kapture as a platform rather than a narrow extractor for one document type. A point solution may work for a single use case, but enterprise customers often need to process many document categories across multiple teams.

A platform approach allowed the same underlying product to support different workflows — from forms and images to scanned documents and email-based inputs.`,
    },
    {
      decision: 'Low-code configuration over custom development',
      rationale: `A major adoption barrier in enterprise AI is implementation effort. If every new document type requires custom development, the product becomes services-heavy and hard to scale.

Kapture was designed to make document workflows configurable, allowing teams to adapt extraction logic, review steps, and validation rules faster. This made the product more scalable across customers and use cases.`,
    },
    {
      decision: 'Human-in-the-loop review over blind automation',
      rationale: `Document extraction products must balance speed with trust. If the system pushes incorrect data into downstream processes, the cost of error can be high. But if humans review everything, the productivity gain disappears.

The design principle was to route exceptions, low-confidence outputs, and validation failures to human reviewers — while allowing high-confidence extractions to move faster.`,
    },
    {
      decision: 'Integration readiness over standalone processing',
      rationale: `Document intelligence becomes valuable only when extracted data flows into downstream systems. Kapture needed to integrate with enterprise applications, storage systems, and operational workflows.

The product was therefore positioned not as a standalone AI demo, but as part of the customer's broader digital operations stack.`,
    },
    {
      decision: 'Configurable validation over extraction-only output',
      rationale: `Extracting a field is not enough. The product also needed to validate whether the extracted value made sense for the business process — whether the required field was present, whether the value matched expected format, whether it passed business rules, and whether it needed manual review.

Validation was central to making the output usable.`,
    },
  ],

  risks: [
    {
      risk: 'Document quality variance',
      mitigation: 'Input quality can vary significantly across scanned files, images, handwritten forms, and digital documents. The product needed to handle imperfect inputs and make uncertainty visible where extraction confidence was low. The mitigation was to combine automated extraction with review workflows rather than pretending every document could be processed perfectly.',
    },
    {
      risk: 'Customer-specific complexity',
      mitigation: 'Every enterprise has its own document formats, rules, and operational processes. The risk was that the product could become too customised for each client. The mitigation was a configurable platform approach — allowing reuse of core capabilities while adapting workflows through low-code configuration.',
    },
    {
      risk: 'User trust',
      mitigation: 'Operations users need to trust the extracted output before relying on it. The product needed to show extracted values, source context, confidence, and validation status clearly. Trust was built through transparency and reviewability.',
    },
    {
      risk: 'Integration friction',
      mitigation: 'IDP products create value only when they connect to downstream systems. If integration is difficult, customers may still end up exporting data manually. The product needed enterprise integration readiness from the beginning — including support for different deployment models and operational environments.',
    },
    {
      risk: 'Over-automation risk',
      mitigation: 'Not every document should be processed without human review. The product had to avoid the trap of treating automation percentage as the only success metric. The better goal was operational efficiency with controlled risk — automating where confidence was high and involving users where judgment was required.',
    },
  ],

  metrics: {
    business: [
      'Reduction in document processing time',
      'Reduction in manual data entry effort',
      'Faster turnaround time for document-heavy workflows',
      'Improved data quality and process consistency',
      'Increased throughput without proportional increase in operations headcount',
    ],
    product: [
      'Document ingestion volume',
      'Classification accuracy',
      'Extraction accuracy by field type',
      'Percentage of documents processed without manual intervention',
      'Review queue volume and resolution time',
      'Configuration time for new document types',
      'User adoption by operations teams',
    ],
    ai: [
      'Field-level confidence accuracy',
      'Exception routing accuracy',
      'Model improvement from human corrections',
      'Accuracy across document formats and layouts',
      'False extraction and missed extraction rates',
      'Human correction patterns by document type',
    ],
  },

  learned: [
    {
      heading: 'IDP is not just OCR. It is workflow automation around information trust.',
      body: `The biggest lesson was that extracting text is only one part of the problem. Enterprise users care about whether the information is complete, validated, auditable, and usable in downstream processes.

A good IDP product must combine AI extraction with workflow, validation, review, and integration.`,
    },
    {
      heading: 'Low-code matters because document operations change constantly.',
      body: `Document formats, business rules, customer requirements, and compliance needs evolve. If every change requires engineering effort, the product becomes hard to scale.

Low-code configuration made the platform more adaptable and helped customers move faster from use case identification to operational deployment.`,
    },
    {
      heading: 'Human review is not a weakness. It is part of the product.',
      body: `In enterprise AI workflows, human involvement often increases trust. The goal is not always to remove humans completely. The better goal is to focus human effort where it matters most — exceptions, ambiguity, validation, and judgment-heavy cases.

This changed how I thought about automation: high-value automation is not just about reducing work; it is about routing work intelligently.`,
    },
    {
      heading: 'Deployment flexibility matters in enterprise AI.',
      body: `Different customers have different constraints around data security, infrastructure, and compliance. Supporting cloud, on-premise, and hybrid models made the product more enterprise-ready.

For AI products handling sensitive documents, deployment flexibility can be a major adoption driver.`,
    },
    {
      heading: 'The product moat is configurability, not just model accuracy.',
      body: `Model accuracy is important, but it is not enough. Customers need a system they can configure, validate, integrate, and operate across many document workflows.

The durable value came from turning AI capability into a repeatable enterprise platform.`,
    },
  ],

  responsibilities: [
    `Built while working on Kapture, an Intelligent Document Processing platform for enterprise document extraction. My responsibilities spanned product strategy, customer discovery, use case definition, workflow design, requirements development, low-code configuration design, human-in-the-loop review experience, enterprise integration planning, and go-to-market support. I worked across business, design, engineering, data science, implementation, and customer teams to translate complex document AI capabilities into a configurable enterprise platform.`,
  ],

  technologies: [
    'Intelligent Document Processing',
    'OCR',
    'Document classification',
    'Information extraction',
    'Image classification',
    'Human-in-the-loop validation',
    'Low-code workflow configuration',
    'Business rule validation',
    'Enterprise integrations',
    'Cloud, on-premise, and hybrid deployment',
    'Machine learning-assisted extraction',
    'Document workflow automation',
    'Structured data generation from unstructured documents',
  ],

  disclaimer: `This case study is based on my product experience building an Intelligent Document Processing platform. It is intentionally written at a high level and does not disclose client names, proprietary algorithms, internal architecture, implementation details, commercial terms, or confidential customer information.`,
};
