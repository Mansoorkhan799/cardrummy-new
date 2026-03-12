import type { Metadata } from "next";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Best Games to Play in Card Rummy Pakistan – Top Earning Games 2026",
  description:
    "Discover the best and highest-earning games on Card Rummy Pakistan. Detailed guide to Dragon vs Tiger, Rummy, Teen Patti, Crash, Mines, 7 Up Down, Poker, and more.",
  keywords: ["best games card rummy", "card rummy games", "card rummy dragon vs tiger", "card rummy teen patti", "top earning games card rummy Pakistan"],
};

const games = [
  {
    name: "Dragon vs Tiger",
    category: "Multiplayer",
    difficulty: "Easy",
    earning: "High",
    description: "One of the most popular and fastest games on Card Rummy. Two cards are drawn — one for Dragon and one for Tiger. The higher card wins. You simply pick a side and place your bet. The game is purely luck-based, making it exciting and quick.",
    tips: [
      "Avoid betting on Tie — the odds are very low.",
      "Watch for streaks. If Dragon wins 3-4 times in a row, consider switching.",
      "Start with small bets to observe patterns before going bigger.",
      "Set a profit target and stop when you reach it.",
    ],
  },
  {
    name: "Rummy",
    category: "Skill-Based",
    difficulty: "Medium",
    earning: "High",
    description: "The classic card game and the heart of this platform. Players arrange their cards into valid sets (same rank, different suits) and sequences (consecutive cards, same suit). The first player to complete all sets and declare wins the round. It requires both skill and strategy.",
    tips: [
      "Get rid of high-value cards early to minimize losses if you don't win.",
      "Use jokers wisely — save them for completing difficult sequences.",
      "Focus on building a pure sequence first (no joker) as it's mandatory.",
      "Watch what cards your opponents pick and discard to predict their hand.",
    ],
  },
  {
    name: "Teen Patti",
    category: "Multiplayer",
    difficulty: "Medium",
    earning: "High",
    description: "Pakistan's most beloved card game, also known as 3 Patti. Each player gets three cards and bets based on hand strength. Available in multiple variations including Teen Patti 20-20 and Best of Five. A perfect mix of skill, strategy, and luck.",
    tips: [
      "Play blind in early rounds to build the pot with lower bets.",
      "Learn hand rankings — Trail (three of a kind) is the highest.",
      "Don't bluff too often. Experienced players will catch on.",
      "Fold early if your hand is weak rather than chasing losses.",
    ],
  },
  {
    name: "Crash",
    category: "Multiplayer",
    difficulty: "Easy",
    earning: "Very High",
    description: "A thrilling game where a multiplier starts at 1x and keeps increasing. You place a bet and cash out before the multiplier crashes. The longer you wait, the higher the payout — but if you wait too long and it crashes, you lose everything. Pure adrenaline.",
    tips: [
      "Cash out early (1.5x-2x) for consistent small wins.",
      "Don't get greedy — the crash can happen at any moment.",
      "Set auto-cashout at a safe multiplier to remove emotion from the decision.",
      "Never bet more than you can afford to lose on a single round.",
    ],
  },
  {
    name: "Mines",
    category: "Slot/Skill",
    difficulty: "Easy",
    earning: "High",
    description: "A grid-based game where you tap tiles to reveal gems or mines. Each gem increases your multiplier. Hit a mine and you lose. You can cash out at any time. The fewer mines you set, the easier it is — but the payouts are lower.",
    tips: [
      "Start with more mines for higher multipliers, but cash out after 2-3 safe picks.",
      "Use a pattern — many players pick corners or edges first.",
      "Don't be greedy. Cash out when you have a decent multiplier.",
      "Start with small bets while learning the game's feel.",
    ],
  },
  {
    name: "7 Up Down",
    category: "Multiplayer",
    difficulty: "Easy",
    earning: "Medium",
    description: "A simple dice/card guessing game. You predict whether the result will be below 7, exactly 7, or above 7. Fast rounds and easy to understand — perfect for beginners.",
    tips: [
      "Betting on 'above' or 'below' 7 gives nearly 50/50 odds.",
      "Avoid betting on exactly 7 — the probability is very low.",
      "Use small consistent bets for steady earnings.",
      "Great for warming up before playing higher-stakes games.",
    ],
  },
  {
    name: "God of Fortune",
    category: "Slots",
    difficulty: "Easy",
    earning: "Medium-High",
    description: "A fun slot-style game where you set a bet and spin. Matching symbols pay out different amounts. One of the luckiest games on Card Rummy with occasional big jackpots.",
    tips: [
      "Bet small and play many rounds for more chances to hit a jackpot.",
      "Don't chase losses — slots are luck-based.",
      "Take advantage of free spins from daily bonuses.",
      "Set a loss limit and stop when you reach it.",
    ],
  },
  {
    name: "Ludo",
    category: "Skill-Based",
    difficulty: "Easy",
    earning: "Medium",
    description: "The classic board game everyone knows, now with real money stakes. Roll dice, move your pieces, and try to get all four home before your opponents. Fun, social, and nostalgic.",
    tips: [
      "Focus on getting multiple pieces out of the starting area early.",
      "Block opponents when possible to slow them down.",
      "Don't leave pieces vulnerable near the opponent's home stretch.",
      "Play defensively when you're in the lead.",
    ],
  },
];

