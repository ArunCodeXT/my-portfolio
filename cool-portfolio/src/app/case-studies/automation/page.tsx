import AutomationCaseStudy from "./AutomationCaseStudy";

export const metadata = {
  title: "Python Automation Tool Case Study | Arun Kumar A",
  description:
    "A Python automation tool that eliminates repetitive tasks through clean, modular scripts.",
  openGraph: {
    title: "Python Automation Tool – Case Study",
    description:
      "Automating real-world workflows using Python scripts.",
    images: ["/og/automation.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Automation Tool – Case Study",
    description:
      "Reducing manual effort with Python-based automation.",
    images: ["/og/automation.png"],
  },
};

export default function Page() {
  return <AutomationCaseStudy />;
}
