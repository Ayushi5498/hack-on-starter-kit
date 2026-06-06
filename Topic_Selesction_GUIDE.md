# TOPIC_SELECTION_GUIDE.md
# How to Pick the Right Problem + Standout Ideas for Amazon HackOn

---

## The #1 Rule Nobody Tells You

Judges don't reward the most technically impressive project.
They reward the project that makes THEM look good.

Amazon judges will show your demo to their managers.
Your video will go on their LinkedIn.
Their question when watching your submission is:

"If we reward this, will Amazon look good?"

Build for THAT. Not for your GitHub.

Source: Team that won 5 consecutive hackathons studying judge behavior patterns.

---

## The Biggest Mistakes Past Contestants Made

These are real failure patterns from Amazon hackathon participants:

MISTAKE 1: "We ran out of time to build the demo"
→ They built features first, demo last.
→ Fix: Build a demoable core loop by hour 4. Features come after.

MISTAKE 2: "We picked the most technical problem"
→ Technical complexity = more time = less polish = worse demo = lose.
→ Amazon HackOn is a PRODUCT competition, not an algorithms contest.

MISTAKE 3: "We disagreed on the idea and wasted 2 hours"
→ Emotions decided. No framework.
→ Fix: Use the scoring table below. The table decides. Not feelings.

MISTAKE 4: "Our AI outputs were inconsistent in the demo"
→ They did live unpredictable AI demos.
→ Fix: Pre-bake 3-4 inputs you KNOW produce great outputs. Rehearse them.

MISTAKE 5: "We built features nobody asked for"
→ Scope crept. Core loop was never solid.
→ Fix: Auth → Input → AI → Output → Dashboard. That's your MVP. Stop there first.

MISTAKE 6: "We didn't practice the video"
→ Final video had stutters, filler words, wrong flow.
→ Fix: Record 3 practice videos. Watch them. Then record the final one.

MISTAKE 7: "Our app crashed during the demo"
→ They demoed a live unstable app.
→ Fix: Record video when app is most stable. Have backup screen recording.

MISTAKE 8: "We started building immediately without reading all problems"
→ 30 minutes of planning saves 5 hours of wrong work.
→ Fix: Read all 3 problems fully before touching any code.

---

## Step 1: Score Each Problem Statement

When the 3 problem statements drop, spend the FIRST 30 MINUTES
filling this table. Do not start coding before this is done.

| Criteria | Problem A | Problem B | Problem C |
|---|---|---|---|
| AI/GenAI potential (0-3) | | | |
| Visual demo quality (0-3) | | | |
| Starter kit match 70%+ (0-3) | | | |
| Business impact in numbers (0-2) | | | |
| Speed for 2-person team (0-2) | | | |
| Non-obvious idea possible (0-2) | | | |
| TOTAL (max 15) | | | |

Pick the highest scorer. Not your personal favorite.

---

## Step 2: Starter Kit Match Test

Before committing to a topic, check this:

✅ Can we use Supabase Auth? (user login makes sense)
✅ Can we use the AI wrapper? (Gemini for some core feature)
✅ Can we show a Dashboard with metrics?
✅ Can we use File Upload? (PDFs, images, CSVs)
✅ Can we use the Chat UI? (conversational AI interface)

5 checks → Perfect match. Pick it without hesitation.
4 checks → Great match. Pick it.
3 checks → Acceptable. Only pick if scored highest.
2 or fewer → You'll be building from scratch. Very risky for 2 people.

---

## Step 3: Frame Your Idea Like a Product, Not a Feature

Bad framing (what losing teams say):
"We built an AI that summarizes reviews."

Good framing (what winning teams say):
"We built ShopSense — an AI shopping assistant that reduces
return rates by 34% by helping buyers make confident decisions
before they purchase."

The formula:
[Product Name] — [what it does] that [measurable business impact]
by [how it works differently].

Write this sentence BEFORE you start coding.
Paste it as the first line of your KIRO prompt.

---

## Step 4: Idea Bank — Ranked by Starter Kit Fit

---

