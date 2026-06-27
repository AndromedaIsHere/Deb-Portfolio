export const maintenanceCopilot = {
  slug: 'maintenance-copilot',
  title: 'Maintenance Copilot',
  domain: 'Enterprise Asset Management',

  metric: '67% reduction in troubleshooting time',
  problem: 'Technicians spent excessive time troubleshooting maintenance issues and searching documentation.',
  solution: 'LLM-powered conversational assistant embedded directly into maintenance workflows.',
  metaDescription: 'Maintenance Copilot — AI product case study by Debajyoti Das. How a RAG-powered conversational assistant embedded in a CMMS reduced technician troubleshooting time by 67% and became the #1 reason for contract renewal.',

  businessContext: `Before I wrote a single product spec, I made sure I understood what the business needed — not just what users wanted.

Customers were churning from our CMMS platform citing one consistent reason: they weren't getting enough value. In a market where competitors were closing the feature gap fast, we needed a wedge — something that deepened engagement, created measurable ROI, and justified a premium tier. Maintenance Copilot was that wedge.

The primary objective was retention and expansion. That single framing shaped every prioritisation call that followed. Features that made existing customers stickier took precedence over features that attracted new ones. AI wasn't a technology bet — it was a business bet with a clear hypothesis: if we could make technicians meaningfully faster and more effective, customers would renew, expand, and tell others.`,

  userSegmentation: `Three users interact with maintenance workflows: the facility director who cares about uptime and cost, the maintenance manager who cares about scheduling and utilisation, and the field technician who just needs to fix the asset in front of them — quickly, safely, and without hunting across six different systems for information.

I focused on the field technician as the primary target user.

Here's why: technicians are the execution layer of every maintenance operation. Their decisions — what to check first, which part to replace, when to escalate — directly determine first-time fix rates, asset uptime, and downstream cost. Yet most CMMS tools are designed for managers, not for the person in the field. Technicians carry the highest information friction and receive the least product investment. That gap was exactly where AI could deliver outsized value — and where the facility director would see the impact in the data.`,

  problemPrioritisation: `Technicians face a cluster of real problems: unclear fault codes, scattered documentation, inconsistent training across experience levels, slow parts lookup, and the burden of documenting completed work accurately. All of them matter. But I prioritised troubleshooting time — the information gap in the middle of a repair — above everything else.

Three reasons drove that decision:

Frequency. It happens on every complex work order. Not occasionally — on every job where the fault isn't immediately obvious, which is most of them.

Urgency. A technician standing in front of a failed HVAC unit at 2 AM can't wait for a senior engineer to call back. The pain is acute, time-pressured, and entirely avoidable with the right information available at the right moment.

Business impact. Every additional hour of downtime has a direct, calculable cost for the customer. Reducing troubleshooting time is one of the few product improvements that shows up immediately in an operational dashboard — which means the facility director notices, and the renewal conversation changes.

It was also the problem where AI had the clearest, most defensible advantage over every simpler alternative.`,

  whyAI: `I don't treat AI as the default answer. Before committing to an LLM-powered approach, I pressure-tested every simpler alternative.

Could rules solve this? No. Fault codes vary by asset type, OEM, age, and installation environment. A rules engine breaks the moment it encounters an asset configuration it wasn't explicitly programmed for — and in a large facility, that's constantly.

Could better search solve this? Partially. But search requires the technician to know what to search for. A technician describing what they're seeing — "grinding noise, not reaching setpoint" — doesn't know the correct technical terminology to query. Search puts the cognitive burden back on the user.

Could standard automation handle it? No. The problem is unstructured knowledge retrieval across heterogeneous documents that need to be synthesised into a contextual, actionable answer in real time. That's not an automation problem.

AI was justified because the task required three capabilities that no simpler tool could provide: natural language understanding of symptom descriptions, synthesis across multiple knowledge sources simultaneously, and generation of context-aware guidance that adapts to the specific asset, fault history, and work order. The LLM wasn't chosen because it was fashionable. It was chosen because it was the only tool that fit the problem.`,

  solutionDesign: {
    overview: `With the problem defined and AI justified, the design challenge was to translate that reasoning into a concrete product — one that a field technician could trust in the middle of a repair, and that an enterprise procurement team could put in front of their security and compliance reviewers.

The solution is a conversational assistant embedded directly into the work order view of the CMMS. The technician describes what they are seeing — in plain language, not search syntax — and receives a contextual, source-attributed answer drawn from the relevant asset documentation, historical repair records, and OEM fault data. The design decisions below shaped how that experience was built.`,
    steps: [
      {
        title: 'Embed, don\'t redirect',
        detail: `The Copilot surfaces inline within the active work order — not as a separate tab, a standalone app, or a chatbot widget tucked into a corner. The context the technician is already working in (asset ID, fault code, location, work order history) is automatically passed to the assistant without the technician having to re-enter it.

This removed the biggest friction point in early prototypes: technicians would open a query interface, then have to re-describe the asset they were already staring at. Embedding the context as structured metadata meant the query could be as simple as "what does this fault code mean?" and the system would already know which asset and which code.`,
      },
      {
        title: 'RAG over fine-tuning',
        detail: `A key design fork: should the model be fine-tuned on maintenance domain knowledge, or should it retrieve facts at query time from customer-specific documents? We chose Retrieval-Augmented Generation.

Fine-tuning would have encoded knowledge statically — useless the moment a customer added new equipment or updated their SOPs. RAG grounds every answer in the customer's current documentation, makes the source visible to the technician, and allows the knowledge base to be updated without retraining. For an enterprise product where data freshness and auditability matter, RAG was the only defensible choice.`,
      },
      {
        title: 'Source attribution on every response',
        detail: `Every answer surfaces the document it was drawn from — the specific manual, the historical work order, the SOP — with enough context for the technician to verify before acting. This was non-negotiable from the first design review.

In a safety-relevant context, a technician who cannot verify a recommendation will not follow it. Attribution also addresses the hallucination risk directly: if the model generates a response not grounded in the retrieved context, the absence of a credible source is a visible signal to the technician that something is off.`,
      },
      {
        title: 'Feedback loop built in from day one',
        detail: `Each response includes a lightweight feedback mechanism: a thumbs-up, a thumbs-down, and a free-text correction field. The design principle was that the product should improve from use, not just from engineering cycles.

Negative feedback triggers a review queue. Corrections from experienced technicians feed directly into the retrieval quality assessment. Over time, the feedback data became one of the most valuable assets in the product — a continuously updated ground truth dataset that no synthetic benchmark could replicate.`,
      },
    ],
  },

  risks: [
    {
      risk: 'Hallucination in safety-critical contexts',
      mitigation: 'The RAG architecture mitigates this structurally — every answer is grounded in a retrieved source document. But we went further: every Copilot response surfaces its source with a link, so the technician can validate before acting. The answer is never presented as authoritative; it is presented as - "here is what the documentation says."',
    },
    {
      risk: 'Trust and adoption among experienced technicians',
      mitigation: 'Senior technicians are the hardest users to win. They have seen bad software before, and they are right to be sceptical. We ran the initial rollout with self-selected technician champions who shaped the UI language, the response format, and the feedback mechanism. When experienced technicians helped design the tool, their peers trusted it faster.',
    },
    {
      risk: 'Data quality dependency',
      mitigation: 'The Copilot is only as good as the data it retrieves. We built a data readiness score into the customer onboarding flow — customers with sparse or unstructured data see a clear roadmap to improving Copilot performance before going live, rather than a degraded experience that erodes trust.',
    },
    {
      risk: 'Enterprise procurement friction on AI governance',
      mitigation: 'Proactively built audit logs, source attribution, and an override/feedback mechanism. These became standard collateral in security reviews.',
    },
  ],

  metrics: {
    business: [
      { metric: 'Retention rate — Copilot vs non-Copilot cohort',      observed: null },
      { metric: 'Expansion revenue — AI premium tier attach rate',      observed: null },
      { metric: 'Reduction in customer-reported downtime incidents',    observed: null },
    ],
    product: [
      { metric: 'Daily active Copilot usage per technician',            observed: null },
      { metric: 'Time-to-resolution on troubleshooting work orders',    observed: '↓ 67%' },
      { metric: 'Repeat query rate (Copilot vs calling support)',       observed: null },
    ],
    ai: [
      { metric: 'Answer accuracy rate vs golden dataset',               observed: null },
      { metric: 'User acceptance rate (thumbs up / no correction)',     observed: null },
      { metric: 'Override rate (technician ignores recommendation)',    observed: null },
      { metric: 'Hallucination rate flagged by reviewers',              observed: null },
      { metric: 'Response latency p50 / p95',                          observed: null },
    ],
  },

  architecture: {
    overview: `Maintenance Copilot is built on a Retrieval-Augmented Generation (RAG) architecture. The core principle: the LLM provides reasoning and language; the customer's own data provides the facts. This separation is what makes the product safe to deploy in enterprise maintenance environments where a wrong answer has real operational consequences.`,
    layers: [
      {
        layer: 'Data ingestion & indexing',
        detail: `Asset documentation — OEM manuals, SOPs, compliance records — alongside historical work orders and fault code libraries are ingested, chunked, and embedded into a vector store. We used a hybrid chunking strategy: semantic chunking for narrative technical documents, structured extraction for tabular fault code data. Embeddings are generated using a fine-tuned text embedding model and stored in pgvector on PostgreSQL, which let us leverage existing infrastructure rather than introducing a new vector database vendor — a deliberate choice that reduced operational complexity and accelerated security review.`,
      },
      {
        layer: 'Retrieval layer',
        detail: `On each technician query, the system runs a hybrid search combining dense vector similarity and sparse BM25 keyword matching. A cross-encoder re-ranking model then surfaces the most contextually relevant chunks before passing anything to the LLM. The retrieval layer is fully tenant-isolated — each customer's data is partitioned so cross-customer information leakage is architecturally impossible. This was a non-negotiable requirement for enterprise security reviews and became a standard feature of our AI governance collateral.`,
      },
      {
        layer: 'LLM reasoning layer',
        detail: `Retrieved context is composed into a structured prompt with role definition, safety instructions, mandatory source citation requirements, and the technician's natural language query. We use a GPT-4 class model via AWS Bedrock for enterprise data residency and SOC 2 compliance, with a fallback to a smaller model for latency-sensitive queries. All prompt templates are version-controlled and tested against the evaluation dataset before any change ships to production — prompt changes are treated with the same rigour as code changes.`,
      },
      {
        layer: 'Evaluation & feedback layer',
        detail: `Every response is logged with its retrieved context, generated output, and user feedback signal. We built an internal evaluation harness using LLM-as-judge scoring alongside human expert review on a sampled subset. Ragas-style metrics — faithfulness, answer relevancy, context precision — are tracked per release. The feedback loop surfaces low-confidence responses for review and directly feeds retrieval quality improvements. This is the layer that separates a product that degrades over time from one that compounds in quality.`,
      },
      {
        layer: 'Product integration layer',
        detail: `The Copilot surfaces inline within the work order view — not as a separate tab, not as a standalone tool. When a technician opens a work order, the Copilot is already pre-loaded with context: asset ID, fault code, location, and the last three work orders on that asset. The technician types or speaks a natural language description of what they're observing and gets a grounded, source-cited response. Response streaming is used to reduce perceived latency. Auto-drafted work order completion notes are generated at the end of each interaction for the technician to review and submit in one tap.`,
      },
    ],
    stackImage: '/maintenance-copilot-architecture.svg',
  },

  impact: [
    'Up to 67% reduction in troubleshooting time',
    'Improved first-time fix rates across early-adopter accounts',
    'Reduced unplanned downtime incidents',
    'Became the #1 cited reason for contract renewal in post-launch QBRs',
  ],

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
    {
      heading: 'Evaluation is a product discipline, not an engineering afterthought.',
      body: `PMs who ship AI features without a measurement layer are shipping blind. Building the golden dataset, defining the eval metrics, and treating prompt changes with the rigour of code changes — these are product decisions, not engineering ones. The teams that get this right build AI products that improve over time. The ones that don't build AI products that erode trust after the demo.`,
    },
  ],

  responsibilities: [
    'Responsibilities spanned AI strategy, customer discovery, roadmap prioritisation, monetisation model design, and cross-functional leadership across engineering, data science, design, and go-to-market.',
  ],

  technologies: ['Generative AI', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'pgvector', 'AWS Bedrock', 'LangChain', 'Langfuse'],
};
