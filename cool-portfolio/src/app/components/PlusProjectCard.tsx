import Link from "next/link";

export default function PlusProjectCard() {
  return (
    <Link
      href="/admin"
      className="flex items-center justify-center rounded-2xl
      border border-dashed border-violet-400/30
      text-violet-400/60 hover:text-violet-400
      hover:border-violet-400 transition"
    >
      <div className="text-center py-20">
        <div className="text-4xl mb-2">+</div>
        <p className="text-sm">Add Project</p>
      </div>
    </Link>
  );
}
