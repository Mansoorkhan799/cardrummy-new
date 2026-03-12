import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Card Rummy – Support & Help | Pakistan",
  description:
    "Contact Card Rummy support. Get help with your account, withdrawals, or the rummy app. We're here for Pakistani players.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Card Rummy | Pakistan",
    description: "Get in touch with Card Rummy support for help and queries.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 text-[var(--muted)]">
        Have a question or need help? Send us a message and we&apos;ll get back to you.
      </p>

      <ContactForm />

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6">
        <h2 className="font-display text-lg font-semibold">Other ways to reach us</h2>
        <ul className="mt-4 space-y-2 text-[var(--muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Email:</strong>{" "}
            <a href="mailto:support@cardrummy.pk" className="text-[var(--accent)] hover:underline">
              support@cardrummy.pk
            </a>
          </li>
          <li>
            <strong className="text-[var(--foreground)]">In-app:</strong> Open Card Rummy → Menu → Help & Support
          </li>
        </ul>
      </div>
    </div>
  );
}
