"use client";

import { useState } from "react";

export default function AdminProjectGenerator() {
  const [data, setData] = useState({
    title: "",
    slug: "",
    description: "",
    tech: "",
    problem: "",
    why: "",
    approach: "",
    challenges: "",
    improvements: "",
    architectureImage: "/diagrams/your-diagram.png",
  });

  const update = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const generated = `{
  title: "${data.title}",
  slug: "${data.slug}",
  description: "${data.description}",
  tech: [${data.tech
    .split(",")
    .map((t) => `"${t.trim()}"`)
    .join(", ")}],
  sections: {
    problem: "${data.problem}",
    why: "${data.why}",
    approach: [
${data.approach
  .split("\n")
  .map((a) => `      "${a}"`)
  .join(",\n")}
    ],
    architectureImage: "${data.architectureImage}",
    challenges: "${data.challenges}",
    improvements: "${data.improvements}"
  }
},`;

  return (
    <div className="space-y-8">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm text-gray-400 mb-1 capitalize">
            {key}
          </label>
          <textarea
            value={value}
            onChange={(e) => update(key, e.target.value)}
            className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm"
            rows={key === "approach" ? 4 : 2}
          />
        </div>
      ))}

      <div>
        <p className="text-sm text-gray-400 mb-2">
          Generated Project Object
        </p>
        <pre className="bg-black border border-white/10 rounded-lg p-4 text-xs overflow-auto">
          {generated}
        </pre>
      </div>
    </div>
  );
}
