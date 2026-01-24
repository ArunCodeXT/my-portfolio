import Link from "next/link";

export default function PlusProjectCard() {
  return (
    <Link
      href="/admin"
      className="flex items-center justify-center rounded-2xl
      border border-dashed border-white/20
      text-white/50 hover:text-white
      hover:border-white transition"
    >
      <div className="text-center py-20">
        <div className="text-4xl mb-2">+</div>
        <p className="text-sm">Add Project</p>
      </div>
    </Link>
  );
}
