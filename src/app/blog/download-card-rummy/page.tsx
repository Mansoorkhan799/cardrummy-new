import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL } from "@/lib/config";
import { blogMetadata, articleSchema, howToSchema } from "@/lib/seo";
import Breadcrumbs, { BreadcrumbSchema } from "@/components/Breadcrumbs";

const downloadSteps = [
  { name: "Visit official website", text: "Open your browser and go to the official Card Rummy website. Tap the Download APK button." },
  { name: "Enable Unknown Sources", text: "Go to Settings → Security → Unknown Sources and turn it on. On newer Android, allow for your browser." },
  { name: "Install the APK", text: "Open Downloads folder, tap the Card Rummy APK file, and press Install Now. Wait for installation to complete." },
  { name: "Launch the app", text: "Tap the Card Rummy icon on your home screen. Start as guest or create an account immediately." },
];

export const metadata: Metadata = blogMetadata({
  title: "Download Card Rummy APK – Complete Guide for Android 2026",
  description:
    "Step-by-step guide to download and install Card Rummy APK on Android. System requirements, troubleshooting, and everything you need to start playing in Pakistan.",
  slug: "download-card-rummy",
  datePublished: "2026-03-10",
  keywords: ["download card rummy", "card rummy APK download", "card rummy android", "card rummy latest version"],
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Download Card Rummy APK", href: undefined },
];

export default function DownloadCardRummyBlog() {
  const howToJsonLd = howToSchema({
    name: "How to Download Card Rummy APK in Pakistan",
    description: "Step-by-step guide to download and install Card Rummy APK on Android. For Pakistani players.",
    url: `${SITE_URL}/blog/download-card-rummy`,
    steps: downloadSteps,
    image: `${SITE_URL}/card-rummy-apk.webp`,
  });
  const articleJsonLd = articleSchema({
    headline: "Download Card Rummy APK – Complete Guide for Android 2026",
    description:
      "Step-by-step guide to download and install Card Rummy APK on Android. System requirements, troubleshooting, and everything you need to start playing in Pakistan.",
    url: `${SITE_URL}/blog/download-card-rummy`,
    datePublished: "2026-03-10",
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <Breadcrumbs items={breadcrumbItems} />
      </nav>
      <header>
        <time className="text-sm text-[var(--muted)]">March 10, 2026</time>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Download Card Rummy APK – Complete Guide for Android 2026
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Looking for a safe and easy way to download Card Rummy on your Android phone? This complete guide walks you through every step — from finding the official APK to installing it, setting up your account, and starting your first game. Whether you are a beginner or returning player, this guide covers everything.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] sm:w-auto"
          >
            Download Card Rummy APK
          </a>
          <span className="text-sm text-[var(--muted)]">v1.230 • 46.14 MB • Android 5.0+</span>
        </div>
      </header>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-bold">What is Card Rummy APK?</h2>
          <p className="mt-3 text-[var(--muted)]">
            <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> APK is the Android installation file for Pakistan&apos;s most popular real-money gaming app. Since the app is not available on the Google Play Store, you download the APK file directly from the official website and install it manually. The app is completely free to download and offers <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">35+ casino-style games</Link> including Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Blackjack, Mines, and Slots.
          </p>
          <p className="mt-3 text-[var(--muted)]">
            The latest version (v1.230) is 46.14 MB in size and works on Android 5.0 and above. It supports JazzCash, Easypaisa, and bank transfers for deposits and withdrawals.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">System Requirements</h2>
          <p className="mt-3 text-[var(--muted)]">Before downloading, make sure your device meets these minimum requirements:</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <tbody>
                {[
                  { label: "Operating System", value: "Android 5.0 or higher" },
                  { label: "RAM", value: "2 GB minimum (4 GB recommended)" },
                  { label: "Storage", value: "500 MB free space" },
                  { label: "Internet", value: "Stable 3G, 4G, or WiFi" },
                  { label: "File Size", value: "46.14 MB" },
                ].map((r) => (
                  <tr key={r.label} className="border-b border-[var(--border)] last:border-0">
                    <th className="px-4 py-3 font-semibold text-[var(--muted)]">{r.label}</th>
                    <td className="px-4 py-3">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Step-by-Step Download Guide</h2>
          <ol className="mt-4 list-decimal list-inside space-y-4 text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">Visit the official website</strong> — Open Chrome or any browser on your Android phone and go to the official Card Rummy website. Make sure you are on the real website to avoid fake or malicious APK files.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Tap the Download button</strong> — You will see a large &quot;Download APK&quot; button on the homepage. Tap it and the APK file will start downloading automatically. Wait until the download completes without interrupting.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Enable Unknown Sources</strong> — Before installing, you need to allow apps from unknown sources. Go to <strong className="text-[var(--foreground)]">Settings → Security (or Privacy) → Unknown Sources</strong> and turn it on. On newer Android versions, you may need to allow it specifically for your browser.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Install the APK</strong> — Open your Downloads folder (File Manager → Downloads), tap the Card Rummy APK file, and press &quot;Install Now&quot;. Grant any required permissions and wait for the installation to finish.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Launch the app</strong> — Once installed, the Card Rummy icon will appear on your home screen. Tap it to open the app. You can start as a guest or create an account immediately.
            </li>
          </ol>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/card-rummy-apk.webp" alt="Card Rummy APK download screen" width={360} height={760} className="mx-auto max-h-[480px] w-auto object-contain" />
            <figcaption className="p-3 text-center text-sm text-[var(--muted)]">Card Rummy APK download interface</figcaption>
          </figure>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">How to Set Up Your Account After Download</h2>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open Card Rummy and tap <strong className="text-[var(--foreground)]">&quot;Play as Guest&quot;</strong> to get started immediately.</li>
            <li>Go to your profile (top-left avatar) and tap <strong className="text-[var(--foreground)]">&quot;Bind&quot;</strong> to secure your account.</li>
            <li>Enter your email address, tap &quot;Get OTP&quot;, and enter the verification code from your inbox.</li>
            <li>Set a strong password, enter your mobile number, and tap &quot;Confirm&quot;.</li>
            <li>Your account is now secured. You will receive a <strong className="text-[var(--foreground)]">Rs. 10 welcome bonus</strong> for binding your email.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Troubleshooting Common Download Issues</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">&quot;App not installed&quot; error</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Make sure Unknown Sources is enabled. Also check that you have enough storage space (at least 500 MB free). If the problem persists, delete any old version of the app and try again.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">&quot;IP Limit Exceeds&quot; error after opening</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Download a VPN app (like HotspotShield), connect to any server, then open Card Rummy. Turn off the VPN once the app loads. Read our <Link href="/blog/fix-ip-limit-exceeds" className="text-[var(--accent)] hover:underline">full guide on fixing IP limit issues</Link>.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="font-semibold">Download stuck or slow</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Switch to a stable WiFi connection. If using mobile data, make sure you have good signal strength. Try clearing your browser cache and downloading again.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Can I Download Card Rummy on PC?</h2>
          <p className="mt-3 text-[var(--muted)]">
            Yes! While Card Rummy is built for Android, you can play it on PC using an Android emulator like BlueStacks or LDPlayer. Download the emulator, install it on your Windows PC, then download the Card Rummy APK inside the emulator. Your PC should have at least Windows 7, 2 GB RAM, and 1.5 GB free storage for a smooth experience.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">What You Get After Downloading</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>&#10003; Access to <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">35+ casino games</Link> for free</li>
            <li>&#10003; Rs. 10 welcome bonus on email binding</li>
            <li>&#10003; Daily login rewards and free spin wheel</li>
            <li>&#10003; 100% bonus on <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">first deposit</Link></li>
            <li>&#10003; Refer & Earn program to earn passive income</li>
            <li>&#10003; <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">Fast withdrawals</Link> via JazzCash, Easypaisa, Bank</li>
          </ul>
        </section>

        <div className="mt-8 flex justify-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-white hover:bg-[var(--accent-hover)]"
          >
            Download Card Rummy APK Now
          </a>
        </div>
      </div>
    </article>
  );
}
