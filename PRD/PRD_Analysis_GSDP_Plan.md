# ANALISIS & SARAN PERBAIKAN PRD
## Freelance City Index: Yogyakarta Edition
**Status**: Draft Analysis | **Tanggal**: Juni 2026 | **Tim**: Innovative Technology Group

---

## PART 0: DISKUSI – TEMUAN UTAMA

### ✅ Kekuatan Dokumen
1. **Problem statement jelas** – target audience teridentifikasi (Gen Z, Fresh Grad, Digital Nomad)
2. **Scope MVP terdefinisi** – fitur in/out scope tercatat dengan baik
3. **Functional requirements terstruktur** – FR-001 s/d FR-A05 dengan MoSCoW priority
4. **Workflows detail** – happy path, decision points, edge cases tercakup
5. **Data publik tersedia** – BPS, APJII, coworking directory siap diintegrasikan

### ⚠️ Gap & Area Perbaikan

#### **1. Frontend UX & Interaction Flow**
**Masalah:**
- Step 2 (Algorithm) tidak clear fungsinya → "menampilkan bar visual bobot" tapi tidak ada interaksi user
- Tidak ada re-ranking dinamis jika user ubah input di Step 1 (FR-009 ada, tapi flow-nya belum dijelaskan)
- Progress indication antar step belum didefinisikan (breadcrumb? progress bar? step number?)
- Mobile responsiveness hanya disebutkan sebagai constraint, tapi layout belum didesain

**Solusi:**
- Ubah Step 2 jadi interactive (tampilkan formula, ajak user eksperimen dengan bobot manual)
- Tambahkan visual progress indicator
- Define mobile-first layout principles per step

#### **2. Algoritma Scoring Kurang Spesifik**
**Masalah:**
- Formula FR-005: `Skor = Σ (nilai indikator × bobot persona)` terlalu abstrak
- Bobot indikator per persona tidak tercatat (contoh: Dev prioritas Internet 40%, Cost 30%, Community 20%, Environment 10%?)
- Normalisasi nilai 0–100 belum dijelaskan
- Tiebreaker hanya UMK, tapi bagaimana jika ada distrik dengan skor sama dan UMK sama?

**Solusi:**
- Buat tabel bobot eksplisit per persona
- Define normalization method (min-max? z-score?)
- Add secondary tiebreaker (misal: community score, kemudian internet quality)

#### **3. Data Management Workflow Kurang Robust**
**Masalah:**
- FRA-03: "notifikasi peringatan jika data > 7 hari" – siapa yang dikirim? email? in-dashboard alert?
- FRA-04: Audit log disimpan tapi tidak ada workflow untuk *review* atau *rollback*
- Tidak ada versioning untuk historical data
- Bagaimana jika data publik (BPS/APJII) dirilis versi baru? Manual update atau automated?

**Solusi:**
- Specify notification channel & escalation (alert menjadi blocking jika > 14 hari)
- Add data audit trail UI di admin dashboard
- Define data source update schedule (weekly BPS check? monthly APJII refresh?)

#### **4. Persona Kurang Detail**
**Masalah:**
- 3 persona (Dev, Creator, Student) hanya nama saja
- Tidak ada archetypal needs/behaviors (misal: Developer prefer speed, Creator prefer vibe)
- Pertanyaan quiz tidak tercatat (12 pertanyaan disebut di scope, tapi tidak ada contoh)
- Bagaimana sistem deteksi persona dari jawaban? (scoring? weighted points?)

**Solusi:**
- Add persona card dengan goals, pain points, typical budget range
- Create sample quiz questions (at least 4-6 dari 12)
- Explain persona matching algorithm

#### **5. Admin Interface Terlalu Minimal**
**Masalah:**
- FRA-01 hanya "form untuk update 4 indikator" – tidak ada:
  - Bulk import (CSV upload untuk batch update)
  - Data validation rules (apa range acceptable per indikator? internet speed 1–300 Mbps?)
  - Dashboard analytics (mana distrik paling sering dibandingkan? highest engagement?)
  - User feedback collection (rating/review dari pengguna untuk setiap distrik)

**Solusi:**
- Tambahkan bulk import feature untuk admin
- Add data quality dashboard
- Create simple review/rating system untuk crowdsource accuracy

#### **6. Success Metrics Terlalu Aspirasional**
**Masalah:**
- 10.000 MAU dalam 3 bulan → tim 4 orang, budget gratis, scope besar – sangat ambitious
- Quiz completion 70% belum validate retention (pengguna bisa asal-asalan)
- CSAT 4.2/5 tapi tidak ada definition of "success" – apakah dilihat per distrik atau keseluruhan?

**Solusi:**
- Lower target jadi 1.000–3.000 MAU (realistic untuk DIY student population)
- Add completion quality metric (misal: time spent ≥ 45 detik)
- Define CSAT follow-up (open text "what could improve", track per feature)

#### **7. Technical Stack Tidak Tercatat**
**Masalah:**
- Tidak ada spesifikasi tech stack (frontend framework? backend? database?)
- "Hosting gratis (Vercel/Netlify)" tapi backend database dimana? (Firebase? Supabase? free tier?)
- Real-time data sync untuk admin update – apakah perlu websocket atau polling OK?

