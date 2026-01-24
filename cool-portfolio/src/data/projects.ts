export const projects = [
  {
    slug: "genai-application",
    title: "GenAI Application",
    description:
      "Production-style GenAI app solving real user queries using LLM APIs.",
    tech: ["Python", "LLM API", "Prompt Engineering"],
    github: "https://github.com/yourusername/genai-app",

    caseStudy: {
      problem:
        "Users need accurate and structured AI responses instead of raw text outputs.",
      why:
        "Unstructured outputs reduce usability and trust in AI systems.",
      approach: [
        "Designed structured prompts",
        "Added output validation",
        "Optimized latency and cost",
      ],
      architecture: [
        "Frontend → API Layer",
        "Prompt Builder",
        "LLM API",
        "Response Validator",
      ],
      challenges: [
        "Handling hallucinations",
        "Maintaining low latency",
      ],
      improvements: [
        "Add RAG for grounding",
        "Add caching layer",
      ],
    },
  },
];
