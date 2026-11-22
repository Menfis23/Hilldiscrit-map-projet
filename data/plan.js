// =====================================================================
// THE PLAN: every page reads its words and numbers from this one file.
// Change something here and it changes everywhere on the site.
// Content comes from the "Hill District Church Project" folder in Drive.
// =====================================================================

// What could be built on a lot (used by the lot map's "What we'd build" menu).
const BUILDINGS = [
  "Community garden", "Park or green space", "Job training center", "Shelter and recycling center",
  "Health clinic", "Pre-K / early learning", "Gym and rec center", "Grocery store", "Housing", "Parking", "Other"
];

// Rough costs (ballpark, not quotes). Numbers are in dollars: [low, high].
// yearly: null means "none", "operator" means a partner runs and pays for it.
const COSTS = [
  { stage: 0, item: "Planning, survey, property lookups", once: [0, 2000], yearly: null },
  { stage: 1, item: "Community garden on a city lot", once: [5000, 20000], yearly: [2000, 5000] },
  { stage: 1, item: "Cleanup days", once: [0, 5000], yearly: [0, 5000], under: true },
  { stage: 2, item: "Park on vacant lots", once: [200000, 1000000], yearly: [20000, 50000] },
  { stage: 2, item: "Job training in an existing building", once: [10000, 50000], yearly: [50000, 200000] },
  { stage: 2, item: "Shelter and recycling pilot", once: [100000, 500000], yearly: [200000, 500000] },
  { stage: 3, item: "Health clinic pop-ups with a partner", once: [20000, 100000], yearly: [50000, 150000] },
  { stage: 3, item: "Pre-K with a partner", once: [500000, 2000000], yearly: [300000, 800000] },
  { stage: 4, item: "Full shelter and recycling center", once: [1000000, 3000000], yearly: [500000, 1000000] },
  { stage: 4, item: "Gym and rec center", once: [10000000, 25000000], yearly: [500000, 1500000] },
  { stage: 5, item: "Grocery store with a partner", once: [5000000, 15000000], yearly: "operator" }
];

// The roadmap, Stage 0 to Stage 5.
const STAGES = [
  { n: 0, name: "Get ready", when: "Month 1", tasks: [
      "Meet with the church leader who asked for this and agree on the goals",
      "Pick a small team: who leads, who handles money, who talks to the community",
      "Look up who owns the lots near Kirkpatrick on the Allegheny County property site"],
    checkpoint: "The team is set and the church agrees on the plan." },
  { n: 1, name: "Easy wins", when: "Months 1 to 6", tasks: [
      "Neighbor survey: ask residents what they need most",
      "Community garden on a city lot through the city garden and Adopt-a-Lot programs",
      "Neighborhood cleanup days"],
    checkpoint: "Survey results in hand, the first garden is planted, and volunteers are signed up." },
  { n: 2, name: "Medium", when: "Months 6 to 18", tasks: [
      "Park or green space on vacant lots near Kirkpatrick",
      "Job training classes in the church or another building that already exists",
      "Start the shelter and recycling pilot"],
    checkpoint: "The park plan is approved and the first job training class finishes." },
  { n: 3, name: "Harder", when: "Years 2 to 3", tasks: [
      "Health clinic, starting as pop-up days with a partner clinic",
      "Pre-K, working with a partner who already runs early learning programs"],
    checkpoint: "Partners are signed and services are running at least part time." },
  { n: 4, name: "Big builds", when: "Years 3 to 5", tasks: [
      "Gym and rec center on Kirkpatrick, which matches the 2011 Hill District Master Plan recreation corridor",
      "Raise funding: grants, the URA, foundations, and church fundraising"],
    checkpoint: "The land is secured and funding is committed." },
  { n: 5, name: "Hardest", when: "5 years and up", tasks: [
      "Grocery store: keep an eye on the old store at 1850 Centre Ave, which a church signed to buy, and look at a co-op or partner model"],
    checkpoint: "A grocery partner is lined up." }
];

// The shelter and recycling cycle, one step per point on the circle.
const CYCLE = [
  { t: "Collect", d: "Residents collect recyclables around the neighborhood." },
  { t: "Bring in", d: "They bring what they collect to the recycling center." },
  { t: "Sort", d: "The center sorts and processes the materials." },
  { t: "Sell", d: "The center sells materials and products, and earns income from pickup contracts." },
  { t: "Get paid", d: "Residents are paid fair wages for their work." },
  { t: "Stay and save", d: "Residents stay in the shelter for free or a small fee, and save toward their own housing." },
  { t: "Reinvest", d: "Profits go back into the center and the shelter, and the cycle starts again." }
];
const MONEY_IN = [
  { t: "Pickup contracts", d: "Local businesses, churches, and apartment buildings pay for recycling pickup." },
  { t: "Products", d: "Turning materials into things worth more: furniture, crafts, building materials." },
  { t: "Bulk sales", d: "Selling sorted materials in bulk." },
  { t: "Grants and donors", d: "Outside support for the shelter beds." }
];
const CYCLE_NOTES = [
  "Money only moves around inside the loop. The only new money comes from selling materials and from outside support.",
  "Scrap like cans and plastic pays only cents per pound, so collecting alone may not cover a bed.",
  "Charging for beds can shut out people who are sick, old, or just arrived on the street. Beds stay free or very cheap."
];
const CYCLE_STEPS = [
  "Find out how other shelter and recycling programs work",
  "Talk with local recyclers about prices and contracts",
  "Figure out the startup costs: building, equipment, staff",
  "Start small: a pilot with a few workers and a few contracts"
];

// ---------- Small helpers every page uses ----------
function money(n) {
  if (n >= 1e6) return "$" + (+(n / 1e6).toFixed(1)).toString() + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + n;
}
function range(r, under) {
  if (r == null) return "none";
  if (r === "operator") return "run by the operator";
  if (under) return "under " + money(r[1]);
  return money(r[0]) + " to " + money(r[1]);
}
function stageCost(n) {
  const rows = COSTS.filter(c => c.stage === n);
  return [rows.reduce((s, c) => s + c.once[0], 0), rows.reduce((s, c) => s + c.once[1], 0)];
}
// Saved progress lives in this browser only (localStorage). Wrapped in try so a
// private window or blocked storage never breaks the page.
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
