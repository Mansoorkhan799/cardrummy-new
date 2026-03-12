import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { DOWNLOAD_URL } from "@/lib/config";

const appInfo = [
  { label: "App Name", value: "Card Rummy" },
  { label: "Developer", value: "eriocardrummy" },
  { label: "Category", value: "Casino, Cards, Earning" },
  { label: "App Size", value: "46.14 MB" },
  { label: "Latest Version", value: "v1.230(0)" },
  { label: "Last Updated", value: "9 March, 2026" },
  { label: "Requirements", value: "Android 5.0 & up" },
  { label: "Downloads", value: "500K+" },
  { label: "Payout Methods", value: "JazzCash, Easypaisa, Bank Transfer" },
  { label: "Language", value: "English, Urdu" },
  { label: "Price", value: "Free (0$)" },
];

const tocLinks = [
  { id: "overview", label: "Overview" },
  { id: "what-is", label: "What is Card Rummy?" },
  { id: "why-popular", label: "Why is Card Rummy So Popular?" },
  { id: "key-features", label: "Key Features of Card Rummy" },
  { id: "additional-features", label: "Additional Features" },
  { id: "all-games", label: "Complete List of Games in Card Rummy" },
  { id: "game-categories", label: "Game Categories (Multiplayer, Skill, Slots)" },
  { id: "top-games", label: "Top Games to Play & Earn" },
  { id: "download-install", label: "How to Download & Install Card Rummy APK" },
  { id: "system-requirements", label: "System Requirements (Android & PC)" },
  { id: "register-login", label: "How to Register, Login & Bind Email" },
  { id: "fix-ip-limit", label: "How to Fix IP Limit Exceeds Issue" },
  { id: "payment-methods", label: "Payment Methods" },
  { id: "deposit", label: "How to Deposit Money" },
  { id: "withdraw", label: "How to Withdraw Money" },
  { id: "bonuses", label: "All Bonuses & Rewards" },
  { id: "welcome-bonus-table", label: "Welcome Bonus Table" },
  { id: "recharge-rebate", label: "Recharge Rebate & VIP Levels" },
  { id: "refer-earn", label: "Refer & Earn Program" },
  { id: "how-to-earn", label: "How to Play & Earn on Card Rummy" },
  { id: "tips-tricks", label: "Tips & Tricks to Win Maximum" },
  { id: "whats-new", label: "What's New in the Latest Version" },
  { id: "safety-security", label: "Safety & Security" },
  { id: "customer-support", label: "Customer Support & Contact" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "user-reviews", label: "User Reviews" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQs" },
];

const keyFeatures = [
  {
    icon: "🎰",
    title: "35+ Casino Games",
    description:
      "Enjoy over 35 exciting games including Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Mines, Ludo, Blackjack, Baccarat, Slots, and many more. Every game is designed with high-quality graphics, smooth animations, and simple rules that make it perfect for both beginners and experienced players.",
  },
  {
    icon: "💰",
    title: "Real Money Earning",
    description:
      "Card Rummy allows you to earn real cash rewards by playing your favorite games. Place bets with game chips, win matches, and withdraw your earnings directly to your JazzCash, Easypaisa, or bank account. You can start earning with as little as Rs. 20 investment.",
  },
  {
    icon: "🎁",
    title: "Generous Bonuses & Promotions",
    description:
      "Get a welcome bonus on sign-up, daily login rewards, weekly bonuses, free spins, deposit bonuses, referral commissions, VIP perks, and special event promotions. These bonuses give you extra chances to play and win without spending your own money.",
  },
  {
    icon: "📲",
    title: "Easy to Use Interface",
    description:
      "The app features a clean, modern, and user-friendly interface with vibrant colors and clear menus. Every section is intuitively placed, making it easy to find games, place bets, deposit money, and withdraw winnings without any confusion.",
  },
  {
    icon: "🔒",
    title: "Secure & Safe Transactions",
    description:
      "Your data and money are protected with encryption and secure payment gateways. Card Rummy supports trusted local payment methods — Easypaisa, JazzCash, and bank transfers — so your deposits and withdrawals are fast, safe, and hassle-free.",
  },
  {
    icon: "⚡",
    title: "Fast Performance & Quick Loading",
    description:
      "The app runs smoothly on almost every Android device, including older models. No crashes, no glitches, no excessive storage usage. The lightweight design ensures fast loading and stable gameplay even on low-end phones with limited RAM.",
  },
  {
    icon: "👥",
    title: "Refer & Earn Program",
    description:
      "Earn money without even playing. Share your referral link with friends on WhatsApp, Facebook, or via SMS. When they join and deposit Rs. 3000, you instantly earn up to Rs. 350 as a commission. The more friends you invite, the higher your passive earnings.",
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    description:
      "If you face any difficulty — account issues, payment problems, or technical errors — the dedicated support team is available around the clock via in-app live chat and WhatsApp. They respond quickly and help resolve your issues in real time.",
  },
];

const additionalFeatures = [
  "Reliable and trustworthy platform trusted by 500K+ users",
  "Extra deposit bonus — get free chips on every recharge",
  "Daily VIP bonuses for regular and loyal players",
  "Quick, safe, and secure transaction processing",
  "Glitch-free, stable, and error-free gameplay",
  "HD graphics with clear buttons and beautiful visuals",
  "Background music and sound effects for immersive experience",
  "Regular app updates with new games and features",
  "Compatible with all Android devices (5.0 and up)",
  "Free to download — no registration fees",
  "Lottery system with 3D and 5D lotteries for big wins",
  "Sports betting on live cricket, football, and more",
];

const allGames = [
  "Dragon vs Tiger", "Mines", "Zoo Roulette", "7 Up Down", "Domino", "Rummy",
  "Fruit Line", "Roulette", "777 Bingo", "Car Roulette", "Rattling Gems", "Baccarat",
  "Teen Patti", "Fishing Rush", "Crash", "Sweet Bonanza", "Blackjack", "Spin of Fortune",
  "Dynamite Wild", "Ludo", "Bingo 90", "Wild Energy", "10 Cards", "Video Poker",
  "Video Poker 2", "Wow Slots", "Poker", "Best of Five", "Variation", "Teen Patti 20-20",
  "God of Fortune", "Double", "Andar Bahar",
];

const multiplayerGames = ["Dragon vs Tiger (Hot)", "7 Up Down (Hot)", "Zoo Roulette (Hot)", "Crash", "Car Roulette", "Andar Bahar", "Teen Patti 20-20", "Best of Five"];
const skillGames = ["Domino (Hot)", "Rummy (Hot)", "Teen Patti", "Fishing Rush", "10 Cards", "Poker", "Ludo", "Blackjack"];
const slotGames = ["Mines (Hot)", "Fruit Line", "777 Bingo", "Rattling Gems", "Video Poker 1 & 2", "Wild Energy", "Wow Slots", "God of Fortune"];

const welcomeBonusTable = [
  { deposit: "100", bonus: "100" },
  { deposit: "1,000", bonus: "1,000" },
  { deposit: "5,000", bonus: "5,000" },
  { deposit: "10,000", bonus: "10,000" },
  { deposit: "20,000", bonus: "20,000" },
  { deposit: "100,000", bonus: "100,000" },
];

const rechargeRebateTable = [
  { rebate: "5%", recharge: "3,000 PKR", wager: "2x" },
  { rebate: "10%", recharge: "5,000 PKR", wager: "3x" },
  { rebate: "15%", recharge: "8,000 PKR", wager: "4x" },
  { rebate: "20%", recharge: "10,000 PKR", wager: "5x" },
  { rebate: "25%", recharge: "20,000 PKR", wager: "6x" },
  { rebate: "30%", recharge: "50,000 PKR", wager: "7x" },
];

const vipRebateTable = [
  { level: "V1–V2", rebate: "1%" }, { level: "V3–V4", rebate: "2%" },
  { level: "V5–V6", rebate: "3%" }, { level: "V7–V8", rebate: "4%" },
  { level: "V9–V10", rebate: "5%" }, { level: "V11–V12", rebate: "6%" },
  { level: "V13–V14", rebate: "7%" }, { level: "V15–V16", rebate: "8%" },
  { level: "V17–V18", rebate: "9%" }, { level: "V19–V20", rebate: "10%" },
];

const androidReqs = [
  { label: "Operating System", min: "Android 5.0+", rec: "Android 8.0 or above" },
  { label: "RAM", min: "2 GB", rec: "4 GB or more" },
  { label: "Storage", min: "500 MB free", rec: "1 GB free space" },
  { label: "Processor", min: "Quad-core 1.5 GHz", rec: "Octa-core 2.0 GHz" },
  { label: "Internet", min: "Stable 3G or WiFi", rec: "Fast 4G or WiFi" },
];

const pcReqs = [
  { label: "Operating System", min: "Windows 7", rec: "Windows 10/11" },
  { label: "Processor", min: "Dual-core 1.4 GHz", rec: "Quad-core 2.0 GHz" },
  { label: "RAM", min: "2 GB", rec: "4 GB or more" },
  { label: "Graphics", min: "OpenGL ES 2.0", rec: "OpenGL ES 3.0+" },
  { label: "Storage", min: "1.5 GB free", rec: "2 GB+ free" },
  { label: "Internet", min: "Stable connection", rec: "Stable broadband" },
];

const latestVersionUpdates = [
  "Improved HD graphics with smooth animations and vibrant visuals",
  "Faster performance — the app opens quickly and runs without lag",
  "Simplified menu and layout for new users",
  "New games added: Dragon vs Tiger, Sweet Bonanza, and more",
  "Faster and smoother withdrawal and deposit processing",
  "Better security measures to protect accounts and money",
  "New bonuses and referral rewards for more earning chances",
  "Bug fixes and error removal for a smoother experience",
  "Improved background music and game sound effects",
  "New VIP system with extra prizes and benefits",
];

const userReviews = [
  { name: "Izhar Qadir", review: "In 2026 Card Rummy is the best choice for me. The games are fun and it provides real cash rewards. Withdrawal is super fast through JazzCash." },
  { name: "Ayesha Malik", review: "CardRummy is my go-to app for classic card games. It's easy to use, and the matchmaking is quick. Highly recommended for all Pakistani players!" },
  { name: "Zain Ali", review: "Amazing gameplay and smooth graphics. I've had great fun playing Rummy and Dragon vs Tiger. Absolutely worth downloading!" },
  { name: "Rabia Akmal", review: "CardRummy App is like an opportunity for me. It has a strong privacy policy that keeps my personal details and earnings safe." },
  { name: "Fatima Khan", review: "This app is perfect for card game lovers. Great features, and the daily rewards make it even better. I love the referral bonus system!" },
];

const faqs = [
  {
    q: "What is Card Rummy and how does it work?",
    a: "Card Rummy is Pakistan's most popular online gaming platform offering 35+ casino-style games like Teen Patti, Rummy, Poker, Dragon vs Tiger, Blackjack, Crash, Mines, and Slots. Download the APK, create a free account, deposit as low as Rs. 20, play games, win real cash, and withdraw via JazzCash, Easypaisa, or bank transfer.",
  },
  {
    q: "Can I win real money on Card Rummy?",
    a: "Yes! You can win real money by playing games, claiming bonuses, and using the referral program. Winnings can be withdrawn directly to your JazzCash, Easypaisa, or bank account within minutes.",
  },
  {
    q: "Is Card Rummy safe and secure to use?",
    a: "Yes. The app uses data encryption and secure payment gateways to protect your information and money. It supports trusted Pakistani payment methods and has 24/7 customer support. Always download from the official website for safety.",
  },
  {
    q: "How to download Card Rummy APK for Android?",
    a: "Visit the official Card Rummy website, click the Download button, allow installation from unknown sources in your phone settings, and install the downloaded APK file. The entire process takes less than 2 minutes.",
  },
  {
    q: "What bonuses are available on Card Rummy?",
    a: "Card Rummy offers a 100% welcome bonus on first deposit, daily login rewards, weekly bonuses, free spins, deposit rebates, VIP level bonuses, referral commissions, tournament prizes, lucky spin rewards, and special event promotions.",
  },
  {
    q: "Can I play Card Rummy on iPhone (iOS)?",
    a: "Currently, Card Rummy APK is available only for Android devices. iOS version is expected in a future update. You can also play on PC using an Android emulator like BlueStacks.",
  },
  {
    q: "How do I fix the 'IP Limit Exceeds' error?",
    a: "Download a reliable VPN app (like HotspotShield) from the Play Store, connect to a server, then open Card Rummy. The issue will be resolved instantly. You can turn off the VPN once the app starts running.",
  },
  {
    q: "What are the minimum deposit and withdrawal amounts?",
    a: "The minimum deposit starts from Rs. 20 with various bundle options available. Withdrawal limits and processing times are shown in the app's wallet section. Contact support for exact current limits.",
  },
  {
    q: "How long does withdrawal take on Card Rummy?",
    a: "Most withdrawals via JazzCash and Easypaisa are processed within 5-10 minutes. In some cases, it may take up to 24 hours depending on banking delays.",
  },
  {
    q: "Is there a Card Rummy Mod APK?",
    a: "Card Rummy is built with strong security measures that prevent hacking or modification. We recommend using only the official version from the trusted website for fair gameplay and account safety.",
  },
  {
    q: "How does the Refer & Earn program work?",
    a: "Share your unique referral link with friends via WhatsApp, Facebook, or SMS. When they join and recharge Rs. 3000, you earn up to Rs. 350 as commission. You continue earning a percentage of their activity.",
  },
  {
    q: "Can I recover my forgotten password?",
    a: "Yes. Go to the Login tab, click 'Forgot Password', enter your registered email, receive a verification code, enter the code, set a new password, and confirm. Your account will be accessible again immediately.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
        <Image
              src="/card-rummy.webp"
              alt="Card Rummy - Pakistan's #1 Real Money Gaming App"
              width={120}
              height={120}
              className="mx-auto rounded-2xl"
          priority
        />
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Card Rummy APK Download – Pakistan&apos;s #1 Free Earning App 2026
          </h1>
            <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">
              <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> is Pakistan&apos;s most popular real-money gaming app with 35+ casino games including Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Mines, Blackjack, and Slots. <Link href="/blog/download-card-rummy" className="text-[var(--accent)] hover:underline">Download the free APK</Link>, play exciting games, earn real cash, and <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">withdraw instantly</Link> via JazzCash, Easypaisa, or bank transfer. Trusted by 500K+ players across Pakistan.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)]">
              <span>500K+ Downloads</span>
              <span className="hidden sm:inline">•</span>
              <span>200K+ Ratings</span>
              <span className="hidden sm:inline">•</span>
              <span>46.14 MB</span>
              <span className="hidden sm:inline">•</span>
              <span>Android Only</span>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] sm:w-auto"
              >
                Download Card Rummy APK
              </a>
              <a
                href="#all-games"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-8 py-4 text-lg font-semibold transition-colors hover:bg-[var(--card-bg)] sm:w-auto"
              >
                View All 35+ Games
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App info table */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <table className="w-full text-left">
            <tbody>
              {appInfo.map((row) => (
                <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                  <th className="w-1/3 px-4 py-3 text-sm font-semibold text-[var(--muted)] sm:px-6">{row.label}</th>
                  <td className="px-4 py-3 text-sm text-[var(--foreground)] sm:px-6">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-bold sm:text-3xl text-center">App Screenshots</h2>
        <p className="mt-2 text-center text-[var(--muted)]">See how Card Rummy looks — download, deposit, withdraw, and refer & earn</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/card-rummy-apk.webp" alt="Card Rummy APK download screen" width={280} height={560} className="w-full object-cover" />
            <p className="px-4 py-3 text-sm font-medium">Download APK</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/add-money-in-card-rummy-application.webp" alt="Add money in Card Rummy" width={280} height={560} className="w-full object-cover" />
            <p className="px-4 py-3 text-sm font-medium">Deposit Money</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/card-rummy-app-withdrawl.webp" alt="Card Rummy withdrawal screen" width={280} height={560} className="w-full object-cover" />
            <p className="px-4 py-3 text-sm font-medium">Withdraw Cash</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
            <Image src="/card-rummy-refer-and-earn.webp" alt="Card Rummy Refer and Earn" width={280} height={560} className="w-full object-cover" />
            <p className="px-4 py-3 text-sm font-medium">Refer & Earn</p>
          </div>
        </div>
      </section>

      {/* Table of Contents — Accordion */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <TableOfContents items={tocLinks} />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

        {/* Overview */}
        <section id="overview" className="scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Overview</h2>
          <p className="mt-4 text-[var(--muted)]">
            <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> is a free-to-download Android app that offers a complete casino gaming experience right on your mobile phone. The app is divided into various sections, including card games, slots, multiplayer games, poker, and live sports betting, making it easy to find <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">games that you want to play</Link>. CardRummy is designed with modern HD graphics, smooth gameplay, and an intuitive interface that makes this platform suitable for both beginners and experienced casino players.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            The latest version of <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> provides improved graphics, faster performance, and enhanced security. This app offers secure payment methods to Pakistani players, including Easypaisa and JazzCash, which are the most common and easiest to use. The app also offers great earning opportunities — you can earn significant money even by <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">investing a small amount</Link>, claim free bonuses and rewards daily, and <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">withdraw your winnings instantly</Link>. So, <Link href="/blog/download-card-rummy" className="text-[var(--accent)] hover:underline">download the latest version of Card Rummy APK</Link> for free and start playing.
          </p>
        </section>

        {/* What is Card Rummy? */}
        <section id="what-is" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What is Card Rummy?</h2>
          <p className="mt-4 text-[var(--muted)]">
            <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> is Pakistan&apos;s most popular online gaming platform that combines classic card games like Teen Patti and Rummy with modern casino technology. It is a premier real-money gaming app designed specifically for Pakistani users, offering <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">35+ thrilling games</Link> including Rummy, Poker, Dragon vs Tiger, Blackjack, Baccarat, Ludo, Crash, Mines, Andar Bahar, 7 Up Down, and many more. Each game is designed with high-quality graphics and smooth gameplay that give a realistic casino feel to players.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            When people search for &quot;<Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link>&quot;, they are looking for a trusted platform to play card games and earn real money — and Card Rummy delivers exactly that. The platform allows you to <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">deposit money using local methods</Link> like JazzCash and Easypaisa, play your favorite games, <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">win real cash prizes</Link>, and <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">withdraw your earnings instantly</Link>. Upon joining and binding your email, players receive a welcome bonus. Additionally, there are daily bonuses, weekly rewards, free wheel spins, deposit bonuses, and a generous referral program where you earn commissions for every friend who joins.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            With its vibrant visuals, user-friendly design, 24/7 customer support, and secure transactions, Card Rummy stands out as the most enjoyable and engaging casino-style gaming platform available in Pakistan today.
          </p>
        </section>

        {/* Why Popular */}
        <section id="why-popular" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why is Card Rummy So Popular in Pakistan?</h2>
          <p className="mt-4 text-[var(--muted)]">
            Card Rummy has become the most popular gaming app in Pakistan for several compelling reasons:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">Real cash earnings</strong> — Players can earn real money just by playing games they love, making it both entertainment and an income source.</li>
            <li><strong className="text-[var(--foreground)]">Simple rules</strong> — Every game has easy-to-understand rules, making it accessible even for beginners who have never played casino games before.</li>
            <li><strong className="text-[var(--foreground)]">Beautiful design</strong> — The app features vibrant, colorful HD graphics that give a real casino experience on your phone.</li>
            <li><strong className="text-[var(--foreground)]">Local payments</strong> — Supports JazzCash, Easypaisa, and bank transfers — the most used payment methods in Pakistan — with fast processing times.</li>
            <li><strong className="text-[var(--foreground)]">Huge game variety</strong> — 35+ games including Teen Patti, Dragon vs Tiger, Poker, Rummy, Slots, Crash, and live sports betting keeps players engaged.</li>
            <li><strong className="text-[var(--foreground)]">Generous bonuses</strong> — Daily, weekly, and VIP bonuses along with referral rewards help players earn more without extra investment.</li>
            <li><strong className="text-[var(--foreground)]">Works on budget phones</strong> — Runs smoothly even on low-storage and older Android devices without lag or crashes.</li>
            <li><strong className="text-[var(--foreground)]">Safe and secure</strong> — Encrypted transactions, data protection, and trusted by 500K+ users across Pakistan.</li>
          </ul>
        </section>

        {/* Key Features */}
        <section id="key-features" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Key Features of Card Rummy</h2>
          <p className="mt-2 text-[var(--muted)]">Here are the core features that make Card Rummy the #1 gaming app in Pakistan:</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {keyFeatures.map((f) => (
              <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-colors hover:border-[var(--accent)]/50">
                <span className="text-3xl" aria-hidden>{f.icon}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section id="additional-features" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Additional Features of Card Rummy APK</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {additionalFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3">
                <span className="mt-0.5 text-[var(--accent)]">&#10003;</span>
                <span className="text-sm text-[var(--muted)]">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* All Games */}
        <section id="all-games" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Complete List of Games in Card Rummy</h2>
          <p className="mt-2 text-[var(--muted)]">Card Rummy offers 35+ exciting games, all free to play. Here is the complete list:</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {allGames.map((g) => (
              <li key={g} className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm">
                <span className="text-[var(--accent)]">&#9654;</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Game Categories */}
        <section id="game-categories" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Game Categories</h2>
          <p className="mt-2 text-[var(--muted)]">Games in Card Rummy are organized into three main categories, plus special events:</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold text-[var(--accent)]">Multiplayer Games</h3>
              <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">{multiplayerGames.map((g) => <li key={g}>• {g}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold text-[var(--gold)]">Skill-Based Games</h3>
              <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">{skillGames.map((g) => <li key={g}>• {g}</li>)}</ul>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold text-purple-400">Slot Games</h3>
              <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">{slotGames.map((g) => <li key={g}>• {g}</li>)}</ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
            <h3 className="font-display font-semibold">Special Events & Extra Earning Opportunities</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li><strong className="text-[var(--foreground)]">Tournaments</strong> — Join championship events, compete with other players, and win huge cash prizes.</li>
              <li><strong className="text-[var(--foreground)]">Live Sports Betting</strong> — Bet on live cricket, football, and more. Pick your team, set your prediction, and earn rewards if they win.</li>
              <li><strong className="text-[var(--foreground)]">7-Day Loyal Reward</strong> — Recharge daily for 7 consecutive days and get extra free cash on the 7th day.</li>
              <li><strong className="text-[var(--foreground)]">Lucky Spin Wheel</strong> — Free for all users. Spin the wheel and get surprise money. Each round offers a new chance to win.</li>
            </ul>
          </div>
        </section>

        {/* Top Games to Play & Earn */}
        <section id="top-games" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top Games to Play & Earn on <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link></h2>
          <p className="mt-2 text-[var(--muted)]">For detailed game guides with winning strategies for each game, read our <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">best games to play in Card Rummy</Link> guide.</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display text-lg font-semibold">Dragon vs Tiger</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">A fast-paced, simple card game. A Dragon card and a Tiger card are drawn — the higher card wins. Just choose your side and place your bet. It totally depends on your luck, making it exciting and quick. <strong className="text-[var(--foreground)]">Tip:</strong> Avoid tie bets, watch streaks, and start with small bets to learn patterns.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display text-lg font-semibold">Rummy</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">The classic card game and the heart of this platform. Arrange your cards into valid sets and sequences. The first player to complete all sets and declare wins the round. It requires both skill and strategy. <strong className="text-[var(--foreground)]">Tip:</strong> Get rid of high-value cards early, use jokers wisely, and play smart with small steps.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display text-lg font-semibold">7 Up Down</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">A luck-based card guessing game. You have to guess whether the card will be below or above the number 7. Simple, fast, and fun. <strong className="text-[var(--foreground)]">Tip:</strong> Remember that the chance of getting exactly 7 is lower than numbers above or below it.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display text-lg font-semibold">God of Fortune</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">A fun and exciting slot-style game where you can try your luck to win coins and rewards. Just set a bet, tap spin, and see what fortune brings. One of the luckiest games on Card Rummy. <strong className="text-[var(--foreground)]">Tip:</strong> Take small steps and enjoy your claims.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display text-lg font-semibold">Teen Patti</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Pakistan&apos;s most loved card game. Get three cards, bet based on your hand strength, and try to beat other players. Multiple variations available including Teen Patti 20-20. A perfect mix of skill, strategy, and luck.</p>
            </div>
          </div>
        </section>

        {/* Download & Install */}
        <section id="download-install" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Download & Install Card Rummy APK</h2>
          <p className="mt-2 text-[var(--muted)]">Follow these simple steps to download and install <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> on your Android device. The entire process takes less than 2 minutes. For a more detailed guide, read our <Link href="/blog/download-card-rummy" className="text-[var(--accent)] hover:underline">complete Card Rummy download tutorial</Link>.</p>

          <h3 className="mt-8 font-display text-xl font-semibold">Download Process</h3>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open your browser and visit the official Card Rummy website or click the Download button on this page.</li>
            <li>Click the &quot;Download APK&quot; button and wait for the file to finish downloading. Do not interrupt the process.</li>
            <li>The APK file will be saved in your phone&apos;s Downloads folder automatically.</li>
          </ol>

          <h3 className="mt-8 font-display text-xl font-semibold">Installation Process</h3>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Before installing, allow apps from unknown sources: Go to <strong className="text-[var(--foreground)]">Settings → Security → Unknown Sources</strong> and turn it on.</li>
            <li>Open your Downloads folder (File Manager → Downloads) and tap on the downloaded Card Rummy APK file.</li>
            <li>Tap <strong className="text-[var(--foreground)]">&quot;Install Now&quot;</strong> when prompted and wait for installation to complete.</li>
            <li>Once installed, the Card Rummy icon will appear on your home screen. Tap it to launch the app and start playing.</li>
          </ol>

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
        </section>

        {/* System Requirements */}
        <section id="system-requirements" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">System Requirements (Android & PC)</h2>
          <p className="mt-2 text-[var(--muted)]">Check if your device meets the requirements to run Card Rummy smoothly:</p>

          <h3 className="mt-8 font-display text-xl font-semibold">Android Phone Requirements</h3>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Specification</th>
                <th className="px-4 py-3 font-semibold">Minimum</th>
                <th className="px-4 py-3 font-semibold">Recommended</th>
              </tr></thead>
              <tbody>
                {androidReqs.map((r) => (
                  <tr key={r.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 text-[var(--muted)]">{r.label}</td>
                    <td className="px-4 py-3">{r.min}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{r.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 font-display text-xl font-semibold">PC Requirements (via Emulator)</h3>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Specification</th>
                <th className="px-4 py-3 font-semibold">Minimum</th>
                <th className="px-4 py-3 font-semibold">Recommended</th>
              </tr></thead>
              <tbody>
                {pcReqs.map((r) => (
                  <tr key={r.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 text-[var(--muted)]">{r.label}</td>
                    <td className="px-4 py-3">{r.min}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{r.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Register, Login & Bind Email */}
        <section id="register-login" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Register, Login & Bind Email on Card Rummy</h2>

          <h3 className="mt-8 font-display text-xl font-semibold">Step 1: Create Your Account (Sign Up)</h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Open the Card Rummy app on your device.</li>
            <li>Tap <strong className="text-[var(--foreground)]">&quot;Play as Guest&quot;</strong> — this automatically registers your device and assigns a unique User ID.</li>
            <li>The game lobby will appear, and you can start exploring games immediately.</li>
            <li>To personalize your profile, click the pen icon in the user tab and choose your display name.</li>
          </ol>

          <h3 className="mt-8 font-display text-xl font-semibold">Step 2: Bind Your Email (Recommended for Security)</h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Go to the user tab by clicking on your game avatar at the top left corner.</li>
            <li>Click on <strong className="text-[var(--foreground)]">&quot;Bind&quot;</strong> or <strong className="text-[var(--foreground)]">&quot;User ID&quot;</strong> button.</li>
            <li>Enter your active email address and tap <strong className="text-[var(--foreground)]">&quot;Get OTP&quot;</strong>.</li>
            <li>Check your email inbox, copy the verification code, and paste it in the app.</li>
            <li>Enter the CAPTCHA code displayed on screen.</li>
            <li>Set a strong password and re-enter it for confirmation.</li>
            <li>Enter your mobile number and tap <strong className="text-[var(--foreground)]">&quot;Confirm&quot;</strong> to complete the binding.</li>
          </ol>

          <h3 className="mt-8 font-display text-xl font-semibold">Step 3: Log In to Your Account</h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Open the Card Rummy app and tap <strong className="text-[var(--foreground)]">&quot;Log In&quot;</strong>.</li>
            <li>Enter your registered mobile number or email address.</li>
            <li>Enter your password and tap <strong className="text-[var(--foreground)]">&quot;Confirm Login&quot;</strong>.</li>
            <li>If you forget your password, use the <strong className="text-[var(--foreground)]">&quot;Forgot Password&quot;</strong> option to reset it via email.</li>
          </ol>
        </section>

        {/* Fix IP Limit */}
        <section id="fix-ip-limit" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Fix the &quot;IP Limit Exceeds&quot; Issue</h2>
          <p className="mt-4 text-[var(--muted)]">
            The most common issue players face when trying to log in is the <strong className="text-[var(--foreground)]">&quot;The number of IPs exceeds the limit&quot;</strong> error. Here is how to fix it. For a more detailed guide with VPN recommendations, read our <Link href="/blog/fix-ip-limit-exceeds" className="text-[var(--accent)] hover:underline">complete IP limit fix tutorial</Link>.
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Download a reliable VPN app from the Play Store (e.g., HotspotShield, SuperVPN, or any trusted VPN).</li>
            <li>Open the VPN app and tap the <strong className="text-[var(--foreground)]">Connect</strong> button.</li>
            <li>Once connected, open the Card Rummy app — the issue will be resolved instantly.</li>
            <li>Once the app starts running, you can turn off the VPN.</li>
          </ol>
        </section>

        {/* Payment Methods */}
        <section id="payment-methods" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Payment Methods</h2>
          <p className="mt-2 text-[var(--muted)]">Card Rummy supports the most popular and trusted payment methods in Pakistan for seamless deposits and withdrawals:</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-center">
              <span className="text-3xl" aria-hidden>📱</span>
              <h3 className="mt-3 font-display text-lg font-semibold">EasyPaisa</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Pakistan&apos;s most popular mobile wallet. Deposit and withdraw instantly using your phone number. No bank card needed. Fast, safe, and widely trusted.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-center">
              <span className="text-3xl" aria-hidden>💳</span>
              <h3 className="mt-3 font-display text-lg font-semibold">JazzCash</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Another leading mobile payment service in Pakistan. Quick, secure, and simple transactions. Perfect for players who want easy deposits and fast withdrawals.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-center">
              <span className="text-3xl" aria-hidden>🏦</span>
              <h3 className="mt-3 font-display text-lg font-semibold">Bank Transfer</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Direct bank transfers for larger transactions. Safe, reliable, and trusted by players who prefer traditional banking for deposits and withdrawals.</p>
            </div>
          </div>
        </section>

        {/* Deposit */}
        <section id="deposit" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Deposit Money in <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link></h2>
          <p className="mt-2 text-[var(--muted)]">For a complete guide with deposit bonuses and troubleshooting, read our <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">detailed deposit guide</Link>.</p>
          <ol className="mt-6 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open the <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> app and log in to your account.</li>
            <li>Click on the <strong className="text-[var(--foreground)]">&quot;Shop&quot;</strong> button or the <strong className="text-[var(--foreground)]">&quot;+&quot;</strong> icon on the main screen.</li>
            <li>You will see different deposit bundles starting from Rs. 20. Select the amount you want to deposit.</li>
            <li>Choose your payment method — <strong className="text-[var(--foreground)]">Easypaisa</strong>, <strong className="text-[var(--foreground)]">JazzCash</strong>, or <strong className="text-[var(--foreground)]">Bank Transfer</strong>.</li>
            <li>Enter your account phone number and proceed.</li>
            <li>You will receive an OTP — enter it to confirm and complete the purchase.</li>
            <li>Once confirmed, chips will be credited instantly to your game wallet, and you can start playing.</li>
          </ol>
        </section>

        {/* Withdraw */}
        <section id="withdraw" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Withdraw Money from <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link></h2>
          <p className="mt-2 text-[var(--muted)]">For withdrawal limits, processing times, and troubleshooting, read our <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">complete withdrawal guide</Link>.</p>
          <ol className="mt-6 list-decimal list-inside space-y-3 text-[var(--muted)]">
            <li>Open the app and tap the <strong className="text-[var(--foreground)]">&quot;Withdraw&quot;</strong> button in the lobby or wallet section.</li>
            <li>If you haven&apos;t linked your wallet, add your Easypaisa or JazzCash account first (enter account holder name, number, and a 6-character password).</li>
            <li>Check your withdrawable amount to ensure it meets the minimum limit.</li>
            <li>Enter the amount you want to cash out.</li>
            <li>Choose your preferred payment method (Easypaisa, JazzCash, or Bank Transfer).</li>
            <li>Double-check all details and tap <strong className="text-[var(--foreground)]">&quot;Confirm Withdraw&quot;</strong>.</li>
            <li>Your money will be credited within <strong className="text-[var(--foreground)]">5-10 minutes</strong>. In some cases, it may take up to 24 hours due to banking delays.</li>
          </ol>
        </section>

        {/* Bonuses & Rewards */}
        <section id="bonuses" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">All Bonuses & Rewards in Card Rummy</h2>
          <p className="mt-2 text-[var(--muted)]">Card Rummy offers one of the most generous bonus systems among all Pakistani gaming apps. Here are all the ways you can earn free rewards:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Welcome Bonus", desc: "Get a 100% bonus on your first deposit. Deposit Rs. 1000 and receive Rs. 1000 extra free!" },
              { title: "Sign-Up Reward", desc: "Receive Rs. 10 bonus instantly when you create your account and bind your email." },
              { title: "Daily Login Bonus", desc: "Open the app daily and claim free chips, coins, and spin rewards every day." },
              { title: "Weekly Bonuses", desc: "Regular players get weekly reward packages based on their activity and deposits." },
              { title: "Free Spin Wheel", desc: "Spin the lucky wheel daily for a chance to win surprise money and bonus chips." },
              { title: "Deposit Bonuses", desc: "Get extra chips on every recharge with rebate percentages increasing with deposit amount." },
              { title: "VIP Daily Bonus", desc: "Higher VIP levels unlock bigger daily, weekly, and monthly bonus rewards." },
              { title: "Mission Completion", desc: "Complete in-game missions and challenges to earn additional bonus rewards." },
              { title: "Referral Commissions", desc: "Earn money for every friend who joins using your link. Get up to Rs. 350 per referral." },
              { title: "Tournament Prizes", desc: "Join competitions and tournaments to win large cash prizes and special rewards." },
              { title: "7-Day Loyal Reward", desc: "Recharge daily for 7 days straight and receive extra free cash on the 7th day." },
              { title: "Special Event Promotions", desc: "Holiday and festival promotions with bonus cash, free spins, and lucky draws." },
            ].map((b) => (
              <div key={b.title} className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
                <strong className="text-[var(--foreground)]">{b.title}</strong>
                <p className="mt-1 text-sm text-[var(--muted)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Welcome Bonus Table */}
        <section id="welcome-bonus-table" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Welcome Bonus Table (100% First Deposit)</h2>
          <p className="mt-2 text-[var(--muted)]">Card Rummy offers a 100% recharge bonus for all new users on their first deposit:</p>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Deposit Amount (PKR)</th>
                <th className="px-4 py-3 font-semibold">Bonus Amount (PKR)</th>
              </tr></thead>
              <tbody>
                {welcomeBonusTable.map((r) => (
                  <tr key={r.deposit} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3">{r.deposit}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{r.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recharge Rebate & VIP */}
        <section id="recharge-rebate" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Recharge Rebate & VIP Level Bonuses</h2>

          <h3 className="mt-6 font-display text-xl font-semibold">Recharge Rebate Table</h3>
          <p className="mt-2 text-[var(--muted)]">Card Rummy offers rebate bonuses on every deposit. The more you recharge, the higher your rebate:</p>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Rebate %</th>
                <th className="px-4 py-3 font-semibold">Recharge Required</th>
                <th className="px-4 py-3 font-semibold">Wager Requirement</th>
              </tr></thead>
              <tbody>
                {rechargeRebateTable.map((r) => (
                  <tr key={r.rebate} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 text-[var(--accent)]">{r.rebate}</td>
                    <td className="px-4 py-3">{r.recharge}</td>
                    <td className="px-4 py-3">{r.wager}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 font-display text-xl font-semibold">VIP Level Rebate (Daily, min Rs. 3000 deposit)</h3>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">VIP Level</th>
                <th className="px-4 py-3 font-semibold">Rebate %</th>
              </tr></thead>
              <tbody>
                {vipRebateTable.map((r) => (
                  <tr key={r.level} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3">{r.level}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{r.rebate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Refer & Earn */}
        <section id="refer-earn" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Refer & Earn Program</h2>
          <p className="mt-4 text-[var(--muted)]">
            Card Rummy&apos;s referral program lets you earn real money without even playing games. Here&apos;s how it works:
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Go to the Refer & Earn section in the app.</li>
            <li>Copy your unique referral link or share the app directly on WhatsApp, Facebook, or via SMS.</li>
            <li>When your friend downloads and joins Card Rummy using your link, you start earning.</li>
            <li>When your referred friend deposits Rs. 3,000, you receive up to <strong className="text-[var(--foreground)]">Rs. 350</strong> as a bonus commission.</li>
            <li>You continue to earn a percentage of their activity as long as they play on the platform.</li>
          </ol>
          <p className="mt-4 text-[var(--muted)]">The more friends you invite, the higher your passive earnings. There is no limit to how many people you can refer.</p>
        </section>

        {/* How to Play & Earn */}
        <section id="how-to-earn" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to Play & Earn on Card Rummy</h2>
          <p className="mt-4 text-[var(--muted)]">There are multiple ways to earn real money on Card Rummy:</p>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">Play & Win Games</strong> — Choose your favorite game, place bets with game chips, and win real cash prizes that can be withdrawn.</li>
            <li><strong className="text-[var(--foreground)]">Refer & Earn</strong> — Invite friends and get free real money as commission for every player who joins with your referral link.</li>
            <li><strong className="text-[var(--foreground)]">Daily Login & Weekly Bonus</strong> — Stay active daily, log in once a day, and claim sign-in rewards. After the end of the week, receive weekly bonus rewards.</li>
            <li><strong className="text-[var(--foreground)]">Deposit Offers</strong> — Get extra bonus chips on every deposit. Higher deposits give higher rebate percentages and VIP level promotions.</li>
            <li><strong className="text-[var(--foreground)]">Special Events & Tournaments</strong> — Join tournaments and seasonal events to win large prizes and bonuses.</li>
            <li><strong className="text-[var(--foreground)]">Lucky Spin</strong> — Spin the free wheel daily for surprise money and extra rewards.</li>
            <li><strong className="text-[var(--foreground)]">Sports Betting</strong> — Bet on live cricket, football, and other sports events for additional earning opportunities.</li>
          </ul>
        </section>

        {/* Tips & Tricks */}
        <section id="tips-tricks" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Tips & Tricks to Win Maximum on <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link></h2>
          <p className="mt-2 text-[var(--muted)]">For advanced strategies, budget management, and game-specific tips, read our <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">complete guide to winning big on Card Rummy</Link>.</p>
          <div className="mt-6 space-y-4">
            {[
              { tip: "Choose Games You Understand", desc: "Start with games you already know. Understanding the rules gives you a significant advantage and reduces the risk of losing." },
              { tip: "Start With Small Bets", desc: "Always begin with small investments to learn game patterns. Once you are confident, gradually increase your bets." },
              { tip: "Use Bonuses Wisely", desc: "Take advantage of welcome bonuses, daily rewards, and deposit bonuses. They give you extra chips to play more games without spending your own money." },
              { tip: "Analyze Game Patterns", desc: "In games like Dragon vs Tiger, observe winning trends and streaks. Adjust your betting strategy based on patterns you notice." },
              { tip: "Stay Calm & Patient", desc: "Never play with frustration or greed. Stay calm, make smart decisions, and avoid chasing losses." },
              { tip: "Set a Budget & Stick to It", desc: "Decide your daily betting limit before playing and stop when you reach it. This protects your money and keeps the experience enjoyable." },
              { tip: "Take Regular Breaks", desc: "Breaks help you stay focused and avoid careless mistakes. Step away when you feel tired or frustrated." },
              { tip: "Set a Winning Goal", desc: "Decide a profit target for the day. Stop playing when you reach it to secure your winnings." },
              { tip: "Practice in Low-Bet Rooms", desc: "Before risking big money, practice in cheaper rooms to develop strategies and build confidence." },
              { tip: "Learn From Every Round", desc: "Whether you win or lose, observe what happened. Every round teaches you something new that improves your skills." },
              { tip: "Invite Friends for Extra Earnings", desc: "Use the referral system to earn passive income. Every friend who joins and plays adds to your earnings." },
              { tip: "Withdraw on Time", desc: "When you earn a good amount, don't delay. Transfer your winnings to JazzCash or Easypaisa immediately to keep your money safe." },
            ].map((t) => (
              <div key={t.tip} className="flex gap-3">
                <span className="mt-1 text-[var(--accent)]">&#10003;</span>
                <div>
                  <strong className="text-[var(--foreground)]">{t.tip}</strong>
                  <p className="text-sm text-[var(--muted)]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's New */}
        <section id="whats-new" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What&apos;s New in the Latest Version of Card Rummy</h2>
          <ul className="mt-6 space-y-2">
            {latestVersionUpdates.map((u) => (
              <li key={u} className="flex items-start gap-2 text-[var(--muted)]">
                <span className="mt-1 text-[var(--accent)]">&#10003;</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Safety & Security */}
        <section id="safety-security" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Safety & Security of Card Rummy</h2>
          <p className="mt-4 text-[var(--muted)]">
            Card Rummy provides a safe and secure gaming environment for all Pakistani players. The app uses basic security features including data encryption and SSL certificates to protect your personal information and financial details. It supports local payment options like JazzCash and Easypaisa, which add an extra layer of transaction security.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Your privacy and money are protected at all times. The platform is trusted by 500K+ users and provides 24/7 customer support to assist with any security concerns. However, since the app is not available on Google Play Store, always make sure to download it from the official website to avoid fake or malicious copies. Never share your password, OTP, or sensitive banking details with anyone.
          </p>
        </section>

        {/* Customer Support */}
        <section id="customer-support" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Customer Support & Contact</h2>
          <p className="mt-2 text-[var(--muted)]">Card Rummy offers multiple ways to get help if you face any issues:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold">Live Chat (In-App)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Talk directly to the support team inside the app. Click the &quot;Support&quot; icon in the game lobby. The fastest way to get real-time help.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold">WhatsApp Support</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Contact the support team via WhatsApp using the number provided in the app. Send your issue and receive instructions to fix it.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
              <h3 className="font-display font-semibold">In-App FAQs</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Check the dedicated FAQ section in the app covering registration, deposits, withdrawals, bonuses, and game rules for quick self-help.</p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section id="pros-cons" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Pros & Cons of Card Rummy</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--card-bg)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--accent)]">Pros</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>&#10003; 35+ exciting games in one free app</li>
                <li>&#10003; Earn real money with investments starting from Rs. 20</li>
                <li>&#10003; Easy transactions via JazzCash, Easypaisa, and bank</li>
                <li>&#10003; Fast withdrawals (5-10 minutes via mobile wallets)</li>
                <li>&#10003; Generous bonus system — welcome, daily, weekly, VIP, referral</li>
                <li>&#10003; User-friendly interface with HD graphics</li>
                <li>&#10003; Works on budget/older Android devices</li>
                <li>&#10003; 24/7 customer support via chat and WhatsApp</li>
                <li>&#10003; Free to download — no registration fees</li>
                <li>&#10003; Regular updates with new games and features</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[var(--gold)]/30 bg-[var(--card-bg)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--gold)]">Cons</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>&#9888; Risk of losing money in games</li>
                <li>&#9888; Some withdrawals may take up to 24 hours</li>
                <li>&#9888; Gameplay can become addictive</li>
                <li>&#9888; May run slow on very old or low-RAM phones</li>
                <li>&#9888; Currently Android only — no iOS version yet</li>
                <li>&#9888; Not available on Google Play Store</li>
                <li>&#9888; Requires stable internet connection</li>
                <li>&#9888; No official legal support or regulation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Reviews */}
        <section id="user-reviews" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">User Reviews</h2>
          <div className="mt-6 space-y-4">
            {userReviews.map((r) => (
              <blockquote key={r.name} className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
                <p className="text-sm text-[var(--muted)] italic">&quot;{r.review}&quot;</p>
                <footer className="mt-2 text-sm font-semibold text-[var(--foreground)]">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Conclusion</h2>
          <p className="mt-4 text-[var(--muted)]">
            <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> is undoubtedly one of the best online gaming platforms in Pakistan in 2026. With <Link href="/blog/best-games-to-play" className="text-[var(--accent)] hover:underline">35+ exciting games</Link> including Teen Patti, Rummy, Dragon vs Tiger, Poker, Crash, Blackjack, and Slots, it guarantees something for every type of player. Whether you are looking to relax with casual games or <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">challenge yourself to win big</Link>, Card Rummy has you covered.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            The app offers <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">easy deposits</Link> and <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">fast withdrawals</Link> through JazzCash, Easypaisa, and bank transfer — payment methods that every Pakistani can use. The generous bonus system — welcome bonus, daily rewards, VIP perks, referral commissions, and tournament prizes — gives you multiple ways to earn without heavy investment. With a user-friendly interface, HD graphics, secure transactions, and 24/7 support, Card Rummy delivers a premium gaming experience on your phone.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            However, always play responsibly, set your budget, and understand the risks involved. With smart play, good strategies, and self-control, Card Rummy can be both an exciting entertainment platform and a real earning opportunity. So why wait? Download Card Rummy APK today, start playing, and begin earning real cash from the comfort of your home.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--gold)] px-8 py-4 text-lg font-semibold text-black hover:bg-[var(--gold-dim)]"
            >
              Download Card Rummy APK Free
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14 scroll-mt-24 border-t border-[var(--border)] pt-14">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Frequently Asked Questions (FAQs)</h2>
          <dl className="mt-6 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5">
                <dt className="font-display font-semibold text-[var(--foreground)]">{faq.q}</dt>
                <dd className="mt-2 text-sm text-[var(--muted)]">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

    </div>
    </>
  );
}
