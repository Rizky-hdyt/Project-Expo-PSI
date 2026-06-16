# 5 TAHAPAN GSDP DENGAN FASE DETAIL & REKOMENDASI CLAUDE MODEL
**Freelance City Index: Yogyakarta Edition**

---

## 📊 OVERVIEW: GSDP Framework Extended

```
DISCUSS (Week 1–2)
    ├─ Phase D1: Initial Discovery & Gap Analysis
    ├─ Phase D2: Stakeholder Alignment
    └─ Phase D3: Decision Documentation

PLAN (Week 2–3)
    ├─ Phase P1: Technical Architecture Design
    ├─ Phase P2: Detailed Task Breakdown
    └─ Phase P3: Resource & Timeline Planning

EXECUTE (Week 3–8, 6 weeks)
    ├─ Phase E1: Sprint 1–2 (Core Features)
    ├─ Phase E2: Sprint 3–4 (Admin & Data)
    └─ Phase E3: Sprint 5 (Polish & Optimization)

VERIFY (Week 9)
    ├─ Phase V1: Functional Testing
    ├─ Phase V2: User Acceptance Testing (UAT)
    └─ Phase V3: Production Readiness Audit

SHIP (Week 9, final days)
    ├─ Phase S1: Deployment Preparation
    ├─ Phase S2: Go-Live Execution
    └─ Phase S3: Launch Monitoring & Support
```

---

# TAHAP 1: DISCUSS (Week 1–2)

## **Tujuan**
Validate PRD v1.0, identifikasi gaps, align stakeholders, finalize PRD v1.1 dengan consensus.

---

## **Phase D1: Initial Discovery & Gap Analysis**
**Duration**: 3 days (2–4 June)

### **Aktivitas**

#### **1.1 Internal Brainstorm Session (2 jam)**
```
Peserta: 4 team members + 1 notulis
Topik:
  □ "Apa gap terbesar di PRD v1.0?"
  □ "Apa asumsi yg perlu divalidate?"
  □ "Apa yang paling risky untuk development?"
  □ "Apa yang tidak jelas dalam requirement?"

Output: Gap list (10–15 items)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (best for brainstorming & synthesis)
- **Use Case**: Synthesis brainstorm notes, organize themes, categorize risks
- **Prompt Template**:
```
Aku provide brainstorm notes dari team meeting. 
Organize jadi themes (algorithm, mobile, data, admin, launch).
Per theme, identify:
- Gap (apa yg belum tercakup)
- Risk (apa worst case)
- Priority (must-have vs nice-to-have)

Output: Structured gap analysis table
```

#### **1.2 PRD v1.0 Gap Analysis (1.5 jam)**
Pelajari PRD v1.0 mendalam:
```
Focus areas:
  □ Problem statement: apakah truly reflects real user pain?
  □ Requirements: apakah testable & achievable dalam 6 weeks?
  □ Data: apakah realistic (BPS/APJII accessibility)?
  □ Scope: apakah MVP realistic atau bloated?
  □ Success metrics: apakah achievable?
```

**Output**: Gap document (2–3 pages)

#### **1.3 Competitive & Similar Product Research (1 jam)**
```
Examples to check:
  □ Nomad List (digital nomad city rankings)
  □ Numbeo (cost of living database)
  □ Coworking space directories (Asia, Indonesia)
  □ Regional comparisons (city guides)

Pembelajaran:
  - Mana feature yg common? (baseline)
  - Mana feature yg differentiate? (unique selling point)
  - Apa yang user nilai paling? (rating/reviews? costs? community?)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick summaries, pattern finding)
- **Use Case**: Quick research synthesis, feature comparison
- **Prompt**:
```
Ini adalah feature list dari 3 kompetitor (Nomad List, Numbeo, coworking.id).
Identify:
1. Common features (apa semua ada)
2. Differentiators (apa hanya mereka punya)
3. Gaps (apa semua tidak punya - opportunity!)
4. User pain points (dari review/feedback)

Output: Competitive matrix + opportunity gaps
```

### **Deliverable**
- ✅ Gap analysis document
- ✅ Competitive research summary
- ✅ Risk register (top 10 risks)

---

## **Phase D2: Stakeholder Alignment**
**Duration**: 3 days (5–7 June)

### **Aktivitas**

#### **2.1 Internal Team Alignment Meeting (2 jam)**
```
Peserta: 4 team members + mentor (jika ada)
Agenda (dari Team_Meeting_Checklist.md):
  □ Present gap analysis
  □ Vote on 8 saran perbaikan (keep/refine/defer)
  □ Finalize algorithm weights
  □ Confirm tech stack
  □ Lock launch target date
  □ Assign task owners

Output: Decision log (8 saran + decisions)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (balanced - analysis + creative problem solving)
- **Use Case**: Meeting prep, generating discussion questions, summarizing consensus
- **Prompt untuk meeting prep**:
```
Dari 8 saran perbaikan PRD, yang paling kompleks untuk discuss:
1. Algorithm weights per persona
2. Admin dashboard features
3. Mobile UX breakpoints
4. Data management workflow

Per item, generate:
- Discussion question (untuk provoke thinking)
- Pros & cons per approach
- Decision criteria (apa yg paling penting)
- Default recommendation (jika tim stuck)

Ini untuk meeting facilitation.
```

#### **2.2 PO & Stakeholder Review (1.5 jam)**
```
Peserta: Mohammad Rizky (PO) + mentor + 1–2 team reps
Topik:
  □ Present revised PRD v1.1 (with 8 improvements)
  □ Confirm scope lock (MVP vs deferred)
  □ Discuss realistic launch target
  □ Validate business assumptions (BPS/APJII data availability)
  □ Budget & resource confirmation
```

#### **2.3 Mentor/Advisor Review (1 jam)**
```
Peserta: Technical mentor (jika available)
Topik:
  □ Tech stack validation (Next.js + Supabase OK?)
  □ Architecture review (database schema, API design)
  □ Risk assessment (team capacity, external dependencies)
  □ Timeline reality check (6 weeks achievable?)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (complex decision making, multi-stakeholder analysis)
- **Use Case**: Prepare stakeholder presentation, anticipate objections, refine messaging
- **Prompt**:
```
Aku akan present revised PRD ke PO & mentor.
Generate:
1. Presentasi slide outline (dengan timing)
2. Key messages per stakeholder:
   - PO perspective (business value, user needs)
   - Technical mentor perspective (feasibility, tech debt)
   - Team perspective (morale, resources)
3. Anticipated objections + rebuttals:
   - "Timeline terlalu agresif"
   - "Admin dashboard too complex for MVP"
   - "Data gathering unrealistic"
4. Open questions (untuk clarification)

Output: Presentation deck outline + FAQ
```

### **Deliverable**
- ✅ PRD v1.1 finalized (dengan 8 saran adopted)
- ✅ Decision log (8 saran + final decisions)
- ✅ Stakeholder sign-off (PO approval)
- ✅ Tech stack document (with rationale)
- ✅ Launch target date confirmed

---

## **Phase D3: Decision Documentation**
**Duration**: 2 days (8–9 June)

### **Aktivitas**

#### **3.1 PRD v1.1 Update & Documentation**
```
Owner: [Assign 1 person, e.g., Aditya Fajar Aritama]
Task:
  □ Incorporate all 8 saran into PRD v1.0
  □ Update sections: Algorithm, Personas, Mobile spec, Admin features, Data mgmt, Metrics, Tech stack, Launch plan
  □ Maintain v1.1 changelog
  □ Get review + approval dari team + PO
  □ Final version: commit to git
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (content generation + editing)
- **Use Case**: Draft section rewrites, ensure consistency, maintain tone
- **Prompt**:
```
Aku ada PRD v1.0 section tentang "Algorithm" (lihat teks).
Perlu diupdate dengan:
- Eksplisit bobot table per persona
- Normalization method (min-max)
- Tiebreaker rules
- Example calculation dengan actual numbers

