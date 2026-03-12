import Link from "next/link";
import Image from "next/image";

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/card-rummy.webp" alt="Card Rummy" width={32} height={32} className="rounded-lg" />
              <span className="font-display text-lg font-bold"><span className="text-[var(--accent)]">Card</span> Rummy</span>
            </Link>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Pakistan&apos;s favourite online rummy card game.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              Download APK
            </a>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              Sitemap
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted)]">
          <p>© {year} Card Rummy. All rights reserved. Play responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