export default function BestGamesBlog() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <time className="text-sm text-[var(--muted)]">March 6, 2026</time>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Best Games to Play in Card Rummy Pakistan – Top Earning Games 2026
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          <Link href="/" className="text-[var(--accent)] hover:underline">Card Rummy</Link> offers 35+ games, but which ones are the best for earning real money? This guide breaks down the top 8 games by earning potential, difficulty, and winning strategies. Whether you prefer skill-based card games or luck-based slots, there&apos;s something here for you. Haven&apos;t downloaded yet? Get the <Link href="/blog/download-card-rummy" className="text-[var(--accent)] hover:underline">Card Rummy APK here</Link>.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="font-display text-2xl font-bold">Quick Comparison Table</h2>
          <div className="mt-4 overflow-hidden overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="px-4 py-3 font-semibold">Game</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Difficulty</th>
                <th className="px-4 py-3 font-semibold">Earning</th>
              </tr></thead>
              <tbody>
                {games.map((g) => (
                  <tr key={g.name} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 font-medium">{g.name}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{g.category}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{g.difficulty}</td>
                    <td className="px-4 py-3 text-[var(--accent)]">{g.earning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {games.map((g, i) => (
          <section key={g.name}>
            <h2 className="font-display text-2xl font-bold">{i + 1}. {g.name}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-[var(--card-bg)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">{g.category}</span>
              <span className="rounded-full bg-[var(--card-bg)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">Difficulty: {g.difficulty}</span>
              <span className="rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-3 py-1 text-xs text-[var(--accent)]">Earning: {g.earning}</span>
            </div>
            <p className="mt-3 text-[var(--muted)]">{g.description}</p>
            <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">Winning Tips:</h3>
              <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                {g.tips.map((tip) => (
                  <li key={tip}>&#10003; {tip}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section>
          <h2 className="font-display text-2xl font-bold">Which Game Should You Start With?</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">Complete beginner?</strong> Start with <strong className="text-[var(--accent)]">7 Up Down</strong> or <strong className="text-[var(--accent)]">Dragon vs Tiger</strong> — simple rules, fast rounds.</li>
            <li><strong className="text-[var(--foreground)]">Want skill-based earning?</strong> Go for <strong className="text-[var(--accent)]">Rummy</strong> or <strong className="text-[var(--accent)]">Teen Patti</strong> — strategy matters more than luck.</li>
            <li><strong className="text-[var(--foreground)]">Looking for big wins?</strong> Try <strong className="text-[var(--accent)]">Crash</strong> or <strong className="text-[var(--accent)]">Mines</strong> — high risk, high reward. Read our <Link href="/blog/how-to-win-big" className="text-[var(--accent)] hover:underline">winning strategies guide</Link>.</li>
            <li><strong className="text-[var(--foreground)]">Want casual fun?</strong> Play <strong className="text-[var(--accent)]">Ludo</strong> or <strong className="text-[var(--accent)]">God of Fortune</strong> — relaxed and entertaining.</li>
            <li><strong className="text-[var(--foreground)]">Ready to earn?</strong> <Link href="/blog/how-to-deposit-money" className="text-[var(--accent)] hover:underline">Deposit money</Link> and start playing. When you win, <Link href="/blog/how-to-withdraw-money" className="text-[var(--accent)] hover:underline">withdraw easily</Link>.</li>
          </ul>
        </section>

        <div className="mt-8 flex justify-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-white hover:bg-[var(--accent-hover)]"
          >
            Download Card Rummy & Play Now
          </a>
        </div>
      </div>
    </article>
  );
}
