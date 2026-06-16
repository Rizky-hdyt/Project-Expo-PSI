# TEAM MEETING CHECKLIST & DECISION TEMPLATE
**Freelance City Index: PRD Improvement Review**

---

## 📋 PRE-MEETING PREP (Do this before meeting!)

**Send to team 24h before:**
```
□ Share: Quick_Summary_Saran_Perbaikan.md
□ Share: PRD_Analysis_GSDP_Plan.md
□ Ask: "Read sections: Quick Summary + PART 0 (Temuan Utama)"
□ Time limit: 30 min read (not everything, just overview)
```

---

## 🎯 MEETING AGENDA (120 min total)

### **PART 1: Opening & Context (10 min)**
```
Facilitator: [Name - recommend: Mohammad Rizky or mentor]

□ 2 min: "Why are we here?" 
   → Current PRD is solid, but has 8 gaps that could derail us later
   → 2-hour review session to validate + finalize scope

□ 3 min: "What are we deciding?"
   → Keep/refine/discard each of the 8 saran
   → Finalize algorithm weights (critical!)
   → Confirm tech stack + target launch date

□ 5 min: "What's the output?"
   → Approved PRD v1.1 (with team consensus)
   → Sprint start date locked
   → Sign-off from PO
```

---

### **PART 2: 8 Saran Review & Decision (90 min)**

#### **Decision Template per Item (5–8 min each)**

```
Saran #X: [Title]
─────────────────────────────

ISSUE:
[Copy from table above]

PROPOSED SOLUTION:
[From full doc]

DECISION OPTIONS:
A) Keep as-is (from PRD v1.0)
B) Adopt refinement (from saran)
C) Compromise approach (mix A+B)
D) Defer to v1.1 later

TEAM VOTE:
   Rizky:  [ ]A [ ]B [ ]C [ ]D  →  Why? ________
   Syfa:   [ ]A [ ]B [ ]C [ ]D  →  Why? ________
   Aditya: [ ]A [ ]B [ ]C [ ]D  →  Why? ________
   Luthfi: [ ]A [ ]B [ ]C [ ]D  →  Why? ________

FACILITATOR DECISION:
   → Majority? ________
   → Any strong objections? ________
   → Final: KEEP / REFINE / DEFER ________

ACTION ITEMS (if refine):
   □ Who updates PRD? _______  By when? _______
   □ Any blockers? ________
```

---

### **SARAN REVIEW ITEMS (90 min allocation)**

```
Saran #1: Algorithm Specification (8 min)
└─ Bobot table per persona (Developer/Creator/Student)
└─ Normalization method (min-max? z-score?)
└─ Tiebreaker rules
   
   ⏱️ Questions to discuss:
      - Do we want weighted scoring or simpler approach?
      - Are these weights intuitive for each persona?
      - What if two distrik have same score AND UMK?

Saran #2: Persona Detail Cards (5 min)
└─ Goals, pain points, budget range per persona
└─ Quiz question examples (12q breakdown by persona)
   
   ⏱️ Questions:
      - Do current persona descriptions match target users?
      - How many quiz questions per persona type?

Saran #3: Mobile UX Specification (8 min)
└─ Layout breakpoints (≤480px, 481–768px, ≥769px)
└─ Touch target specs (44px minimum)
└─ Component responsive design
   
   ⏱️ Questions:
      - Which devices to test on? (iPhone SE, Galaxy A50, iPad?)
      - Acceptable to skip landscape mode for v1?

Saran #4: Admin Dashboard Features (8 min)
└─ Current: form only
└─ Add: audit log viewer, CSV import, data freshness alerts
   
   ⏱️ Questions:
      - Is audit log necessary for MVP or defer to v2?
      - CSV import: must-have or nice-to-have?
      - Data freshness alert: daily? weekly? color coding?

Saran #5: Data Management Workflow (8 min)
└─ Weekly update schedule definition
└─ BPS/APJII data sync (manual or automated?)
└─ Community survey process
   
   ⏱️ Questions:
      - Who will do weekly data updates? (rotation?)
      - How often can we realistically pull BPS/APJII?
      - Community data: coworking calendar scraping or manual?

Saran #6: Success Metrics Adjustment (5 min)
└─ MAU: 10k → 1k–3k (more realistic)
└─ Completion rate: 70% → ≥50% (gradual)
└─ CSAT: 4.2 → ≥3.8 (achievable)
   
   ⏱️ Questions:
      - Are lower targets OK for MVP?
      - How will we measure completion quality (not just finishing)?

Saran #7: Tech Stack (5 min)
└─ Recommend: Next.js + Supabase + Vercel (free tier)
└─ Cost: ~Rp 200k/year (domain only)
   
   ⏱️ Questions:
      - Everyone OK with this stack?
      - Any preferred alternatives?
      - Database: Supabase vs Firebase? (both free)

Saran #8: Launch Plan (8 min)
└─ Beta testing phase (20–30 users, 3–5 days)
└─ Deployment checklist (50+ items)
└─ Monitoring setup (Sentry, Uptime Robot)
   
   ⏱️ Questions:
      - Timeline: realistic to launch late July?
      - Who handles post-launch support?
```

**Time Allocation:**
```
Saran 1–3: 21 min (high priority)
Saran 4–8: 30 min (medium–low priority)
Buffer:    10 min (for discussion overrun)
```

---

### **PART 3: Algorithm Deep-Dive (20 min)**

Since Saran #1 is critical, dedicated time:

