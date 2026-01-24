import GenAICaseStudy from "./GenAICaseStudy";

export const metadata = {
  title: "GenAI Application Case Study | Arun Kumar A",
  description:
    "A practical GenAI application using LLM APIs, focusing on prompt design, system architecture, and real-world usage.",
  openGraph: {
    title: "GenAI Application – Case Study",
    description:
      "How I built a production-style GenAI system using LLM APIs.",
    images: ["/og/genai.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenAI Application – Case Study",
    description:
      "Building a real-world GenAI system using LLM APIs.",
    images: ["/og/genai.png"],
  },
};

export default function Page() {
  return <GenAICaseStudy />;
}
