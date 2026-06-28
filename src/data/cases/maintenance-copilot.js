export const maintenanceCopilot = {
  slug: 'maintenance-copilot',
  title: 'Maintenance Copilot',
  domain: 'Enterprise Asset Management',

  metric: 'Reduced troubleshooting friction in the field',
  problem: 'Technicians lacked context at the moment of execution — information existed but was fragmented, inaccessible, and never available in the right form when needed.',
  solution: 'Designing an AI assistant to help maintenance teams troubleshoot faster, work with more confidence, and reduce information friction in the field.',
  metaDescription: 'Maintenance Copilot — AI product case study by Debajyoti Das. How an AI assistant embedded in maintenance workflows reduced troubleshooting friction and helped technicians resolve issues faster, with more confidence.',

  businessContext: `Enterprise maintenance platforms create value when they help customers improve uptime, reduce operational waste, and make maintenance execution more consistent.

But many platforms still leave a major gap at the point of execution. Planning, scheduling, and reporting may be digitized, yet technicians often still rely on fragmented documentation, tribal knowledge, manual search, or escalation to experienced colleagues when solving complex issues.

The opportunity was to increase the value of the maintenance workflow by helping technicians act with better context at the moment they needed it most.

The product hypothesis was simple: if we reduce the time and effort required to find trustworthy maintenance guidance, technicians can resolve issues faster, teams can operate more consistently, and customers can see clearer value from the platform.

This framing mattered because it connected the AI feature directly to business outcomes — adoption, retention, operational efficiency, and customer value — rather than treating AI as a novelty layer.`,

  userSegmentation: `Maintenance workflows involve several stakeholders. Facility leaders care about uptime, cost, risk, and operational performance. Maintenance managers care about backlog, scheduling, utilisation, and team productivity. Technicians care about resolving the issue safely, quickly, and correctly.

I focused on the field technician as the primary user. That was a deliberate product decision.

Technicians are the execution layer of maintenance operations. Their decisions directly affect first-time fix rates, downtime, escalation volume, and work quality. Yet many enterprise maintenance tools are designed more for managers and administrators than for the person standing in front of the asset.

For technicians, the core challenge is not always lack of effort or skill. It is lack of context at the right moment.

They may need to answer questions like: What does this fault or symptom mean? Has this asset had a similar issue before? Which procedure or manual section is relevant? What should I check first? When should I escalate? How should I document what I did?

This is exactly where AI had potential — not to replace technician judgment, but to reduce the friction around finding and using relevant information.`,

  problemPrioritisation: `The problem I prioritised was troubleshooting friction.

In maintenance environments, information is often scattered across asset documentation, OEM manuals, SOPs, fault code references, historical work records, escalation notes, and the experience of senior technicians. The information may exist, but it is rarely available in a simple, contextual, easy-to-use form when the technician needs it.

That creates three practical problems.

First, troubleshooting takes longer than necessary. Technicians spend valuable time searching, interpreting, asking, and validating before they can act.

Second, work quality becomes inconsistent. Two technicians may approach the same issue differently depending on experience, familiarity with the asset, or access to prior knowledge.

Third, documentation quality suffers. When technicians are under time pressure, the final work notes may be incomplete, inconsistent, or difficult to reuse later.

The product opportunity was to reduce this information burden without disrupting the technician's workflow.`,

  whyAI: `I did not start with the assumption that AI was the answer. Before shaping the product direction, I pressure-tested simpler alternatives.

Could rules solve it? Rules work well when scenarios are predictable and decision paths are stable. But troubleshooting is variable. Symptoms can be incomplete, asset configurations differ, historical context matters, and the same issue may present differently depending on usage, environment, and maintenance history. A rules-based system would either become too rigid or too expensive to maintain.

Could better search solve it? Search helps, but it assumes the technician knows what to ask. In practice, technicians often describe what they observe in natural language: a sound, behavior, fault, smell, vibration, or partial symptom. They may not know the exact terminology used in manuals or procedures. Search still puts the burden on the user to translate the problem into the right query.

Could workflow automation solve it? Automation is useful when the next step is known. But this problem was not simply about automating a task. It required understanding a situation, retrieving relevant information, synthesising it, and presenting it in a way that supported human judgment. That made AI appropriate.

The task required natural language understanding, contextual retrieval, synthesis across multiple knowledge sources, source-backed guidance, and user feedback over time.

The principle was: AI was not used because it was new. It was used because the problem involved ambiguity, context, and unstructured knowledge.`,

  solutionDesign: {
    overview: `The product direction was to create an AI assistant embedded directly into the maintenance workflow. The assistant would allow technicians to describe what they were seeing in plain language and receive contextual guidance based on relevant maintenance knowledge.

The experience was designed around three high-value moments.`,
    steps: [
      {
        title: 'Understanding the issue',
        detail: `Help the technician interpret symptoms, fault descriptions, or asset behaviour. The assistant reduces the cognitive load of translating what they observe into actionable understanding — without requiring the technician to know the right search terms or documentation sections in advance.`,
      },
      {
        title: 'Troubleshooting the issue',
        detail: `Surface relevant guidance, prior context, and suggested checks in a structured way. Rather than leaving technicians to hunt across fragmented sources, the assistant synthesises relevant information from documentation, historical work records, and asset-specific data into a coherent, contextual response.`,
      },
      {
        title: 'Completing the work',
        detail: `Help reduce documentation effort by supporting clearer work summaries for technician review. When technicians are under time pressure, documentation suffers. The assistant reduces the burden of capturing what was done, improving record quality without adding friction.`,
      },
    ],
  },

  keyDecisions: [
    {
      decision: 'Embedded, not separate',
      rationale: `One of the most important product decisions was to bring the assistant into the workflow instead of creating a standalone AI tool. Technicians should not have to leave the work order experience, open another app, or re-enter context the system already has.

This mattered because adoption in enterprise workflows is often driven less by capability and more by convenience. If AI requires extra effort, it becomes another tool to manage. If it appears naturally in the flow of work, it becomes part of the job.`,
    },
    {
      decision: 'Context-aware by default',
      rationale: `The assistant needed to understand the maintenance context around the user's question. A technician should be able to ask a simple question in plain language without manually explaining every detail. The product experience needed to reduce repeated input and use available workflow context to make responses more relevant.

This created a better user experience and made the assistant feel less like a generic chatbot and more like a maintenance-aware product capability.`,
    },
    {
      decision: 'Grounded and verifiable',
      rationale: `In operational environments, generic AI responses are not enough. The assistant needed to ground its answers in relevant source material and show users where the response came from.

This was critical for trust. Technicians are accountable for the work they perform. They need to verify guidance before acting, especially in environments where safety, compliance, uptime, and cost are involved. Source attribution was not treated as a UI enhancement. It was a core trust requirement.`,
    },
    {
      decision: 'Human-in-the-loop by design',
      rationale: `The assistant was designed to support decision-making, not take control away from users. In maintenance workflows, AI should help users understand, compare, summarise, and document. But the final decision should remain with the technician or responsible human operator.

That principle shaped the tone, experience, and success metrics of the product.`,
    },
    {
      decision: 'Feedback built into the experience',
      rationale: `AI products improve only if teams can learn from real-world use. The assistant needed a feedback mechanism so users could signal whether an answer was useful, incomplete, incorrect, or needed improvement.

This feedback was important for two reasons: it helped improve quality over time, and it gave users a sense that the product was accountable and continuously improving. For AI products, feedback is not just a feature. It is part of the operating model.`,
    },
  ],

  risks: [
    {
      risk: 'Hallucination risk',
      mitigation: 'The assistant needed to avoid unsupported or overly confident answers. Responses had to be tied to relevant source material and framed as decision support, not absolute instruction.',
    },
    {
      risk: 'Adoption risk',
      mitigation: 'Experienced technicians may be sceptical of AI tools, especially if they feel the system oversimplifies their work. The product needed to respect their expertise and fit into their existing workflow.',
    },
    {
      risk: 'Data quality risk',
      mitigation: 'The quality of AI assistance depends heavily on the quality of the underlying maintenance knowledge. Poor documentation, inconsistent work history, or weak asset data can reduce usefulness.',
    },
    {
      risk: 'Governance risk',
      mitigation: 'Enterprise customers need confidence that AI features are auditable, explainable, and aligned with operational controls. Trust was not something to add after launch. It was part of the product definition.',
    },
  ],

  metrics: {
    business: [
      { metric: 'Improved maintenance efficiency',             observed: null },
      { metric: 'Reduced downtime-related friction',           observed: null },
      { metric: 'Better technician productivity',              observed: null },
      { metric: 'Stronger platform value perception',          observed: null },
      { metric: 'Improved retention or expansion signals',     observed: null },
    ],
    product: [
      { metric: 'Usage within troubleshooting workflows',                   observed: null },
      { metric: 'Repeat usage by technicians',                              observed: null },
      { metric: 'Reduction in time spent searching for information',        observed: null },
      { metric: 'Usage during complex work orders',                         observed: null },
      { metric: 'Qualitative feedback from users',                          observed: null },
    ],
    ai: [
      { metric: 'Answer usefulness',              observed: null },
      { metric: 'Source relevance',               observed: null },
      { metric: 'Correction or rejection rates',  observed: null },
      { metric: 'User feedback signals',          observed: null },
      { metric: 'Escalation behaviour',           observed: null },
      { metric: 'Response latency',               observed: null },
    ],
  },

  learned: [
    {
      heading: 'Trust is the product.',
      body: `In enterprise AI, the main question is not just "Can the model answer?" The real question is: Can the user trust this answer enough to use it in their workflow?

Every product decision — grounding, attribution, feedback, human oversight, and measurement — contributed to trust.`,
    },
    {
      heading: 'Workflow fit matters more than novelty.',
      body: `AI adoption improves when the capability appears exactly where users already work. A separate AI interface may be impressive in a demo, but embedded assistance is more likely to become a habit.`,
    },
    {
      heading: 'Narrow use cases create stronger products.',
      body: `"AI for asset maintenance" is too broad. "Help technicians troubleshoot faster inside the work order flow" is specific, measurable, and easier to adopt. The narrower framing made the product easier to design, explain, and evaluate.`,
    },
    {
      heading: 'Data quality is a product issue.',
      body: `AI performance depends on the quality of the knowledge it can access. That means data readiness is not just a technical or implementation concern. It affects onboarding, adoption, customer success, and long-term product value.`,
    },
    {
      heading: 'Evaluation is a PM responsibility.',
      body: `AI products need continuous measurement. Product managers need to understand how quality is assessed, how feedback loops work, and how changes affect user trust. Shipping AI without evaluation is like shipping a product without analytics.`,
    },
  ],

  responsibilities: [
    `My role covered product strategy, discovery, prioritisation, experience definition, and cross-functional execution. I was involved in identifying the business opportunity, selecting the primary user and problem area, validating why AI was appropriate, defining the product direction, shaping the AI experience around trust and workflow fit, aligning stakeholders across product, engineering, data science, design, and go-to-market, defining success metrics, and translating technical AI capabilities into a business value story.

The work required balancing three perspectives: user value (would this actually help technicians in the field?), business value (would this improve customer outcomes and platform stickiness?), and AI feasibility and trust (could the system provide useful guidance in a safe, measurable, and explainable way?). That balance was the core product challenge.`,
  ],

  technologies: [
    'AI Product Strategy',
    'Enterprise SaaS',
    'Maintenance & Asset Lifecycle',
    'User Discovery',
    'Workflow-Integrated AI',
    'Human-in-the-Loop Design',
    'Trust & Adoption Design',
    'AI Evaluation',
    'Business Outcome Framing',
    'Cross-Functional Leadership',
  ],
};
