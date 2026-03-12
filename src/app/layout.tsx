import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Card Rummy APK Download – Pakistan's #1 Free Earning App 2026",
    template: "%s | Card Rummy Pakistan",
  },
  description:
    "Card Rummy APK download free for Android 2026. Pakistan's best real-money gaming app with 35+ games: Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Blackjack, Slots. Earn & withdraw via JazzCash, Easypaisa, Bank. 500K+ downloads.",
  keywords: [
    "what is card rummy",
    "card rummy",
    "card rummy apk",
    "card rummy download",
    "card rummy game",
    "card rummy Pakistan",
    "card rummy apk download",
    "card rummy app",
    "Pakistani earning app 2026",
    "rummy Pakistan",
    "online rummy Pakistan",
    "real money games Pakistan",
    "teen patti card rummy",
    "dragon vs tiger game",
    "JazzCash Easypaisa games",
    "card rummy withdraw",
    "card rummy bonus",
  ],
  authors: [{ name: "Card Rummy" }],
  creator: "Card Rummy",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Card Rummy",
    title: "Card Rummy APK Download – Pakistan's #1 Free Earning App 2026",
    description:
      "Download Card Rummy APK free. 35+ games: Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Blackjack, Slots. Earn real money. Withdraw via JazzCash, Easypaisa, Bank. 500K+ downloads.",
    images: [{ url: "/card-rummy.webp", width: 1200, height: 630, alt: "Card Rummy App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Card Rummy APK Download – Pakistani Earning App 2026",
    description: "Download Card Rummy APK free. 35+ casino games. Earn real money via JazzCash & Easypaisa. 500K+ downloads in Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification when you have it
    // google: "your-verification-code",
  },
  icons: {
    icon: "/card-rummy.webp",
    apple: "/card-rummy.webp",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Card Rummy Pakistan",
  url: SITE_URL,
  description:
    "Card Rummy APK download – Pakistan's #1 real-money gaming app. 35+ games. Earn via JazzCash, Easypaisa.",
  publisher: {
    "@type": "Organization",
    name: "Card Rummy",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Card Rummy",
  applicationCategory: "GameApplication",
  operatingSystem: "Android",
  description:
    "Pakistan's #1 real-money gaming app with 35+ casino games. Play Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Blackjack, Slots and earn real cash. Withdraw via JazzCash, Easypaisa, Bank. 500K+ downloads.",
  fileSize: "46.14 MB",
  softwareVersion: "1.230(0)",
  downloadUrl: "https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "200000",
  },
  author: {
    "@type": "Organization",
    name: "eriocardrummy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
