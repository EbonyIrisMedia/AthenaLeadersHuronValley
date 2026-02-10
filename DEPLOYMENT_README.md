# ATHENA Leaders of the Huron Valley - Portable Deployment Package

This is a fully portable version of the website with all assets included locally.

## What's Included

- ✅ All source code and components
- ✅ All images downloaded locally in `client/public/images/`
- ✅ No external CDN dependencies
- ✅ Complete styling and configuration
- ✅ Mobile-optimized responsive design
- ✅ Calendar integration for events
- ✅ Back-to-top button and scroll functionality

## Quick Start

### 1. Extract the zip file
```bash
unzip athena-huron-valley-portable-*.zip
cd athena-huron-valley
```

### 2. Install dependencies
```bash
pnpm install
# or
npm install
```

### 3. Run development server
```bash
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

### 4. Build for production
```bash
pnpm build
# or
npm run build
```

The production files will be in the `client/dist/` directory.

## Deployment Options

### Static Hosting (Netlify, Vercel, GitHub Pages)
1. Build the project: `pnpm build`
2. Deploy the `client/dist/` folder to your hosting provider
3. Configure the hosting to serve `index.html` for all routes (for SPA routing)

### Traditional Web Server (Apache, Nginx)
1. Build the project: `pnpm build`
2. Copy contents of `client/dist/` to your web server's document root
3. Configure server to redirect all routes to `index.html`

Example Nginx configuration:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Assets

All images are stored locally in `client/public/images/` and are referenced with `/images/` paths in the code. No external CDN dependencies are required.

## Features

- **Responsive Design**: Mobile-first design with touch-friendly interactions
- **Event Calendar Integration**: Add to Google Calendar, Apple Calendar, or Outlook
- **Photo Gallery**: 16 high-quality event photos from February 2, 2026 event
- **Navigation**: Smooth scroll-to-top functionality and mobile slide-out menu
- **Accessibility**: Proper contrast, keyboard navigation, and semantic HTML

## Technology Stack

- React 19
- Tailwind CSS 4
- Wouter (routing)
- shadcn/ui components
- Vite (build tool)

## Support

For questions or issues, contact: chair@ATHENALeadersoftheHuronValley.org
