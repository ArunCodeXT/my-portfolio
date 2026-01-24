import IoTCaseStudy from "./IoTCaseStudy";

export const metadata = {
  title: "IoT Traffic Management Case Study | Arun Kumar A",
  description:
    "An IoT-based smart traffic management system that optimizes signal timing using real-time automation.",
  openGraph: {
    title: "IoT Traffic Management – Case Study",
    description:
      "Real-time traffic optimization using IoT and automation logic.",
    images: ["/og/iot.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Traffic Management – Case Study",
    description:
      "Smart traffic automation using IoT and Python.",
    images: ["/og/iot.png"],
  },
};

export default function Page() {
  return <IoTCaseStudy />;
}
