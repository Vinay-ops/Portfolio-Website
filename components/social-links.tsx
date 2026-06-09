import { SOCIAL_LINKS } from "@/lib/resume";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((social, index) => {
        const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink"];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={`neo-btn flex h-10 items-center justify-center border-4 border-neo-black px-3 text-[10px] font-black uppercase tracking-[0.16em] text-neo-black shadow-neo-sm dark:border-neo-white ${colors[index % colors.length]}`}
            aria-label={social.label}
          >
            {social.label}
          </a>
        );
      })}
    </div>
  );
}
