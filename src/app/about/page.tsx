import type { Metadata } from "next";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Card Rummy – Pakistan Online Rummy Game",
  description:
    "About Card Rummy – Pakistan's trusted online rummy card game. Safe, fair play. Learn about our app and commitment to players.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Card Rummy | Pakistan",
    description: "About Card Rummy – Pakistan's trusted online rummy card game.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        About Card Rummy
      </h1>
      <p className="mt-4 text-[var(--muted)]">
        Card Rummy is Pakistan&apos;s favourite online rummy card game. We bring the classic game to your phone so you can play anytime, anywhere.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold">Our mission</h2>
          <p className="mt-2 text-[var(--muted)]">
            We want every rummy lover in Pakistan to have a safe, fast, and fun place to play. Card Rummy offers fair games, quick withdrawals, and 24/7 support so you can focus on the game.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Safe & secure</h2>
          <p className="mt-2 text-[var(--muted)]">
            Your data and money are protected. We use secure payments and encryption. Play responsibly and within your limits.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">For Pakistani players</h2>
          <p className="mt-2 text-[var(--muted)]">
            Card Rummy is built for Pakistan. We support local payment methods and customer care in your language. Join thousands of players who already play Card Rummy.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--accent-hover)]"
        >
          Download Card Rummy
        </a>
      </div>
    </div>
  );
}
