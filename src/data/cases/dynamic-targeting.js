export const dynamicTargeting = {
  slug: 'dynamic-targeting',
  title: 'Dynamic Targeting',
  domain: 'Life Sciences',

  metric: '4–10% incremental lift in brand sales · 50% greater field effectiveness · 10+ global organisations',
  problem: 'Commercial teams relied on static, quarterly HCP segmentation — missing high-potential prescribers and misdirecting rep effort.',
  solution: 'AI-driven HCP target decisioning platform that scores and prioritises healthcare providers in real time using live commercial signals.',
  metaDescription: 'Dynamic Targeting — AI product case study by Debajyoti Das. A model ensemble platform (LSTM, behavioural shift, patient prediction) that delivered 4–10% incremental brand sales lift across 10+ global life sciences organisations.',

  businessContext: `Dynamic Targeting wasn't a research project. It was a commercial bet on a specific hypothesis: that pharma companies were leaving measurable revenue on the table because their targeting was too slow.

The business case was straightforward. A pharmaceutical company's primary commercial asset is its field force — and the field force's primary variable is who it calls on. Static segmentation built once a quarter from lagging prescription data meant reps were optimising against a market that no longer existed. High-potential prescribers were invisible. Low-potential accounts consumed cycles that should have gone elsewhere.

The opportunity was to rebuild that targeting layer with AI — not to replace reps, but to sharpen the list they walked in with on Monday morning. The hypothesised outcome: more calls on the right accounts, fewer on the wrong ones, measurable lift in brand sales as a result.

Across 10+ global life sciences organisations, that hypothesis held. We saw 4–10% incremental lift in impactable brand sales and 50% greater effectiveness in field sales calls — not by adding headcount, but by pointing existing headcount at better targets.`,

  userSegmentation: `Three users interact with the commercial targeting workflow: the commercial operations lead who designs the segmentation strategy, the territory manager who translates that strategy into district-level call plans, and the field medical representative who executes calls and feeds interaction data back into the system.

I focused the core product design on the territory manager and the field rep as the primary users — with commercial ops as the approver and buyer.

Here's why: the commercial ops team sets the strategy once. The territory manager and field rep live inside it every week. If the targeting platform doesn't change their daily behaviour — which list they open, which account they prioritise, which call they make first — the strategy never reaches the market. Adoption at the field level is the only adoption that translates to sales outcomes.

The field rep's workflow was the adoption bottleneck. Every targeting product that failed before ours failed at this layer: the recommendation was good in aggregate but unused in the field because the rep had no reason to trust it over their own judgement.`,

  problemPrioritisation: `Pharma commercial teams face a compound problem: too much data, too slow to act on it, and no clear signal on who actually matters today.

Reps have access to prescription data, market share reports, call history, sample logs, and managed care coverage data. None of it tells them who to call Monday morning in a way they can trust. The planning cycle runs quarterly. The market runs daily. Everything in between is noise.

I prioritised three specific failure modes above the rest:

Emerging prescriber blindness. New high-potential prescribers — recently promoted physicians, newly affiliated specialists, doctors shifting therapeutic focus — are invisible in historical prescription data. Quarterly segmentation systematically misses them until they're already established and competitive.

Competitive displacement. When a competitor launches or gains formulary access, the prescribing behaviour of affected accounts shifts within weeks. Quarterly segmentation doesn't catch this until the next planning cycle, by which point the accounts have already moved.

Rep time misallocation. Reps were spending 20–30% of their call time on accounts the data classified as medium or low priority — not because they disagreed with the segmentation, but because their call plans were built from the same stale data and they had nothing better to go on.

These three failure modes shared a common root: latency between signal and action. That was the problem worth solving first.`,

  whyAI: `Before committing to an AI-driven approach, I tested the simpler alternatives.

Could better reporting solve this? No. Richer dashboards give commercial ops more to look at — they don't give field reps a clearer answer on who to call. The problem isn't visibility at the executive level. It's decisioning at the field level.

Could an improved segmentation model solve this? Partially. A better quarterly batch model would produce more accurate segments — but it would still be quarterly. The latency problem survives a better model if the model still only runs every 90 days.

Could CRM rules-based prioritisation solve this? No. Rules require someone to define them, maintain them, and update them when market conditions shift. In an environment where competitive dynamics, formulary changes, and prescriber behaviour evolve continuously, a rules engine is the wrong architecture.

AI was justified for two reasons. First, the signal space was too large and too dynamic for human-defined rules: we were processing prescription claims, CRM interaction history, HCP demographics, payer and managed care data, sales history, digital engagement signals, specialty and affiliation data, and regional market dynamics simultaneously — and their relative importance varied by brand, geography, and competitive context. No rules engine can hold that complexity and stay current.

Second, the outcome we needed — a ranked, current list of who to call — required continuous, multi-dimensional inference. Prescribing behaviour is a time series problem. Behavioural shift is a change-detection problem. Patient population movement is a forecasting problem. These are structurally different questions that demand structurally different models. A single model averaging across all of them produces answers that are mediocre on all dimensions. An ensemble of specialised models, each answering one question well and contributing its signal to a shared priority score, produces answers that are credible on every dimension.

That architectural decision — to build a model ensemble rather than a single scoring model — is what made the platform extensible. New signal types and new model modules could be added as clinical evidence or commercial context evolved, without rebuilding the platform from scratch.`,

  solutionDesign: {
    overview: `Dynamic Targeting is a commercial decisioning platform built on a model ensemble architecture. Rather than producing a single targeting score from a single model, it runs a coordinated set of specialised AI models — each answering a distinct clinical or commercial question — and synthesises their outputs into a unified HCP opportunity score with a plain-language rationale.

The design principle was to make the right call list obvious and trustworthy at the rep level, while giving commercial ops the controls and transparency they needed to govern it. Four design decisions shaped the platform.`,
    steps: [
      {
        title: 'An ensemble of specialised models, not a single scoring model',
        detail: `The core architectural decision was to decompose the targeting question into its constituent sub-problems and build a dedicated model for each. Prescribing Trends uses LSTM networks to model individual HCP prescribing behaviour as a time series — capturing trajectory, acceleration, and seasonality that aggregate volume figures miss. Behavioural Shift detects statistically significant changes in an HCP's prescribing pattern, including competitive displacement and brand switching. Patient Count Prediction forecasts the addressable patient population in an HCP's practice using demographic, claims, and payer data. Additional modules — including payer access scoring, engagement propensity, and affiliation network effects — contribute further signal.

Each model runs independently on its relevant data inputs. An ensemble layer aggregates their outputs into a single composite opportunity score per HCP, with each model's contribution weighted by its predictive validity for that brand and market context. The architecture is additive: new models can be plugged in as new data sources or clinical evidence become relevant, without rebuilding the scoring layer.`,
      },
      {
        title: 'Deep learning for temporal patterns, not just cross-sectional scoring',
        detail: `Prescribing behaviour is fundamentally a temporal problem — what matters is not where an HCP is today, but where they are going. A physician writing 10 scripts a month and declining is a different opportunity than one writing 10 scripts a month and accelerating from five.

We used Recurrent Neural Networks and LSTM architectures for models where temporal dynamics matter — primarily the Prescribing Trends and Behavioural Shift modules. These architectures learn sequential dependencies in prescribing history that gradient-boosted models trained on snapshots cannot capture. For models where temporal ordering is less important — patient count prediction, payer access — gradient-boosted trees with engineered features remain more interpretable and perform comparably.`,
      },
      {
        title: 'Explainable scores as a trust mechanism',
        detail: `Every HCP priority score surfaces the top three signals driving it — not from the ensemble as a black box, but from the contributing models. A rep seeing Dr. Patel at the top of their list doesn't just see a number; they see which model module elevated that account and why: "Prescribing Trends: accelerating Rx trajectory over 8 weeks. Payer Access: formulary coverage improved this month. Behavioural Shift: no competitive displacement signal detected."

This level of attribution was non-negotiable from the first field validation. Experienced reps challenge recommendations they don't understand — and they should. Explainability was the feature that converted sceptics into daily users.`,
      },
      {
        title: 'CRM-native delivery with override-as-signal',
        detail: `Targeting recommendations surface directly inside the rep's CRM — pre-populating the call plan with prioritised accounts. Reps can accept, deprioritise, or override any recommendation. Overrides are not discarded; they feed back into the ensemble as supervised correction signals. A rep who overrides an account because they know something the model doesn't is improving future recommendations for their entire territory. The feedback loop is the compounding mechanism that makes the platform more valuable the more it is used.`,
      },
    ],
  },

  keyDecisions: [
    {
      decision: 'Dynamic scoring over periodic batch segmentation',
      rationale: `The instinct was to improve the existing quarterly segmentation process — make the batch better, run it monthly instead of quarterly. Discovery showed the real problem was architectural, not methodological: the batch model was inherently reactive. By the time a segment update shipped, the signals that drove it were weeks old and the commercial window had often already closed.

We rebuilt the scoring layer to run continuously on incoming signals. The result was a live priority score that reflected the market as it was, not as it had been. For high-velocity targeting scenarios — competitive launches, formulary changes, emerging prescribers — this was the difference between acting and reacting.`,
    },
    {
      decision: 'Explainable scores as a go-to-market requirement',
      rationale: `Pharma field reps are trained professionals with years of territory knowledge. They challenge recommendations they don't understand — and they should. A black-box score that says "call Dr. Smith" gets overridden by a rep who knows Dr. Smith switched to a competitor six months ago and no one updated the data.

We invested in explainability before we had a production model. Every HCP score surfaces the top three signals driving it, in plain language, in the CRM. Reps who understood the score trusted it. Trust drove adoption. Adoption produced the outcome data that fed model improvement. Explainability wasn't a UX nicety — it was the feedback loop that made the model better over time.`,
    },
    {
      decision: 'Model ensemble over single-model scoring',
      rationale: `The first architecture proposal was a single gradient-boosted model trained on all available signals simultaneously. It produced a reasonable offline accuracy score. It also produced a black box: no one could explain why a specific HCP ranked where they did, because the model was averaging across prescribing trends, payer dynamics, patient population, and engagement signals all at once.

We decomposed the problem. Each sub-question got its own model, built for that question's structure: LSTM networks for temporal prescribing sequences, change-detection for behavioural shift, regression models for patient count forecasting. The ensemble layer then combined their outputs with calibrated weights.

The result was a more accurate composite score — and a fully explainable one. Because each module answered a discrete question, attribution was clean: the top-three signals in the rep's CRM came from identifiable model outputs, not from an opaque feature importance vector. This architecture also made the platform extensible: adding a new signal type meant adding a new module, not retraining the entire model.`,
    },
  ],

  risks: [
    {
      risk: 'Data quality variance across markets',
      mitigation: 'Built a data readiness score into the onboarding flow. Markets with thin claims coverage or incomplete CRM history are surfaced before go-live, with a clear path to improving data completeness. The model also adjusts confidence weighting based on signal coverage — lower confidence outputs are flagged rather than presented as high-certainty rankings.',
    },
    {
      risk: 'Rep override undermining model signal',
      mitigation: 'Overrides are treated as signal, not noise. Every rep override is logged with context and fed back into the model as a supervised correction. Systematic overrides on specific account types or geographies trigger a model review — they often surface a real data quality issue or a market dynamic the model hasn\'t seen before.',
    },
    {
      risk: 'Compliance and promotional materials governance',
      mitigation: 'Dynamic Targeting surfaces who to call — it does not generate promotional content. The separation between targeting intelligence and promotional execution was deliberate and documented. Medical, legal, and regulatory review was scoped to the output layer only, not to the targeting model, which kept the compliance surface area manageable.',
    },
    {
      risk: 'Commercial ops loss of control over segmentation strategy',
      mitigation: 'Commercial ops retains control of model weights, signal priorities, and territory constraints. A strategy configuration layer sits above the scoring model — commercial ops can specify that certain account types or geographies receive minimum frequency floors regardless of score. The AI optimises within the guardrails; it doesn\'t replace the strategy.',
    },
  ],

  metrics: {
    business: [
      { metric: 'Incremental lift in impactable brand sales vs static segmentation baseline', observed: '4–10%' },
      { metric: 'Organisations deployed globally',                                           observed: '10+' },
      { metric: 'Reduction in commercial operations planning time',                          observed: '↓ 40%' },
    ],
    product: [
      { metric: 'Field rep daily active usage of priority call list',                        observed: null },
      { metric: 'Override rate (rep rejects AI-recommended account)',                        observed: null },
      { metric: 'Emerging prescriber identification rate vs quarterly baseline',             observed: null },
    ],
    ai: [
      { metric: 'Greater effectiveness in field sales calls vs control cohort',              observed: '↑ 50%' },
      { metric: 'Score freshness — time from signal ingestion to rep-visible priority update', observed: null },
      { metric: 'Explainability coverage — % of scores with top-3 signal attribution',      observed: null },
      { metric: 'Model prediction accuracy vs held-out Rx outcomes',                         observed: null },
    ],
  },

  architecture: {
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
  },

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
    'Built at ZS Associates as part of the commercial AI and analytics practice. Responsibilities spanned AI product strategy, customer discovery across 10+ global pharma clients, model prioritisation, CRM integration design, and go-to-market for the life sciences commercial intelligence portfolio.',
  ],

  technologies: ['LSTM / RNN', 'Gradient Boosting', 'Model Ensemble', 'SHAP Explainability', 'Behavioural Change Detection', 'Real-time Scoring Pipelines', 'Veeva CRM', 'Rx Claims Data', 'Payer Analytics', 'Feature Engineering'],
};
