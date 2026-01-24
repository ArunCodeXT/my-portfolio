export const projects = [
  {
    id: "genai-rag",
    title: "RAG-Based Knowledge System",
    shortDescription:
      "Accurate question answering over private documents using LLMs.",
    coverImage: "/covers/rag.png",

    links: {
      github: "https://github.com/yourname/rag-project",
      caseStudy: "/projects/genai-rag",
    },

    caseStudy: {
      overview:
        "A Retrieval-Augmented Generation system designed to reduce hallucinations and improve answer reliability.",

      problem:
        "LLMs hallucinate when they lack domain-specific context.",

      impact:
        "Improves trust and accuracy in AI-driven knowledge systems.",

      architectureImage: "/diagrams/rag-architecture.png",

      approach: [
        "Chunked and embedded documents",
        "Stored embeddings in vector database",
        "Retrieved top-k relevant context",
        "Injected context into LLM prompt",
      ],

      techStack: [
        "Python",
        "LLM API",
        "Vector Database",
        "Embeddings",
      ],

      challenges:
        "Latency vs accuracy tradeoffs and chunk-size tuning.",

      results:
        "Significant reduction in hallucinated answers during evaluation.",

      improvements:
        "Add caching, evaluation metrics, and feedback loops.",
    },
  },
];
export default function AdminPage() {
  return null;
}