**Solusi:**
- Add tech stack decision (recommended: Next.js + Supabase atau Firebase)
- Clarify hosting strategy & database tier

#### **8. Go-Live & Launch Plan Belum Ada**
**Masalah:**
- MVP deadline Mei–Juli 2026 sudah lewat (sekarang Juni 2026)
- Tidak ada soft launch strategy (closed beta? freemium?)
- Tidak ada marketing/distribution plan

**Solusi:**
- Assess current progress & reset timeline
- Define beta testing approach (internal testing? close user group?)
- Create launch checklist

---

## PART 1: SARAN PERBAIKAN – DETAIL PER SECTION

### **1.1 Refined Problem Statement (BARU)**
Tambahkan clarity tentang data silos:
```
Meskipun DIY memiliki 57+ coworking space aktif dan penetrasi internet 88.73%, 
informasi yang pengguna butuhkan tersebar di 5+ platform berbeda:
- UMK per distrik: BPS website (update tahunan)
- Kecepatan internet: APJII report (aggregate, bukan per-distrik)
- Coworking space: Google Maps, Tokopedia, scatter Instagram
- Community vibe: Facebook groups, Instagram, Tiktok (unverified, anecdotal)

Hingga saat ini BELUM ADA platform terpusat yang mengkonsolidasikan keempat indikator 
dalam satu interface dengan rekomendasi yang dipersonalisasi.
```

### **1.2 Refined User Objectives (GANTI)**
Tambahkan keseluruhan data pengguna dengan motivasi spesifik:

| Actor | Primary Goal | Secondary Goal | Budget Reality | Blocker Utama |
|-------|--------------|----------------|-----------------|---------------|
| **Developer/Freelancer IT** | Cari distrik dengan internet 50–150 Mbps, coworking ≤ Rp 3,5 jt/bulan | Proximity ke community tech | Rp 3–5 jt/bulan | Kecepatan internet data per distrik tidak tersedia |
| **Creator/Desainer** | Lingkungan inspiratif (café, komunitas seni, wifi stabil) | Harga terjangkau, akses kolaborasi | Rp 2.5–4 jt/bulan | Tidak ada platform yang combine "vibe" + data objektif |
| **Student/Fresh Grad** | Kelola total pengeluaran (kost + makan + coworking) ≤ Rp 3 jt/bulan | Networking peluang magang/job | Rp 1.5–3 jt/bulan | Data UMK tersebar, keputusan berbasis asumsi |
| **Admin/Data Manager** | Update data 5 distrik setiap minggu dengan proses minimal | Audit trail compliance, historical tracking | N/A | Tidak ada sistem terpusat; manual dari 5+ sumber |

### **1.3 Refined Scope – Detail per Feature**

**IN Scope yang DIPERJELAS:**

| Feature | Current Description | REFINED Specification |
|---------|---------------------|----------------------|
| **Quiz Persona** | 12 pertanyaan | 12 multiple-choice questions spanning: lifestyle preference (3q), budget constraint (2q), priority ranking (4q), work environment (3q). Example: "Saat bekerja, prioritas Anda: A) Kecepatan internet tinggi | B) Lingkungan noise-free | C) Komunitas aktif | D) Harga termurah" |
| **Algorithm** | Weighted scoring 4 indikator | Explicit bobot tabel per persona + normalization method (min-max 0–100) + tiebreaker rules |
| **Admin Dashboard** | Form update data 4 indikator | Form + CSV import, validation rules per indikator, audit log viewer, data freshness indicator |
| **Mobile Responsive** | Web only | Tested on: iPhone SE, Samsung Galaxy A50, iPad. Touch target ≥ 44px. Full functionality on viewport ≥ 360px |

**OUT of Scope yang DIPERJELAS:**

| Feature | Reason Defer | Potential v2 Timeline |
|---------|--------------|----------------------|
| **Akun pengguna & login** | Increase scope & complexity; MVP bisa anonymous | Q3 2026 (setelah v1 stable) |
| **Peta interaktif per distrik** | Mapping library (Mapbox/Leaflet) add bundle size & cost | Q3 2026 atau v2 (jika ada budget) |
| **Rating/review pengguna** | Require moderation infra; bisa jadi spam | Q4 2026 setelah user base 5k+ |
| **Push notification** | Require browser permission + backend queue; overkill untuk MVP | Q3 2026 |
| **Mobile app native** | Require iOS + Android dev; web-responsive OK untuk MVP | Post-MVP (2027) |

### **2. Refined Personas (BARU)**

#### **Persona 1: Developer/Freelancer IT**
- **Goals**: Cari lokasi kerja dengan internet stabil (100+ Mbps), coworking workspace, budget reasonable
- **Pain points**: Sering work-from-café tapi WiFi unstable; tidak tahu exact internet quality per distrik
- **Demographics**: Age 22–35, familiar dengan tech, expect fast experience
- **Typical budget**: Rp 3–5 juta/bulan (shared house + coworking)
- **Quiz indicator weight**: Internet (40%) > Cost (20%) > Community (30%) > Environment (10%)

