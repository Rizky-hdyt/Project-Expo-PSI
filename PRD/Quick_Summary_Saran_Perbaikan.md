# QUICK SUMMARY: Saran Perbaikan PRD & Rencana GSDP
**Freelance City Index: Yogyakarta Edition**  
**Status**: Draft Improvements | **Team**: Innovative Technology Group

---

## 🎯 8 AREA UTAMA PERBAIKAN

| No. | Area | Problem | Solution | Priority |
|-----|------|---------|----------|----------|
| **1** | **Algorithm** | Formula terlalu abstrak, bobot tidak terdefenisi | Buat tabel eksplisit bobot per persona + normalization method | 🔴 Must |
| **2** | **Personas** | Hanya nama, tidak ada detail goals/pain points | Create persona card dgn archetypal needs + budget range | 🔴 Must |
| **3** | **Mobile UX** | Hanya constraint, belum ada spec layout | Define breakpoints (≤480px, 481–768px, ≥769px) + test spec | 🔴 Must |
| **4** | **Admin Features** | Form saja, tidak ada audit/import | Add: audit log viewer, bulk CSV import, data freshness alerts | 🟠 Should |
| **5** | **Data Management** | Update process vague, no automation | Define weekly schedule: BPS/APJII sync, manual survey process | 🟠 Should |
| **6** | **Success Metrics** | Terlalu aspirational (10k MAU vs 4-person team) | Lower target: 1k–3k MAU, add quality metrics (completion time, CSAT) | 🟠 Should |
| **7** | **Tech Stack** | Not specified | Recommend: Next.js + Supabase + Vercel (free tier ✅) | 🔴 Must |
| **8** | **Launch Plan** | Missing entirely | Add: beta testing, deployment checklist, monitoring, UAT | 🔴 Must |

---

## 📋 QUICK ACTION ITEMS (This Week)

### **DISCUSS Phase (2–3 hours)**
```
□ Internal tim meeting: 30 min each per topik
  ├─ Review 8 saran → vote: keep/refine/discard
  ├─ Finalize algorithm bobot (Developer/Creator/Student weights)
  ├─ Agree tech stack (Next.js + Supabase + Vercel)
  └─ Confirm MVP scope vs deadline (saat ini: late July target)

□ Stakeholder alignment with PO + mentor: 1 hour
  ├─ Present updated PRD v1.1
  ├─ Discuss realistic launch date
  └─ Q&A on refined features
```

### **PLAN Phase (Week 2–3)**
```
□ Create detailed sprint breakdown (see full doc)
□ Design database schema (5 distrik master table + audit log)
□ Write API endpoint spec (6–8 endpoints)
□ Component architecture (React/Next.js folder structure)
□ Testing strategy (unit, integration, E2E)
□ Deployment checklist
```

### **EXECUTE Phase (6 weeks)**
```
Sprint 1 (W3–4): Quiz core engine (desktop)
Sprint 2 (W5): Mobile + interactivity
Sprint 3 (W6): Admin dashboard v1 (login + edit)
Sprint 4 (W7): Bulk import + real data + alerts
Sprint 5 (W8): Polish + testing + pre-launch checklist
```

### **VERIFY Phase (1 week)**
```
□ Functional testing (all workflows on desktop + mobile)
□ Admin testing (login → edit → audit log)
□ Performance (Lighthouse ≥90 score)
□ Security (no secrets in code, endpoints protected)
□ Mobile on real devices (iPhone SE, Galaxy A50, iPad)
□ Accessibility (WCAG 2.1 AA minimum)
□ Internal UAT (team + mentors)
□ Closed beta (20–30 friends, collect NPS feedback)
```

### **SHIP Phase (1 week)**
```
□ Production deployment (tag v1.0, deploy to Vercel)
□ Launch announcement (Telegram, Instagram, Reddit)
□ Monitoring setup (Sentry, Uptime Robot, Vercel Analytics)
□ On-call support (first 2 weeks)
```

---

## 🔍 KEY CHANGES AT A GLANCE

### **Algorithm (from abstract → concrete)**

**OLD:**
```
Skor = Σ (nilai indikator × bobot persona)
```

**NEW:**
```
Bobot per Persona:

Developer:    Internet 40% | Cost 20% | Community 30% | Environment 10%
Creator:      Internet 10% | Cost 20% | Community 35% | Environment 35%
Student:      Internet 10% | Cost 50% | Community 20% | Environment 20%

Normalization: (raw - min) / (max - min) ∈ [0, 1]
Tiebreaker: UMK terendah, then community score, then alphabetical
```

