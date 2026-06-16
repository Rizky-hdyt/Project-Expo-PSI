# CLAUDE MODEL QUICK REFERENCE CARD
**Freelance City Index MVP: GSDP Journey**

---

## 🎯 3-MODEL STRATEGY

```
┌────────────────────────────────────────────┐
│         OPUS 4.5 (Smartest)                │
│    For: Complex analysis & design          │
│    Cost: $$$ | Speed: ~1-2 min             │
├────────────────────────────────────────────┤
│         SONNET 4.6 (Balanced)              │
│    For: Day-to-day development work        │
│    Cost: $$ | Speed: ~30-60 sec            │
├────────────────────────────────────────────┤
│         HAIKU 4.5 (Fast & Cheap)           │
│    For: Quick fixes & real-time issues     │
│    Cost: $ | Speed: ~10-30 sec             │
└────────────────────────────────────────────┘
```

---

## 📅 BY TIMELINE

### **WEEK 1–2: DISCUSS Phase**

**D1: Gap Analysis & Brainstorming**
```
Model: OPUS 4.5
Time: 30–60 min
What: Synthesize team brainstorm, organize gaps, identify risks
Prompt: "Organize these notes jadi themes. Per theme: gap, risk, priority."
```

**D2: Stakeholder Alignment**
```
Model: OPUS 4.5
Time: 30–60 min
What: Prepare stakeholder presentation, anticipate objections
Prompt: "Generate presentation outline + anticipated objections + rebuttals"
```

**D3: Documentation**
```
Model: SONNET 4.6
Time: 30–45 min
What: Update PRD sections, maintain consistency
Prompt: "Rewrite this PRD section dengan saran perbaikan X, Y, Z"
```

---

### **WEEK 2–3: PLAN Phase**

**P1: Architecture Design**
```
Model: OPUS 4.5
Time: 45–90 min
What: Database schema, API spec, component hierarchy
Prompt: "Design PostgreSQL schema untuk [requirements]"
Prompt: "Generate OpenAPI spec untuk [endpoints]"
Prompt: "Design component architecture untuk React app"
```

**P2: Task Breakdown**
```
Model: OPUS 4.5
Time: 60–90 min
What: Sprint breakdown, user stories, effort estimates
Prompt: "Generate 5 sprints (1 week each) dengan tasks, effort, acceptance criteria"
```

**P3: Resource Planning**
```
Model: SONNET 4.6
Time: 30–45 min
What: Allocation matrix, timeline, milestone definitions
Prompt: "Create resource allocation matrix (who does what, when)"
```

---

### **WEEK 3–8: EXECUTE Phase (6 weeks)**

**Daily Development**
```
Model: SONNET 4.6 (primary)
Time: ~10–30 min per request
What: Code review, component debugging, test cases
Prompts:
  "Review this React component for issues"
  "Debug: algorithm gives wrong score for Developer persona"
  "Generate test cases for [function]"
```

**Complex Problems**
```
Model: OPUS 4.5 (when stuck)
Time: ~60 min
What: Architectural issues, major refactoring, optimization
Prompts:
  "Performance analysis: page slow on mobile, suggest optimizations"
  "State management: should we use Context or Zustand?"
```

**Quick Help**
```
Model: HAIKU 4.5 (for minor issues)
Time: ~5–10 min
What: Syntax fix, quick debugging, documentation
Prompts:
  "Why is this CSS not working on mobile?"
  "TypeScript error: type mismatch in this component"
```

---

### **WEEK 9: VERIFY Phase**

**V1: Functional Testing**
```
Model: HAIKU 4.5
Time: 15–30 min
What: Generate test cases, pass/fail tracking
Prompt: "Generate 20 test cases for quiz feature (happy path + edge cases)"
```

**V2: UAT & Feedback**
```
Model: SONNET 4.6
Time: 30–45 min
What: Analyze feedback, prioritize fixes, UX improvements
Prompt: "Analyze beta feedback (text below). Identify patterns, prioritize fixes."
```

