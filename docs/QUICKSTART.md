# Quick Start Guide

Get the workshop registration system up and running in 5 minutes.

## Prerequisites
- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit **http://localhost:3000** in your browser.

## What You'll See

1. **Hero Section** - Eye-catching landing with event details
2. **Event Details** - Workshop highlights and key benefits
3. **Speaker Section** - Meet the instructors
4. **Schedule** - Full day agenda (9 AM - 5 PM)
5. **Footer** - Contact and links

## Try the Features

### Register for the Workshop
1. Click **"Register Now"** button
2. Fill in the form:
   - **Name** (required)
   - **Email** (required, must be valid)
   - **Phone** (optional)
   - **College/Department** (optional)
3. Click **"Register"**
4. See your **Digital Event Card**
5. Click **"Download Card"** to save as PNG

### View API Response
```bash
# In development mode, view registrations
curl http://localhost:3000/api/register
```

## Customization

### Change Event Information

**Hero Title & Description** → `/components/hero-section.tsx`
```tsx
<h1>AI & Full Stack Workshop</h1>
```

**Date & Time** → Update in:
- `hero-section.tsx`
- `event-card.tsx`
- `success-screen.tsx`

**Workshop Details** → `/components/event-details.tsx`
```tsx
const highlights = [
  'Your highlight 1',
  'Your highlight 2',
  // ...
];
```

**Speakers** → `/components/speaker-section.tsx`
```tsx
const speakers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    company: 'Your Company',
    bio: 'Your bio...',
    initials: 'YN',
  },
  // ...
];
```

**Schedule** → `/components/schedule-section.tsx`
```tsx
const sessions = [
  {
    time: '9:00 AM - 10:00 AM',
    title: 'Your Session',
    description: 'Session details...',
    speaker: 'Speaker Name',
  },
  // ...
];
```

### Change Colors

Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.65 0.18 280); /* Change this to your color */
  --background: oklch(0.065 0 0);
  --foreground: oklch(0.97 0 0);
  /* ... update other colors ... */
}
```

## Form Validation Rules

| Field | Rules | Behavior |
|-------|-------|----------|
| Name | Required | Error: "Name is required" |
| Email | Required, valid format | Error: "Please enter a valid email" |
| Phone | Optional | Accepts any format |
| College | Optional | Accepts any text |

## Data Storage

### Current (Development)
- Registrations stored in RAM
- Cleared when server restarts
- View with: `curl http://localhost:3000/api/register`

### Production (Google Sheets)
Follow **SETUP_GOOGLE_SHEETS.md** for:
1. Create Google Cloud Project
2. Set up Service Account
3. Create Google Sheet
4. Configure environment variables
5. Update API route

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
pnpm dev -p 3001
```

### Dependencies Not Installing
```bash
# Clear pnpm cache
pnpm store prune
pnpm install
```

### Styles Not Applying
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

### Form Not Submitting
1. Check browser console for errors
2. Verify API route exists: `http://localhost:3000/api/register`
3. Check network tab in DevTools
4. Ensure form validation passes

### Download Card Not Working
1. Install html2canvas: `pnpm add html2canvas`
2. Check browser console
3. Verify download permissions
4. Try in incognito/private mode

## Project Structure

```
├── app/
│   ├── api/
│   │   └── register/route.ts    # Registration endpoint
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Styles & design tokens
│   └── page.tsx                 # Main page
├── components/
│   ├── hero-section.tsx         # Landing
│   ├── event-details.tsx        # Details
│   ├── speaker-section.tsx      # Speakers
│   ├── schedule-section.tsx     # Agenda
│   ├── registration-modal.tsx   # Form
│   ├── event-card.tsx           # Digital pass
│   ├── success-screen.tsx       # Confirmation
│   └── footer.tsx               # Footer
├── README.md                    # Full documentation
└── SETUP_GOOGLE_SHEETS.md       # Data persistence
```

## Common Tasks

### Add New Speaker
```tsx
// In speaker-section.tsx
const speakers = [
  // ... existing speakers
  {
    name: 'New Speaker',
    role: 'Their Role',
    company: 'Their Company',
    bio: 'Their bio...',
    initials: 'NS',
  },
];
```

### Add Schedule Session
```tsx
// In schedule-section.tsx
const sessions = [
  // ... existing sessions
  {
    time: '2:00 PM - 3:00 PM',
    title: 'New Session',
    description: 'Session details...',
    speaker: 'Speaker Name',
  },
];
```

### Add Workshop Highlight
```tsx
// In event-details.tsx
const highlights = [
  // ... existing highlights
  'Your new highlight',
];
```

## Next Steps

1. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

2. **Set Up Google Sheets**
   - Follow `SETUP_GOOGLE_SHEETS.md`
   - Configure environment variables

3. **Customize Branding**
   - Update event name/date
   - Change colors in `globals.css`
   - Update speaker information
   - Modify schedule

4. **Add Email Notifications**
   - Use SendGrid/Gmail API
   - Send confirmation emails
   - Create email templates

5. **Monitor Registrations**
   - Check Google Sheet/Database
   - View analytics
   - Track attendance

## Support

- See **README.md** for full documentation
- See **SETUP_GOOGLE_SHEETS.md** for data integration
- Check **IMPLEMENTATION_SUMMARY.md** for architecture details
- Browser DevTools for debugging

## Quick Reference

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run linter |

---

**Happy coding!** 🚀