#### **Persona 2: Creator/Desainer**
- **Goals**: Lingkungan inspiratif untuk kolaborasi & networking; akses creative community
- **Pain points**: Distrik itu penting untuk "vibe" dan kolaborasi; Kota Yogya ramai tapi mahal
- **Demographics**: Age 23–32, Instagram-active, value aesthetics & networking
- **Typical budget**: Rp 2.5–4 juta/bulan (nice space + café culture)
- **Quiz indicator weight**: Community (35%) > Environment (35%) > Cost (20%) > Internet (10%)

#### **Persona 3: Student/Fresh Graduate**
- **Goals**: Kelola cash flow ketat; explore distrik untuk build network tanpa burnout
- **Pain points**: UMK tersebar; keputusan berbasis rumor teman, bukan data
- **Demographics**: Age 21–25, fresh out of uni/bootcamp, cost-conscious
- **Typical budget**: Rp 1.5–3 juta/bulan (kost murah + makan + minimal coworking)
- **Quiz indicator weight**: Cost (50%) > Environment (20%) > Community (20%) > Internet (10%)

### **3. Refined Algorithm Specification (BARU)**

#### **3.1 Weighted Scoring Formula**
```
Score_total = (norm_internet × w_internet) 
            + (norm_cost × w_cost) 
            + (norm_community × w_community) 
            + (norm_environment × w_environment)

where:
  norm_X = (raw_X - min_X) / (max_X - min_X) ∈ [0, 1]
  w_* ∈ {0.1, 0.2, 0.3, 0.4} per persona
  score_total ∈ [0, 100]
```

#### **3.2 Weights per Persona**

| Persona | Internet | Cost | Community | Environment | Total |
|---------|----------|------|-----------|-------------|-------|
| **Developer** | 40% | 20% | 30% | 10% | 100% |
| **Creator** | 10% | 20% | 35% | 35% | 100% |
| **Student** | 10% | 50% | 20% | 20% | 100% |

#### **3.3 Raw Indicators (Admin Input 0–100)**

| Indicator | Definition | Measurement | Update Freq |
|-----------|-----------|-------------|-------------|
| **Internet Quality** | Avg download speed; signal reliability | BPS/APJII data; monthly ping test | Weekly |
| **Cost of Living** | Rental + food + transport average | UMK 2026 + coworking price survey | Monthly |
| **Community** | Tech/creative events, coworking frequency, meetup activity | Scrape calendar + manual survey | Weekly |
| **Environment** | Noise level, safety, amenities (café/parks) | Manual survey + Google review aggregate | Monthly |

#### **3.4 Tiebreaker Rules**
```
if score[A] == score[B]:
  if umk[A] < umk[B]: rank A first (affordability tiebreaker)
  else if community[A] > community[B]: rank A first
  else: alphabetical
```

#### **3.5 Data Normalization Example**
```
Raw data:
  Kota internet=90, Sleman=70, Bantul=60, Gunungkidul=50, Kulon Progo=40
  
min=40, max=90, range=50
Normalized:
  Kota = (90-40)/50 = 1.00
  Sleman = (70-40)/50 = 0.60
  Bantul = (60-40)/50 = 0.40
  Gunungkidul = (50-40)/50 = 0.20
  Kulon Progo = (40-40)/50 = 0.00
```

### **4. Refined Admin Dashboard Features**

**Current:** Form input simple untuk 4 indikator
**Refined:** Dashboard with 5 sections:

#### **4.1 Data Management Panel**
```
┌─────────────────────────────────────────┐
│ 📊 Data Management                      │
├─────────────────────────────────────────┤
│ Last Updated: 2026-06-16                │
│                                         │
│ 📋 Distrik Status:                      │
│ ✅ Kota Yogya: 2h ago                   │
│ ⚠️ Sleman: 5d ago (update soon!)        │
│ 🔴 Bantul: 10d ago (OVERDUE!)           │
│ ✅ Gunungkidul: 1d ago                  │
│ ⚠️ Kulon Progo: 6d ago (update soon!)   │
├─────────────────────────────────────────┤
│ [📥 Import CSV] [➕ Add Manual Entry]    │
└─────────────────────────────────────────┘
```

#### **4.2 Edit Form (Per Distrik)**
```
┌──────────────────────────────────────────┐
│ Update: Sleman                           │
├──────────────────────────────────────────┤
│ Internet Quality: [████████  ] 75/100    │
│ Cost of Living: [██████    ] 65/100      │
│ Community: [███████    ] 72/100          │
│ Environment: [████████  ] 78/100         │
│                                          │
│ [✅ Save] [🔄 Reset]                     │
├──────────────────────────────────────────┤
│ ⓘ Rules: all values 0–100 required      │
│ ✓ Auto-normalized on save                │
└──────────────────────────────────────────┘
```

