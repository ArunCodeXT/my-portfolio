import Link from "next/link";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed Back Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24">{children}</div>
    </>
  );
}
