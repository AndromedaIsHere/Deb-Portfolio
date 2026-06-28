export const nextBestAction = {
  slug: 'next-best-action',
  title: 'Omni-Channel Next Best Action',
  domain: 'Life Sciences',

  metric: 'AI-powered engagement recommendation system for life sciences commercial teams',
  problem: 'Commercial engagement was fragmented across teams and channels — each acting with partial context, resulting in a disjointed HCP experience.',
  solution: 'AI-powered recommendation system that helps pharma commercial teams coordinate field, digital, and marketing engagement by recommending the next best action for each HCP.',
  metaDescription: 'Omni-Channel Next Best Action — AI product case study by Debajyoti Das. An AI-powered engagement recommendation system that helps life sciences commercial teams recommend the right action, through the right channel, at the right time for each HCP.',

  businessContext: `Life sciences companies are under pressure to create more relevant, coordinated, and timely engagement with healthcare professionals.

But commercial engagement is often fragmented. Field visits, emails, peer programs, digital content, webinars, marketing campaigns, and medical interactions may all happen through different teams and systems. The result is a disjointed customer experience where each channel acts with partial context.

The opportunity was to move from campaign-led engagement to signal-led engagement.

Instead of asking "Which campaign should we push next?", the product asked: "Given what we know about this HCP's recent behaviour, preferences, and engagement history, what is the most useful next action?"

The goal was not to automate commercial strategy or replace human judgment. It was to help teams make better engagement decisions at scale — while keeping those decisions explainable, governed, and embedded in existing commercial workflows.`,

  userSegmentation: `The product served multiple commercial users, but each user had a different job to be done.

Marketing teams needed to orchestrate campaigns and content across channels. Field representatives needed timely, relevant suggestions for HCP engagement. Sales managers needed visibility into how recommendations influenced field execution. Commercial operations teams needed governance, configuration, and performance monitoring. Analytics teams needed a way to turn customer signals into operational recommendations.

I focused the product experience around the users closest to execution: field reps, marketers, and commercial operations teams.

The key insight was that next-best-action is not just an analytics problem. It is an orchestration problem.

A recommendation only creates value if it changes what someone does next — sends a relevant email, schedules a visit, shares approved content, triggers a digital journey, or pauses outreach when engagement fatigue is likely.`,

  problemPrioritisation: `The core user problem was not a lack of engagement channels. Pharma companies already had many ways to reach HCPs. The problem was knowing which action mattered next for a specific HCP in a specific context.

I focused on four recurring failure modes.

Fragmented customer context. Different teams often had different views of the same HCP. Marketing may see email engagement. Field teams may see call history. Medical teams may see scientific interactions. Digital teams may see website or content behaviour. Without a connected view, engagement decisions can feel repetitive, mistimed, or disconnected. The product needed to help teams act from a more unified understanding of the HCP journey.

Poor timing. Even a relevant action can fail if it arrives at the wrong moment. An HCP may have recently engaged with content, attended a program, ignored several emails, changed prescribing behaviour, shown signs of interest, or disengaged entirely. These patterns matter. The product needed to help teams identify moments when engagement was more likely to be useful.

Channel misalignment. Commercial teams often think in channels: field, email, digital, events, remote, peer-to-peer. HCPs experience all of these as one relationship with the brand. If one channel does not know what another channel just did, the experience becomes noisy. The same HCP may receive too much outreach, irrelevant content, or conflicting messages. The product needed to coordinate engagement across channels so each interaction built on the last.

Low trust in recommendations. A recommendation that simply says "send this email" or "schedule a call" is not enough. Users need to understand why that action is being recommended, especially in regulated, high-stakes commercial environments. The product needed to make recommendations explainable enough for users to trust, evaluate, and act on.`,

  whyAI: `Before positioning this as an AI product challenge, I evaluated whether simpler approaches could solve the problem.

Campaign rules were not enough. Rule-based journeys work when customer behaviour is predictable and the decision tree is simple. But HCP engagement is dynamic. The right next action may depend on the sequence of prior interactions, response patterns, channel preferences, timing, access, commercial priorities, and local context. A static rule such as "send email after visit" or "trigger call after content click" cannot capture the full context of an HCP journey.

Dashboards were not enough. Dashboards can show what happened. They do not always tell a marketer or rep what to do next. The product needed to move beyond insight visibility and into decision support — turning customer signals into recommended actions.

Traditional segmentation was not enough. Segmentation can group HCPs by value, behaviour, or opportunity. But next-best-action needs to work at the level of an individual journey. Two HCPs in the same segment may need different next actions depending on what they recently did, which channels they prefer, what content they consumed, and whether they are showing signs of interest or disengagement.

AI was useful because the problem was sequential and contextual. The value of AI was in understanding behaviour over time. The product needed to recognise patterns across customer journeys and recommend timely, context-aware engagement actions.`,

  solutionDesign: {
    overview: `Omni-Channel Next Best Action was designed as an engagement decision-support product for commercial pharma teams. The direction was built around five principles.`,
    steps: [
      {
        title: 'Journey-aware recommendations',
        detail: `The product needed to consider the HCP's recent engagement journey, not just their static profile. A recommendation should reflect what has happened recently, what the HCP has responded to, and where there may be a meaningful next engagement opportunity.`,
      },
      {
        title: 'Channel coordination over channel optimisation',
        detail: `The product was not designed to optimise email, field, digital, or events in isolation. The goal was to coordinate actions across channels. That meant helping teams avoid duplicated outreach, reduce irrelevant engagement, and create a more connected customer experience.`,
      },
      {
        title: 'Next best action, not next more action',
        detail: `A common risk in omnichannel systems is that they simply generate more outreach. The product principle was different: recommend the next most useful action, including cases where the right action may be to wait, suppress, follow up later, or shift channels. This distinction mattered because better engagement is not always more engagement.`,
      },
      {
        title: 'Explainability for trust and adoption',
        detail: `Users needed to understand why a recommendation was being made. The product experience had to provide a plain-language rationale — for example: "This HCP recently engaged with related content and has not received field follow-up", or "Digital engagement has declined, suggesting a different channel may be more appropriate." The principle was consistent: recommendations should be understandable and defensible.`,
      },
      {
        title: 'Commercial governance by design',
        detail: `The system needed to operate within business strategy, channel constraints, approved content rules, frequency limits, and compliance expectations. AI could recommend actions, but those actions had to respect commercial guardrails. In a regulated environment, governance is not a layer added later. It is part of the product experience.`,
      },
    ],
  },

  keyDecisions: [
    {
      decision: 'Journey-based decisioning over static triggers',
      rationale: `The product moved away from isolated triggers and toward journey-aware decisioning. A single event rarely tells the full story. A content click, missed call, email open, event attendance, or lack of response becomes more meaningful when viewed as part of a broader engagement sequence.

The decision was to help users act based on patterns, not one-off events.`,
    },
    {
      decision: 'Orchestration over recommendation lists',
      rationale: `A basic NBA product can become a list of suggestions. But commercial teams needed more than a list. They needed coordinated engagement across field, digital, and marketing workflows.

The product therefore had to think in terms of orchestration: What action should happen next? Which channel should carry it? Which user or system should execute it? What content or message is appropriate? What should be suppressed to avoid over-engagement?

This made the product more operationally useful.`,
    },
    {
      decision: 'Explainability over black-box recommendations',
      rationale: `Recommendation quality alone was not enough. If a rep or marketer did not understand the reason behind a recommendation, they were less likely to use it. The product therefore needed to surface the "why" in a way that matched the user's workflow.

Explainability was especially important because next-best-action recommendations influence customer-facing behaviour. The recommendation had to be not only accurate, but also trusted.`,
    },
    {
      decision: 'Frequency and fatigue management',
      rationale: `One of the risks of omnichannel engagement is over-communication. A system that recommends too many actions can damage customer experience. The product needed to consider cadence, channel saturation, and engagement fatigue.

The goal was to make engagement more relevant, not louder.`,
    },
    {
      decision: 'Human-in-the-loop execution',
      rationale: `The product needed to preserve commercial judgment. Field users, marketers, and managers needed the ability to accept, defer, adjust, or reject recommendations depending on context.

This was important because local knowledge, relationship history, and customer nuance may not always be fully captured in system signals.`,
    },
  ],

  risks: [
    {
      risk: 'Over-engagement risk',
      mitigation: 'The product could accidentally increase outreach volume instead of improving relevance. To mitigate this, the experience needed frequency controls, suppression logic, and visibility into recent customer contact. The product principle was clear: next best action should not become next more action.',
    },
    {
      risk: 'Low user trust',
      mitigation: 'Users may ignore recommendations if they do not understand them. To mitigate this, the product needed plain-language explanations, confidence indicators where appropriate, and clear linkage between the recommendation and recent customer behaviour. Trust had to be designed into the workflow.',
    },
    {
      risk: 'Channel conflict',
      mitigation: 'Field and marketing teams may both act on the same HCP without knowing what the other team is doing. To mitigate this, the product needed coordinated visibility across channels and a shared view of recommended, planned, and completed actions. The goal was one commercial conversation with the HCP, not disconnected channel activity.',
    },
    {
      risk: 'Compliance and governance',
      mitigation: 'Recommendations in pharma must operate within approved content, promotional rules, channel permissions, and local market constraints. The product needed governance controls and clear separation between engagement recommendation and unapproved content generation. The system should recommend compliant actions within approved boundaries.',
    },
    {
      risk: 'Data quality and signal gaps',
      mitigation: 'Recommendation quality depends on the quality and completeness of available signals. The product needed to handle thin data, stale signals, and inconsistent channel capture without overstating certainty. Where signal quality was limited, the experience needed to make that clear.',
    },
  ],

  metrics: {
    business: [
      'Improvement in HCP engagement quality',
      'Increased effectiveness of field and marketing actions',
      'Better coordination across commercial channels',
      'Improved campaign and field execution outcomes',
      'Faster response to customer behaviour changes',
    ],
    product: [
      'Recommendation adoption rate',
      'Recommendation acceptance, deferral, and dismissal patterns',
      'Frequency of use by field and marketing teams',
      'User engagement with rationale/explanation',
      'Reduction in duplicate or conflicting outreach',
      'Time from signal change to recommendation update',
    ],
    ai: [
      'Recommendation relevance',
      'Explainability coverage',
      'Channel-fit accuracy',
      'Timing accuracy',
      'Feedback-loop utilisation',
      'Performance against future engagement or commercial outcomes',
    ],
  },

  learned: [
    {
      heading: 'Omnichannel is not a channel problem. It is a coordination problem.',
      body: `Most organisations already have the channels. The hard part is deciding which channel should act next, when, and why.

The product lesson was that omnichannel value comes from coordination — not simply adding more touchpoints.`,
    },
    {
      heading: 'The best recommendation may be to wait.',
      body: `A common mistake in engagement products is assuming action is always better than inaction. In reality, the right recommendation may be to pause, suppress, delay, or switch channels.

This changed how I thought about next-best-action systems. Their job is not to maximise activity. Their job is to improve decision quality.`,
    },
    {
      heading: 'Explainability drives adoption.',
      body: `Commercial users do not blindly follow AI recommendations, especially when those recommendations influence customer-facing actions. They need to understand the reason behind the suggestion.

A clear explanation can turn a recommendation from a black-box instruction into a useful planning aid.`,
    },
    {
      heading: 'Workflow fit matters more than model sophistication.',
      body: `A strong recommendation that lives outside the user's workflow will struggle to create impact. The product had to be embedded where teams already planned, executed, and reviewed engagement.

For enterprise AI products, distribution through workflow is often as important as the intelligence itself.`,
    },
    {
      heading: 'Human feedback is part of the product, not an exception.',
      body: `When users accept, defer, or reject recommendations, they create valuable feedback. Those actions reveal whether the recommendation matched field reality, whether timing was right, whether channel fit was appropriate, and whether the rationale was trusted.

The feedback loop is what turns a recommendation engine into a learning product.`,
    },
  ],

  responsibilities: [
    `Built while working at ZS as part of the life sciences commercial intelligence portfolio. My responsibilities spanned product strategy, customer discovery, workflow design, requirements definition, recommendation experience design, explainability design, stakeholder alignment, and go-to-market support. I worked across business, design, data science, engineering, analytics, and commercial stakeholders to translate a complex AI capability into a usable engagement recommendation product for pharma commercial teams.`,
  ],

  technologies: [
    'Omnichannel engagement',
    'Next best action',
    'HCP engagement recommendation',
    'Commercial decision support',
    'Journey-aware personalisation',
    'Explainable recommendations',
    'Human-in-the-loop feedback',
    'CRM and marketing workflow integration',
    'Channel orchestration',
    'Life sciences commercial analytics',
    'AI-powered engagement prioritisation',
  ],

  disclaimer: `This case study is based on my product experience in life sciences commercial intelligence. It is intentionally written at a high level and does not disclose client names, proprietary algorithms, model architecture, data pipelines, implementation details, internal roadmap information, or confidential commercial metrics.`,
};
