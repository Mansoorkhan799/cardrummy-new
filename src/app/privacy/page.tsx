import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy – Card Rummy Pakistan",
  description:
    "Privacy Policy for cardrummy.org.pk. Learn how Card Rummy collects, uses, and protects your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy | Card Rummy Pakistan",
    description: "How Card Rummy collects, uses, and protects your data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-[var(--muted)]">
        Last updated: March 2026. This Privacy Policy explains how Card Rummy ("we", "us", "our") at{" "}
        <a href={SITE_URL} className="text-[var(--accent)] hover:underline">
          cardrummy.org.pk
        </a>{" "}
        collects, uses, and protects your information.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold">Information we collect</h2>
          <p className="mt-2 text-[var(--muted)]">
            We may collect information you provide directly (such as name, email, phone when you contact us), device information, and usage data when you visit our website or use our app.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">How we use your information</h2>
          <p className="mt-2 text-[var(--muted)]">
            We use your information to provide support, improve our services, send updates, and comply with legal obligations.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Cookies</h2>
          <p className="mt-2 text-[var(--muted)]">
            We use cookies and similar technologies to improve your experience, analyse traffic, and remember your preferences.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Third parties</h2>
          <p className="mt-2 text-[var(--muted)]">
            We may share information with trusted partners for analytics, hosting, and payment processing. We do not sell your personal data.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Security</h2>
          <p className="mt-2 text-[var(--muted)]">
            We take reasonable steps to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Contact us</h2>
          <p className="mt-2 text-[var(--muted)]">
            For privacy questions, contact us at{" "}
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
