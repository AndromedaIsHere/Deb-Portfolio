export const dynamicTargeting = {
  slug: 'dynamic-targeting',
  title: 'Dynamic Targeting',
  domain: 'Life Sciences',

  problem: 'Commercial teams relied on static segmentation to identify and prioritise healthcare providers — missing high-value opportunities and wasting rep time.',
  solution: 'Commercial decision intelligence platform using AI-driven dynamic targeting to rank and prioritise HCPs in real time.',

  problemDetail: `Pharmaceutical commercial teams have a finite number of sales rep interactions — and historically, they've allocated them using static segmentation built once a quarter from lagging prescription data. The world moves faster than the segmentation does.

High-potential prescribers get missed because they're new to a territory. Reps spend cycles on accounts that have already shifted to a competitor. Territory managers have no way to act on emerging signals between planning cycles. The cost shows up in missed quota, wasted samples, and reps who lose confidence in their call plans.

Discovery across multiple global pharma accounts surfaced the same core ask: give us a way to know who to call on Monday morning, with confidence that the list is current.`,

  responsibilities: [
    'Product strategy',
    'Customer discovery',
    'AI prioritisation',
    'Cross-functional leadership',
  ],

  keyDecisions: [
    {
      decision: 'Dynamic scoring over periodic batch segmentation',
      rationale: `The instinct was to improve the existing quarterly segmentation process — make the batch better. But discovery showed the real problem was latency: by the time a segment update shipped, the signals driving it were already weeks old.

We rebuilt the scoring layer to run continuously, incorporating real-time prescription signals, claims data, and CRM interaction history. The result was a live priority score that reflected the market as it actually was.`,
    },
    {
      decision: 'Explainable scores as a go-to-market requirement',
      rationale: `Pharma sales reps are trained to challenge recommendations they don't understand. A black-box ranking that says "call Dr. Smith" gets ignored. We invested in explainability from day one — every HCP score surfaces the top 3 signals driving it.

Reps who understood the score trusted it. Trust drove adoption. Adoption drove measurable uplift.`,
    },
  ],

  impact: [
    '3–5% sales uplift vs static segmentation baseline',
    '10+ global pharma organisations',
    '40% reduction in commercial operations planning time',
  ],

  learned: [
    {
      heading: 'Explainability is a distribution strategy, not just an ethics requirement.',
      body: `We built explainable scores because reps demanded it — not because of AI governance policy. The lesson was that explainability directly drives adoption in human-in-the-loop commercial workflows. Every point of explanation we added reduced sales cycle friction in the buying process too: procurement teams, medical affairs, and compliance all had fewer objections when the model's reasoning was transparent.`,
    },
    {
      heading: 'The best model is the one that gets used.',
      body: `Early versions of the targeting engine had marginally better predictive accuracy than simpler models — but they were slower to compute and harder to explain. We shipped the simpler model. It got used daily. The theoretically superior model would have sat in a dashboard nobody opened. Accuracy at the model level is irrelevant if adoption at the workflow level is zero.`,
    },
  ],

  technologies: ['ML', 'Predictive Scoring', 'Real-time Data Pipelines', 'Explainable AI'],
};