#### **4.3 Audit Log Viewer**
```
┌──────────────────────────────────────────┐
│ Audit Log                                │
├──────────────────────────────────────────┤
│ 2026-06-16 14:30 | Rizky | Sleman       │
│   Internet: 70→75                        │
│   Cost: 60→65                            │
│                                          │
│ 2026-06-14 09:15 | Syfa | Kota Yogya    │
│   Community: 75→80                       │
│                                          │
│ 2026-06-13 16:45 | Luthfi | Bantul      │
│   All indicators reset to 0 (retry)      │
│                                          │
│ [⬇️ Export Log]                          │
└──────────────────────────────────────────┘
```

#### **4.4 Bulk Import CSV**
```
CSV format:
distrik_name,internet,cost,community,environment
Kota Yogya,90,60,80,75
Sleman,70,65,72,78
Bantul,60,75,65,70
...

- Validate all values 0–100
- Show preview before commit
- Rollback option jika ada error
```

#### **4.5 Analytics Dashboard (Future)**
```
Coming v2:
- Which distrik most frequently compared?
- Quiz completion funnel (step 1 → step 2 → step 3)
- Average completion time
- User satisfaction per distrik
```

### **5. Refined Mobile UX Specification**

#### **Mobile Layout Breakpoints**
```
Mobile (≤ 480px):
- Single column layout
- Full-width slider
- Large touch targets (44px × 44px minimum)
- Step indicator as mobile-optimized dots

Tablet (481–768px):
- 2-column layout where applicable
- Standard touch targets (40px)

Desktop (≥ 769px):
- Multi-column, generous spacing
```

#### **Step 1: Mobile Optimized**
```
Mobile View:
┌─────────────────────────┐
│ Find Your Best Region   │
│ Step 1 of 3             │ ← progress indicator
├─────────────────────────┤
│                         │
│ 👨‍💻 Developer             │
│ 🎨 Creator              │ ← large cards, full width
│ 📚 Student              │
│                         │
├─────────────────────────┤
│                         │
│ Budget: Rp 3,500,000 ↕️  │
│                         │
│ ▭▭▭▭▭░░░░░░░░░░░░░░ ← touch-friendly slider
│                         │
├─────────────────────────┤
│ Internet Priority:      │
│ ○ Low  ○ Med ○ High ●   │
│                         │
│ Environment:            │
│ ○ Quiet  ●Café ○Work ○Flex │
│                         │
├─────────────────────────┤
│ [Next: See Algorithm] →  │
└─────────────────────────┘
```

### **6. Refined Success Metrics (ACHIEVABLE)**

| Metric | Baseline | Target 3mo | Target 6mo | Measurement |
|--------|----------|------------|-----------|-------------|
| **Quiz Completion Rate** | 0% | ≥50% | ≥70% | Session logs (completed = finish Step 3) |
| **Time-to-Result** | Manual: 2–4h | <60 sec avg | <45 sec avg | timestamp submit → result page |
| **Monthly Active Users (MAU)** | 0 | 500–1k | 2k–3k | GA monthly active user count |
| **Return Visit Rate** | 0% | ≥15% | ≥30% | Cohort: % returns in 30 days |
| **User Satisfaction (CSAT)** | N/A | ≥3.8/5 | ≥4.2/5 | Post-result 1-q survey + NPS |
| **Data Freshness** | N/A | 100% within 7d | 100% within 7d | Admin dashboard update log |
| **System Uptime** | N/A | ≥99.5% | ≥99.9% | Monitoring (Uptime Robot) |

### **7. Tech Stack Recommendation (BARU)**

```
Frontend:
- Next.js 14 (React + SSR + API routes)
- Tailwind CSS (styling)
- TypeScript (type safety)
- Recharts (data viz untuk admin analytics)
- Zod (form validation)

Backend & Database:
- Supabase (PostgreSQL + Auth + Realtime)
  OR Firebase (Firestore + Auth + Functions)
  → Both have generous free tier for MVP

Hosting:
- Vercel (Next.js deployment, automatic)
- CDN: Vercel's built-in
- Custom domain via Vercel

Admin Panel:
- Next.js API routes → Supabase/Firebase client SDK
- CSV upload via multer/formidable
- Real-time data sync via Supabase Realtime (or Firebase listeners)

Monitoring:
- Sentry (error tracking)
- Vercel Analytics (performance)
- Uptime Robot (free tier, basic monitoring)

Cost Estimate (Free Tier):
- Vercel: $0 (free tier includes plenty)
- Supabase: $0 (free tier up to 500k API calls/month)
- Custom domain: ~Rp 200k/year
- Total: Rp 200k/year ✅
```

---

## PART 2: PLAN – GSDP FRAMEWORK

### **Fase 0: DISCUSS (Week 1–2 of Sprint 1)**

#### **Diskusi Internal Tim (3 jam)**
```
Agenda:
1. Review saran perbaikan → buang/setuju/refine (30 min)
2. Validate problem statement & user journeys (30 min)
3. Agree on bobot algoritma per persona (30 min)
4. Tech stack decision (30 min)
5. MVP scope confirmation + cutoff (30 min)
```

**Output:**
- ✅ Updated PRD v1.1 (dengan semua refined sections)
- ✅ Tech stack decision doc
- ✅ Algorithm weights finalized
- ✅ Quiz questions draft (12q)

