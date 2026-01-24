import AgentCaseStudy from "./AgentCaseStudy";

export const metadata = {
  title: "AI Agent System Case Study | Arun Kumar A",
  description:
    "An autonomous AI agent capable of planning, tool usage, and multi-step execution.",
  openGraph: {
    title: "AI Agent System – Case Study",
    description:
      "Designing a task-oriented AI agent with planning and tool execution.",
    images: ["/og/agent.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent System – Case Study",
    description:
      "Building an autonomous AI agent with reasoning loops.",
    images: ["/og/agent.png"],
  },
};

export default function Page() {
  return <AgentCaseStudy />;
}
