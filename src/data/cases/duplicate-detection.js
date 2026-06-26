export const duplicateDetection = {
  slug: 'duplicate-detection',
  title: 'Duplicate Detection',
  domain: 'Enterprise Asset Management',

  problem: 'Duplicate assets and work records reduced data quality and inflated operational costs.',
  solution: 'ML-powered duplicate detection that surfaces and merges redundant records across the asset hierarchy.',

  problemDetail: `Bad data has a compounding cost. In large asset management deployments — hospitals, universities, municipalities — asset records accumulate over years of migrations, integrations, and manual entry. The same pump gets entered three times under slightly different names. Work orders pile up against ghost assets. Maintenance history fragments across duplicates, making trend analysis useless.

The problem was invisible until it became expensive: procurement teams ordering duplicate parts, compliance teams failing audits on inflated asset counts, and operations teams unable to trust their own reporting. Discovery uncovered that many customers had accepted dirty data as the default state — nobody believed the problem was solvable without a costly data cleanse project.`,

  responsibilities: [
    'Product strategy',
    'Customer discovery',
    'Model evaluation',
    'Cross-functional leadership',
  ],

  keyDecisions: [
    {
      decision: 'Confidence scoring over binary classification',
      rationale: `A model that says "these are definitely duplicates" and automatically merges them creates more problems than it solves — one wrong merge loses historical data permanently. We shipped a confidence-scored queue instead: high-confidence duplicates auto-flagged for review, low-confidence pairs surfaced for human decision.

This approach earned trust quickly because users could see the model's reasoning and override it, and we could tune thresholds per customer without a product change.`,
    },
    {
      decision: 'Embedding-based similarity over rule-based matching',
      rationale: `Early prototypes used rules: match on asset tag, serial number, location code. Rules caught obvious duplicates but missed the long tail — assets entered by different teams with different naming conventions.

Moving to embedding-based semantic similarity caught substantially more duplicate pairs, especially across migration datasets where naming was inconsistent.`,
    },
  ],

  impact: [
    'Improved asset data quality across accounts',
    'Reduced manual data cleanse effort',
    'Improved user confidence in reporting features',
  ],

  learned: [
    {
      heading: "Make the AI's uncertainty visible.",
      body: `Users trust AI more when it shows its work. Displaying a confidence score alongside each detected duplicate — and explaining the signals that drove it — turned a black-box feature into a collaborative tool. Customers who could see why two records were flagged were far more likely to act on the recommendation.`,
    },
    {
      heading: 'Data quality is a team sport.',
      body: `The duplicate detection feature drove the most cross-functional conversations of any feature we'd shipped. Fixing duplicates required sign-off from operations, IT, and finance simultaneously. The product needed to support that workflow — not just surface the problem. We added a review and approval flow late in the cycle, and it became the reason customers actually completed their data clean-ups.`,
    },
  ],

  technologies: ['ML', 'Embeddings', 'Similarity Search', 'Entity Resolution'],
};