Rewrite section jadi:
- Jelas & precise (untuk engineers)
- Testable (mana yang bisa diverifikasi)
- Include contoh dengan 5 distrik DIY actual

Keep original tone & structure, just more detailed.
```

#### **3.2 Risk Register & Mitigation Plan**
```
Owner: [Assign 1 person, e.g., Muhammad Luthfi]
Task:
  □ Document top 10 risks (technical, timeline, team, external)
  □ Per risk: likelihood (1-5), impact (1-5), mitigation strategy
  □ Assign risk owner (who monitors this)
  □ Create escalation path (what to do if risk happens)
  □ Review quarterly (or weekly in high-risk sprints)

Example risks:
  1. Supabase downtime → backup database? Manual fallback?
  2. BPS data not available → use cached/estimated values?
  3. Team member sick → cross-training needed?
  4. Scope creep (PO requests new features) → change control process?
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick risk assessment)
- **Use Case**: Generate risk inventory, mitigation strategies
- **Prompt**:
```
Project: Freelance City Index MVP, 6 weeks, 4 person team, free tier deployment.

Generate risk register dengan:
- 10 potential risks (technical, timeline, team, external)
- Per risk: likelihood (1-5), impact (1-5), priority (L×I)
- Mitigation strategy (what can we do NOW)
- Contingency plan (what if it happens)
- Risk owner (who monitors)

Sort by priority. Format: table + narrative.
```

#### **3.3 Requirements Traceability Matrix (RTM)**
```
Owner: [Assign 1 person, e.g., Zulfani Syfa]
Task: Map requirements → tests → launch criteria
  
  Requirement (from PRD)
    ↓
  Functional Spec (how to implement)
    ↓
  Test Cases (how to verify)
    ↓
  Launch Criteria (done when?)

Example:
  FR-001: "Display 3 persona cards"
    → Frontend: PersonaSelector.tsx component
    → Tests: Can click each card, click changes state
    → Launched when: Component renders on desktop + mobile
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (structured requirements mapping)
- **Use Case**: Generate RTM table, ensure coverage
- **Prompt**:
```
PRD requirement list (FR-001 to FR-A05):

Generate Requirements Traceability Matrix:
- Column 1: Requirement ID & description
- Column 2: Functional spec (how to build)
- Column 3: Test cases (how to verify)
- Column 4: Launch criteria (definition of done)
- Column 5: Sprint owner (who implements)

Ensure:
1. Every requirement has test case
2. Every test case is clear & automated-testable
3. No requirement without owner
4. No gaps between requirements & tests

Output: RTM table + validation report
```

### **Deliverable**
- ✅ PRD v1.1 finalized & approved
- ✅ Risk register (with mitigation plans)
- ✅ Requirements Traceability Matrix (RTM)
- ✅ Baseline documentation complete

---

# TAHAP 2: PLAN (Week 2–3)

## **Tujuan**
Transform PRD v1.1 into detailed execution plan: architecture, sprint breakdown, resource allocation, timeline.

---

## **Phase P1: Technical Architecture Design**
**Duration**: 4 days (10–13 June)

### **Aktivitas**

#### **1.1 Database Schema Design**
```
Owner: [Database engineer - likely all contribute]
Task:
  □ Design 5–10 tables (distrik, audit_log, quiz_session, users, etc.)
  □ Define relationships (FK, indexes, constraints)
  □ Document field types, lengths, constraints
  □ Plan migration strategy
  □ Performance considerations (query optimization)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (complex system design)
- **Use Case**: Generate initial schema, review for normalization, spot issues
- **Prompt**:
```
Freelance City Index MVP needs database design untuk:
1. Store 5 distrik dengan 4 indikator (0-100)
2. Track admin edits (audit log)
3. Log quiz sessions (untuk analytics)
4. Admin users dengan password hash

Constraints:
- Supabase PostgreSQL (free tier)
- Need audit trail (who changed what when)
- Need real-time updates (admin edit → frontend refetch)
- Need historical data (can we track changes over time?)

Generate:
- DDL (CREATE TABLE statements)
- Entity-relationship diagram (text format)
- Indexes (untuk query optimization)
- Constraints (PK, FK, unique, check)
- Migration strategy (how to add new table in future)

Include comments per field explaining purpose.
```

#### **1.2 API Endpoint Specification**
```
Owner: [Backend lead]
Task:
  □ List 8–10 API endpoints (GET/POST/PATCH)
  □ Per endpoint: path, method, request/response format, error codes
  □ Authentication (who can call? token-based? session?)
  □ Rate limiting (prevent abuse)
  □ Error handling (what happens on failure?)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (REST API design)
- **Use Case**: Generate OpenAPI spec, endpoint documentation
- **Prompt**:
```
Freelance City Index MVP backend API spec.

Generate REST API endpoint specification:

Public Endpoints:
  1. GET /api/quiz/config - return persona weights, indikator config
  2. POST /api/quiz/calculate - input persona/budget → output ranking
  3. GET /api/distrik/:slug - single distrik detail

Admin Endpoints (protected):
  4. POST /api/auth/login - admin login
  5. GET /api/admin/distrik - list all distrik
  6. PATCH /api/admin/distrik/:id - update distrik indikator
  7. GET /api/admin/audit-log - view changes
  8. POST /api/admin/import - CSV bulk import

Per endpoint, define:
- Method (GET/POST/PATCH/DELETE)
- URL path
- Request body (if any) - JSON schema
- Response body - JSON schema
- Status codes (200, 400, 401, 404, 500)
- Error messages (what went wrong)
- Authentication (required? token? role?)

Format: OpenAPI/Swagger compatible YAML
```

#### **1.3 Frontend Component Architecture**
```
Owner: [Frontend lead]
Task:
  □ Design folder structure (pages, components, lib)
  □ List components (reusable UI pieces)
  □ State management approach (React hooks? Context? Zustand?)
  □ Routing (Next.js file-based routing)
  □ TypeScript types (interfaces for major objects)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (component architecture)
- **Use Case**: Generate component hierarchy, folder structure, type definitions
- **Prompt**:
```
Freelance City Index frontend using Next.js + React + TypeScript.

Generate:
1. Folder structure
   /app
     /page.tsx (home + step 1)
     /quiz/step2/page.tsx
     /quiz/step3/page.tsx
     /distrik/[slug]/page.tsx
     /admin/...
   /components
     /Quiz
     /Results
     /Layout
   /lib
     /api.ts, /algorithm.ts, /types.ts, /constants.ts

2. Component tree (hierarchy)
   App
     └─ Layout
         ├─ Header
         └─ PageContent
            ├─ QuizStep1 (personas, budget, priorities)
            ├─ QuizStep2 (algorithm explainer)
            ├─ QuizStep3 (results ranking)
            └─ DistrikDetail (per distrik page)

3. TypeScript interfaces (main types)
   - Persona (Developer | Creator | Student)
   - QuizInput (budget, priorities, persona)
   - Distrik (name, internet, cost, community, environment)
   - QuizResult (ranking of 5 distrik)

4. State management approach
   - React hooks (useState for form)
   - Context API (for quiz state across steps)
   - Consider: React Query for API calls

Output: Architecture doc + component diagram (text)
```

#### **1.4 Deployment & Hosting Plan**
```
Owner: [DevOps / whoever sets up Vercel + Supabase]
Task:
  □ Vercel project setup (next.js auto-deploy)
  □ Supabase project setup (postgres + auth)
  □ Environment variables (API keys, database URL)
  □ CI/CD pipeline (automated tests before deploy)
  □ Monitoring setup (Sentry, Vercel Analytics, Uptime Robot)
  □ Database backup strategy
  □ Rollback plan (how to revert if deployment fails)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (DevOps/infrastructure planning)
- **Use Case**: Generate deployment checklist, environment config template, monitoring setup
- **Prompt**:
```
Freelance City Index deployment plan.

Tech stack:
- Frontend: Next.js on Vercel
- Backend: Next.js API routes + Supabase
- Database: PostgreSQL (Supabase)

