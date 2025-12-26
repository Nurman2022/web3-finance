# Web3Finance - Landing Page Template

Professional Web3/Crypto landing page template built with Next.js 15, React 19, and Tailwind CSS v4. Perfect for launching your crypto project on Gumroad.

## ✨ Features

- 🌙 Dark theme optimized
- ⚡ Built with Next.js 15 App Router
- 🎨 Tailwind CSS v4 with custom colors
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- ⚙️ JavaScript only (no TypeScript overhead)
- 🎯 SEO optimized
- 📦 Production ready
- 🧩 shadcn/ui support (Working in Progress)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   └── not-found.jsx
├── components/          # React Components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── sections/        # Page sections
│   ├── ui/             # Reusable UI components
│   └── illustrations/   # Chart & illustration components
├── data/               # Static data
├── lib/                # Utilities & helpers
└── styles/             # Global styles
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
- Dark backgrounds: `--color-dark-bg`, `--color-dark-card`, etc.
- Primary/Secondary: `--color-oklch-primary`, `--color-oklch-secondary`

### Content
Edit data files in `src/data/`:
- `navigation.js` - Navbar menu
- `features.js` - Features section
- `partners.js` - Partner logos
- `faq.js` - FAQ items
- `footer.js` - Footer content

### Styling
Global styles in `src/app/globals.css` and `src/styles/`

## 🏗️ Building

```bash
npm run build
```

Creates optimized production build in `.next/` directory.

## 📊 Performance

- Lighthouse score: 90+
- Fully responsive (320px - 1280px+)
- Optimized images and fonts
- Minimal bundle size

## 📄 License

MIT License - feel free to use commercially

## 🤝 Support

For questions or issues, please check the documentation or create an issue.

---

**Ready to launch?** Deploy to Vercel with one click for the best performance.
