import Link from "next/link";
import { CONTACT, SOCIAL_LINKS } from "@/lib/resume";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t-4 border-neo-black bg-neo-white px-8 py-10 dark:border-neo-white dark:bg-neo-dark-bg md:flex-row md:px-12">
      <div className="text-center md:text-left">
        <p className="text-3xl font-black text-neo-black dark:text-neo-white">Vinay Bhogal</p>
        <p className="mt-1 text-sm font-bold text-neo-black/70 dark:text-neo-white/70">
          {CONTACT.location}
        </p>
      </div>
      <p className="text-base font-bold text-neo-black dark:text-neo-white">
        &copy; {new Date().getFullYear()} Vinay Bhogal. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
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
