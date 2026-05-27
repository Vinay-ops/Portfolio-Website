import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vinay-bhogal-78a623319" },
  { label: "GitHub", href: "https://github.com/Vinay-ops" }
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 px-8 py-7 text-sm text-slate-500 md:flex-row md:px-12">
      <p className="text-2xl font-semibold text-slate-800">Vinay Bhogal</p>
      <p>&copy; {new Date().getFullYear()} Vinay Bhogal. All rights reserved.</p>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-700"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
