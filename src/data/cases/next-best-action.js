export const nextBestAction = {
  slug: 'next-best-action',
  title: 'Next Best Action',
  domain: 'Life Sciences',

  metric: '30+ customers globally across multiple therapeutic areas',
  problem: 'Commercial engagement was channel-siloed and lacked personalisation — reps, email, and digital channels acted independently.',
  solution: 'Recommendation engine that surfaces the next best action across channels for each healthcare provider interaction.',
  metaDescription: 'Next Best Action — AI product case study by Debajyoti Das. A reinforcement learning recommendation engine that coordinated omnichannel HCP engagement for 30+ pharma customers globally, improving field call effectiveness.',

  problemDetail: `In pharmaceutical commercial operations, the rep visit is still the primary engagement channel — but it's no longer the only one. Email, digital detailing, remote meetings, and event invitations all compete for HCP attention. Without coordination, the same provider receives redundant outreach from multiple channels simultaneously, while gaps open elsewhere.

The problem isn't too little engagement — it's uncoordinated engagement. Commercial teams had the channels; they lacked the intelligence layer to sequence them. Discovery with commercial ops leads revealed that channel orchestration was universally acknowledged as broken, yet no one had a practical fix — most organisations had tried and abandoned manual journey mapping.`,

  responsibilities: [
    'Product strategy',
    'Customer discovery',
    'Roadmap',
    'Cross-functional leadership',
  ],

  keyDecisions: [
    {
      decision: 'Action recommendations, not journey orchestration',
      rationale: `Initial scoping pointed toward building a full omnichannel journey orchestration platform — a complex multi-year build. Customer discovery pushed back quickly. Commercial teams didn't want to redesign their journeys; they wanted a daily answer to one question: "what should I do with this HCP today?"

We narrowed the scope to a next-best-action recommendation layer that integrated into existing CRM workflows. Narrower scope shipped faster, drove faster adoption, and gave us the outcome data needed to inform the broader roadmap.`,
    },
    {
      decision: 'Reinforcement learning for channel sequencing',
      rationale: `Static rules for channel sequencing proved brittle — they didn't account for HCP responsiveness patterns or brand lifecycle stage. We moved to a reinforcement learning approach that learned optimal sequences from engagement feedback signals.

This made the recommendations adaptive without requiring commercial ops teams to manually tune rules — a significant operational simplification.`,
    },
  ],

  impact: [
    '30+ customers globally',
    'Improved HCP engagement rates in multi-channel pilots',
    'Reduced redundant cross-channel outreach',
  ],

  learned: [
    {
      heading: 'Narrow scope is a competitive moat, not a compromise.',
      body: `Scoping to next-best-action rather than full journey orchestration felt like a retreat at the time. In practice, it became a positioning advantage. We shipped a working, trusted capability while competitors were still in design phases of more ambitious platforms. Being useful now compounds faster than being comprehensive later.`,
    },
    {
      heading: 'Commercial teams need evidence to change habits.',
      body: `Even when recommendations were accurate, rep adoption required proof. We instrumented the platform to show each rep their outcomes against a holdout group: accounts where they followed recommendations vs accounts where they didn't. The performance gap was visible and compelling. Showing reps the data from their own territory converted the sceptics faster than any training programme.`,
    },
  ],

  technologies: ['Reinforcement Learning', 'Recommendation Systems', 'CRM Integration', 'Omnichannel Analytics'],
};
