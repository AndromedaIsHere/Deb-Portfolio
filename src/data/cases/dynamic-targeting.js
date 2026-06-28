export const dynamicTargeting = {
  slug: 'dynamic-targeting',
  title: 'Dynamic Targeting',
  domain: 'Life Sciences',

  metric: 'A Decision intelligence platform that helps life sciences commercial field teams act on the right opportunities at the right time',
  problem: 'Commercial teams relied on static, quarterly HCP segmentation — missing high-potential prescribers and misdirecting rep effort.',
  solution: 'AI-powered HCP prioritization platform for life sciences commercial teams',
  metaDescription: 'Dynamic Targeting — AI product case study by Debajyoti Das. A model ensemble platform (LSTM, behavioural shift, patient prediction) that delivered 4–10% incremental brand sales lift across 10+ global life sciences organisations.',

  businessContext: `Life sciences commercial teams often operate in markets that change faster than their planning cycles.

Traditional targeting and segmentation processes are usually refreshed periodically. By the time those segments reach the field, important signals may have already shifted — prescribing behavior, access conditions, competitive activity, engagement patterns, or territory-level opportunity.

The opportunity was to help commercial teams act on changing market signals faster.

The goal was not to replace field judgment. It was to give reps and managers a more current, explainable starting point for planning — so commercial effort could be focused on the accounts most likely to matter.`,

  userSegmentation: `The targeting workflow involved three primary user groups:

1. Commercial operations leaders who define the targeting strategy and governance approach.

2. Territory managers who translate strategy into territory-level execution.

3. Field representatives who use the recommendations to plan calls and engage HCPs.

I focused heavily on the territory manager and field representative experience.

Commercial operations may define the strategy, but field adoption determines whether that strategy reaches the market. If the recommendation does not change which account a rep prioritizes, which call they make first, or which opportunity they act on, the product does not create commercial impact.

The adoption challenge was clear: field teams would not use a recommendation simply because an algorithm produced it. They needed to understand why an account was being prioritized and how the recommendation related to what they were seeing in their territory.`,

  problemPrioritisation: `The core user problem was not lack of data.

Commercial teams already had access to large volumes of information across performance, engagement, access, and market activity. The problem was that this information was fragmented, delayed, and difficult to translate into weekly field action.

I focused on three recurring failure modes.

1. Emerging opportunity detection: New or changing HCP opportunities were often difficult to detect through static segmentation alone. A provider’s potential could change before it became obvious in traditional planning outputs. The product needed to help surface emerging opportunities earlier.

2. Market shift response: Competitive, payer, access, or engagement conditions could shift faster than the planning cycle. Field teams needed a way to react to meaningful changes while they were still commercially relevant. The product needed to shorten the gap between signal and action.

3. Field time allocation: Reps had limited time and had to make prioritization decisions every week. Without a clear, trusted recommendation, call planning relied heavily on habit, local judgment, or outdated priorities. The product needed to make the next best focus area easier to identify and easier to trust.

These three failure modes shared a common root: latency between signal and action. That was the problem worth solving first.`,

  whyAI: `Before positioning this as an AI product challenge, I evaluated whether simpler approaches could solve the problem.

Could better reporting solve this? No. Dashboards could make more information visible, but they did not necessarily help a rep decide who to prioritize on Monday morning. The issue was not executive visibility. It was field-level decision support.

Could an improved segmentation model solve this? Partially. Improving the existing segmentation model could make periodic targeting more accurate, but it would not fully solve the latency problem. If the market changes between planning cycles, even a better static model can still be late.

Could CRM rules-based prioritisation solve this? No. Rules can work when decision logic is stable and known in advance. But life sciences commercial prioritization depends on multiple changing signals, local context, and evolving market conditions. A rules-based system would require continuous manual tuning and would struggle to adapt as the signal patterns changed.

AI was justified for two reasons. The product needed to combine multiple signals, detect meaningful changes, and translate them into a ranked, explainable recommendation.

AI was justified because the value was not just in analyzing historical data. The value was in helping users act on changing opportunity patterns while those patterns were still relevant.`,

  solutionDesign: {
    overview: `Dynamic Targeting was designed as a commercial decision-support product, not just an analytics output.

The product direction was built around five principles.`,
    steps: [
      {
        title: 'Refreshed prioritization over static targeting',
        detail: `The product shifted the user experience from periodic target lists to refreshed account priorities.
The intent was to help commercial teams respond faster when opportunity signals changed.`,
      },
      {
        title: 'Explainable recommendations over black-box scores',
        detail: `A rep should not see only a rank or score. They should understand the reason behind the recommendation.
The product experience needed to answer: “Why is this HCP being prioritized now?” This was critical for trust, adoption, and field behavior change.`,
      },
      {
        title: 'Workflow-native delivery',
        detail: `Recommendations had to appear where users already planned and executed their work. If field teams had to leave their existing workflow to check a separate analytics tool, adoption would suffer. The recommendation needed to be visible at the moment of planning and action.`,
      },
      {
        title: 'Human judgment as feedback',
        detail: `Field users needed the ability to accept, defer, or override recommendations. An override was not treated as failure. It was a signal that the product could learn from — either because the user had local context the system did not capture, or because the recommendation needed recalibration.`,
      },
      {
        title: 'Governance for commercial teams',
        detail: `Commercial operations needed transparency and control. The product had to support business guardrails, strategic priorities, and governance expectations while still giving field teams more timely recommendations.`,
      },
    ],
  },

  keyDecisions: [
    {
      decision: 'Refreshed priorities instead of better static lists',
      rationale: `One early product decision was to avoid simply making the existing targeting process more sophisticated.
The deeper issue was not only accuracy. It was timeliness.
If the recommendation arrived too late, the commercial opportunity could already have moved. The product therefore focused on helping users work from refreshed priorities rather than relying entirely on static planning outputs.`,
    },
    {
      decision: 'Explainability as an adoption requirement',
      rationale: `Explainability was not treated as a compliance checkbox or a UX enhancement.
It was central to adoption.
Field representatives often have years of territory knowledge. If the system recommends an account without a clear rationale, users will either ignore it or apply their own judgment without feedback.
The product therefore needed to show the key reasons behind a recommendation in plain language.
The principle was simple:

A recommendation that cannot be understood is unlikely to be used.`,
    },
    {
      decision: 'Workflow integration over standalone analytics',
      rationale: `A standalone dashboard may be useful for analysis, but it does not always change field behavior.
The product was designed to bring recommendations into the user’s planning workflow, so account prioritization could influence real decisions — not just inform retrospective review.
This made the product less about “insight consumption” and more about “decision support.”`,
    },
    {
      decision: 'Feedback loop over one-way recommendation',
      rationale: `The product experience allowed field users to respond to recommendations.
If a rep accepted, delayed, or overrode a suggestion, that action became useful feedback. It helped identify where the recommendation aligned with field reality and where local context needed to be considered.
This was important because the best enterprise AI products are not one-way prediction systems. They improve through repeated interaction with users.`,
    },
  ],

  risks: [
    {
      risk: 'Data quality variance',
      mitigation: 'Different markets and teams may have different levels of data completeness. The product needed to account for this by making confidence, readiness, and limitations visible where relevant. A recommendation should not appear more certain than the underlying signal quality supports.',
    },
    {
      risk: 'Rep trust and adoption',
      mitigation: 'The biggest product risk was not whether a recommendation could be generated. It was whether a field user would trust and use it. To mitigate this, the experience focused on plain-language rationale, workflow-native delivery, and user control. The goal was to make the recommendation feel like a useful planning assistant, not a command from a black box.',
    },
    {
      risk: 'Commercial governance',
      mitigation: 'Commercial operations needed confidence that AI-driven prioritization would operate within business strategy, not outside it. The product therefore had to support governance, configuration, and visibility into how recommendations were being used. AI should assist commercial execution. It should not remove strategic control from the business.',
    },
    {
      risk: 'Compliance boundaries',
      mitigation: 'In a regulated commercial environment, the product needed clear boundaries. The product focused on prioritization and planning support. It did not generate promotional claims or replace approved commercial processes. Keeping the scope clear helped reduce compliance ambiguity and made the product easier to explain to stakeholders.',
    },
  ],

  metrics: {
    business: [
      'Improvement in field focus on higher-priority accounts',
      'Faster response to changing market signals',
      'Increased effectiveness of account planning',
    ],
    product: [
      'Field rep daily active usage of priority call list',
      'Override rate (rep rejects AI-recommended account)',
      'Emerging prescriber identification rate vs quarterly baseline',
    ],
    ai: [
      'Greater effectiveness in field sales calls vs control cohort',
      'Score freshness — time from signal ingestion to rep-visible priority update',
      'Explainability coverage — % of scores with top-3 signal attribution',
      'Model prediction accuracy vs held-out Rx outcomes',
    ],
  },

  /*architecture: {
    overview: `Dynamic Targeting is built on a model ensemble architecture running on a continuous scoring pipeline. Where traditional segmentation runs a single batch model on a quarterly schedule, Dynamic Targeting runs a coordinated set of specialised AI models on a signal cadence — each consuming the data inputs most relevant to its question, producing a sub-score, and contributing to a composite HCP opportunity score that is updated as new data arrives.`,
    layers: [
      {
        layer: 'Data ingestion layer',
        detail: `The platform consumes five primary data categories on different cadences. HCP demographics and specialty data — practice type, affiliation, geographic market — are ingested at onboarding and updated on change events. Sales and interaction history from the CRM — call records, sample logs, approved email opens, event attendance — is ingested daily. Prescription and claims data is ingested weekly, providing the primary Rx volume and trajectory signal. Payer and managed care data — formulary tier, prior authorisation requirements, access changes — is ingested on a formulary update cycle, typically monthly with event-driven supplements. Digital engagement signals — website visits, content downloads, webinar attendance — are ingested near real-time. All inputs are normalised, validated, and timestamped. Missing or thin coverage is flagged per data category per HCP, and feeds the data readiness score surfaced during onboarding.`,
      },
      {
        layer: 'Specialised model layer',
        detail: `Each model in the ensemble addresses a distinct targeting question. Prescribing Trends uses LSTM networks to model each HCP's Rx history as a time series, capturing trajectory and acceleration rather than point-in-time volume. Behavioural Shift uses change-detection methods to identify statistically significant shifts in prescribing pattern — including competitive displacement and brand switching. Patient Count Prediction forecasts the addressable patient population in each HCP's practice using demographic and claims data. Payer Access Scoring assesses managed care coverage and access trajectory per HCP. Engagement Propensity scores likelihood of a productive rep interaction based on interaction history and channel preferences. The model set is extensible — new modules can be added as new data sources or clinical questions emerge without rebuilding the ensemble layer.`,
      },
      {
        layer: 'Ensemble and explainability layer',
        detail: `An ensemble layer aggregates sub-scores from each model into a composite opportunity score per HCP per brand. Model weights are calibrated per brand and market context using historical prescription outcomes. SHAP values are computed at the ensemble level and aggregated to the top three contributing signals per HCP — translated from model features into plain-language attribution statements surfaced in the CRM. The explainability layer runs as a parallel process alongside scoring, adding minimal latency while producing the rep-facing rationale that drives adoption.`,
      },
      {
        layer: 'Strategy configuration layer',
        detail: `Commercial ops configures territory-level constraints, minimum call frequency floors for strategic accounts, and signal priority weights per brand. This layer sits above the ensemble and governs how composite scores translate into call plan recommendations. The AI optimises within the guardrails set here — it doesn't override commercial strategy, it executes within it.`,
      },
      {
        layer: 'CRM delivery and feedback layer',
        detail: `Priority scores and plain-language rationales are pushed to Veeva CRM daily. The call plan view surfaces accounts ranked by composite score with the top-three attribution visible inline. Rep overrides, snoozes, and acceptances are all logged as feedback signals and fed back into the ensemble calibration on the next scoring cycle. The feedback loop is the compounding mechanism — the more reps interact with the system, the better calibrated the models become for that territory.`,
      },
    ],
    stackImage: '/dynamic-targeting-architecture.svg',
  },*/

  impact: [
    '4–10% incremental lift in impactable brand sales vs static segmentation baseline',
    '50% greater effectiveness in field sales calls',
    'Deployed across 10+ global life sciences organisations',
    '40% reduction in commercial operations planning cycle time',
  ],

  learned: [
    {
      heading: 'Explainability is a distribution strategy, not just an ethics requirement.',
      body: `We built explainable scores because reps demanded it — not because of an AI governance policy. The lesson was that explainability directly drives adoption in human-in-the-loop commercial workflows. Every point of explanation we added reduced adoption friction in the field and compressed the procurement sales cycle too: compliance, medical affairs, and legal all had fewer objections when the model's reasoning was transparent. The ROI on explainability showed up in both adoption rates and deal velocity.`,
    },
    {
      heading: 'The best model is the one that gets used.',
      body: `Early model evaluations produced a more accurate ensemble — but it was slower to compute, harder to explain, and would have required a longer compliance review to deploy. We shipped the simpler model. It ran daily and was used by every rep in the pilot cohort. The theoretically superior model would have sat in a dashboard no one opened. Accuracy at the model level is irrelevant if adoption at the workflow level is zero.`,
    },
    {
      heading: 'Overrides are the most valuable training signal.',
      body: `When a rep overrides a recommendation, they are telling the model something it doesn't know: that a piece of context — a recent conversation, a competitive relationship, a personnel change — doesn't appear in the data. Treating overrides as signal rather than failure turned one of the most common AI adoption problems into a product advantage. The more reps used the system, the better it got. The more it improved, the more reps trusted it. The feedback loop is the moat.`,
    },
    {
      heading: 'Latency reduction compounds faster than accuracy improvement.',
      body: `Moving from quarterly to weekly scoring produced more commercial impact than any model accuracy improvement we made. The reason: in a competitive pharmaceutical market, the most valuable targets are the ones that are about to change — emerging prescribers, accounts at risk of competitive displacement, prescribers returning to a brand after a formulary change. A highly accurate model that runs quarterly misses all of them. A good-enough model that runs daily captures most of them. Speed of signal-to-recommendation matters more than marginal accuracy.`,
    },
  ],

  responsibilities: [
    'Built while working at ZS as part of the life sciences commercial intelligence portfolio. My responsibilities spanned product strategy, customer discovery, problem definition, workflow design, requirements development, explainability design, stakeholder alignment, and go-to-market support. I worked across business, design, data science, engineering, and commercial stakeholders to translate a complex AI capability into a usable field product. This case study is intentionally written at a high level and excludes client names, proprietary architecture, implementation details, data pipelines, model design, internal roadmap information, and confidential commercial metrics.',
  ],

  technologies: ['AI-powered prioritization', 'Commercial decision support', 'HCP targeting', 'Explainable recommendations', 'Human-in-the-loop feedback', 'CRM workflow integration', 'Field planning', 'Life sciences commercial analytics', 'Signal-driven account prioritization'],

  disclaimer: `This case study is intentionally written at a high level. It excludes client names, proprietary architecture, implementation details, data pipelines, model design, internal roadmap information, and confidential commercial metrics.`,
};
