// Agreed pricing (App guide, slide 10). Every tier includes the first 20
// students; the tier is set by the gym's active student count.
// Monthly total = base fee + (active students − 20) × per-student rate.
// The pricing cards and the FAQ answer are both built from this list.

export const INCLUDED_STUDENTS = 20
export const TRIAL_DAYS = 14

export type TierId = "open-mat" | "black-belt" | "affiliation-pro"

export interface Tier {
  id: TierId
  name: string
  range: string
  baseCents: number
  perStudentCents: number
  examples: number[]
  featured?: boolean
}

export const TIERS: Tier[] = [
  {
    id: "open-mat",
    name: "Open Mat",
    range: "1–60 students",
    baseCents: 3900,
    perStudentCents: 225,
    examples: [20, 45, 60],
  },
  {
    id: "black-belt",
    name: "Black Belt",
    range: "61–140 students",
    baseCents: 7900,
    perStudentCents: 150,
    examples: [61, 100, 140],
    featured: true,
  },
  {
    id: "affiliation-pro",
    name: "Affiliation / Pro",
    range: "141+ students",
    baseCents: 12900,
    perStudentCents: 100,
    examples: [141, 180, 250],
  },
]

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

export const formatCents = (cents: number) => usd.format(cents / 100)

/** Whole-dollar amounts without cents: "$39". */
export const formatDollars = (cents: number) =>
  cents % 100 === 0 ? `$${cents / 100}` : formatCents(cents)

export function monthlyTotalCents(tier: Tier, students: number) {
  return (
    tier.baseCents +
    Math.max(0, students - INCLUDED_STUDENTS) * tier.perStudentCents
  )
}
