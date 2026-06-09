import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vinay-bhogal-78a623319", color: "bg-neo-blue" },
  { label: "GitHub", href: "https://github.com/Vinay-ops", color: "bg-neo-yellow" }
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t-4 border-neo-black bg-neo-white px-8 py-10 dark:border-neo-white dark:bg-neo-dark-bg md:flex-row md:px-12">
      <p className="text-3xl font-black text-neo-black dark:text-neo-white">Vinay Bhogal</p>
      <p className="text-base font-bold text-neo-black dark:text-neo-white">&copy; {new Date().getFullYear()} Vinay Bhogal. All rights reserved.</p>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="neo-btn inline-block border-3 border-neo-black px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neo-black shadow-neo-sm dark:border-neo-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