### TIER 1: High Starter Kit Match + High Wow Factor

---

#### IDEA 1: SmartReturn — AI Return Prediction Assistant

Problem Amazon cares about:
Amazon loses billions to avoidable returns every year.

Your solution:
Before a customer buys, show an AI confidence score.
"This product has a 78% chance of fitting your needs."
Based on: review sentiment, Q&A patterns, buyer profile.

Starter Kit modules used:
- Auth → buyer and seller login
- Gemini → review analysis and confidence scoring
- Dashboard → seller analytics showing return rates by product
- Charts → before/after return rate trends
- File Upload → seller uploads product review CSV
- CRUD → store predictions and history

New things to build:
- Confidence score component
- Review analyzer page
- Seller insights dashboard

Standout features:
→ "Why people return this" AI insight card
→ Seller dashboard with return rate predictions per product
→ "Quick Fix" recommendation: what seller should change
→ Downloadable PDF report for sellers

Demo script:
Open product with 40% return rate.
AI analyzes 500 reviews in 3 seconds.
Shows: "Main issue — sizing confusion (67% of returns)."
Recommendation appears: "Add a detailed size guide."
Simulate: return rate drops to 18%.
Judge reaction: "This saves Amazon money. This is real."

Amazon language to use in video:
"Working backwards from the customer's confidence."
"Reducing friction in the post-purchase experience."

---

#### IDEA 2: ReviewIQ — AI Review Intelligence Platform

Problem Amazon cares about:
Customers can't trust 10,000 reviews.
Sellers don't know why customers are unhappy.

Your solution:
Upload product reviews CSV → AI extracts:
Top complaints, top praises, hidden patterns,
competitive gaps, actionable seller recommendations.

Starter Kit modules used:
- Auth → seller login
- File Upload → upload reviews CSV
- Gemini → sentiment and pattern analysis
- Dashboard → insights overview
- Charts → sentiment over time, complaint topic clusters
- Storage → store uploaded files

New things to build:
- Review upload and parse page
- Pain point visualization component
- Seller action list component

Standout features:
→ Pain Point Heatmap — visual map of what buyers complain about most
→ Competitor Gap Finder — what competitor products do better
→ Quick Win List — 3 specific things seller can fix this week
→ Auto-generated seller response templates for negative reviews

Demo script:
Upload 500 reviews CSV.
Instant AI analysis appears.
"34% complaints about battery life."
"Top positive: excellent camera quality."
"Quick win: update listing to clarify battery expectations."
AI drafts a seller response to a 1-star review.
Judge reaction: "Every Amazon seller needs this."

---

#### IDEA 3: FireGuide — AI Content Discovery for Fire TV

Problem Amazon cares about:
Users spend 18 minutes on average deciding what to watch.
This causes frustration and churn.

Your solution:
Conversational AI that finds content based on mood,
time available, who is watching, and past preferences.

Starter Kit modules used:
- Auth → family profiles
- Chat UI → conversational discovery interface
- Gemini → mood to content matching logic
- Dashboard → watch history and family preference overview
- CRUD → store profiles, history, preferences

New things to build:
- Mood selector component
- Content recommendation card
- Family profile setup page

Standout features:
→ Family Mode — picks content everyone in the room will enjoy
→ Time Mode — only shows content fitting your available time
→ Mood selector: Happy / Relaxed / Adventurous / Tired / Sad
→ Surprise Me — AI picks without you asking anything

Demo script:
User says: "I have 45 minutes and I'm exhausted."
AI immediately shows 3 options with reasoning.
"Based on your history, you enjoy slow-paced dramas."
One-tap to confirm.
Judge reaction: "This is exactly the Fire TV UX problem."

---

#### IDEA 4: SellerPulse — AI Seller Health Dashboard

Problem Amazon cares about:
Small sellers can't interpret their own performance data.
They make bad decisions and eventually leave the platform.

Your solution:
Upload seller data CSV → AI gives plain-English diagnosis
of store health + prioritized action list for this week.

