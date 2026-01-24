import RAGCaseStudy from "./RAGCaseStudy";

export const metadata = {
  title: "RAG System Case Study | Arun Kumar A",
  description:
    "A Retrieval-Augmented Generation system that grounds LLM responses using custom documents and vector databases.",
  openGraph: {
    title: "RAG System – Case Study",
    description:
      "Building a document-aware RAG pipeline using embeddings and vector search.",
    images: ["/og/rag.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG System – Case Study",
    description:
      "Document-grounded GenAI using Retrieval-Augmented Generation.",
    images: ["/og/rag.png"],
  },
};

export default function Page() {
  return <RAGCaseStudy />;
}