```
DISCUSSION POINT 1: Persona Bobot Weights
─────────────────────────────────────────

Current proposal:
┌──────────────┬─────────┬──────┬───────────┬────────────┐
│ Persona      │ Internet│ Cost │ Community │ Environment│
├──────────────┼─────────┼──────┼───────────┼────────────┤
│ Developer    │  40%    │ 20%  │   30%     │   10%      │
│ Creator      │  10%    │ 20%  │   35%     │   35%      │
│ Student      │  10%    │ 50%  │   20%     │   20%      │
└──────────────┴─────────┴──────┴───────────┴────────────┘

Team discussion:
□ Do these weights feel right?
□ Any persona needing adjustment?
□ Why those specific percentages?

Vote per persona:
   Developer weights: [ ]Agree [ ]Adjust  → Proposed change: ______
   Creator weights:   [ ]Agree [ ]Adjust  → Proposed change: ______
   Student weights:   [ ]Agree [ ]Adjust  → Proposed change: ______

FINAL AGREED WEIGHTS:
[Document here]


DISCUSSION POINT 2: Normalization Method
─────────────────────────────────────────

Option A: Min-Max Normalization
  norm = (value - min) / (max - min)
  Pro: Simple, easy to explain
  Con: Sensitive to outliers

Option B: Z-Score Normalization
  norm = (value - mean) / std_dev
  Pro: Handles outliers better
  Con: Harder to explain to users

Team vote:
   Rizky:  [ ]A [ ]B
   Syfa:   [ ]A [ ]B
   Aditya: [ ]A [ ]B
   Luthfi: [ ]A [ ]B

DECISION: ________


DISCUSSION POINT 3: Tiebreaker Rules
────────────────────────────────────

Scenario: Two distrik have exactly same score

Current proposal:
1. Distrik dengan UMK terendah rank higher (affordability)
2. If UMK same: higher community score ranks higher
3. If still tied: alphabetical

Team discussion:
□ Is affordability the right primary tiebreaker?
□ Should we add "frequency of tiebreaks" check?
□ Any edge cases we're missing?

Final tiebreaker order approved:
□ Yes, use current proposal
□ No, modify to: ________
```

---

### **PART 4: Timeline & Scope Lock (10 min)**

```
DECISION MATRIX:
─────────────────

Current deadline: Mei–Juli 2026 (sudah lewat!)

Proposed new timeline:
□ Week 3–9: Execution (6 weeks)
□ Week 9: Verify + UAT (parallel)
□ Week 9 end: Launch

Target go-live date: ___________ (late July / early August / other)

SCOPE LOCK (what's in MVP, what's deferred):

IN Scope (Must ship):
  □ Quiz + scoring (3 personas, budget slider)
  □ Results page (ranking 5 distrik)
  □ Admin dashboard (login + edit + audit log)
  □ Mobile responsive (tested)
  □ Real data (5 distrik populated)

OUT of Scope (defer to v1.1 or later):
  □ User accounts / saved results
  □ Interactive maps
  □ User ratings/reviews
  □ Push notifications
  □ Mobile native apps
  □ Multibahasa

Team confirm scope: [ ]Yes [ ]No  → Changes? ________
```

---

### **PART 5: Closing & Decisions (10 min)**

```
SUMMARY OF DECISIONS:

□ Algorithm weights: ________________
□ Normalization method: ________________
□ Tech stack: ________________
□ Launch target date: ________________
□ MVP scope locked: ________________

ASSIGNMENTS:

□ PRD v1.1 update owner: ________ (Due: ________)
□ Sprint planning owner: ________ (Due: ________)
□ DB schema design: ________ (Due: ________)
□ API spec: ________ (Due: ________)

NEXT MEETING:

Date: ________
Time: ________
Topic: Sprint planning detailed breakdown
Prep: Tech stack documentation review

PO SIGN-OFF:

Product Owner: Mohammad Rizky
Review PRD v1.1: [ ] ✅ Approved [ ] 🔄 Needs revision [ ] ❌ Rejected

Signature: ____________  Date: ________

Mentor sign-off (if applicable):
Name: ____________
Signature: ____________  Date: ________
```

---

## 📝 NOTES FOR FACILITATOR

**Keep the meeting on track:**
```
□ Use a timer (5–8 min per item)
□ If discussion gets stuck, suggest: "Let's park this for after-meeting"
□ If consensus unclear, use quick vote: "hands up for A...B...C"
□ Document all decisions in real-time (use laptop + shared screen)
□ Don't try to update PRD during meeting (too slow)
```

**Red flags to watch:**
```
🚩 If team can't agree on algorithm weights → escalate to mentor
🚩 If launch date seems unrealistic → discuss scope cut options
🚩 If tech stack raising concerns → name them explicitly
🚩 If energy drops → take 5 min break, then continue
```

**Success criteria:**
```
✅ All 8 saran items decided (keep/refine/defer)
✅ Algorithm weights finalized & documented
✅ Tech stack confirmed
✅ Launch date committed
✅ PRD v1.1 update assigned
✅ Sprint planning scheduled
```

---

## 🎁 MEETING GIFT FOR TEAM

After meeting, share:
```
1. PRD v1.1 draft (with decisions)
2. Sprint breakdown cards (Notion/Trello template)
3. Tech stack setup guide (Next.js + Supabase quickstart)
4. Monitoring tools links (Sentry, Vercel, Uptime Robot)
5. Algorithm spreadsheet (test weights with example data)
```

---

**Prepared by:** Claude AI  
**Date:** June 2026  
**Duration:** ~2 hours  
**Attendees:** All 4 team members + PO + mentor (optional)