---

### **Admin Dashboard (from form → full system)**

**OLD:**
- Simple form untuk input 4 indikator

**NEW:**
- ✅ Data Management Panel (status table + last updated timestamp)
- ✅ Edit Form (4 slider inputs, real-time validation)
- ✅ Audit Log Viewer (sortable, export CSV)
- ✅ Bulk CSV Import (preview + validation + rollback)
- ✅ Data Freshness Alerts (warning if >7 days, blocking if >14 days)
- ✅ Admin analytics dashboard (placeholder for v2)

---

### **Mobile UX (from constraint → detailed spec)**

**OLD:**
- "Platform harus responsif di browser mobile tanpa instalasi"

**NEW:**
```
Mobile (≤480px):
  - Single column layout
  - 44px × 44px minimum touch targets
  - Full-width slider + buttons
  - Progress dots (step indicator)

Tablet (481–768px):
  - 2-column layout where applicable
  - 40px touch targets

Desktop (≥769px):
  - Multi-column, generous spacing
```

**Testing**: actual devices (iPhone SE, Galaxy A50, iPad)

---

### **Success Metrics (from aspirational → realistic)**

| Metric | OLD Target | NEW Target | Justification |
|--------|-----------|-----------|-----------------|
| MAU 3mo | 10,000 | 1,000–3,000 | 4-person team, student population, free hosting |
| Quiz completion | 70% | ≥50% → ≥70% by 6mo | Gradual improvement |
| CSAT | 4.2/5 | ≥3.8/5 → ≥4.2/5 | Realistic for MVP |
| Uptime | Not tracked | ≥99.5% | Add monitoring |

---

## 🛠️ TECH STACK RECOMMENDATION

```
Frontend:  Next.js 14 + React + TypeScript + Tailwind + Recharts
Backend:   Supabase PostgreSQL + Auth
Hosting:   Vercel (automatic, free tier)
Database:  Supabase free tier (500k API calls/mo)
Monitoring: Sentry + Vercel Analytics + Uptime Robot

Cost/year: ~Rp 200k (domain only) ✅
Deployment: git push → Vercel auto-deploy ✅
```

---

## 📊 SPRINT BREAKDOWN (Visual at end of full doc)

```
Week 3–4:   Quiz core engine (desktop)     → Deliverable: working desktop quiz
Week 5:     Mobile + interactivity          → Deliverable: responsive on all devices
Week 6:     Admin dashboard v1              → Deliverable: admin can edit data
Week 7:     Data import + real distrik data → Deliverable: system ready for weekly updates
Week 8:     Polish + full testing           → Deliverable: production-ready MVP
Week 9:     Verify + UAT + beta testing     → Deliverable: approved for launch
```

---

## 📈 REALISTIC GO-LIVE TIMELINE

**Current Status:** June 2026 (PRD v1.0 drafted)  
**Revised Target:** Late July / Early August 2026  
**Confidence:** 75% (depends on team velocity + bugs)

**Risk Factors:**
- ⚠️ Team 4 orang, part-time (capacity tight)
- ⚠️ Real data gathering (BPS/APJII sync) requires manual work
- ⚠️ Mobile testing on real devices (need device pool)
- ⚠️ Admin training for data updates (needs documentation)

**Mitigation:**
- ✅ Clear sprint goals, no scope creep
- ✅ Early mobile testing (week 5, not week 8)
- ✅ Data gathering starts week 7 (parallel with polish)
- ✅ Weekly sync on blockers

---

## 📥 NEXT MEETING AGENDA (1–2 hours)

1. **Discuss & Decide** (30 min)
   - Review saran perbaikan → vote per item
   - Finalize algorithm weights
   - Confirm tech stack

2. **Plan & Estimate** (45 min)
   - Review sprint breakdown
   - Assign owner per sprint
   - Identify blockers

3. **Align & Commit** (15 min)
   - Update PRD v1.1 final
   - Get sign-off from PO
   - Set kick-off date (Week 3 start date)

---

## 📄 FULL DOCUMENTATION

See: `PRD_Analysis_GSDP_Plan.md` for:
- Complete 8 area analysis
- Detailed GSDP phases (Discuss, Plan, Execute, Verify, Ship)
- Database schema SQL
- API endpoint spec
- Component architecture
- Testing checklist
- Deployment checklist
- Launch announcement templates

---

**Document**: Quick Summary | **Status**: Ready for Review  
**Created**: June 2026 | **For**: Team Review Meeting
