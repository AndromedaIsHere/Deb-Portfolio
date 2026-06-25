export const aiInAction = [
  // ─────────────────────────────────────────────────────────
  // 1. Maintenance Copilot
  // ─────────────────────────────────────────────────────────
  {
    slug: 'maintenance-copilot',
    title: 'Maintenance Copilot',
    domain: 'Enterprise Asset Management',

    // Used on homepage list card
    problem: 'Technicians spent excessive time troubleshooting maintenance issues and searching documentation.',
    solution: 'LLM-powered conversational assistant embedded directly into maintenance workflows.',

    // ── Business context ──────────────────────────────────
    businessContext: `The business objective was retention and expansion. Maintenance Copilot wasn't just a feature — it was a retention lever. Customers churning from our CMMS cited "not getting enough value from the platform" as the top reason. AI was the opportunity to deepen engagement, differentiate in a commoditising market, and create a premium tier that justified price increases.

I assumed the primary goal was reducing churn and increasing expansion revenue, not net-new acquisition. That shaped every prioritisation decision that followed.`,

    // ── User segmentation ─────────────────────────────────
    userSegmentation: `I identified three users who interact with maintenance workflows: the facility director (strategic, cares about uptime and cost), the maintenance manager (operational, cares about scheduling and team productivity), and the field technician (executional, cares about getting the job done quickly and safely).

I focused on the field technician as the primary target. They're the ones in front of the asset, under time pressure, making real-time decisions. If we could make them faster and more confident, the impact would be immediate and measurable — and the facility director would see it in the data.`,

    // ── Problem prioritisation ────────────────────────────
    problemPrioritisation: `Technicians face several real problems: unclear fault codes, scattered documentation, difficulty escalating the right issues, inconsistent training, and slow parts lookup. I prioritised troubleshooting time as the primary problem for three reasons.

First, frequency — it happens on every complex work order, multiple times a week. Second, urgency — a technician stuck at 2 AM can't wait for a senior engineer to call back. Third, business impact — every additional hour of downtime has a direct, calculable cost. It was also the problem where AI had the clearest advantage over the status quo.`,

    // ── Why AI ────────────────────────────────────────────
    whyAI: `I tested alternatives before defaulting to AI. Could rules solve this? No — fault codes vary by asset type, OEM, and age. Could better search solve this? Partially — but search requires the technician to know what to search for. Could standard automation solve this? No — the problem is unstructured knowledge retrieval across heterogeneous documents.

AI was justified because the problem required natural language understanding, synthesis across multiple sources, and context-aware answers that adapt to the specific asset, fault, and work order history. A rules engine couldn't do that. A search bar couldn't do that. An LLM grounded in the customer's own data could.`,

    // ── Key decisions ─────────────────────────────────────
    keyDecisions: [
      {
        decision: 'Copilot first, not autonomous agents',
        rationale: `Customers told us they wanted AI to make technicians faster — not to replace judgment. Early prototypes of autonomous action — auto-closing work orders, auto-ordering parts — created distrust immediately.

We scoped Maintenance Copilot explicitly as a decision-support tool. The technician stays in control; the AI reduces the search burden. This framing was critical for enterprise procurement conversations and for regulatory contexts where safety and compliance sign-off is required.`,
      },
      {
        decision: 'RAG over pure LLM',
        rationale: `Hallucinated maintenance instructions are a safety risk. We chose Retrieval-Augmented Generation to ground every answer in the customer's own asset documentation, OEM manuals, and historical work order data.

This also gave us a compelling data enrichment story: the more structured data a customer maintains, the better their Copilot performs. It created a virtuous cycle that drove data quality improvements alongside AI adoption — and gave our Customer Success team a new expansion lever.`,
      },
      {
        decision: 'Evaluation framework before launch',
        rationale: `AI products live or die by trust. Before shipping, we built a structured evaluation layer: accuracy scoring against a golden dataset of real technician queries, latency benchmarks, and an in-product feedback loop.

This wasn't just an engineering decision — it became a sales asset. Being able to say "here is how we measure and continuously improve answer quality" unlocked procurement conversations that would otherwise have stalled on AI governance concerns.`,
      },
    ],

    // ── Risks ─────────────────────────────────────────────
    risks: [
      {
        risk: 'Hallucination in safety-critical contexts',
        mitigation: 'RAG architecture grounds answers in verified source documents. Every response surfaces the source, so technicians can validate the answer before acting.',
      },
      {
        risk: 'Trust and adoption among experienced technicians',
        mitigation: 'Positioned as a decision-support tool, not an authority. Early rollout included technician champions who shaped the UI language and feedback mechanisms.',
      },
      {
        risk: 'Data quality dependency',
        mitigation: 'Built data readiness scoring into the onboarding flow. Customers with sparse data are shown a clear path to improving Copilot performance before they go live.',
      },
      {
        risk: 'Enterprise procurement friction on AI governance',
        mitigation: 'Proactively built audit logs, source attribution, and an override/feedback mechanism. These became standard collateral in security reviews.',
      },
    ],

    // ── Metrics ───────────────────────────────────────────
    metrics: {
      business: [
        'Retention rate for accounts using Copilot vs non-Copilot cohort',
        'Expansion revenue from AI premium tier attach rate',
        'Reduction in customer-reported downtime incidents',
      ],
      product: [
        'Daily active usage of Copilot per technician',
        'Time-to-resolution on troubleshooting work orders',
        'Repeat query rate (technicians returning to Copilot vs calling support)',
      ],
      ai: [
        'Answer accuracy rate vs golden dataset',
        'User acceptance rate (thumbs up / no correction)',
        'Override rate (technician ignores recommendation)',
        'Hallucination rate flagged by reviewers',
        'Response latency (p50, p95)',
      ],
    },

    // ── Architecture ──────────────────────────────────────
    architecture: {
      overview: `Maintenance Copilot is built on a Retrieval-Augmented Generation (RAG) architecture. The core principle: the LLM provides reasoning and language; the customer's own data provides the facts. This separation is what makes the product safe to deploy in enterprise maintenance environments where a wrong answer has real operational consequences.`,
      layers: [
        {
          layer: 'Data ingestion & indexing',
          detail: `Asset documentation (OEM manuals, SOPs, compliance records), historical work orders, and fault code libraries are ingested, chunked, and embedded into a vector store. We used a hybrid chunking strategy — semantic chunking for narrative documents, structured extraction for tabular fault code data. Embeddings are generated using a fine-tuned text embedding model and stored in a managed vector database (pgvector on PostgreSQL).`,
        },
        {
          layer: 'Retrieval layer',
          detail: `On each technician query, the system runs a hybrid search combining dense vector similarity and sparse BM25 keyword matching. Re-ranking is applied using a cross-encoder model to surface the most relevant chunks before passing context to the LLM. The retrieval layer is tenant-isolated — each customer's data is partitioned so no cross-customer information leakage is possible.`,
        },
        {
          layer: 'LLM reasoning layer',
          detail: `Retrieved context is composed into a structured prompt with role definition, safety instructions, source citation requirements, and the technician's query. We use a large instruction-tuned model (GPT-4 class) via API for generation, with a fallback to a smaller model for latency-sensitive queries. Prompt templates are versioned and tested against the evaluation dataset before any change ships to production.`,
        },
        {
          layer: 'Evaluation & feedback layer',
          detail: `Every response is logged with its retrieved context, generated output, and user feedback signal. We built an internal evaluation harness using LLM-as-judge scoring alongside human expert review on a sampled subset. Ragas-style metrics (faithfulness, answer relevancy, context precision) are tracked per release. The feedback loop surfaces low-confidence responses for review and feeds into retrieval quality improvements.`,
        },
        {
          layer: 'Product integration layer',
          detail: `The Copilot surfaces inline within the work order view in the CMMS — not as a separate tab or standalone tool. API calls are made from the frontend with work order context (asset ID, fault code, location) pre-populated as structured metadata alongside the technician's natural language query. Response streaming is used to reduce perceived latency.`,
        },
      ],
      frameworks: [
        { name: 'LLM', detail: 'GPT-4 class model via Azure OpenAI (enterprise data residency, SOC 2 compliance)' },
        { name: 'Embeddings', detail: 'text-embedding-3-large for document indexing; same model for query encoding' },
        { name: 'Vector store', detail: 'pgvector on PostgreSQL — leverages existing infrastructure, avoids new vendor dependency' },
        { name: 'Retrieval', detail: 'Hybrid dense + sparse (BM25) with cross-encoder re-ranking' },
        { name: 'Evaluation', detail: 'Custom eval harness + Ragas metrics (faithfulness, relevancy, context precision)' },
        { name: 'Orchestration', detail: 'LangChain for prompt management and retrieval pipeline; migrating to direct API calls for latency optimisation' },
      ],
    },

    // ── Outcome ───────────────────────────────────────────
    impact: [
      'Up to 67% reduction in troubleshooting time',
      'Improved first-time fix rates across early-adopter accounts',
      'Reduced unplanned downtime incidents',
      'Became the #1 cited reason for contract renewal in post-launch QBRs',
    ],

    // ── What I learned ────────────────────────────────────
    learned: [
      {
        heading: 'Trust is the product.',
        body: `Every technical decision — RAG architecture, evaluation scoring, human-in-the-loop design — was ultimately a trust decision. Customers weren't just asking "does it work?" They were asking "can I bet my job on this?" Framing the product around trust, and building the evidence to back it up, was more important than any individual feature.`,
      },
      {
        heading: 'Distribution beats invention.',
        body: `Embedding Copilot into the existing work order workflow — rather than launching it as a separate product — was the highest-leverage call we made. Technicians didn't need to change their habits; the AI came to them. Adoption rates for embedded features ran 3–4× higher than standalone tools in our cohort data.`,
      },
      {
        heading: 'A sharp problem definition is a competitive moat.',
        body: `Competitors entered this space with general-purpose chatbots. We won early deals by articulating a narrower, more credible problem: "troubleshooting time in maintenance workflows," not "AI for CMMS." Specific problem definitions make discovery conversations shorter, positioning clearer, and success metrics obvious. Vague AI bets lose. Specific ones compound.`,
      },
      {
        heading: 'Data quality is the unlock — and the ceiling.',
        body: `The Copilot is only as good as the data it retrieves. Customers with well-structured asset hierarchies and rich work order histories saw dramatically better results. This shaped the roadmap: data-quality tooling became a prerequisite feature, and it turned out to be an unexpected customer success lever — improving data to feed the AI improved operational outcomes independently of the AI itself.`,
      },
    ],

    responsibilities: [
      'AI strategy & vision',
      'Customer discovery',
      'Roadmap & prioritization',
      'Monetization model',
      'Cross-functional leadership',
    ],

    technologies: ['Generative AI', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'pgvector', 'Azure OpenAI', 'LangChain'],
  },

  // ─────────────────────────────────────────────────────────
  // 2. Smart Scheduling
  // ─────────────────────────────────────────────────────────
  {
    slug: 'smart-scheduling',
    title: 'Smart Scheduling',
    domain: 'Enterprise Asset Management',

    problem: 'Maintenance scheduling was manual and inefficient.',
    solution: 'AI-assisted scheduling recommendations that optimise technician utilisation and asset uptime.',

    problemDetail: `Preventive maintenance scheduling in large facilities is a coordination problem disguised as a calendar problem.
Planners were manually balancing technician availability, asset criticality, parts inventory, and compliance windows —
often in spreadsheets running alongside the CMMS, not inside it.

The result was predictable: reactive scheduling, technician idle time on low-priority tasks,
and critical assets slipping past their service windows. Discovery interviews surfaced a consistent
frustration — planners felt like they were always behind, never optimising.`,

    whyItMattered: [
      { stat: '30%', label: 'of preventive maintenance tasks completed late in facilities without scheduling intelligence' },
      { stat: '2–3hrs', label: 'average weekly planning time per scheduler that could be redirected to exception handling' },
      { stat: 'Top 3', label: 'driver of customer churn in renewal conversations — scheduling gaps cited alongside data quality' },
    ],

    responsibilities: [
      'Product strategy',
      'Customer discovery',
      'Roadmap & prioritization',
      'Cross-functional leadership',
    ],

    keyDecisions: [
      {
        decision: 'Recommendations, not automation',
        rationale: `The first instinct was to build an auto-scheduler that would generate and assign work orders without planner input.
Customer feedback killed that quickly. Planners weren't looking to be replaced — they were looking for a better
starting point. We pivoted to a recommendation engine that surfaces the next best set of tasks with rationale,
leaving the planner in control. Adoption followed immediately.`,
      },
      {
        decision: 'Criticality scoring as the core signal',
        rationale: `Early models tried to optimise for schedule completion rate. The metric looked good;
the outcomes didn't. We realised the right optimisation target was asset criticality — keeping the
highest-consequence assets on schedule, even if lower-priority tasks slipped.
Reframing the model around criticality aligned the product with what planners actually cared about
and made the recommendations easier to trust and explain.`,
      },
    ],

    impactStats: [
      { stat: '↑', label: 'On-time completion rate for critical asset maintenance', emphasis: true },
      { stat: '↓', label: 'Planner time spent on routine scheduling decisions' },
      { stat: '↑', label: 'Technician utilisation across early-adopter accounts' },
    ],

    impact: [
      'Improved on-time completion for critical asset maintenance',
      'Reduced planner time on routine scheduling',
      'Improved technician utilisation',
    ],

    learned: [
      {
        heading: 'The metric you optimise for shapes the product you build.',
        body: `Optimising for schedule completion rate produced a system that gamed low-priority tasks
to hit its number. Only when we changed the target to criticality-weighted completion did the
recommendations start matching what planners trusted. Define the right success metric before
you build the model — not after.`,
      },
      {
        heading: 'Change management is a product requirement.',
        body: `The biggest barrier to adoption wasn't technical — it was the planner's identity.
Experienced schedulers had years of intuition baked into their process. The product had to feel
like it was augmenting that expertise, not auditing it. Framing the AI output as "here's what
I'm seeing — you decide" reduced resistance dramatically.`,
      },
    ],

    technologies: ['ML', 'Recommendation Systems', 'Constraint Optimisation'],
  },

  // ─────────────────────────────────────────────────────────
  // 3. Duplicate Detection
  // ─────────────────────────────────────────────────────────
  {
    slug: 'duplicate-detection',
    title: 'Duplicate Detection',
    domain: 'Enterprise Asset Management',

    problem: 'Duplicate assets and work records reduced data quality and inflated operational costs.',
    solution: 'ML-powered duplicate detection that surfaces and merges redundant records across the asset hierarchy.',

    problemDetail: `Bad data has a compounding cost. In large asset management deployments — hospitals, universities,
municipalities — asset records accumulate over years of migrations, integrations, and manual entry.
The same pump gets entered three times under slightly different names. Work orders pile up against ghost assets.
Maintenance history fragments across duplicates, making trend analysis useless.

The problem was invisible until it became expensive: procurement teams ordering duplicate parts,
compliance teams failing audits on inflated asset counts, and operations teams unable to trust
their own reporting. Discovery uncovered that many customers had accepted dirty data as the
default state — nobody believed the problem was solvable without a costly data cleanse project.`,

    whyItMattered: [
      { stat: '15–25%', label: 'of asset records estimated as duplicates in enterprise CMMS deployments at migration' },
      { stat: 'Compliance risk', label: 'inflated asset counts causing audit failures and incorrect depreciation calculations' },
      { stat: 'Trust gap', label: 'customers avoiding reporting features because "the data isn\'t reliable"' },
    ],

    responsibilities: [
      'Product strategy',
      'Customer discovery',
      'Model evaluation',
      'Cross-functional leadership',
    ],

    keyDecisions: [
      {
        decision: 'Confidence scoring over binary classification',
        rationale: `A model that says "these are definitely duplicates" and automatically merges them creates
more problems than it solves — one wrong merge loses historical data permanently. We shipped a
confidence-scored queue instead: high-confidence duplicates auto-flagged for review, low-confidence
pairs surfaced for human decision. This approach earned trust quickly because users could see
the model's reasoning and override it, and we could tune thresholds per customer without
a product change.`,
      },
      {
        decision: 'Embedding-based similarity over rule-based matching',
        rationale: `Early prototypes used rules: match on asset tag, serial number, location code.
Rules caught obvious duplicates but missed the long tail — assets entered by different teams
with different naming conventions. Moving to embedding-based semantic similarity caught
substantially more duplicate pairs, especially across migration datasets where naming was inconsistent.`,
      },
    ],

    impactStats: [
      { stat: '↑', label: 'Asset data quality scores across customer accounts', emphasis: true },
      { stat: '↓', label: 'Time spent on manual data cleanse projects pre-audit' },
      { stat: '↑', label: 'User confidence in reporting — measured via NPS on analytics features' },
    ],

    impact: [
      'Improved asset data quality across accounts',
      'Reduced manual data cleanse effort',
      'Improved user confidence in reporting features',
    ],

    learned: [
      {
        heading: 'Make the AI\'s uncertainty visible.',
        body: `Users trust AI more when it shows its work. Displaying a confidence score alongside
each detected duplicate — and explaining the signals that drove it — turned a black-box
feature into a collaborative tool. Customers who could see why two records were flagged
were far more likely to act on the recommendation.`,
      },
      {
        heading: 'Data quality is a team sport.',
        body: `The duplicate detection feature drove the most cross-functional conversations of any feature
we'd shipped. Fixing duplicates required sign-off from operations, IT, and finance simultaneously.
The product needed to support that workflow — not just surface the problem. We added a review
and approval flow late in the cycle, and it became the reason customers actually completed
their data clean-ups.`,
      },
    ],

    technologies: ['ML', 'Embeddings', 'Similarity Search', 'Entity Resolution'],
  },

  // ─────────────────────────────────────────────────────────
  // 4. Dynamic Targeting
  // ─────────────────────────────────────────────────────────
  {
    slug: 'dynamic-targeting',
    title: 'Dynamic Targeting',
    domain: 'Life Sciences',

    problem: 'Commercial teams relied on static segmentation to identify and prioritise healthcare providers — missing high-value opportunities and wasting rep time.',
    solution: 'Commercial decision intelligence platform using AI-driven dynamic targeting to rank and prioritise HCPs in real time.',

    problemDetail: `Pharmaceutical commercial teams have a finite number of sales rep interactions — and historically,
they've allocated them using static segmentation built once a quarter from lagging prescription data.
The world moves faster than the segmentation does.

High-potential prescribers get missed because they're new to a territory. Reps spend cycles on
accounts that have already shifted to a competitor. Territory managers have no way to act on
emerging signals between planning cycles. The cost shows up in missed quota, wasted samples,
and reps who lose confidence in their call plans.

Discovery across multiple global pharma accounts surfaced the same core ask: give us a way to
know who to call on Monday morning, with confidence that the list is current.`,

    whyItMattered: [
      { stat: '3–5%', label: 'sales uplift attributable to AI-optimised targeting vs static segmentation (measured across pilots)' },
      { stat: '10+', label: 'global pharma organisations using the platform at scale' },
      { stat: '40%', label: 'reduction in time spent by commercial ops teams on manual territory planning' },
    ],

    responsibilities: [
      'Product strategy',
      'Customer discovery',
      'AI prioritisation',
      'Cross-functional leadership',
    ],

    keyDecisions: [
      {
        decision: 'Dynamic scoring over periodic batch segmentation',
        rationale: `The instinct was to improve the existing quarterly segmentation process — make the batch
better. But discovery showed the real problem was latency: by the time a segment update shipped,
the signals driving it were already weeks old. We rebuilt the scoring layer to run continuously,
incorporating real-time prescription signals, claims data, and CRM interaction history.
The result was a live priority score that reflected the market as it actually was.`,
      },
      {
        decision: 'Explainable scores as a go-to-market requirement',
        rationale: `Pharma sales reps are trained to challenge recommendations they don't understand.
A black-box ranking that says "call Dr. Smith" gets ignored. We invested in explainability
from day one — every HCP score surfaces the top 3 signals driving it (e.g. "high script velocity
in your brand category," "recent conference attendance," "new patient population indicator").
Reps who understood the score trusted it. Trust drove adoption. Adoption drove measurable uplift.`,
      },
    ],

    impactStats: [
      { stat: '3–5%', label: 'sales uplift vs static segmentation baseline', emphasis: true },
      { stat: '10+', label: 'global pharma organisations on the platform' },
      { stat: '40%', label: 'reduction in commercial ops planning time' },
    ],

    impact: [
      '3–5% sales uplift vs static segmentation baseline',
      '10+ global pharma organisations',
      '40% reduction in commercial operations planning time',
    ],

    learned: [
      {
        heading: 'Explainability is a distribution strategy, not just an ethics requirement.',
        body: `We built explainable scores because reps demanded it — not because of AI governance policy.
The lesson was that explainability directly drives adoption in human-in-the-loop commercial workflows.
Every point of explanation we added reduced sales cycle friction in the buying process too:
procurement teams, medical affairs, and compliance all had fewer objections when the model's
reasoning was transparent.`,
      },
      {
        heading: 'The best model is the one that gets used.',
        body: `Early versions of the targeting engine had marginally better predictive accuracy than
simpler models — but they were slower to compute and harder to explain. We shipped the simpler
model. It got used daily. The theoretically superior model would have sat in a dashboard
nobody opened. Accuracy at the model level is irrelevant if adoption at the workflow level is zero.`,
      },
    ],

    technologies: ['ML', 'Predictive Scoring', 'Real-time Data Pipelines', 'Explainable AI'],
  },

  // ─────────────────────────────────────────────────────────
  // 5. Next Best Action
  // ─────────────────────────────────────────────────────────
  {
    slug: 'next-best-action',
    title: 'Next Best Action',
    domain: 'Life Sciences',

    problem: 'Commercial engagement was channel-siloed and lacked personalisation — reps, email, and digital channels acted independently.',
    solution: 'Recommendation engine that surfaces the next best action across channels for each healthcare provider interaction.',

    problemDetail: `In pharmaceutical commercial operations, the rep visit is still the primary engagement channel —
but it's no longer the only one. Email, digital detailing, remote meetings, and event invitations
all compete for HCP attention. Without coordination, the same provider receives redundant outreach
from multiple channels simultaneously, while gaps open elsewhere.

The problem isn't too little engagement — it's uncoordinated engagement. Commercial teams had the
channels; they lacked the intelligence layer to sequence them. Discovery with commercial ops leads
revealed that channel orchestration was universally acknowledged as broken, yet no one had a
practical fix — most organisations had tried and abandoned manual journey mapping.`,

    whyItMattered: [
      { stat: '30+', label: 'customers globally using the platform across multiple therapeutic areas' },
      { stat: '↑ HCP engagement', label: 'coordinated multi-channel outreach outperformed single-channel by measurable margin in pilots' },
      { stat: 'Channel waste', label: 'duplicate outreach across rep + digital estimated at 20–30% of total commercial spend' },
    ],

    responsibilities: [
      'Product strategy',
      'Customer discovery',
      'Roadmap',
      'Cross-functional leadership',
    ],

    keyDecisions: [
      {
        decision: 'Action recommendations, not journey orchestration',
        rationale: `Initial scoping pointed toward building a full omnichannel journey orchestration platform —
a complex multi-year build. Customer discovery pushed back quickly. Commercial teams didn't want
to redesign their journeys; they wanted a daily answer to one question: "what should I do with
this HCP today?" We narrowed the scope to a next-best-action recommendation layer that integrated
into existing CRM workflows. Narrower scope shipped faster, drove faster adoption, and gave us
the outcome data needed to inform the broader roadmap.`,
      },
      {
        decision: 'Reinforcement learning for channel sequencing',
        rationale: `Static rules for channel sequencing (e.g. "always follow a rep visit with email within 3 days")
proved brittle — they didn't account for HCP responsiveness patterns or brand lifecycle stage.
We moved to a reinforcement learning approach that learned optimal sequences from engagement
feedback signals. This made the recommendations adaptive without requiring commercial ops teams
to manually tune rules — a significant operational simplification.`,
      },
    ],

    impactStats: [
      { stat: '30+', label: 'customers globally', emphasis: true },
      { stat: '↑', label: 'HCP engagement rates in coordinated multi-channel pilots' },
      { stat: '↓', label: 'Redundant outreach and channel waste' },
    ],

    impact: [
      '30+ customers globally',
      'Improved HCP engagement rates in multi-channel pilots',
      'Reduced redundant cross-channel outreach',
    ],

    learned: [
      {
        heading: 'Narrow scope is a competitive moat, not a compromise.',
        body: `Scoping to next-best-action rather than full journey orchestration felt like a retreat at the time.
In practice, it became a positioning advantage. We shipped a working, trusted capability while
competitors were still in design phases of more ambitious platforms. Being useful now compounds
faster than being comprehensive later.`,
      },
      {
        heading: 'Commercial teams need evidence to change habits.',
        body: `Even when recommendations were accurate, rep adoption required proof. We instrumented the
platform to show each rep their outcomes against a holdout group: accounts where they followed
recommendations vs accounts where they didn't. The performance gap was visible and compelling.
Showing reps the data from their own territory converted the sceptics faster than any training programme.`,
      },
    ],

    technologies: ['Reinforcement Learning', 'Recommendation Systems', 'CRM Integration', 'Omnichannel Analytics'],
  },

  // ─────────────────────────────────────────────────────────
  // 6. Kapture
  // ─────────────────────────────────────────────────────────
  {
    slug: 'kapture',
    title: 'Kapture',
    domain: 'Banking · Insurance · Mortgage',

    problem: 'Document-intensive workflows in financial services were slow, error-prone, and dependent on manual review at scale.',
    solution: 'Intelligent Document Processing platform that classifies, extracts, and validates unstructured financial documents end-to-end.',

    problemDetail: `Financial services organisations process millions of documents annually — loan applications,
insurance claims, mortgage packages, KYC bundles. Every document is a structured decision waiting
inside unstructured content. And for most organisations, the process of getting to that decision
runs through manual extraction, human review, and re-keying into downstream systems.

The cost is measured in three ways: processing time (days where it should be hours), error rate
(mis-keyed fields propagating downstream into risk decisions), and headcount (large back-office
teams whose value is consumed by extraction rather than judgement). We saw this pattern consistently
across lending, insurance underwriting, and mortgage origination — the problem was universal,
the tolerance for it was declining.`,

    whyItMattered: [
      { stat: '50+', label: 'enterprise customers onboarded within the first 2 months of launch' },
      { stat: '80%', label: 'reduction in document processing time vs manual baseline' },
      { stat: '99.5%', label: 'extraction accuracy, up from ~95% with prior OCR-only approaches' },
    ],

    responsibilities: [
      'Product strategy',
      'Customer discovery',
      'Go-to-market',
    ],

    keyDecisions: [
      {
        decision: 'Hybrid OCR + LLM architecture over pure LLM extraction',
        rationale: `The instinct in 2023 was to solve this with a large language model end-to-end —
feed the document in, get structured JSON out. In practice, LLM-only approaches were inconsistent
on tabular financial data, expensive at document scale, and difficult to audit for compliance.
We built a hybrid architecture: OCR for structured extraction, LLM for classification and
exception handling, with a validation layer comparing outputs against business rules.
This gave us the speed of OCR, the flexibility of LLM, and the auditability that financial
services compliance teams required.`,
      },
      {
        decision: 'Human-in-the-loop for low-confidence extractions',
        rationale: `A 99.5% accuracy rate sounds excellent — until you apply it to a 10,000-document
mortgage package and realise 50 fields need human review. We designed the exception queue before
we designed the extraction engine: every low-confidence output routes to a reviewer with the
document in context, a pre-filled suggestion, and a one-click confirmation flow.
The review UX was what made the 99.5% figure commercially achievable — without it, customers
would have needed to re-review everything to trust the system.`,
      },
    ],

    impactStats: [
      { stat: '50+', label: 'enterprise customers within 2 months of launch', emphasis: true },
      { stat: '80%', label: 'reduction in document processing time' },
      { stat: '99.5%', label: 'extraction accuracy (up from 95%)' },
    ],

    impact: [
      '50+ enterprise customers within 2 months of launch',
      '80% reduction in document processing time',
      'Extraction accuracy improved from 95% to 99.5%',
    ],

    learned: [
      {
        heading: 'The review queue is the product.',
        body: `Every IDP vendor promises high accuracy. What differentiates them is what happens at the
accuracy boundary — the 0.5% of documents the model isn't confident about. Kapture's exception
queue was the feature that won deals: financial services buyers are sophisticated about model
limitations, and showing them a well-designed human-in-the-loop experience converted more
than any accuracy benchmark.`,
      },
      {
        heading: 'Compliance readiness is a distribution unlock.',
        body: `Financial services procurement is slow and compliance-gated. We made the decision to
invest in audit logging, data lineage, and explainable extraction outputs before we had customers
asking for them. That readiness compressed sales cycles significantly — we could hand compliance
teams a complete evidence package rather than building it reactively per prospect.`,
      },
      {
        heading: 'Speed of onboarding determines speed of growth.',
        body: `50+ enterprise customers in 2 months wasn't primarily a go-to-market achievement —
it was a product architecture achievement. The decision to build a template library for
common financial document types (W-2, 1003, EOB, ACORD forms) meant new customers could
get to value in days rather than weeks of custom model training. Time to first document
processed was the activation metric that drove word-of-mouth in a tight-knit industry.`,
      },
    ],

    technologies: ['OCR', 'Generative AI', 'Document Classification', 'Human-in-the-Loop', 'IDP'],
  },
];
