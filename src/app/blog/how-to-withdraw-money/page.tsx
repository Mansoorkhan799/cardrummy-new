import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL } from "@/lib/config";
import { blogMetadata, articleSchema, howToSchema } from "@/lib/seo";

export const metadata: Metadata = blogMetadata({
  title: "How to Withdraw Money from Card Rummy Pakistan – Fast Payout Guide",
  description:
    "Learn how to withdraw money from Card Rummy to JazzCash, Easypaisa, or bank account. Step-by-step guide with withdrawal limits, processing times, and tips.",
  slug: "how-to-withdraw-money",
  datePublished: "2026-03-07",
  keywords: [
    "how to withdraw from card rummy pakistan",
    "card rummy withdraw",
    "card rummy withdrawal",
    "card rummy cash out",
    "card rummy payout Pakistan",
    "card rummy JazzCash withdraw",
  ],
});

const withdrawSteps = [
  { name: "Link your wallet (first time)", text: "Open Card Rummy, go to Withdraw section, select Easypaisa or JazzCash, tap + Wallet, enter name, phone number, and set 6-character withdrawal password. Tap Save." },
  { name: "Tap Withdraw", text: "Open the app and tap the Withdraw button. Check your withdrawable balance." },
  { name: "Enter amount and confirm", text: "Enter the amount, select your linked payment method (Easypaisa, JazzCash, or Bank), double-check details, and tap Confirm Withdraw. Money arrives in 5-10 minutes for mobile wallets, up to 24 hours for bank." },
];

export default function WithdrawMoneyBlog() {
  const howToJsonLd = howToSchema({
    name: "How to Withdraw Money from Card Rummy Pakistan",
    description: "Step-by-step guide to withdraw or cash out winnings from Card Rummy to JazzCash, Easypaisa, or bank account. Fast payout for Pakistani players.",
    url: `${SITE_URL}/blog/how-to-withdraw-money`,
    steps: withdrawSteps,
    image: `${SITE_URL}/card-rummy-app-withdrawl.webp`,
  });
  const articleJsonLd = articleSchema({
    headline: "How to Withdraw Money from Card Rummy Pakistan – Fast Payout Guide",
    description: "Learn how to withdraw money from Card Rummy to JazzCash, Easypaisa, or bank account. Step-by-step with tips for Pakistan.",
    url: `${SITE_URL}/blog/how-to-withdraw-money`,
    datePublished: "2026-03-07",
    image: `${SITE_URL}/card-rummy-app-withdrawl.webp`,
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header>
        <time className="text-sm text-[var(--muted)]">March 7, 2026</time>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          How to Withdraw Money from Card Rummy Pakistan – Fast Payout Guide
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Won some money on <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> and ready to cash out? This guide covers everything you need to know about withdrawing your earnings — from linking your wallet to choosing the fastest payment method and avoiding common issues. Need to <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">deposit money first</Link>? Check that guide.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-bold">Withdrawal Methods Available</h2>
          <p className="mt-3 text-[var(--muted)]"><Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> supports three withdrawal methods, all popular in Pakistan:</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Processing Time</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
              </tr></thead>
              <tbody>
                {[
                  { method: "Easypaisa", time: "5-10 minutes", best: "Fast small/medium withdrawals" },
                  { method: "JazzCash", time: "5-10 minutes", best: "Fast small/medium withdrawals" },
                  { method: "Bank Transfer", time: "1-24 hours", best: "Larger withdrawals" },
                ].map((m) => (
                  <tr key={m.method} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 font-medium">{m.method}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{m.time}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Step 1: Link Your Wallet (First Time Only)</h2>
          <p className="mt-3 text-[var(--muted)]">Before your first withdrawal, you need to add your payment account:</p>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open Card Rummy and go to the <strong className="text-[var(--foreground)]">&quot;Withdraw&quot;</strong> section in the lobby or wallet menu.</li>
            <li>Select your preferred method — <strong className="text-[var(--foreground)]">Easypaisa</strong> or <strong className="text-[var(--foreground)]">JazzCash</strong>.</li>
            <li>Tap the <strong className="text-[var(--foreground)]">&quot;+ Wallet&quot;</strong> icon to add a new account.</li>
            <li>Enter the <strong className="text-[var(--foreground)]">account holder&apos;s name</strong>, <strong className="text-[var(--foreground)]">phone number</strong>, and set a <strong className="text-[var(--foreground)]">6-character withdrawal password</strong>.</li>
            <li>Tap <strong className="text-[var(--foreground)]">&quot;Save&quot;</strong> to bind your wallet. You only need to do this once.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Step 2: Withdraw Your Earnings</h2>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open the app and tap the <strong className="text-[var(--foreground)]">&quot;Withdraw&quot;</strong> button.</li>
            <li>Check your <strong className="text-[var(--foreground)]">withdrawable balance</strong> — this is the amount you can cash out.</li>
            <li>Enter the amount you want to withdraw.</li>
            <li>Select your linked payment method (Easypaisa, JazzCash, or Bank).</li>
            <li>Double-check all details — account number, amount, and payment method.</li>
            <li>Tap <strong className="text-[var(--foreground)]">&quot;Confirm Withdraw&quot;</strong>.</li>
            <li>Your money will be credited to your account within <strong className="text-[var(--foreground)]">5-10 minutes</strong> for mobile wallets, or up to 24 hours for bank transfers.</li>
          </ol>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/card-rummy-app-withdrawl.webp" alt="Withdrawal screen in Card Rummy app" width={360} height={760} className="mx-auto max-h-[480px] w-auto object-contain" />
            <figcaption className="p-3 text-center text-sm text-[var(--muted)]">Withdrawal screen in Card Rummy app</figcaption>
          </figure>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Withdrawal Tips for Maximum Speed</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>&#10003; <strong className="text-[var(--foreground)]">Use Easypaisa or JazzCash</strong> — Mobile wallet withdrawals are processed in 5-10 minutes, much faster than bank transfers.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Withdraw during business hours</strong> — Transactions processed during daytime are usually faster.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Don&apos;t delay</strong> — When you earn a good amount, withdraw immediately. Don&apos;t let winnings sit in the app.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Keep your details updated</strong> — Make sure your linked phone number and account name are correct.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Meet the minimum limit</strong> — Check the app for current minimum withdrawal amounts before requesting.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Earn more first</strong> — Learn <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">how to win big</Link> and play the <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">best earning games</Link> to maximize what you withdraw.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Troubleshooting Withdrawal Issues</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Withdrawal pending for too long</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Most withdrawals complete in 5-10 minutes. If it has been more than 24 hours, contact customer support via in-app live chat or WhatsApp with your transaction details.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">&quot;Insufficient withdrawable balance&quot;</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Your total balance and withdrawable balance may differ. Bonus chips often have wager requirements before they become withdrawable. Play more games to convert bonus chips to withdrawable balance.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Wrong account details</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">If you entered incorrect details, the withdrawal may fail and funds will return to your game wallet. Update your wallet details and try again.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Forgot withdrawal password</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Contact customer support to reset your 6-character withdrawal password. They will verify your identity and help you set a new one.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-white hover:bg-[var(--accent-hover)]"
          >
            Download Card Rummy & Start Earning
          </a>
        </div>
      </div>
    </article>
  );
}