Generate:
1. Deployment checklist (30+ items)
   - Code quality (linting, formatting)
   - Testing (unit, integration, E2E)
   - Environment setup (staging vs production)
   - Database migration
   - Secret management (API keys, DB password)
   - Monitoring activation
   - DNS setup
   - SSL/HTTPS
   - Backup configuration

2. Environment variables template
   .env.local (development)
   .env.production (production)
   What to include? (API endpoints, Supabase keys, etc.)

3. Monitoring setup
   - Error tracking (Sentry)
   - Performance (Vercel Analytics, Lighthouse)
   - Uptime (Uptime Robot)
   - Database (slow queries, connection pool)

4. Rollback procedure
   - "Deployment went wrong, what do we do?"
   - 1-click rollback in Vercel
   - Database rollback (if schema changed)
   - Communication to users

5. Incident response playbook
   - "Database down" → escalation path
   - "Frontend errors spiking" → debug checklist
   - "API rate limited" → mitigation

Output: Deployment runbook (step-by-step instructions)
```

### **Deliverable**
- ✅ Database schema (DDL + ER diagram)
- ✅ API specification (OpenAPI/Swagger)
- ✅ Frontend architecture (component tree + types)
- ✅ Deployment & hosting plan (with checklist)

---

## **Phase P2: Detailed Task Breakdown**
**Duration**: 3 days (14–16 June)

### **Aktivitas**

#### **2.1 Sprint Breakdown (5 sprints × 1 week)**
```
Per sprint, define:
  □ Goal (what will be achieved)
  □ User stories / tasks (5–15 per sprint)
  □ Acceptance criteria (how to verify done)
  □ Story points / effort estimate
  □ Owner (who leads this sprint)

Example - Sprint 1 (Week 3–4):

Goal: Quiz core engine functional on desktop

Frontend tasks:
  □ Create PersonaSelector component (3 story points)
  □ Create BudgetSlider component (3 sp)
  □ Create PriorityButtons component (2 sp)
  □ Implement Step 1–3 layout (5 sp)
  □ Mobile responsiveness (defer to Sprint 2)

Backend tasks:
  □ Setup Supabase project (2 sp)
  □ Implement scoring algorithm (5 sp)
  □ Create API endpoint /api/quiz/calculate (3 sp)
  □ Add test data (5 distrik) (2 sp)

Testing:
  □ Unit tests for algorithm (3 sp)
  □ Component tests for UI (2 sp)
  □ Integration test (API + algorithm) (2 sp)

Total: ~32 story points (reasonable for 1 week × 4 people)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (comprehensive task planning)
- **Use Case**: Generate sprint breakdown, user stories, effort estimates
- **Prompt**:
```
PRD requirement list (FR-001 to FR-A05).

Generate 5 sprints (Week 3–8), 1 week each:

Sprint 1 (Week 3–4): Quiz Core Engine
  Goal: Functional quiz flow (Step 1→2→3) on desktop
  
  Task format:
  ID | Task | Component | Effort (sp) | Owner | Acceptance Criteria
  ---|------|-----------|-------------|-------|-------------------
  S1T1 | Persona selector UI | PersonaSelector.tsx | 3 | [assign] | Can click each card, state updates
  S1T2 | Budget slider | BudgetSlider.tsx | 3 | [assign] | Slider 2-6.5jt, real-time display
  ...
  
  Testing:
  - Unit: algorithm.ts (weighted scoring formula)
  - Integration: API endpoint + algorithm
  - QA: Quiz flow end-to-end
  
  Deliverable: Working desktop quiz

Sprint 2 (Week 5): Mobile + Interactivity
  Goal: Quiz responsive on all devices, real-time re-calc
  
  [similar format]

Sprint 3 (Week 6): Admin Dashboard v1
  Goal: Admin can login & edit distrik data
  
Sprint 4 (Week 7): Data Import + Real Data
  Goal: Bulk CSV import, real data loaded, alerts working
  
Sprint 5 (Week 8): Polish + Testing
  Goal: Production-ready, all tests passing, performance optimized

Per sprint include:
- Task list (15–20 tasks)
- Effort estimate (total ~30–40 sp/sprint for 4 people)
- Owner assignment
- Dependencies (what needs to happen before this task)
- Risk factors
- Definition of Done (exit criteria)
```

#### **2.2 Task Dependency Mapping**
```
Create a dependency graph:
  Sprint 1 tasks → must complete before Sprint 2
  Sprint 2 tasks → prerequisite for Sprint 3
  Parallel tasks → can work simultaneously
  
Example:
  Database schema (CRITICAL PATH) 
    ↓
  API endpoints 
    ↓ (parallel)
    ├─ Frontend components
    └─ Backend algorithm
    ↓ (merge)
  Integration testing
```

#### **2.3 Effort & Velocity Estimation**
```
Task: Estimate total story points per sprint
  - 4 people × 1 week = ~40 hours total
  - Assume velocity: 8–10 story points per person-week
  - Total capacity: ~32–40 sp per sprint

Sanity check:
  - Sprint 1: 32 sp (4 people × 8 sp each) = ✅ realistic
  - Sprint 2: 36 sp (more complex mobile stuff) = ✅ reasonable
  - Sprint 3–5: 30–35 sp (admin + data + testing) = ✅ achievable
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick task generation)
- **Use Case**: Generate task lists, effort estimates, dependency mapping
- **Prompt**:
```
Team: 4 people, 1 week per sprint, part-time capacity ~8 hours/day.

Sprint 1 task list (Quiz core engine):

Generate:
- 15–20 concrete tasks
- Each task: what do you build? (e.g., "BudgetSlider component that accepts 2–6.5M range")
- Effort: story points (1–8, use Fibonacci: 1,2,3,5,8)
- Owner: who does this? (distribute evenly)
- Acceptance criteria: how do we verify it's done?
- Risk: anything that could derail this task?

Total effort should be ~30–35 sp (realistic for 4 people in 1 week).

Output: Task table + effort histogram
```

### **Deliverable**
- ✅ Sprint breakdown (5 sprints, detailed tasks)
- ✅ User stories (with acceptance criteria)
- ✅ Task dependency map
- ✅ Effort estimates (total ~170–190 sp for MVP)
- ✅ Task assignments (per person balance)

---

## **Phase P3: Resource & Timeline Planning**
**Duration**: 2 days (17–18 June)

### **Aktivitas**

#### **3.1 Resource Allocation**
```
Team: 4 people, 6 weeks

Proposed allocation:

Rizky (Product Owner / Full-Stack):
  - Sprint 1: Backend (algorithm, API, database)
  - Sprint 2–3: Admin features, data management
  - Ongoing: Stakeholder updates, unblocking team

Syfa (Frontend Lead):
  - Sprint 1: Quiz UI (Persona, Budget, Priority components)
  - Sprint 2: Mobile responsiveness, interactivity
  - Sprint 3–4: Admin dashboard UI
  
Aditya (Full-Stack / DevOps):
  - Sprint 1: API setup, database schema, deployment setup
  - Sprint 2–3: Data import feature, monitoring
  - Sprint 5: Performance optimization

Luthfi (QA / Testing Lead):
  - Sprint 1: Unit tests, integration tests setup
  - Ongoing: Testing each sprint, automation
  - Sprint 5: Full UAT, security testing

Shared responsibilities:
  - Daily standup (15 min)
  - Code review (peer review process)
  - Documentation (update PRD/runbooks)
  - Risk monitoring (weekly risk review)
```

#### **3.2 Timeline Gantt Chart**
```
Week 3  │████ Sprint 1: Quiz Core Engine
Week 4  │████ [continued]
Week 5  │████ Sprint 2: Mobile + Interactivity
Week 6  │████ Sprint 3: Admin Dashboard
Week 7  │████ Sprint 4: Data Import + Real Data
Week 8  │████ Sprint 5: Polish + Testing
Week 9  │██ Verify (UAT, beta testing)
        │██ Ship (deployment, go-live)
