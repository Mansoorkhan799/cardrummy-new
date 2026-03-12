import type { Metadata } from "next";
import Link from "next/link";

import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Card Rummy Blog – Guides, Tips & Tutorials for Pakistani Players",
  description:
    "Read the latest Card Rummy guides, tips, and tutorials. Learn how to download, deposit, withdraw, fix errors, play the best games, and win big in Pakistan.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: "Card Rummy Blog | Pakistan",
    description: "Guides, tips, and tutorials for Card Rummy in Pakistan.",
  },
};

const posts = [
  {
    slug: "download-card-rummy",
    title: "Download Card Rummy APK – Complete Guide for Android 2026",
    excerpt: "Step-by-step guide to download and install Card Rummy APK on any Android phone. Includes troubleshooting tips and system requirements.",
    date: "March 10, 2026",
  },
  {
    slug: "how-to-deposit-money",
    title: "How to Deposit Money in Card Rummy Pakistan – JazzCash, Easypaisa & Bank",
    excerpt: "Complete guide to adding funds to your Card Rummy account using JazzCash, Easypaisa, or bank transfer. Step-by-step with screenshots tips.",
    date: "March 9, 2026",
  },
  {
    slug: "fix-ip-limit-exceeds",
    title: "How to Fix IP Limit Exceeds Issue in Card Rummy – Quick Solution",
    excerpt: "Getting the 'IP Limit Exceeds' error on Card Rummy? Here's the fastest fix using a VPN, plus alternative solutions and prevention tips.",
    date: "March 8, 2026",
  },
  {
    slug: "how-to-withdraw-money",
    title: "How to Withdraw Money from Card Rummy Pakistan – Fast Payout Guide",
    excerpt: "Learn how to cash out your Card Rummy winnings to JazzCash, Easypaisa, or bank account. Withdrawal limits, processing times, and tips.",
    date: "March 7, 2026",
  },
  {
    slug: "best-games-to-play",
    title: "Best Games to Play in Card Rummy Pakistan – Top Earning Games 2026",
    excerpt: "Discover the highest-earning and most fun games on Card Rummy. Detailed breakdown of Dragon vs Tiger, Rummy, Teen Patti, Crash, and more.",
    date: "March 6, 2026",
  },
  {
    slug: "how-to-win-big",
    title: "How to Win Big in Card Rummy Pakistan – Pro Tips, Tricks & Strategies",
    excerpt: "Expert strategies and winning tips to maximize your earnings on Card Rummy. Budget management, game selection, bonus usage, and more.",
    date: "March 5, 2026",
  },
];

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Card Rummy Blog</h1>
      <p className="mt-4 text-[var(--muted)]">
        Guides, tips, and tutorials to help you get the most out of Card Rummy in Pakistan.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-colors hover:border-[var(--accent)]/50"
          >
            <time className="text-xs text-[var(--muted)]">{post.date}</time>
            <h2 className="mt-2 font-display text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-medium text-[var(--accent)]">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
