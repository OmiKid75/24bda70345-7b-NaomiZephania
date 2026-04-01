#EXPERIMENT 7B
NAME:Naomi Zephania
UID: 24BDA70345

AIM: Build a Product Manager
A Next.js 16 app that demonstrates a persistent product list using Zustand with the persist middleware, shadcn/ui components, and Tailwind CSS v4.
Users can view a list of products, add new ones, update quantities, and delete items. All data is persisted to localStorage so it survives page reloads.

TECHNOLOGIES APPLIED:
Tech Stack
Tool	Purpose
Next.js 16 (App Router)	Framework
React 19	UI library
TypeScript	Type safety
Tailwind CSS v4	Styling
Zustand v5	Global state management
zustand/middleware persist	localStorage persistence
shadcn/ui	Pre-built UI components (Button, Input, Spinner)
clsx + tailwind-merge	Conditional class merging
tw-animate-css	Tailwind animations plugin

PROJECT STRUCTURE:
app/
  globals.css        # Tailwind v4 + shadcn CSS variables
  layout.tsx         # Root layout with fonts
  page.tsx           # Home page — renders <ProductList />
components/
  ProductList.tsx    # Lists all products, Add button
  ProductItem.tsx    # Single product row with Save/Delete
  ui/
    button.tsx       # shadcn Button component
    input.tsx        # shadcn Input component
    spinner.tsx      # shadcn Spinner component
store/
  useProductStore.ts # Zustand store with persist middleware
lib/
  utils.ts           # cn() helper (clsx + tailwind-merge)

  PROCEDURES:
  1. Install dependencies
pnpm add zustand

3. Initialise shadcn/ui
pnpm dlx shadcn@latest init
When prompted, choose neutral base colour and confirm app/globals.css as the CSS file.

Then add the components used in this project:

pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add spinner
This creates components/ui/button.tsx, components/ui/input.tsx, and components/ui/spinner.tsx.

4. lib/utils.ts
shadcn scaffolds this automatically

5. store/useProductStore.ts — Zustand store
This is the core of the app. Create store/useProductStore.ts

6. Build components/ProductList.tsx
7. Build app/page.tsx
8. Build app/layout.tsx
9. Running the app
pnpm dev
Open http://localhost:3000 with your browser to see the result.

 screenshots:
 <img width="579" height="461" alt="image" src="https://github.com/user-attachments/assets/b8041690-4570-4296-bd38-a775e39d35d5" />