```

#### **3.3 Milestone Tracking**
```
Milestone 1 (End of Sprint 1): Desktop quiz working
  □ Quiz flow end-to-end
  □ Scoring algorithm correct
  □ API responding
  → Go/No-go decision: continue to Sprint 2 or fix blockers?

Milestone 2 (End of Sprint 2): Mobile quiz working + responsive
  □ Quiz works on 360px–1024px screens
  □ Real-time re-calculation working
  □ Detail pages per distrik
  → Go/No-go: admin phase ready?

Milestone 3 (End of Sprint 3): Admin dashboard functional
  □ Admin login working
  □ Edit distrik form saving data
  □ Audit log recording changes
  → Go/No-go: ready for real data?

Milestone 4 (End of Sprint 4): Data import + real data loaded
  □ CSV import working
  □ 5 distrik populated with real data
  □ Data freshness alerts working
  → Go/No-go: ready for testing phase?

Milestone 5 (End of Sprint 5): Production-ready
  □ All tests passing (unit, integration, E2E)
  □ Lighthouse score ≥90 (desktop + mobile)
  □ Security audit passed (no vulnerabilities)
  □ Performance tested (load testing OK)
  → Go/No-go: ready to ship?
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (project planning & visualization)
- **Use Case**: Generate resource allocation matrix, timeline, milestone plan
- **Prompt**:
```
Team: Rizky, Syfa, Aditya, Luthfi (4 people, 6 weeks)
5 sprints, clear deliverables per sprint.

Generate:
1. Resource allocation matrix
   Rows: 5 sprints
   Columns: each person
   Cells: what does each person do in each sprint
   
   Constraints:
   - No person should overload (max 50 hours/week)
   - Balance frontend/backend work
   - Ensure testing coverage (1 person = testing lead)
   - Avoid single points of failure
   
2. Milestone tracking plan
   Define 5 milestones (end of each sprint)
   Per milestone:
   - What needs to be done? (deliverables)
   - Go/No-go criteria (when can we proceed?)
   - Risk factors (what could block us?)
   - Contingency (if we slip, how to catch up?)

3. Timeline visualization (text-based Gantt)
   Show weeks 3–9
   Show each sprint + verification phase

Output: Resource plan + timeline + milestone definitions
```

### **Deliverable**
- ✅ Resource allocation plan (who does what, when)
- ✅ Timeline (week-by-week breakdown)
- ✅ Milestone definitions (5 go/no-go points)
- ✅ Contingency plans (if we slip)
- ✅ Team hand-off document (for new members if needed)

---

# TAHAP 3: EXECUTE (Week 3–8, 6 weeks)

## **Tujuan**
Build MVP according to plan: implement features, test incrementally, deliver working product.

---

## **Phase E1: Sprint 1–2 (Core Features)**
**Duration**: 2 weeks (Week 3–5)

### **Sprint 1 (Week 3–4): Quiz Core Engine**

**Deliverable**: Desktop quiz working end-to-end (Step 1→3)

```
Daily Standup (15 min, 10am):
  □ What did I finish yesterday?
  □ What am I working on today?
  □ Any blockers? (ask for help early)

Midweek Sync (Wed, 30 min):
  □ Progress check (on track for 32 sp?)
  □ Risk escalation (if any blockers)
  □ Adjust plan if needed (move tasks around)

Code Quality:
  □ Code review before merge (peer must review)
  □ Automated tests (unit + integration)
  □ No hardcoded values (use constants/config)
  □ Error handling (graceful failures, not crashes)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (code review assistance, debugging)
- **Use Cases**:
  1. **Code Review Support**: "Review this React component, any issues?"
  2. **Debugging Assistance**: "Algorithm gives wrong score for Developer persona, help me debug"
  3. **Documentation**: "Document this API endpoint in OpenAPI format"
  4. **Testing Strategy**: "Generate test cases for weighted scoring algorithm"
- **Prompt Examples**:
```
Review this React component (BudgetSlider):
```jsx
[paste code]
```

Check for:
- TypeScript types (proper interfaces?)
- Accessibility (can screen readers use it?)
- Performance (any unnecessary re-renders?)
- Edge cases (what if value is 0? negative? NaN?)
- Styling (responsive? mobile OK?)

Suggest improvements.

---

Algorithm test case:
Input: Developer persona, Rp 4juta budget
Expected output: Ranking with Internet-heavy distrik higher

But getting: Ranking seems wrong, costs distrik ranked too high

Generate test cases:
- Actual: [data]
- Expected: [what algorithm should return]
- Debug hints: where might calculation be wrong?

Output: Test cases + debug checklist
```

### **Sprint 2 (Week 5): Mobile + Interactivity**

**Deliverable**: Quiz responsive on all devices, real-time re-calculation, detail pages

```
Testing focus:
  - Tested on: 360px, 480px, 768px, 1024px screen widths
  - Real devices: iPhone (if available), Android phone
  - Browsers: Chrome, Safari, Firefox
  
Interactivity:
  - Change persona → scores re-calculate immediately
  - Change budget → scores update (no page refresh)
  - Browser back button → state preserved
  - Try Again → reset without reload
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick fixes, mobile-specific issues)
- **Use Case**: Mobile layout debugging, responsive design issues, browser compatibility
- **Prompt**:
```
Quiz rendering weird on mobile (360px viewport).
- Budget slider text overlapping with value display
- Persona cards wrapping vertically (should fit)
- Touch targets too small (hard to tap)

Debug hints:
1. Current CSS: [paste relevant styles]
2. Current HTML: [paste structure]
3. Screenshot description: [describe visual issue]

Suggest fixes for mobile responsiveness.
```

---

## **Phase E2: Sprint 3–4 (Admin & Data)**
**Duration**: 2 weeks (Week 6–7)

### **Sprint 3 (Week 6): Admin Dashboard v1**

**Deliverable**: Admin can login, edit distrik data, changes logged to audit trail

```
Admin workflow test:
  1. Open admin page
  2. Login with credentials
  3. See 5 distrik status (updated when)
  4. Click one distrik to edit
  5. Change 4 values (internet, cost, community, environment)
  6. Click Save
  7. Data persists (reload page → values still there)
  8. Audit log shows: who changed what when
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (auth implementation, form handling)
- **Use Case**: Admin authentication, form validation, error handling
- **Prompt**:
```
Implementing admin login for Supabase auth.

Requirements:
- Email + password login
- Store admin users in Supabase
- Protect routes (non-admin can't access /admin)
- Session management (stay logged in for 7 days)

Generate:
1. Login component (React form)
2. Auth context (manage session across app)
3. Protected route wrapper
4. Error handling (wrong password, user not found, etc.)

Include TypeScript types, error messages for users.
```

### **Sprint 4 (Week 7): Data Import + Real Data**

**Deliverable**: CSV bulk import working, 5 distrik populated with real data, alerts show up

```
Real data gathering tasks:
  □ Internet quality: APJII report + manual speedtest (WeChat/Telegram meeting culture?)
  □ Cost of living: UMK 2026 official data + coworking price survey
  □ Community: event calendar scraping + manual survey (meetup groups?)
  □ Environment: Google reviews + field visit observations

CSV import test:
  1. Prepare CSV file (5 distrik × 4 indikators)
  2. Upload via admin UI
  3. Preview shows correct data
  4. Click confirm to import
  5. Database updated
  6. Quiz shows new data immediately
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick data processing, CSV parsing)
- **Use Case**: CSV import logic, data validation, error messages
- **Prompt**:
```
CSV import feature for admin dashboard.

CSV format:
```
distrik_name,internet,cost,community,environment
Kota Yogya,90,60,80,75
Sleman,70,65,72,78
```

Generate:
1. CSV parsing logic (handle headers, data rows)
2. Validation (all values 0-100? all required fields?)
3. Preview component (show data before confirming)
4. Error handling (bad format, duplicate distrik, etc.)
5. Success feedback (how many rows imported?)

Include test cases: happy path + edge cases (bad data, empty file, etc.)
```

---

## **Phase E3: Sprint 5 (Polish & Optimization)**
**Duration**: 1 week (Week 8)

### **Sprint 5 (Week 8): Polish + Testing + Optimization**

**Deliverable**: Production-ready MVP (all tests passing, performance optimized, security audit OK)

```
Polishing tasks:
  □ Visual design (colors, spacing, typography)
  □ Loading states (show spinner while data loads)
  □ Error messages (user-friendly, actionable)
  □ Accessibility (keyboard navigation, screen reader support)
  □ Performance (Lighthouse score ≥90 on mobile)
  
Testing:
  □ Unit tests (algorithm, components)
  □ Integration tests (API + database)
  □ E2E tests (full quiz flow on desktop + mobile)
  □ Manual testing (go through every feature)
  
Security:
  □ No secrets in code (use env vars)
  □ No SQL injection (use parameterized queries)
  □ No XSS (sanitize user input)
  □ HTTPS enabled
  □ CORS configured (only our domain)

Performance:
  □ Lighthouse score: Accessibility ≥90, Best Practices ≥90
  □ Page load: <2s on 4G
  □ API response: <200ms per endpoint
  □ Bundle size: <200KB (gzipped)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (comprehensive testing strategy, optimization)
- **Use Case**: Generate test cases, performance debugging, security checklist
- **Prompt Examples**:

```
1. Testing strategy:

Generate comprehensive test plan for Quiz feature:

Test scenarios:
- Developer persona, Rp 4juta budget
  → expected: internet-heavy distrik ranked high
- Student persona, Rp 2juta budget
  → expected: cost-heavy distrik (Gunungkidul) ranked high
- Mobile 360px viewport
  → expected: all UI visible, touch targets ≥44px
- Slow network (slow 3G)
  → expected: skeleton loading, results after 3-5s (not instant)
- Network failure (offline)
  → expected: friendly error message, retry button

Generate test cases (unit + integration + E2E).

---

2. Performance optimization:

Quiz page loading slow on mobile. Trace profile:
- Page load: 3.2s (target: <2s)
- Main issue: large bundle size, slow API call

Suggestions:
1. Code splitting (lazy load admin pages)
2. Image optimization (use next/image)
3. Caching (cache API responses, use stale-while-revalidate)
4. Database query optimization (N+1 problem?)

Generate optimization checklist with estimated time per item.

---

3. Security audit:

Generate security checklist for launch:
- Authentication (admin login secure? passwords hashed?)
- API security (endpoints protected? rate limiting?)
- Data validation (reject bad input? prevent injection?)
- Secrets management (API keys not in code? env vars used?)
- HTTPS (enforced? certificate valid?)
- CORS (only our domain? no * wildcard?)

Output: Security checklist + remediation plan
```

### **Deliverable**
- ✅ All features working (quiz + admin + data)
- ✅ All tests passing (unit, integration, E2E)
- ✅ Performance optimized (Lighthouse ≥90)
- ✅ Security audit passed
- ✅ Documentation complete (API docs, deployment guide, runbooks)

---

# TAHAP 4: VERIFY (Week 9)

## **Tujuan**
Thoroughly test MVP, gather user feedback, identify & fix remaining issues before launch.

---

## **Phase V1: Functional Testing**
**Duration**: 2 days (Week 9, Day 1–2)

### **Aktivitas**

#### **1.1 Comprehensive Feature Testing**
```
Test all features systematically:

Quiz Feature:
  □ Step 1: Select persona, adjust budget, change priorities
  □ Step 2: View algorithm explanation
  □ Step 3: See ranking, verify "Best Match" badge
  □ Detail pages: Click distrik, see full info
  □ Try Again: Reset & start over

Admin Features:
  □ Login (correct password, wrong password)
  □ Edit distrik (change values, save, verify persisted)
  □ Audit log (see all changes)
  □ CSV import (import sample, verify data loaded)
  □ Alerts (data >7 days old, warning shows)

Edge Cases:
  □ Network failure (what happens?)
  □ Slow network (loading state shows?)
  □ Mobile (all touch targets ≥44px?)
  □ Browser back button (state preserved?)
  □ Concurrent edits (two admins edit same distrik - handling?)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (test case execution, pass/fail assessment)
- **Use Case**: Test plan generation, test execution tracking, issue logging
- **Prompt**:
```
Generate comprehensive test cases for Freelance City Index:

Feature: Quiz Flow
Test Case: Developer persona, Rp 4juta budget
Steps:
  1. Open freelancecityindex.id
  2. Click "Developer" card
  3. Drag budget slider to 4juta
  4. Select "High" internet priority
  5. Click "Find My Best Region"
  6. Click "See Results"
Expected Result: Kota Yogya and Sleman ranked in top 2 (internet-heavy)
Actual Result: [will be filled during testing]
Pass/Fail: [checkbox]

[Generate 15–20 test cases covering all features + edge cases]

Output: Test execution spreadsheet
```

#### **1.2 Browser & Device Compatibility Testing**
```
Browsers:
  □ Chrome (latest) - desktop + mobile
  □ Safari (latest) - desktop + mobile
  □ Firefox (latest) - desktop
  □ Edge (if available)

Devices (real hardware):
  □ iPhone SE (375px viewport)
  □ Samsung Galaxy A50 or similar (360px viewport)
  □ Tablet (iPad or Android tablet)
  □ Desktop (1920x1080)

Scenarios per device:
  □ Quiz flow end-to-end
  □ Admin login + edit
  □ Page load time
  □ No layout shift (mobile, no horizontal scroll)
  □ Touch targets accessible (44px minimum)
```

#### **1.3 Performance & Load Testing**
```
Performance benchmarks:
  □ Page load time: <2s (4G network)
  □ API response: <200ms per endpoint
  □ Lighthouse score: ≥90 (desktop + mobile)
  □ Bundle size: <200KB gzipped
  □ Time to Interactive (TTI): <3.5s

Load testing:
  □ Simulate 100 concurrent users
  □ Monitor server response time
  □ Check database query performance
  □ Verify Supabase free tier handles load
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (quick performance analysis)
- **Use Case**: Lighthouse interpretation, performance debugging
- **Prompt**:
```
Lighthouse report for freelancecityindex.id:
[paste Lighthouse JSON or screenshot]

Analyze:
1. Performance score (target ≥90)
   - FCP (First Contentful Paint)
   - LCP (Largest Contentful Paint)
   - CLS (Cumulative Layout Shift)
   
2. Accessibility (target ≥90)
   - Color contrast
   - ARIA labels
   - Keyboard navigation
   
3. Best Practices
   - No console errors
   - HTTPS
   - No deprecated APIs

Suggest top 3 optimizations to reach ≥90 score.
```

### **Deliverable**
- ✅ Test execution report (all test cases + pass/fail)
- ✅ Browser compatibility matrix
- ✅ Device testing results
- ✅ Performance benchmark report
- ✅ Known issues log (bugs found)

---

## **Phase V2: User Acceptance Testing (UAT)**
**Duration**: 3–5 days (Week 9, Day 3–end)

### **Aktivitas**

#### **2.1 Closed Beta Testing (20–30 users)**
```
Recruitment:
  □ Target users: Freelancer IT, Designer/Creator, Students in Yogyakarta
  □ Channels: Telegram groups, class announcements, friend networks
  □ Duration: 3–5 days (closed beta window)
  □ Incentive: None needed (friends helping friends)

Tasks for beta testers:
  1. "Try the quiz and reach results" (5 min)
  2. "Find which distrik is best for you" (5 min)
  3. "Click on a distrik detail page and read info" (2 min)
  4. "Rate your experience" (1 question NPS)
  5. "Any feedback?" (open text, optional)

Feedback collection:
  □ In-app: post-results survey form (1 NPS question + optional text)
  □ Telegram group: discuss & report bugs
  □ Google Form (optional): detailed feedback
