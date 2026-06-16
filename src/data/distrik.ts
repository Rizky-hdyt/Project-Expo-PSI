// ============================================================
// Master data & konfigurasi domain — Freelance City Index DIY
// Angka indikator (0–100) bersifat ilustratif untuk prototype UI/UX.
// ============================================================

export type IndicatorKey = 'internet' | 'cost' | 'community' | 'environment'
export type PersonaKey = 'developer' | 'creator' | 'student'

export interface Distrik {
  slug: string
  name: string
  emoji: string
  tagline: string
  description: string
  // Indikator ternormalisasi 0–100 (input admin)
  internet: number
  cost: number // skor afordabilitas: makin tinggi = makin terjangkau
  community: number
  environment: number
  // Metadata tampilan
  umk: number // Rupiah / bulan
  internetMbps: number
  coworkingCount: number
  coworkingPriceFrom: number // Rupiah / bulan
  highlights: string[]
  updatedAt: string // ISO date
}

export interface Persona {
  key: PersonaKey
  name: string
  emoji: string
  blurb: string
  goals: string[]
  painPoints: string[]
  budgetRange: string
  weights: Record<IndicatorKey, number> // total = 1
}

export const INDICATORS: { key: IndicatorKey; label: string; emoji: string; help: string }[] = [
  { key: 'internet', label: 'Internet', emoji: '📶', help: 'Kecepatan & kestabilan koneksi' },
  { key: 'cost', label: 'Biaya Hidup', emoji: '💰', help: 'Keterjangkauan (kost, makan, coworking)' },
  { key: 'community', label: 'Komunitas', emoji: '🤝', help: 'Event, meetup, kolaborasi' },
  { key: 'environment', label: 'Lingkungan', emoji: '🌿', help: 'Suasana, keamanan, fasilitas' },
]

export const PERSONAS: Persona[] = [
  {
    key: 'developer',
    name: 'Developer / IT',
    emoji: '👨‍💻',
    blurb: 'Butuh internet ngebut & coworking nyaman dengan harga masuk akal.',
    goals: ['Internet stabil 100+ Mbps', 'Coworking terjangkau', 'Dekat komunitas tech'],
    painPoints: ['WiFi café sering tidak stabil', 'Data kecepatan per distrik tidak tersedia'],
    budgetRange: 'Rp 3–5 jt / bulan',
    weights: { internet: 0.4, cost: 0.2, community: 0.3, environment: 0.1 },
  },
  {
    key: 'creator',
    name: 'Creator / Desainer',
    emoji: '🎨',
    blurb: 'Mencari lingkungan inspiratif & komunitas kreatif untuk berkolaborasi.',
    goals: ['Lingkungan inspiratif', 'Akses komunitas seni', 'Café & ruang kolaborasi'],
    painPoints: ['Susah cari kombinasi "vibe" + data objektif', 'Kota ramai tapi mahal'],
    budgetRange: 'Rp 2,5–4 jt / bulan',
    weights: { internet: 0.1, cost: 0.2, community: 0.35, environment: 0.35 },
  },
  {
    key: 'student',
    name: 'Student / Fresh Grad',
    emoji: '📚',
    blurb: 'Mengelola budget ketat sambil membangun jaringan tanpa burnout.',
    goals: ['Kelola pengeluaran ≤ Rp 3 jt', 'Networking untuk magang/kerja', 'Kost murah & aman'],
    painPoints: ['Data UMK tersebar', 'Keputusan berbasis rumor, bukan data'],
    budgetRange: 'Rp 1,5–3 jt / bulan',
    weights: { internet: 0.1, cost: 0.5, community: 0.2, environment: 0.2 },
  },
]

export const DISTRIK: Distrik[] = [
  {
    slug: 'kota-yogyakarta',
    name: 'Kota Yogyakarta',
    emoji: '🏛️',
    tagline: 'Pusat segalanya — ramai, hidup, serba dekat',
    description:
      'Jantung DIY dengan infrastruktur terlengkap. Padat coworking, café, dan event, namun biaya hidup paling tinggi di antara lima distrik.',
    internet: 90,
    cost: 55,
    community: 88,
    environment: 72,
    umk: 2_492_997,
    internetMbps: 142,
    coworkingCount: 21,
    coworkingPriceFrom: 750_000,
    highlights: ['21+ coworking aktif', 'Event tech & kreatif tiap minggu', 'Akses transport terbaik'],
    updatedAt: '2026-06-15',
  },
  {
    slug: 'sleman',
    name: 'Sleman',
    emoji: '🎓',
    tagline: 'Zona kampus — komunitas muda & seimbang',
    description:
      'Rumah bagi UGM, UNY, dan banyak kampus. Ekosistem komunitas kuat, internet bagus, biaya lebih ramah dibanding kota.',
    internet: 78,
    cost: 68,
    community: 80,
    environment: 78,
    umk: 2_315_976,
    internetMbps: 118,
    coworkingCount: 14,
    coworkingPriceFrom: 500_000,
    highlights: ['Dekat kampus besar', 'Banyak meetup mahasiswa & startup', 'Udara lebih sejuk'],
    updatedAt: '2026-06-11',
  },
  {
    slug: 'bantul',
    name: 'Bantul',
    emoji: '🎭',
    tagline: 'Sarang seni — tenang, kreatif, terjangkau',
    description:
      'Basis seniman & pengrajin (Kasongan, Tembi). Suasana tenang dan biaya hidup rendah, cocok untuk fokus berkarya.',
    internet: 62,
    cost: 80,
    community: 70,
    environment: 82,
    umk: 2_216_463,
    internetMbps: 74,
    coworkingCount: 7,
    coworkingPriceFrom: 350_000,
    highlights: ['Komunitas seni & kriya kuat', 'Biaya hidup rendah', 'Suasana tenang untuk fokus'],
    updatedAt: '2026-06-06',
  },
  {
    slug: 'gunungkidul',
    name: 'Gunungkidul',
    emoji: '🏖️',
    tagline: 'Workation pantai — murah & menenangkan',
    description:
      'Pesisir dengan deretan pantai. Paling terjangkau, ideal untuk workation dan deep work, dengan trade-off konektivitas.',
    internet: 48,
    cost: 92,
    community: 52,
    environment: 86,
    umk: 2_134_802,
    internetMbps: 41,
    coworkingCount: 4,
    coworkingPriceFrom: 250_000,
    highlights: ['Biaya hidup termurah', 'Dekat pantai untuk workation', 'Sangat tenang'],
    updatedAt: '2026-06-14',
  },
  {
    slug: 'kulon-progo',
    name: 'Kulon Progo',
    emoji: '✈️',
    tagline: 'Kuda hitam — berkembang pesat dekat YIA',
    description:
      'Berkembang cepat sejak Bandara YIA. Biaya rendah dengan potensi pertumbuhan, komunitas masih bertumbuh.',
    internet: 55,
    cost: 88,
    community: 48,
    environment: 75,
    umk: 2_137_000,
    internetMbps: 58,
    coworkingCount: 5,
    coworkingPriceFrom: 275_000,
    highlights: ['Dekat Bandara YIA', 'Biaya hidup rendah', 'Area berkembang pesat'],
    updatedAt: '2026-06-10',
  },
]

export const BUDGET_MIN = 1_500_000
export const BUDGET_MAX = 6_500_000

export function formatRupiah(value: number): string {
  return 'Rp ' + value.toLocaleString('id-ID')
}

export function getDistrik(slug: string): Distrik | undefined {
  return DISTRIK.find((d) => d.slug === slug)
}