**V3: Security & Deployment**
```
Model: OPUS 4.5
Time: 60–90 min
What: Security audit, comprehensive checklist, incident response plan
Prompt: "Generate security audit checklist for production deployment"
```

---

### **WEEK 9 (Final Days): SHIP Phase**

**S1: Deployment Prep**
```
Model: SONNET 4.6
Time: 20–30 min
What: Launch messaging, communication copy
Prompt: "Write launch announcement (Twitter, Telegram, Medium post)"
```

**S2 & S3: Go-Live & Monitoring**
```
Model: HAIKU 4.5
Time: 5–15 min per issue
What: Real-time issue response, quick debugging
Prompts:
  "Error in Sentry: [error message]. Quick debug & fix?"
  "Admin complained: can't save data. What's wrong?"
  "50 users failed at step 2. What should we check?"
```

---

## 🔍 DECISION TREE: WHICH MODEL?

```
                          Need response?
                                |
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              <5 min       5-30 min    >30 min
            (urgent)      (normal)    (complex)
                    |           |           |
                HAIKU      SONNET       OPUS
                4.5        4.6          4.5
                    |           |           |
                Quick      Balanced    Smartest
                fix        quality     analysis
                    
            Examples:
            ────────────────────────────────────
            ▶ "Fix this typo" → HAIKU
            ▶ "Debug my code" → SONNET
            ▶ "Design system architecture" → OPUS
            ▶ "Urgent: users can't login" → HAIKU
            ▶ "Review & improve component" → SONNET
            ▶ "Security audit checklist" → OPUS
```

---

## 💰 COST CONSIDERATION

If cost is tight:

```
PHASE                  RECOMMENDED            WHY
────────────────────────────────────────────────
DISCUSS (W1-2)         OPUS → SONNET          Design phase, need accuracy
PLAN (W2-3)            OPUS → SONNET          Architecture decisions critical
EXECUTE (W3-8)         SONNET + HAIKU        Haiku for quick help saves cost
VERIFY (W9)            SONNET + HAIKU        Testing & QA doesn't need Opus
SHIP (final days)      HAIKU                  Real-time is quick & cheap

Cost-saving strategy:
  ✓ Use Haiku for 70% of execution phase (quick debugging)
  ✓ Use Sonnet 4.6 for complex tasks (code review, architecture help)
  ✓ Use Opus only when absolutely necessary (stuck, major decision)
  
Estimated cost breakdown (for 6-week MVP):
  Opus: 5–10 uses × ~10 min each → ~50–100 min ($2–5)
  Sonnet: 20–30 uses × ~15 min each → ~300–450 min ($6–10)
  Haiku: 50–100 uses × ~5 min each → ~250–500 min ($2–5)
  
  Total: ~$10–20 (negligible)
```

---

## ✅ USAGE TIPS

### **For OPUS (Complex Analysis)**
```
✓ Ask open-ended questions: "Design complete system for..."
✓ Provide full context: paste actual code/requirements
✓ Ask for multiple perspectives: "What are 3 approaches?"
✓ Allow extra thinking time: set 2-3 min for response

✗ Don't use for: "Fix this typo" or "Quick debug"
✗ Wasteful: asking for simple task that Haiku can do
```

### **For SONNET (Balanced Work)**
```
✓ Code review: "Review this component"
✓ Documentation: "Write user guide for..."
✓ Testing: "Generate test cases for..."
✓ Problem-solving: "Why is this slow? Optimize."

✗ Don't use for: Super complex architecture (use Opus)
✗ Don't use for: Emergency quick fix (use Haiku)
```

### **For HAIKU (Quick & Cheap)**
```
✓ Debugging: "Error: [message]. Fix?"
✓ Minor fixes: "Typo in this button label"
✓ Quick synthesis: "Summarize this feedback"
✓ Real-time support: On-call during launch

✗ Don't use for: System design
✗ Don't use for: Complex decision-making
```

---

## 🎓 LEARNING PATH

If you're new to Claude:

**Week 1: Learn Opus (Discuss phase)**
- Experience complex analysis
- See how it structures thinking
- Learn to ask good design questions

