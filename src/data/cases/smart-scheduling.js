export const smartScheduling = {
  slug: 'smart-scheduling',
  title: 'Smart Scheduling',
  domain: 'Enterprise Asset Management',

  problem: 'Maintenance scheduling was manual and inefficient.',
  solution: 'AI-assisted scheduling recommendations that optimise technician utilisation and asset uptime.',

  problemDetail: `Preventive maintenance scheduling in large facilities is a coordination problem disguised as a calendar problem. Planners were manually balancing technician availability, asset criticality, parts inventory, and compliance windows — often in spreadsheets running alongside the CMMS, not inside it.

The result was predictable: reactive scheduling, technician idle time on low-priority tasks, and critical assets slipping past their service windows. Discovery interviews surfaced a consistent frustration — planners felt like they were always behind, never optimising.`,

  responsibilities: [
    'Product strategy',
    'Customer discovery',
    'Roadmap & prioritization',
    'Cross-functional leadership',
  ],

  keyDecisions: [
    {
      decision: 'Recommendations, not automation',
      rationale: `The first instinct was to build an auto-scheduler that would generate and assign work orders without planner input. Customer feedback killed that quickly. Planners weren't looking to be replaced — they were looking for a better starting point.

We pivoted to a recommendation engine that surfaces the next best set of tasks with rationale, leaving the planner in control. Adoption followed immediately.`,
    },
    {
      decision: 'Criticality scoring as the core signal',
      rationale: `Early models tried to optimise for schedule completion rate. The metric looked good; the outcomes didn't. We realised the right optimisation target was asset criticality — keeping the highest-consequence assets on schedule, even if lower-priority tasks slipped.

Reframing the model around criticality aligned the product with what planners actually cared about and made the recommendations easier to trust and explain.`,
    },
  ],

  impact: [
    'Improved on-time completion for critical asset maintenance',
    'Reduced planner time on routine scheduling',
    'Improved technician utilisation',
  ],

  learned: [
    {
      heading: 'The metric you optimise for shapes the product you build.',
      body: `Optimising for schedule completion rate produced a system that gamed low-priority tasks to hit its number. Only when we changed the target to criticality-weighted completion did the recommendations start matching what planners trusted. Define the right success metric before you build the model — not after.`,
    },
    {
      heading: 'Change management is a product requirement.',
      body: `The biggest barrier to adoption wasn't technical — it was the planner's identity. Experienced schedulers had years of intuition baked into their process. The product had to feel like it was augmenting that expertise, not auditing it. Framing the AI output as "here's what I'm seeing — you decide" reduced resistance dramatically.`,
    },
  ],

  technologies: ['ML', 'Recommendation Systems', 'Constraint Optimisation'],
};
