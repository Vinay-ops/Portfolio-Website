type SocialLink = {
  label: string;
  href: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Vinay-ops"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/"
  },
  {
    label: "Instagram",
    href: "https://instagram.com/"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-xs font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-accent-blue/80 hover:bg-slate-900 hover:text-white"
          aria-label={social.label}
        >
          <span className="text-[11px] uppercase tracking-[0.16em]">
            {social.label.charAt(0)}
          </span>
        </a>
      ))}
    </div>
  );
}