Starter Kit modules used:
- Auth → seller login
- File Upload → seller CSV export upload
- Gemini → diagnosis and recommendation generation
- Dashboard → store health overview
- Charts → sales trends, inventory health, pricing gaps
- Storage → store uploaded reports

New things to build:
- Health score component (0-100 gauge)
- Priority action list component
- Inventory alert component

Standout features:
→ Store Health Score out of 100 with breakdown
→ "This Week's Top 3 Actions" — specific and ranked
→ Inventory risk alerts: "You'll stock out in 3 days"
→ Pricing opportunity: "Raise Product X by ₹50 — still competitive"

Demo script:
Upload seller CSV.
Score appears: 62/100.
"You are losing 23% of potential sales due to stockouts."
"Your pricing on Product X is 15% below market — raise it."
"3 of your listings have no images — fix this first."
Judge reaction: "Amazon wants sellers to succeed. This helps."

---

### TIER 2: Good Match, Higher Competition

---

#### IDEA 5: AccessShop — AI Shopping for Accessibility

For users with visual impairments or motor difficulties.
Voice search → AI describes products → voice-guided checkout.

Standout features:
→ Fully keyboard and screen-reader navigable
→ AI reads review summaries aloud
→ Voice-driven product comparison

Why it stands out:
Amazon values accessibility. Very few teams pick this.
Less competition for a meaningful problem.

---

#### IDEA 6: PriceGuard — Smart Deal Timing Assistant

"Should I buy now or wait?"
AI predicts whether price will drop based on historical patterns.

Standout features:
→ Price history chart per product
→ AI confidence score: "87% chance price drops in 2 weeks"
→ Set alert and get notified when price hits target

---

## Step 5: What Makes a Submission Actually Win

### Things That Win

1. Measurable impact numbers on the dashboard
   Do not say "improves customer experience."
   Say "reduces decision time from 18 minutes to 3 minutes."
   Show these numbers as KPI cards on your dashboard.
   Simulate realistic data if needed. Make it visual.

2. A polished demo video — this is the most important thing
   - Under 3 minutes
   - Start with the PROBLEM, not your solution
   - Show the product actually working — not slides
   - End with a business impact statement
   - Record multiple practice runs before the final

3. The aha moment
   Every winning demo has one moment where the judge thinks:
   "oh, that's clever."
   Design for it deliberately.
   Example aha: Upload CSV → Pain Point Heatmap appears instantly.
   That visual surprise = your aha moment.

4. Amazon language in your video
   Use these phrases naturally:
   "Customer obsession"
   "Working backwards from the customer"
   "Day 1 thinking"
   "Reducing friction"
   "Measurable business impact"
   Amazon judges respond to this language instinctively.

5. Working product beats beautiful slides
   A rough but clickable demo beats a polished deck every time.
   Ship something that works. Polish second.

---

## Step 6: Hour-by-Hour Plan for Hackathon Day

Hour 0 to 1 — Strategy
- Read all 3 problems completely
- Fill scoring table
- Pick topic using the table
- Write your one-line product framing
- Divide work: Person A = frontend + AI, Person B = DB + prompts + video prep

Hour 1 to 4 — Core Loop
- Get the main user flow working end to end
- Even if ugly: Login → Input → AI Response → Display Result
- This must be demoable by hour 4 no matter what

Hour 4 to 6 — Dashboard and Charts
- Add the metrics and analytics layer
- Add KPI cards with impact numbers
- This is what judges screenshot and remember

Hour 6 to 8 — Polish and Standout Feature
- Add your aha moment feature
- Clean up UI using shadcn components
- Make sure dark mode works

Hour 8 to 9 — Demo Preparation
- Pick exactly 3 demo inputs
- Test each one 5 times
- Fix anything inconsistent
- Never rely on live unpredictable AI during the video

Hour 9 to 10 — Video Recording
- Record 2 practice runs, watch them
- Record final video
- Keep it under 3 minutes
- Open with: "Every year Amazon loses X because of Y. We built Z."
- Close with your measurable impact numbers

---

## Step 7: KIRO Prompt to Use on Hackathon Day

When problem statements are released, paste this into KIRO: