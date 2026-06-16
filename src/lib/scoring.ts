// ============================================================
// Algoritma scoring — sesuai spesifikasi PRD (min-max + tiebreaker)
// score = Σ (norm_indikator × bobot_persona)  → skala 0–100
// ============================================================

import { DISTRIK, INDICATORS, type Distrik, type IndicatorKey, type Persona } from '../data/distrik'

export interface ScoredDistrik {
  distrik: Distrik
  score: number // 0–100
  breakdown: Record<IndicatorKey, number> // kontribusi tiap indikator (poin)
}

/** Normalisasi min-max satu indikator ke rentang 0–1 across semua distrik. */
function buildNormalizer(): Record<IndicatorKey, (raw: number) => number> {
  const norm = {} as Record<IndicatorKey, (raw: number) => number>
  for (const { key } of INDICATORS) {
    const values = DISTRIK.map((d) => d[key])
    const min = Math.min(...values)
    const max = Math.max(...values)
    const range = max - min || 1
    norm[key] = (raw: number) => (raw - min) / range
  }
  return norm
}

/**
 * Hitung & ranking distrik untuk sebuah persona.
 * Tiebreaker: UMK terendah → community tertinggi → alfabetis.
 */
export function rankDistrik(persona: Persona): ScoredDistrik[] {
  const norm = buildNormalizer()

  const scored: ScoredDistrik[] = DISTRIK.map((distrik) => {
    const breakdown = {} as Record<IndicatorKey, number>
    let score = 0
    for (const { key } of INDICATORS) {
      const contribution = norm[key](distrik[key]) * persona.weights[key] * 100
      breakdown[key] = Math.round(contribution * 10) / 10
      score += contribution
    }
    return { distrik, score: Math.round(score * 10) / 10, breakdown }
  })

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (a.distrik.umk !== b.distrik.umk) return a.distrik.umk - b.distrik.umk // afordabilitas
    if (b.distrik.community !== a.distrik.community) return b.distrik.community - a.distrik.community
    return a.distrik.name.localeCompare(b.distrik.name)
  })

  return scored
}

/** Cek apakah budget user memenuhi UMK distrik (untuk badge "sesuai budget"). */
export function fitsBudget(distrik: Distrik, budget: number): boolean {
  return budget >= distrik.umk
}
