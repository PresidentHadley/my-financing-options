# My Financing Options - Redirect Site

This Next.js application serves as a redirect hub for the My Financing Options website, routing traffic to the appropriate specialized domains:

- **SBACalculators.com** - For SBA loan calculators and business financing tools
- **EquipmentCalculators.com** - For equipment financing and leasing calculators

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Redirect Configuration

All redirects are configured in `next.config.js` with permanent (301) redirects:

- `/calculators/sba` → SBACalculators.com
- `/calculators/equipment` → EquipmentCalculators.com
- `/blog` → SBACalculators.com
- Other utility pages (about, contact, terms) → SBACalculators.com
- All other paths → SBACalculators.com (catch-all)

## Deployment

This site can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Repository

Git repository: `git@github.com:PresidentHadley/my-financing-options.git`

## License

Private - All rights reserved