```

#### **2.2 Internal Team UAT (2 hours)**
```
Team members go through features as if first-time user:
  □ Rizky: Admin dashboard (as data manager)
  □ Syfa: Quiz UI (as user, check for confusion)
  □ Aditya: API/backend (as power user, stress test)
  □ Luthfi: Edge cases (network issues, slow loading)

Success criteria:
  □ All team members complete full quiz
  □ Admin can successfully update data
  □ No crashes or errors
  □ No confusion (UI is intuitive)
```

#### **2.3 Success Metrics Collection**
```
Track:
  □ Quiz completion rate: % who finish Step 3
  □ Completion time: average time to complete
  □ User satisfaction: NPS score (target ≥3.5/5)
  □ Bug reports: count, severity
  □ Qualitative feedback: what did users like? struggle with?

Success criteria for launch:
  ✓ Completion rate ≥50%
  ✓ NPS ≥3.5/5 (average rating)
  ✓ No blocking bugs (critical issues)
  ✓ <5 "must-fix" issues reported
  ✓ <10 "nice-to-have" issues
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (feedback analysis, UX improvements)
- **Use Case**: Analyze beta feedback, identify UX patterns, prioritize fixes
- **Prompt**:
```
Beta testing feedback from 25 users (closed beta):

Raw feedback:
- "Quiz too long, I quit at step 2"
- "Not sure what 'community score' means"
- "Admin page confusing, where's the save button?"
- "Kota Yogya and Sleman always ranked high, why?"
- "Great info, helped me choose Sleman!"
- "Need map of each distrik"
- [etc.]

Analyze:
1. Identify patterns (what's confusing? what works?)
2. Categorize (must-fix vs nice-to-have)
3. Prioritize (which fixes have biggest impact?)
4. Estimate effort (quick fix vs need redesign?)

Output: 
- Feedback summary (top 5 insights)
- Fix recommendations (prioritized)
- MVP scope vs post-MVP (what to defer)
```

#### **2.4 Issue Logging & Prioritization**
```
Issue template:
  ID: (unique identifier)
  Severity: 🔴 Critical (blocks launch) | 🟠 Major (must fix) | 🟡 Minor (nice to fix)
  Component: (Quiz / Admin / API / etc.)
  Description: (what's the problem?)
  Steps to reproduce: (how to see it)
  Expected: (what should happen)
  Actual: (what's happening now)
  Fix owner: (who will fix)
  Fix deadline: (when)
  Status: 🟥 Open | 🟨 In Progress | ✅ Closed

Example:
  ID: BUG-001
  Severity: 🟠 Major
  Component: Quiz (Step 3 Results)
  Description: "Best Match" badge sometimes missing on rank 1 distrik
  Steps: Select Developer, Rp 4juta, High internet → Check result
  Expected: Rank 1 always has badge
  Actual: Badge missing 20% of time
  Fix owner: Aditya (frontend)
  Deadline: Wed June 19
  Status: 🟨 In Progress
```

### **Deliverable**
- ✅ Beta testing report (feedback summary, NPS score)
- ✅ Issue log (all bugs found, prioritized)
- ✅ UAT sign-off (team confirms product ready)
- ✅ Release notes (what's in v1.0)

---

## **Phase V3: Production Readiness Audit**
**Duration**: 1 day (Week 9, final day)

### **Aktivitas**

#### **3.1 Security Audit Checklist**
```
Code:
  □ No secrets in code (API keys, passwords)
  □ Environment variables used for config
  □ Input validation (prevent injection attacks)
  □ No console.log with sensitive data
  
Authentication:
  □ Admin passwords hashed (not plaintext)
  □ Session tokens secure (httpOnly cookies?)
  □ Login rate limiting (prevent brute force)
  
API:
  □ Endpoints protected (auth required where needed)
  □ Rate limiting (prevent DoS)
  □ CORS configured (only our domain)
  □ HTTPS enforced
  
Database:
  □ Backups enabled
  □ Encryption at rest (if sensitive data)
  □ Query validation (parameterized, not string concat)
  
Deployment:
  □ Secrets in environment, not in code
  □ No debug mode in production
  □ Monitoring alerts configured
  □ Incident response plan documented
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Opus 4.5 (security review, best practices)
- **Use Case**: Security audit, vulnerability assessment
- **Prompt**:
```
Security audit checklist for Freelance City Index MVP.

Tech stack:
- Next.js + React frontend
- Supabase backend
- Vercel hosting

Generate comprehensive security checklist:
1. Code-level security
2. Authentication/Authorization
3. API security
4. Database security
5. Infrastructure security
6. Monitoring & logging
7. Incident response

Per item: what to check, how to verify, what's acceptable

Include OWASP Top 10 mapping (which risks apply to this project?)

Output: Audit checklist + remediation plan
```

#### **3.2 Deployment Readiness Checklist**
```
Code:
  □ All tests passing (unit, integration, E2E)
  □ No console errors/warnings
  □ Code reviewed & approved
  □ Linting passed (no style issues)
  □ Types all correct (TypeScript)

Database:
  □ Schema finalized
  □ Migrations tested
  □ Backup strategy confirmed
  □ Connection pool configured

Environment:
  □ .env.production configured
  □ API keys securely stored
  □ Database URL set
  □ Monitoring enabled

Deployment:
  □ CI/CD pipeline working (auto-deploy on merge)
  □ Preview environment matches production
  □ Rollback plan documented
  □ DNS & SSL configured

Monitoring:
  □ Sentry error tracking enabled
  □ Vercel Analytics active
  □ Uptime Robot configured
  □ Database query monitoring enabled
  □ Alert channels (Slack/email) set up
```

#### **3.3 Documentation Completeness**
```
User Documentation:
  □ User guide (how to use quiz)
  □ FAQ (common questions)
  □ Troubleshooting (what if something breaks)

Admin Documentation:
  □ Admin guide (how to update data)
  □ CSV import template (example file)
  □ Weekly update checklist (BPS/APJII/community survey process)
  □ Troubleshooting (admin features)

Technical Documentation:
  □ API documentation (OpenAPI/Swagger)
  □ Database schema diagram
  □ Component hierarchy
  □ Deployment runbook (step-by-step go-live)
  □ Monitoring guide (how to check health)
  □ Incident response playbook
  □ Rollback procedure

Release Notes:
  □ What's new in v1.0
  □ Known limitations (what's not in MVP)
  □ Future roadmap (what's coming in v1.1+)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (documentation generation)
- **Use Case**: Generate user guides, admin docs, runbooks
- **Prompt**:
```
Write admin guide for Freelance City Index data management.

Audience: Non-technical admin (e.g., intern updating data weekly)

Sections:
1. Login
   - How to access admin page
   - Credential management (where to store password securely)
   
2. Weekly data update
   - Which data sources to check (BPS, APJII, community survey)
   - How to measure internet quality (speedtest.net?)
   - How to estimate costs (coworking prices, rental trends)
   - How to assess community (event calendar, meetup groups)
   
3. Entering data into system
   - CSV format (what columns, what range)
   - Manual edit form (each field, 0-100 scale)
   - Validation (what inputs accepted)
   
4. Verification
   - How to check if data saved
   - How to verify quiz shows new data
   
5. Troubleshooting
   - "CSV import failed"
   - "Can't login"
   - "Data didn't save"

Output: Step-by-step guide (screenshot-friendly, non-technical language)
```

### **Deliverable**
- ✅ Security audit report (all checks passed)
- ✅ Deployment readiness checklist (all items green)
- ✅ Documentation suite (user + admin + technical)
- ✅ Release notes & known limitations
- ✅ Launch go/no-go decision (final sign-off)

---

# TAHAP 5: SHIP (Week 9, Final Days)

## **Tujuan**
Deploy to production, monitor launch, support initial users.

---

## **Phase S1: Deployment Preparation**
**Duration**: 1 day (Week 9, Day 7)

### **Aktivitas**

#### **1.1 Final Smoke Testing**
```
On staging environment (production-like, but not live):
  □ Quiz flow end-to-end
  □ Admin login + edit + save
  □ CSV import
  □ Data appears in quiz
  □ All links working
  □ No 404 errors
  □ Performance acceptable
```

#### **1.2 Deployment Dry-Run**
```
Practice deployment process (but don't switch traffic):
  1. Deploy code to production servers (Vercel)
  2. Run database migrations
  3. Verify production environment variables set correctly
  4. Test connection to production database
  5. Run smoke tests against production
  6. Everything OK? → Ready for real deployment
```

#### **1.3 Communication Preparation**
```
Prepare launch announcement:
  □ Write launch message (what problem does it solve?)
  □ Key talking points (why use our tool vs competitors?)
  □ CTA (call to action - "Try it now: freelancecityindex.id")
  □ Support info (where to report bugs/feedback)
  
Channels to announce:
  □ Telegram groups (Freelance DIY, tech communities)
  □ Instagram post + story
  □ Tiktok (short clip about the problem)
  □ Reddit (r/Indonesia, r/Yogyakarta)
  □ LinkedIn (professional angle)
  □ Medium/Dev.to blog post (technical writeup)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Sonnet 4.6 (copywriting, announcement messaging)
- **Use Case**: Draft launch announcements, social media content
- **Prompt**:
```
Write launch announcement for Freelance City Index.

Platform: Freelance City Index (freelancecityindex.id)
Problem: Freelancers in Yogyakarta confused about where to live
  - Data scattered across 5+ places (BPS, Google Maps, Instagram, etc.)
  - No one-stop comparison of distrik
  - Decisions based on rumor/guesswork, not data

Solution: Platform with personalized recommendation
  - 5-min quiz about your work style
  - AI-powered ranking of 5 distrik
  - Real data (internet, costs, community, environment)
  - For: Developer IT, Designers, Students, Fresh Grads

Generate:
1. Twitter/X post (280 char) - catchy, CTA
2. Telegram announcement (short, friendly)
3. Instagram caption (story angle, emotion)
4. Medium blog post (500 words, technical + personal)
   - Problem statement
   - Our solution
   - Key features
   - Call to action
   
Tone: Friendly, youthful (Gen Z), helpful
```

### **Deliverable**
- ✅ Final smoke test report (all OK)
- ✅ Deployment procedure documented (step-by-step)
- ✅ Launch communications prepared (5 channels)
- ✅ Support contact info ready (email, Telegram group)
- ✅ Go/no-go decision from team lead

---

## **Phase S2: Go-Live Execution**
**Duration**: 2 hours (Week 9, deployment day)

### **Aktivitas**

#### **2.1 Deployment Execution (30 min)**
```
Step-by-step (from deployment runbook):

1. Code deployment (Vercel auto-deploys on git push)
   - Merge all PRs to main branch
   - Wait for CI pipeline to pass
   - Vercel auto-deploys to production
   
2. Database migrations (if any schema changes)
   - Run migrations on Supabase production
   - Verify schema updated correctly
   
3. Environment variables verification
   - Confirm API keys correct
   - Confirm database URL correct
   - Confirm monitoring enabled
   
4. Smoke tests (5 min)
   - Open freelancecityindex.id
   - Run through full quiz flow
   - Admin login + edit test
   - Verify all working
   
5. Enable monitoring & alerts
   - Sentry watching for errors
   - Uptime Robot monitoring 24/7
   - Team Slack/email alerts configured
```

#### **2.2 Launch Announcement (30 min)**
```
Timeline:

T-0: Deployment verified, all green
  └─ Announce to team: "We're live!"

T+0: Social media blitz
  └─ Telegram announcement (main text)
  └─ Instagram post + story
  └─ Twitter/X post

T+15 min: Monitor initial traffic
  └─ Watch Vercel dashboard
  └─ Check Sentry for errors
  └─ Read Telegram feedback

T+1 hour: Initial support cycle
  └─ Answer questions
  └─ Fix any urgent bugs
  └─ Monitor performance
```

#### **2.3 Initial Monitoring (2 hours)**
```
Person on-call: [Assign 1–2 people to monitor first 2 hours]

Watch metrics:
  □ Error rate (target: 0%, expect <1% max)
  □ Response time (target: <200ms)
  □ Database performance (no slow queries)
  □ User traffic (how many people visiting?)
  
Handle issues:
  □ Critical bug (app broken) → fix immediately
  □ Major issue (feature not working) → triage + fix
  □ User questions → answer in Telegram
  □ Feedback → log for future improvements
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (real-time monitoring, quick responses)
- **Use Case**: On-call support, quick debugging during launch
- **Prompt**:
```
LIVE MONITORING - Real-time support

Error from Sentry: "Cannot read property 'length' of undefined"
- Component: PersonaSelector
- Happening to: 5 users, 3 times each
- Browser: Chrome on mobile

Quick debug:
1. Code that might be causing this?
2. Why would property be undefined?
3. Quick fix (hotfix-able?)

Suggest 1-min fix vs 5-min proper fix.
```

### **Deliverable**
- ✅ Live deployment confirmed
- ✅ Initial traffic flowing (users accessing site)
- ✅ Monitoring active (all alerting systems working)
- ✅ Team alerted & standing by for support
- ✅ Launch announcements published

---

## **Phase S3: Launch Monitoring & Support**
**Duration**: Ongoing (first 2 weeks post-launch)

### **Aktivitas**

#### **3.1 24-Hour Monitoring (First Day)**
```
Real-time metrics:
  □ Error rate (target: <0.1%)
  □ Completion rate (% users finishing quiz)
  □ Page load time (<2s target)
  □ API response time (<200ms target)
  □ Database query performance
  
User support:
  □ Monitor Telegram for feedback/bugs
  □ Respond to issues within 30 min (first day)
  □ Log all issues in bug tracker
  □ Prioritize: critical > major > minor

Log metrics:
  □ Time (when did user access?)
  □ Issue (what problem?)
  □ User feedback (quote what they said)
  □ Root cause (why did it happen?)
  □ Fix applied (what did we do?)
  □ Status (resolved? pending?)
```

#### **3.2 Daily Standups (First Week)**
```
Duration: 15 min daily
Attendees: All 4 team members + PO (if available)

Agenda:
  □ Metrics summary (errors, traffic, performance)
  □ User feedback (bugs, feature requests)
  □ Issues resolved (what was fixed since yesterday)
  □ Open issues (what still needs fixing)
  □ Action items (who fixes what today?)
  
Example:
  "Yesterday: 120 quiz completions, 0 errors
   Today: 2 minor bugs reported (community score description confusing)
   Action: Luthfi will improve error message copy"
```

#### **3.3 Weekly Review (First 2 Weeks)**
```
Duration: 30 min per week
Timing: Friday afternoon (wrap-up)

Review:
  □ KPIs (completion rate, CSAT, traffic growth)
  □ Bug fixes (what was fixed, what's still open)
  □ Performance (any degradation?)
  □ User feedback themes (what do users like/struggle with)
  □ Incidents (any major issues?)
  
Plan:
  □ v1.0.1 patch (critical bugfixes, launch next week)
  □ v1.1 features (post-MVP improvements, for future)
  
Example weekly report:
  Week 1 Summary:
  - 350 quiz completions
  - 85% completion rate (vs 70% target)
  - CSAT: 4.1/5 (target 3.8, exceeded!)
  - 3 minor bugs fixed, 2 pending
  - Top feature request: "Save my results"
  
  Recommendation: Launch v1.0.1 (bugfixes) next Monday
                  Start v1.1 planning (saved results, maps)
```

**📌 CLAUDE MODEL REKOMENDASI:**
- **Model**: Claude Haiku 4.5 (daily metrics summary, issue prioritization)
- **Use Case**: Daily standup notes, weekly status report
- **Prompt**:
```
Generate daily standup note for launch day.

Metrics from yesterday:
- Page views: 450
- Quiz completions: 120
- Completion rate: 85%
- Errors: 2 (both in admin feature, minor)
- CSAT: 4.2/5 (from 18 responses)
- API avg response: 145ms

Feedback from Telegram:
- "Love the ranking, helped me pick Sleman!"
- "Kota Yogya ranking seems always #1, why?"
- "Can I save my results?"
- "Admin page confusing, hard to find save button"

Generate:
1. Daily standup summary (2–3 min read)
2. Issues to fix today (prioritized)
3. Wins to celebrate 🎉
4. Blockers (if any)
```

### **Deliverable**
- ✅ Launch monitoring report (first 24 hours)
- ✅ User feedback log (all reported issues)
- ✅ Incident response log (if any incidents)
- ✅ Daily standups (notes from first week)
- ✅ Weekly status report (1-week post-launch)
- ✅ v1.0.1 patch plan (bugfixes + hotfixes)
- ✅ v1.1 roadmap (future features based on feedback)

---

# RINGKASAN: CLAUDE MODEL RECOMMENDATIONS PER TAHAPAN

| **Tahapan** | **Phase** | **Key Activities** | **Claude Model Recommended** | **Primary Use Case** |
|-------------|----------|-------------------|------------------------------|----------------------|
| **DISCUSS** | D1 | Gap analysis, brainstorming | **Opus 4.5** | Synthesis, categorization, pattern finding |
| | D2 | Stakeholder alignment, presentation prep | **Opus 4.5** | Complex decision-making, multi-stakeholder analysis |
| | D3 | PRD updates, requirements documentation | **Sonnet 4.6** | Content generation, structured writing |
| **PLAN** | P1 | Architecture design (DB, API, components) | **Opus 4.5** | Complex system design, comprehensive specification |
| | P2 | Task breakdown, sprint planning | **Opus 4.5** | Task generation, effort estimation, dependency mapping |
| | P3 | Resource allocation, timeline planning | **Sonnet 4.6** | Project planning, visualization, milestone definition |
| **EXECUTE** | E1 | Sprint 1–2 (core features, mobile) | **Sonnet 4.6** | Code review, debugging, test case generation |
| | E2 | Sprint 3–4 (admin, data) | **Sonnet 4.6** | Form handling, auth implementation, CSV processing |
| | E3 | Sprint 5 (polish, optimization) | **Opus 4.5** | Performance optimization, comprehensive testing |
| **VERIFY** | V1 | Functional testing, QA | **Haiku 4.5** | Quick test case execution, pass/fail assessment |
| | V2 | UAT, beta testing, feedback analysis | **Sonnet 4.6** | Feedback synthesis, UX improvement prioritization |
| | V3 | Security & deployment readiness | **Opus 4.5** | Security audit, comprehensive checklists |
| **SHIP** | S1 | Deployment prep, dry-run testing | **Sonnet 4.6** | Launch messaging, communication copywriting |
| | S2 | Go-live execution, monitoring | **Haiku 4.5** | Real-time issue response, quick debugging |
| | S3 | Post-launch support, weekly reviews | **Haiku 4.5** | Daily metrics, status reports, issue prioritization |

---

# QUICK REFERENCE: WHEN TO USE WHICH CLAUDE MODEL

## **Claude Opus 4.5** (Best for Complex Analysis & Design)
**Use when:**
- Designing complex systems (architecture, database schema)
- Synthesizing multi-stakeholder requirements
- Making strategic decisions with tradeoffs
- Comprehensive planning (all aspects at once)
- Security audits & risk assessment

**Not ideal for:**
- Quick fixes during development
- Real-time monitoring (too slow)
- Simple task generation

---

## **Claude Sonnet 4.6** (Sweet Spot for Most Tasks)
**Use when:**
- Code review & improvement
- Writing clear documentation
- Generating test cases
- Component/API design
- Project planning & status reports
- Launch messaging & copywriting
- Problem-solving with some complexity

**Best for:**
- Day-to-day development work
- Good balance of speed & quality

---

## **Claude Haiku 4.5** (Best for Speed)
**Use when:**
- Quick bug fixes & debugging
- Real-time launch monitoring
- Daily standup notes
- Quick research synthesis
- Fast turnaround needed (<1 min)
- Cost is important (Haiku is cheapest)

**Perfect for:**
- On-call support during launch
- Quick test execution feedback
- Real-time issue response

---

# CONTOH REAL-WORLD PROMPT UNTUK SETIAP TAHAPAN

## DISCUSS Phase

```
[Context] Kami punya PRD v1.0 untuk quiz platform. Ada 8 gaps yg mungkin penting.

[Prompt untuk Opus]
"Synthesize brainstorm notes dari team meeting (aku paste di bawah). 
Organize jadi themes. Per theme, identify: gap, risk, priority.

[paste team notes]

Suggest: mana 3 gaps yg paling kritis untuk fix sebelum development?"
```

## PLAN Phase

```
[Context] Database design untuk Freelance City Index. 5 distrik, tracking admin edits.

[Prompt untuk Opus]
"Design PostgreSQL schema untuk:
- Master distrik table (5 rows, 4 indikators each)
- Audit log (who changed what when)
- Quiz sessions (anonymized logging)

Requirements:
- Need audit trail (historical tracking)
- Real-time updates (admin edit → frontend refetch)
- Supabase free tier

Generate: DDL + ER diagram + indexes + migration strategy"
```

## EXECUTE Phase

```
[Context] Debugging quiz scoring. Developer persona with Rp 4juta.

[Prompt untuk Sonnet]
"Review this algorithm logic:
```javascript
const score = internet * 0.4 + cost * 0.2 + community * 0.3 + environment * 0.1
```

Input values:
- Kota Yogya: internet=90, cost=60, community=80, environment=75
- Sleman: internet=70, cost=65, community=72, environment=78

Expected: Kota Yogya score higher (internet-heavy)
Actual: Sleman scoring higher somehow

Debug hint: Are values normalized? What's the range?"
```

## VERIFY Phase

```
[Context] Beta test feedback from 25 users (5-star rating, text feedback).

[Prompt untuk Sonnet]
"Analyze beta feedback (text below). 
Identify: what users loved, what confused them, what's missing.
Categorize fixes: must-fix vs nice-to-have.
Prioritize by impact (which fix helps most users).

[paste feedback]

Output: top 5 insights + 3 fix recommendations + effort estimate"
```

## SHIP Phase

```
[Context] Launch day - monitoring first 2 hours.

[Prompt untuk Haiku - keep it quick!]
"Uptime Robot shows: 150 users visited, 3 errors in Sentry.
Telegram feedback: 'Can't figure out how to edit admin form'

Quick assessment:
1. Are 3 errors critical? What failed?
2. Is admin form UX issue blockers?
3. Should we hotfix or just document workaround?"
```

---

## KESIMPULAN

**5 Tahapan GSDP + Fase Detail = Structured Execution Path**

1. **DISCUSS** (1–2 minggu)
   - Validate, align, document decisions
   - Use: **Opus 4.5** (synthesis), **Sonnet 4.6** (documentation)

2. **PLAN** (1–2 minggu)
   - Design architecture, break down tasks
   - Use: **Opus 4.5** (design), **Sonnet 4.6** (planning)

3. **EXECUTE** (6 minggu)
   - Build features, test incrementally
   - Use: **Sonnet 4.6** (day-to-day), **Haiku 4.5** (quick help)

4. **VERIFY** (1 minggu)
   - Test thoroughly, gather feedback, fix issues
   - Use: **Haiku 4.5** (QA), **Sonnet 4.6** (analysis), **Opus 4.5** (audit)

5. **SHIP** (3–4 hari)
   - Deploy, monitor, support launch
   - Use: **Haiku 4.5** (real-time), **Sonnet 4.6** (messaging)

**Model Selection Rule:**
- **Complex & time-permitting?** → Opus 4.5
- **Balanced & moderate complexity?** → Sonnet 4.6
- **Quick & simple?** → Haiku 4.5

Good luck! 🚀
