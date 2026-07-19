# Profluento

Marketing site for **Profluento** — an AI-powered CRM for wealth managers.

**Live:** [https://profluento.dev](https://profluento.dev)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Vercel Analytics
- Deployed on Vercel (Anush Sonone account)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint
```

## Project structure

```
app/                 # routes, layout, global styles, metadata
components/          # header, footer, product frames, demo video, scroll helpers
public/assets/
  images/            # logo, product screenshots, demo poster
  video/             # product demo (mp4 + mov)
```

## Product surface (homepage)

1. Hero — value prop + lead intelligence screenshot  
2. Product — lead intelligence, AI-assisted outreach, relationship CRM  
3. Workflow — screenshots + product demo video  
4. Technology — scoring / queue / caching proof points  
5. Contact — book a consultation (TidyCal)

Primary CTA: [Book a consultation](https://tidycal.com/anushsonone/profluento-consultation)

## Domain / DNS notes

- Registrar: Porkbun (`profluento.dev`)
- Hosting: Anush Sonone Vercel project (not the old profluento team account)
- Keep the `api` A record if the API host should stay on its current IP
- Apex / `www` point at Vercel; ownership TXT records can be removed after verification

## License

Private.
