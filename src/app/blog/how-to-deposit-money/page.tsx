import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL } from "@/lib/config";
import { blogMetadata, articleSchema, howToSchema } from "@/lib/seo";

export const metadata: Metadata = blogMetadata({
  title: "How to Deposit Money in Card Rummy Pakistan – JazzCash, Easypaisa & Bank",
  description:
    "Complete guide to deposit money in Card Rummy using JazzCash, Easypaisa, or bank transfer. Step-by-step instructions, deposit bonuses, and tips for Pakistani players.",
  slug: "how-to-deposit-money",
  datePublished: "2026-03-09",
  keywords: [
    "how to add money in card rummy pakistan",
    "card rummy deposit",
    "how to deposit card rummy",
    "card rummy JazzCash",
    "card rummy Easypaisa",
    "add money card rummy Pakistan",
  ],
});

const depositSteps = [
  { name: "Open the app and log in", text: "Launch Card Rummy and sign in to your account. If you don't have an account yet, create one first." },
  { name: "Go to the Shop", text: "Tap the Shop button at the bottom of the screen, or tap the + icon next to your balance." },
  { name: "Choose your deposit amount", text: "Select from bundles starting from Rs. 20. Higher deposits unlock bigger bonuses." },
  { name: "Select payment method", text: "Choose between Easypaisa, JazzCash, or bank transfer based on which account you have." },
  { name: "Enter your phone number", text: "If you selected Easypaisa or JazzCash, enter the phone number linked to your wallet." },
  { name: "Verify with OTP", text: "Enter the one-time password (OTP) received on your phone to confirm the transaction." },
  { name: "Chips credited instantly", text: "Once confirmed, game chips equal to your deposit appear in your wallet immediately. Start playing right away." },
];

export default function DepositMoneyBlog() {
  const howToJsonLd = howToSchema({
    name: "How to Add Money in Card Rummy Pakistan",
    description: "Step-by-step guide to deposit money in Card Rummy using JazzCash, Easypaisa, or bank transfer. For Pakistani players.",
    url: `${SITE_URL}/blog/how-to-deposit-money`,
    steps: depositSteps,
    image: `${SITE_URL}/add-money-in-card-rummy-application.webp`,
  });
  const articleJsonLd = articleSchema({
    headline: "How to Deposit Money in Card Rummy Pakistan – JazzCash, Easypaisa & Bank",
    description: "Complete guide to add money in Card Rummy using JazzCash, Easypaisa, or bank transfer. Step-by-step with bonuses and tips for Pakistan.",
    url: `${SITE_URL}/blog/how-to-deposit-money`,
    datePublished: "2026-03-09",
    image: `${SITE_URL}/add-money-in-card-rummy-application.webp`,
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header>
        <time className="text-sm text-[var(--muted)]">March 9, 2026</time>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          How to Deposit Money in Card Rummy Pakistan – JazzCash, Easypaisa & Bank
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Want to start playing real-money games on <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link>? You need to deposit funds first. This guide covers every payment method available in Pakistan — JazzCash, Easypaisa, and bank transfer — with step-by-step instructions, deposit bonuses, and tips to get the most value from your money. Haven&apos;t downloaded yet? Read our <Link href="/blog/download-card-rummy" className="text-[var(--accent)] hover:underline">download guide</Link> first.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-bold">Available Payment Methods</h2>
          <p className="mt-3 text-[var(--muted)]"><Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> supports three trusted Pakistani payment methods:</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Easypaisa", icon: "📱", desc: "Pakistan's most popular mobile wallet. Deposit instantly using your phone number." },
              { name: "JazzCash", icon: "💳", desc: "Another leading mobile payment service. Quick, secure, and widely trusted." },
              { name: "Bank Transfer", icon: "🏦", desc: "Direct bank deposits for larger transactions. Safe and reliable." },
            ].map((m) => (
              <div key={m.name} className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4 text-center">
                <span className="text-2xl">{m.icon}</span>
                <h3 className="mt-2 font-display font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs text-[var(--muted)]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Step-by-Step Deposit Guide</h2>
          <ol className="mt-4 list-decimal list-inside space-y-4 text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">Open the app and log in</strong> — Launch Card Rummy and sign in to your account. If you don&apos;t have an account yet, create one first.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Go to the Shop</strong> — Tap the <strong className="text-[var(--foreground)]">&quot;Shop&quot;</strong> button at the bottom of the screen, or tap the <strong className="text-[var(--foreground)]">&quot;+&quot;</strong> icon next to your balance.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Choose your deposit amount</strong> — You will see different bundles starting from Rs. 20. Select the amount you want to add to your account. Higher deposits unlock bigger bonuses.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Select payment method</strong> — Choose between Easypaisa, JazzCash, or bank transfer based on which account you have.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Enter your phone number</strong> — If you selected Easypaisa or JazzCash, enter the phone number linked to your wallet.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Verify with OTP</strong> — You will receive a one-time password (OTP) on your phone. Enter it to confirm the transaction.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Chips credited instantly</strong> — Once the payment is confirmed, game chips equal to your deposit amount will appear in your wallet immediately. You can start playing right away.
            </li>
          </ol>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/add-money-in-card-rummy-application.webp" alt="Add money (deposit) screen in Card Rummy app" width={360} height={760} className="mx-auto max-h-[480px] w-auto object-contain" />
            <figcaption className="p-3 text-center text-sm text-[var(--muted)]">Add money screen in Card Rummy app</figcaption>
          </figure>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Deposit Bonuses You Can Claim</h2>
          <p className="mt-3 text-[var(--muted)]"><Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> rewards every deposit with bonus chips. Here are the main deposit bonuses. Learn <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">how to maximize these bonuses</Link> in our winning guide:</p>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">100% Welcome Bonus</strong> — First-time depositors get a 100% match bonus. Deposit Rs. 1,000 and get Rs. 1,000 extra free.</li>
            <li><strong className="text-[var(--foreground)]">Recharge Rebate (5%–30%)</strong> — Every deposit earns a rebate percentage. Deposit Rs. 3,000 for 5% rebate, up to 30% for Rs. 50,000.</li>
            <li><strong className="text-[var(--foreground)]">VIP Rebate (1%–10%)</strong> — Higher VIP levels earn daily rebates on deposits of Rs. 3,000+. VIP 1-2 gets 1%, up to VIP 19-20 getting 10%.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Deposit Tips for Pakistani Players</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>&#10003; <strong className="text-[var(--foreground)]">Start small</strong> — Begin with Rs. 20-100 to test the platform before making larger deposits.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Claim your welcome bonus</strong> — Make your first deposit count by claiming the 100% match bonus.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Use the same account</strong> — Always deposit from the same Easypaisa/JazzCash number linked to your Card Rummy account.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Check for promotions</strong> — Card Rummy runs special deposit offers during holidays and events. Check the app regularly.</li>
            <li>&#10003; <strong className="text-[var(--foreground)]">Set a budget</strong> — Decide how much you can afford to deposit and stick to it. Play responsibly.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Troubleshooting Deposit Issues</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Payment failed or stuck</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Check your Easypaisa/JazzCash balance. Make sure you have enough funds including any transaction fees. Try again after a few minutes. If money was deducted but chips not received, contact 24/7 support immediately.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">OTP not received</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Wait 60 seconds and try again. Make sure your phone number is correct and has network signal. Check your SMS inbox and spam folder.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Bonus not credited</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Welcome bonus is usually credited automatically. If not, check the promotions section in the app or contact customer support via live chat.</p>
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
            Download Card Rummy & Deposit Now
          </a>
        </div>
      </div>
    </article>
  );
}
