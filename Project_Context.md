# PROJECT_CONTEXT.md
# Hackathon Starter Kit — KIRO Architecture Context

---

## Tech Stack
- Framework: Next.js 14 (App Router)
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth
- Storage: Supabase Storage
- AI: Google Gemini (via lib/ai.ts)
- Deployment: Vercel
- UI: shadcn/ui + Tailwind CSS

---

## Folder Structure
---

## Available Modules — DO NOT Regenerate These

| Module | File | Purpose |
|---|---|---|
| Auth | lib/auth.ts | Login, Signup, Logout, Session management |
| Database | lib/crud.ts | Generic CRUD for any Supabase table |
| Storage | lib/storage.ts | Upload files, images, PDFs to Supabase |
| AI | lib/ai.ts | Gemini wrapper with streaming support |
| Prompts | lib/prompts.ts | Reusable AI prompt templates |
| Dashboard Layout | components/layout/ | Sidebar, Navbar, DashboardLayout |
| Chat UI | components/chat/ | ChatInput, MessageList, ChatInterface |
| Charts | components/ui/Charts.tsx | Bar, Line, Pie charts via Recharts |
| File Upload | components/ui/FileUpload.tsx | Drag and drop file uploader |
| Cards | components/ui/Card.tsx | Reusable stat and content cards |
| Table | components/ui/Table.tsx | Sortable data table |

---

## Rules for KIRO — Always Follow These

1. Always reuse existing modules — never regenerate auth or storage
2. Follow the existing folder structure exactly
3. Use shadcn/ui for all new UI components
4. New pages go inside /pages or /app directory
5. New database tables go as SQL in /supabase/schema.sql
6. Use lib/ai.ts for all AI calls — never create a new AI client
7. Use lib/crud.ts for all database operations
8. Maintain dark mode support in every new component
9. Keep the same Tailwind + shadcn design system throughout
10. Do not install new libraries unless absolutely necessary

---

## How to Extend This Kit

When a problem statement is given, follow this order:

Step 1 → Identify which existing modules can be reused
Step 2 → List only the NEW pages needed
Step 3 → List only the NEW components needed
Step 4 → List only the NEW database tables needed
Step 5 → Generate only the missing business logic

Never rewrite what already works.

---

## Standard KIRO Prompt Template

Use this every time you start a new task in KIRO: