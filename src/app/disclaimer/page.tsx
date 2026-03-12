import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Disclaimer – Card Rummy Pakistan",
  description:
    "Disclaimer for cardrummy.org.pk. Important legal disclaimers regarding Card Rummy games and services in Pakistan.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    url: `${SITE_URL}/disclaimer`,
    title: "Disclaimer | Card Rummy Pakistan",
    description: "Legal disclaimers for Card Rummy website and app services.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-4 text-[var(--muted)]">
        Last updated: March 2026. Please read this disclaimer carefully before using{" "}
        <a href={SITE_URL} className="text-[var(--accent)] hover:underline">
          cardrummy.org.pk
        </a>{" "}
        or the Card Rummy app.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold">General information</h2>
          <p className="mt-2 text-[var(--muted)]">
            The content on this website is for informational purposes only. We make no warranties about the accuracy or completeness of the information provided.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Age restriction</h2>
          <p className="mt-2 text-[var(--muted)]">
            Users must be 18 years or older to play real-money games. It is your responsibility to comply with local laws regarding online gaming in your region.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Gaming disclaimer</h2>
          <p className="mt-2 text-[var(--muted)]">
            Real-money gaming involves risk. Play responsibly and only what you can afford to lose. We encourage responsible gambling. If you feel you have a gambling problem, please seek help.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">No guarantee</h2>
          <p className="mt-2 text-[var(--muted)]">
            We do not guarantee winnings or specific outcomes. Games are for entertainment. Past results do not indicate future performance.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">External links</h2>
          <p className="mt-2 text-[var(--muted)]">
            This site may contain links to third-party websites. We are not responsible for their content or practices.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-[var(--muted)]">
            Questions? Reach us at{" "}
            <a href="mailto:support@cardrummy.org.pk" className="text-[var(--accent)] hover:underline">
              support@cardrummy.org.pk
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
