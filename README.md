# Card Rummy – Pakistan Online Rummy Website

Marketing website for **Card Rummy**, Pakistan's online rummy card game app. Built with Next.js for fast loading and SEO (ranking for "card rummy" and related keywords).

## Features

- **SEO**: Meta tags, Open Graph, Twitter cards, JSON-LD (MobileApplication), sitemap, robots.txt
- **Pages**: Home, How to Play, Download, About, Contact (with working contact form)
- **Responsive**: Mobile-first layout with a simple nav and footer
- **Design**: Dark theme, green/gold accents, Outfit + DM Sans fonts

## Run locally

```bash
# If you see npm ENOTEMPTY errors, do a clean install:
rm -rf node_modules package-lock.json
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy

- **Vercel**: Connect the repo; Vercel will build and deploy.
- **Custom domain**: Set your domain (e.g. `cardrummy.pk`) in the hosting dashboard and update `metadataBase` and `baseUrl` in:
  - `src/app/layout.tsx`
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`

## Contact form

Submissions are handled by `src/app/api/contact/route.ts`. To send real emails, add your provider (e.g. Resend, SendGrid) or save to a database/CRM in that route.

## Download page

The Android download button is a placeholder (`href="#"`). Replace with your actual APK URL or Play Store link when ready.