#### **Stakeholder Alignment (2 jam)**
```
Dengan Product Owner (Mohammad Rizky) & mentor:
1. Review v1.1 PRD
2. Confirm target users & messaging
3. Discuss launch timeline (current deadline May–July sudah lewat)
4. Q&A pada refined scope
```

**Output:**
- ✅ PRD approved + signed-off
- ✅ Realistic launch date set (misal: end of June atau early July 2026)

---

### **Fase 1: PLAN (Week 2–3 of Sprint 1)**

#### **1.1 Detailed Feature Breakdown**

**Feature: Persona Quiz & Scoring**
```
Breakdown:
├── Quiz UI (Step 1)
│   ├── Persona selection (3 cards)
│   ├── Budget slider (2–6.5 juta)
│   ├── Priority selection (internet/environment)
│   └── Mobile-responsive layout
├── Algorithm explanation (Step 2)
│   ├── Display bobot bars per persona
│   ├── Show example formula
│   └── "Next: See Results" button
├── Results display (Step 3)
│   ├── Ranking 5 distrik
│   ├── Score bars + metadata (UMK, coworking, internet)
│   ├── Badge "Best Match" on rank 1
│   └── Detail pages per distrik
└── State management & interactivity
    ├── Real-time re-calculation saat user ubah input
    ├── Browser back button handling
    ├── "Try Again" reset
    └── No page reload transitions
```

**Feature: Admin Dashboard**
```
Breakdown:
├── Authentication
│   ├── Login form + credential validation
│   └── Role-based access (admin-only)
├── Data Management Panel
│   ├── Summary table (5 distrik + last updated)
│   ├── Status indicator (✅/⚠️/🔴 based on days)
│   └── Import button & quick-add form
├── Edit Form (Per Distrik)
│   ├── 4 slider inputs (internet/cost/community/environment 0–100)
│   ├── Real-time validation
│   └── Save button + confirmation
├── Audit Log Viewer
│   ├── Sortable table (date, admin, distrik, changes)
│   ├── Export CSV
│   └── Filter by distrik/date
└── Bulk Import
    ├── CSV file uploader
    ├── Preview before commit
    └── Rollback on error
```

#### **1.2 Database Schema**

```sql
-- Distrik Master Data
CREATE TABLE distrik (
  id UUID PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  slug VARCHAR(50) UNIQUE NOT NULL,
  internet_quality INT (0–100),
  cost_of_living INT (0–100),
  community_score INT (0–100),
  environment_score INT (0–100),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Admin Audit Log
CREATE TABLE audit_log (
  id UUID PRIMARY KEY,
  admin_id UUID NOT NULL,
  admin_name VARCHAR(100),
  distrik_id UUID NOT NULL,
  field_name VARCHAR(50), -- 'internet_quality', 'cost_of_living', etc.
  old_value INT,
  new_value INT,
  timestamp TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES auth_users(id),
  FOREIGN KEY (distrik_id) REFERENCES distrik(id)
);

-- User Sessions (anonymous quiz tracking)
CREATE TABLE quiz_session (
  id UUID PRIMARY KEY,
  persona VARCHAR(20), -- 'developer', 'creator', 'student'
  budget_min INT,
  budget_max INT,
  internet_priority VARCHAR(20),
  environment_priority VARCHAR(20),
  completed_at TIMESTAMP,
  result_rank_1 UUID, -- distrik rank 1
  completion_time_sec INT,
  user_satisfaction_rating INT (1–5, nullable)
);
```

#### **1.3 API Endpoints**

```
Authentication:
POST /api/auth/login
POST /api/auth/logout

Quiz (Public):
GET /api/quiz/config -- returns persona weights, indikator config
POST /api/quiz/calculate -- input: persona, budget, priorities → output: ranking

Admin (Protected):
GET /api/admin/distrik -- list all 5 distrik
PATCH /api/admin/distrik/:id -- update one distrik
GET /api/admin/audit-log -- list all changes
POST /api/admin/import -- bulk CSV import
GET /api/admin/audit-log/export -- export CSV

Public Data:
GET /api/distrik/:slug -- single distrik detail page
GET /api/metrics -- anonymized quiz completion stats (for analytics)
```

#### **1.4 Component Architecture (Next.js)**

```
/app
├── page.tsx -- landing + Step 1 quiz
├── quiz
│   ├── step2
│   │   └── page.tsx -- Step 2 algorithm explanation
│   └── step3
│       └── page.tsx -- Step 3 results
├── distrik
│   └── [slug]
│       └── page.tsx -- distrik detail page
├── admin
│   ├── login
│   │   └── page.tsx
│   ├── dashboard
│   │   ├── page.tsx -- main admin page
│   │   ├── components
│   │   │   ├── DataManagementPanel.tsx
│   │   │   ├── EditForm.tsx
│   │   │   ├── AuditLogViewer.tsx
│   │   │   └── BulkImport.tsx
│   │   └── layout.tsx

/components
├── Quiz
│   ├── PersonaSelector.tsx
│   ├── BudgetSlider.tsx
│   ├── PriorityButtons.tsx
│   └── AlgorithmExplainer.tsx
├── Results
│   ├── RankingCard.tsx
│   ├── DistrikCard.tsx
│   └── Badge.tsx
└── Layout
    ├── Header.tsx
    ├── Footer.tsx
    └── ProgressIndicator.tsx

/lib
├── api.ts -- API client functions
├── algorithm.ts -- scoring logic
├── validation.ts -- Zod schemas
└── constants.ts -- persona weights, indikators
```

#### **1.5 Testing Strategy**

```
Unit Tests (Vitest):
- algorithm.ts: scoring formula per persona
- validation.ts: form input validation
- constants.ts: weights & defaults

Integration Tests (Playwright):
- Quiz flow: Step 1 → 2 → 3 (happy path)
- Quiz interactivity: change input → re-calculate
- Admin: login → edit → save → audit log
- Mobile layout: responsive on 360px, 480px, 768px

E2E Tests (Playwright):
- Complete quiz flow on mobile
- Admin bulk import workflow
- Data freshness alert display
```

#### **1.6 Deployment Checklist**

```
Pre-Launch:
□ All tests passing (unit + integration + E2E)
□ Lighthouse score ≥90 on mobile + desktop
□ Accessibility: WCAG 2.1 AA minimum
□ Security: no secrets in code, env vars set
□ Database: 5 distrik data seeded, admin user created
□ Admin tutorial document prepared
□ Error handling tested (network failures, timeouts)
□ Browser compatibility (Chrome, Safari, Firefox latest)
□ Mobile tested on: iPhone SE, Galaxy A50, iPad
□ Load testing (simulate 100 concurrent users)
□ Backup & recovery plan documented

Launch Day:
□ Final data quality check (all indikators 0–100)
□ Monitoring enabled (Sentry, Vercel Analytics)
□ Uptime Robot configured
□ Slack/email alerts configured
□ Initial marketing: share in relevant groups
```

---

### **Fase 2: EXECUTE (Week 3–8, 6 weeks total)**

#### **Sprint 1 (Week 3–4): Core Quiz Engine**
```
Goal: Functional quiz flow (Step 1–3) on desktop

Frontend:
- Persona selector component (3 cards)
- Budget slider component (2–6.5 juta, real-time display)
- Priority buttons (internet/environment)
- Static Step 2 layout (algorithm explainer)
- Static Step 3 layout (ranking cards)

Backend:
- Algorithm logic (weighted scoring)
- Test data seeded (5 distrik)
- API endpoints /api/quiz/calculate
- Deployment to Vercel (preview)

Testing:
- Happy path quiz flow
- Input validation (budget bounds)
- Algorithm calculations match spec

Deliverable: Working quiz on desktop, not mobile yet
```

#### **Sprint 2 (Week 5): Interactivity & Mobile**
```
Goal: Full interactivity + mobile-responsive quiz

Frontend:
- Real-time re-calculation when input changes (FR-009)
- Detail page per distrik (FR-010)
- Mobile layout (<480px, 480–768px responsive)
- "Try Again" reset button
- Back button history preservation
- Progress indicator (dots/breadcrumb)

Backend:
- Distrik detail endpoint /api/distrik/:slug
- Session tracking (logging quiz completions)

Testing:
- Mobile layout on actual devices (iPhone, Galaxy)
- Interactivity (drag slider → results update)
- Touch targets all ≥44px

Deliverable: Fully working quiz on desktop + mobile
```

#### **Sprint 3 (Week 6): Admin Dashboard v1**
```
Goal: Admin can login & edit distrik data

Frontend:
- Admin login page (simple form)
- Data management panel (status table)
- Edit form (4 sliders per distrik)
- Simple audit log viewer

Backend:
- Supabase auth setup (email/password)
- Admin role check
- Update endpoints /api/admin/distrik/:id
- Audit log recording FRA-04
- Data validation FRA-05

Testing:
- Login/logout flow
- Edit distrik → data saved
- Audit log shows changes
- Permission denied for non-admin

Deliverable: Admin can manually update distrik data
```

#### **Sprint 4 (Week 7): Admin Refinements & Data**
```
Goal: Admin dashboard ready for weekly updates; real distrik data

Frontend:
- Bulk CSV import form
- Data freshness alerts (FRA-03)
- Improved audit log with filters
- Analytics placeholder (for v2)

Backend:
- CSV import logic + validation
- Scheduled job (optional): auto-fetch BPS/APJII weekly
- Notification trigger for 7-day alert
- Export audit log CSV

Admin Work:
- Populate 5 distrik with real data:
  • Internet: APJII report + manual speedtest
  • Cost: UMK 2026 official + coworking survey
  • Community: event calendar scan + manual survey
  • Environment: Google reviews + field visit

Testing:
- CSV import validation
- Data alert displays correctly
- Historical data accurate

Deliverable: Admin dashboard fully functional; real data in system
```

#### **Sprint 5 (Week 8): Polish & Pre-Launch**
```
Goal: Production-ready, tested, documented

Frontend:
- Visual polish (colors, spacing, typography)
- Loading states (skeleton on slow network)
- Error messages (network failure, server error)
- Accessibility audit & fixes

Backend:
- Error handling & logging
- Rate limiting on API
- CORS configured
- Database backups automated

Documentation:
- Admin user guide (login → update flow)
- Troubleshooting guide
- Data maintenance schedule
- Launch checklist

Testing:
- Full E2E on mobile + desktop
- Lighthouse scores
- Load testing (100 concurrent)
- Browser compatibility

Deliverable: Production-ready MVP
```

#### **Timeline Summary**
```
Sprint 1: Quiz Core Engine (W3–4)
Sprint 2: Interactivity & Mobile (W5)
Sprint 3: Admin Dashboard v1 (W6)
Sprint 4: Admin Refinements & Real Data (W7)
Sprint 5: Polish & Pre-Launch (W8)

Buffer: 1 week for bug fixes + contingency

Target Launch: End of Week 8 (Late July / Early August 2026)
```

---

### **Fase 3: VERIFY (Week 9, 1 week)**

#### **3.1 Testing Checklist**

**Functional Testing:**
```
Quiz Flow:
□ Step 1 persona selection → step 2 loads
□ Budget slider works, min/max enforced
□ Priority buttons mutually exclusive
□ Step 2 algorithm bars display correctly
□ Step 3 ranking shows 5 distrik in correct order
□ "Best Match" badge on rank 1
□ Detail page shows all metadata
□ "Try Again" resets without reload
□ Browser back button preserves state
□ No js errors in console
□ Forms validate correctly
```

**Admin Workflow:**
```
□ Login with correct credentials succeeds
□ Login with wrong credentials fails
□ Non-admin user denied access
□ Edit distrik form appears
□ Input values 0–100 accepted
□ Values outside 0–100 rejected
□ Save triggers audit log entry
□ Audit log shows correct old/new values
□ Data freshness alert shows for >7 days
□ CSV import preview shows correct data
□ CSV import error handling works
□ Exported audit log CSV readable
```

**Performance Testing:**
```
□ Quiz completion <60 sec on 4G
□ Page load <2 sec on 4G
□ Mobile layout <500ms response on slider
□ Database queries <200ms
□ No layout shift (CLS <0.1)
□ Largest contentful paint <2.5s
```

**Security Testing:**
```
□ Admin endpoints protected (no anonymous access)
□ SQL injection tests pass
□ CSRF tokens present on forms
□ No sensitive data in client JS
□ Passwords hashed in database
□ API keys not in version control
```

**Mobile Testing (Real Devices):**
```
Device: iPhone SE (2022)
□ Layout single column, readable
□ Touch targets ≥44px
□ No horizontal scroll
□ Quiz completion works end-to-end

Device: Samsung Galaxy A50
□ Same layout tests
□ Slider smooth on mid-range device

Device: iPad (landscape)
□ 2-column layout if applicable
□ All features accessible
```

**Accessibility Testing:**
```
□ WCAG 2.1 AA: all text ≥14px
□ Color contrast ≥4.5:1 for body text
□ Form inputs have labels
□ Buttons accessible via keyboard (Tab)
□ Focus indicators visible
□ No focus traps
□ Screen reader test (NVDA/JAWS on Windows, VoiceOver on Mac/iOS)
```

#### **3.2 User Acceptance Testing (UAT)**

**Internal Testing (2 days):**
```
Testers: All 4 team members + mentors
Device Coverage:
- Laptop (Chrome, Safari, Firefox)
- Mobile (personal phones)
- Tablet (if available)

Test Scenarios:
1. Developer persona quiz flow (3 min)
2. Creator persona → detail page (3 min)
3. Student persona → try different budgets (3 min)
4. Admin login → edit Kota Yogya (3 min)
5. Admin bulk import (3 min)
6. Mobile quiz on landscape (2 min)
7. Network failure recovery (2 min)

Bug Log: Triage & fix
- Blocker: critical path broken
- Major: feature not working
- Minor: cosmetic/typo
- Polish: nice-to-have improvement
```

**Closed Beta Testing (3–5 days):**
```
Target: 20–30 users (friends/classmates fitting our persona)
Recruitment: Instagram/Telegram groups, class announcements

Tasks for Beta Users:
1. "Try the quiz and reach results" (5 min)
2. "Find which distrik is best for you" (5 min)
3. "Click on a distrik detail page" (2 min)
4. "Rate your experience" (1 question NPS)
5. "Any feedback?" (open text, optional)

Feedback Collection:
- In-app: post-results survey form
- Telegram group: discuss & bug reports

Success Criteria:
- ≥80% complete Step 3 (completion rate)
- ≥3.5/5 avg rating
- No blocking bugs reported
- <3 "critical" bugs
```

#### **3.3 Data Validation**

```
Verify each distrik has:
□ Internet: 1–100, realistic for Yogyakarta
□ Cost: 1–100 (normalized from actual UMK)
□ Community: 1–100, based on actual events + survey
□ Environment: 1–100, based on noise/safety/amenities

Spot-check calculations:
□ Run quiz as Developer with Rp 4juta budget
  → Should rank Internet-heavy distrik high
□ Run as Student with Rp 2.5juta budget
  → Should rank Cost-heavy (Gunungkidul/Kulon Progo) high
□ Run as Creator
  → Should rank Community-heavy (Sleman/Kota) high

Historical audit log:
□ All edits recorded with timestamp + admin name
□ No data corruption visible
```