**Week 2-3: Master Sonnet (Plan + Execute)**
- Use daily for coding work
- Develop good prompting habits
- Balance quality & speed

**Week 3-8: Optimize Haiku (Execution)**
- Use for quick debugging
- Build on-call command set
- Practice minimal prompts

**Week 9: Combine All Three**
- Use right tool for right job
- Efficient cost management
- Fastest resolution times

---

## 🚀 SAMPLE PROMPTS BY PHASE

### **DISCUSS Phase (Opus)**
```
"I have PRD v1.0 with 8 gaps identified:
1. Algorithm specification unclear
2. Mobile UX not designed
3. Admin dashboard too complex for MVP
... [more gaps]

Analyze: which 3 are most critical? Why? What happens if we skip them?"

→ Expect: Structured analysis with reasoning & recommendations
→ Time: ~2 min
→ Use for: Strategic decisions
```

### **PLAN Phase (Opus)**
```
"Design PostgreSQL schema for Freelance City Index:
- 5 distrik with 4 indikators (0-100)
- Admin audit log (who changed what when)
- Quiz sessions (anonymized)
- Constraints: Supabase free tier, real-time updates needed

Generate: DDL + indexes + migration strategy"

→ Expect: Complete schema with rationale
→ Time: ~2-3 min
→ Use for: Architectural decisions
```

### **EXECUTE Phase (Sonnet)**
```
"Code review this React component:
[paste component code]

Check for:
- Type safety (TypeScript)
- Accessibility
- Performance
- Edge cases
- Mobile responsiveness

Suggest improvements."

→ Expect: Detailed review with specific suggestions
→ Time: ~1 min
→ Use for: Daily development
```

### **VERIFY Phase (Sonnet)**
```
"Beta feedback from 20 users:
- 'Quiz too long, quit at step 2'
- 'Don't understand community score'
- 'Admin confusing, can't find save'
[etc.]

Analyze:
1. Top patterns (what's confusing?)
2. Must-fix (blocks launch?)
3. Nice-to-have (can defer?)
4. Effort (quick fix or redesign?)"

→ Expect: Prioritized fix list
→ Time: ~1-2 min
→ Use for: UAT analysis
```

### **SHIP Phase (Haiku)**
```
"ERROR: PersonaSelector component rendering blank on mobile.
No console errors, but component not appearing.

Quick debug steps?"

→ Expect: Top 3 things to check + likely causes
→ Time: ~30 sec
→ Use for: Emergency fix
```

---

## 📊 QUICK REFERENCE TABLE

| **When?** | **What?** | **Model** | **Time** | **Cost** |
|-----------|----------|----------|---------|---------|
| Design architecture | Complex system | Opus | 1–2 min | $$$ |
| Code review | Component/function | Sonnet | 30–60 sec | $$ |
| Quick fix | Typo/debug | Haiku | 10–30 sec | $ |
| Synthesis | Notes → structure | Opus | 1–2 min | $$$ |
| Documentation | Write guide | Sonnet | 30–60 sec | $$ |
| Real-time help | Live issue | Haiku | 5–15 sec | $ |
| Test generation | Test cases | Sonnet | 30–60 sec | $$ |
| Security audit | Checklist | Opus | 1–2 min | $$$ |
| Launch message | Copy for social | Sonnet | 20–30 sec | $$ |
| Monitoring | Metrics summary | Haiku | 5–10 sec | $ |

---

## 💡 PRO TIPS

1. **Batch requests**: Instead of 3 separate Sonnet calls, make 1 Opus call with all 3 questions → save time + better synthesis

2. **Use Haiku first**: For unclear questions, start with Haiku to clarify, then Opus/Sonnet for deep work

3. **Provide context**: More context = better response (paste actual code, error messages, requirements)

4. **Be specific**: "Debug this" is vague; "This function returns X but should return Y" is clear

5. **Iterative**: First response is draft → refine → iterate (works for all models)

6. **Document patterns**: When you find good prompts, save them for reuse

---

**Created**: June 2026  
**For**: Freelance City Index MVP Team  
**Version**: 1.0
