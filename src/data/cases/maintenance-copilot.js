export const maintenanceCopilot = {
  slug: 'maintenance-copilot',
  title: 'Maintenance Copilot',
  domain: 'Enterprise Asset Management',

  problem: 'Technicians spent excessive time troubleshooting maintenance issues and searching documentation.',
  solution: 'LLM-powered conversational assistant embedded directly into maintenance workflows.',

  businessContext: `Before I wrote a single product spec, I made sure I understood what the business needed — not just what users wanted.

Customers were churning from our CMMS platform citing one consistent reason: they weren't getting enough value. In a market where competitors were closing the feature gap fast, we needed a wedge — something that deepened engagement, created measurable ROI, and justified a premium tier. Maintenance Copilot was that wedge.

The primary objective was retention and expansion. That single framing shaped every prioritisation call that followed. Features that made existing customers stickier took precedence over features that attracted new ones. AI wasn't a technology bet — it was a business bet with a clear hypothesis: if we could make technicians meaningfully faster and more effective, customers would renew, expand, and tell others.`,

  userSegmentation: `Three users interact with maintenance workflows: the facility director who cares about uptime and cost, the maintenance manager who cares about scheduling and utilisation, and the field technician who just needs to fix the asset in front of them — quickly, safely, and without hunting across six different systems for information.

I focused on the field technician as the primary target user.

Here's why: technicians are the execution layer of every maintenance operation. Their decisions — what to check first, which part to replace, when to escalate — directly determine first-time fix rates, asset uptime, and downstream cost. Yet most CMMS tools are designed for managers, not for the person in the field. Technicians carry the highest information friction and receive the least product investment. That gap was exactly where AI could deliver outsized value — and where the facility director would see the impact in the data.`,

  problemPrioritisation: `Technicians face several real problems: unclear fault codes, scattered documentation, difficulty escalating the right issues, inconsistent training, and slow parts lookup. I prioritised troubleshooting time as the primary problem for three reasons.

First, frequency — it happens on every complex work order, multiple times a week. Second, urgency — a technician stuck at 2 AM can't wait for a senior engineer to call back. Third, business impact — every additional hour of downtime has a direct, calculable cost. It was also the problem where AI had the clearest advantage over the status quo.`,

  whyAI: `I tested alternatives before defaulting to AI. Could rules solve this? No — fault codes vary by asset type, OEM, and age. Could better search solve this? Partially — but search requires the technician to know what to search for. Could standard automation solve this? No — the problem is unstructured knowledge retrieval across heterogeneous documents.

AI was justified because the problem required natural language understanding, synthesis across multiple sources, and context-aware answers that adapt to the specific asset, fault, and work order history. A rules engine couldn't do that. A search bar couldn't do that. An LLM grounded in the customer's own data could.`,

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
  ],

  responsibilities: [
    'AI strategy & vision',
    'Customer discovery',
    'Roadmap & prioritization',
    'Monetization model',
    'Cross-functional leadership',
  ],

  technologies: ['Generative AI', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'pgvector', 'Azure OpenAI', 'LangChain'],
};