---

### **Fase 4: SHIP (Week 9, final push)**

#### **4.1 Production Deployment**

```
Pre-Flight Checklist (day before launch):
□ All WAT bugs closed
□ Database backup taken
□ Environment variables set (prod API keys, etc.)
□ Monitoring alerts configured (Sentry, Uptime Robot)
□ Rollback plan documented
□ Support/troubleshooting runbook prepared

Deployment Steps:
1. Tag release as v1.0 in git
2. Deploy to Vercel production
   - Automatic on git push to main
   - Waits for all checks to pass
3. Smoke test on live: quiz flow end-to-end
4. Enable monitoring/alerting
5. Prepare announcement

Rollback Plan (if needed):
- Revert to previous Vercel deployment (1-click)
- Database rollback (manual, if data corruption)
- Communication to users (via social media)
```

#### **4.2 Launch Announcement**

**Channels:**
```
1. Telegram groups (Freelance DIY, Gen Z Indonesia, Tech community)
   Message: "Kami luncurkan Freelance City Index! 🎉 Temukan distrik terbaik di DIY untuk kerja remote. Quiz 5 menit, dapat rekomendasi personal."
   Link: freelancecityindex.id

2. Instagram posts (team accounts, tagged @yogyakartacityofficial, @dicofoodcourt)
   Visual: Quote "Distrik mana yang cocok untuk freelancer Yogya?"

3. WhatsApp broadcast (personal networks)
   Short message + link

4. Reddit/Medium (if relevant communities exist)
   Longer-form: "Why we built Freelance City Index"

5. Slack DIY Tech communities (if accessible)
```

**Messaging Template:**
```
Headline: "Freelance City Index: Temukan Distrik Terbaik untuk Kerja Remote di Yogyakarta"

Body:
"Bingung milih distrik di DIY untuk kerja remote? Kecepatan internet, biaya hidup, 
lingkungan kerja — semuanya berbeda per distrik.

Kami (mahasiswa informatika ITB) bikin platform yang membantu:
- Developer IT: cari WiFi stabil + coworking terjangkau
- Designer/Creator: lingkungan inspiratif + komunitas seni
- Mahasiswa/Fresh Grad: manage budget ketat tanpa kompromi

>> Coba quiz 5 menit: freelancecityindex.id ✨

Pertanyaan? Feedback? DM @freelancecityindex atau reply di sini."
```

#### **4.3 Post-Launch Monitoring (Week 9–10)**

```
Daily Check (First 5 days):
□ Uptime: 100% or alert immediately
□ Error rate: <1% (Sentry dashboard)
□ Quiz completion rate tracking
□ User feedback/complaints (Telegram, email)
□ Database size & query performance

Weekly Check (Ongoing):
□ MAU vs target (500–1k)
□ Return visit rate trending up?
□ CSAT survey results
□ Data freshness (admin updates happening?)
□ System performance (Lighthouse scores)

On-call Support (First 2 weeks):
- Telegram group monitored by 1–2 team members
- Email responses within 24h
- Critical bugs: hotfix & deploy immediately
- Feedback logged for v1.1 iteration
```

---

## SUMMARY: SARAN PERBAIKAN RINGKAS

| Area | Masalah | Solusi |
|------|---------|--------|
| **Algorithm** | Formula abstrak, bobot tidak jelas | Tabel eksplisit bobot per persona + normalization method |
| **Personas** | Hanya nama, tidak ada detail | Card persona dengan goals, pain points, budget range |
| **Admin** | Form saja, tidak ada audit/analytics | Add audit log viewer, bulk import, data freshness alert |
| **Mobile** | Hanya sebagai constraint | Define layout spec per breakpoint, test on real devices |
| **Data** | Update process unclear | Weekly update schedule, BPS/APJII sync defined, manual survey |
| **Success Metrics** | Terlalu aspirational | Lower MAU target (1k–3k), add quality metrics |
| **Tech Stack** | Not specified | Recommend: Next.js + Supabase + Vercel (free tier) |
| **Launch Plan** | Missing | Add: UAT, beta testing, deployment checklist, monitoring |

---

## NEXT STEPS (IMMEDIATE)

### **Week 1: Approval & Planning**
1. **Review** saran ini dengan tim + PO (2 jam meeting)
2. **Decide**: buang, refine, atau fully adopt per saran
3. **Update** PRD v1.1 dengan consensus
4. **Finalize** tech stack & deployment platform
5. **Create** detailed sprint cards dari section Fase 2

### **Week 2–8: Execution (lihat Fase 2 EXECUTE)**

### **Week 9: Verify & Ship (lihat Fase 3 & 4)**

---

**Document Version:** v0.1 Analysis + GSDP Plan  
**Created:** June 2026  
**Last Updated:** June 16, 2026  
**Status:** Ready for team review
