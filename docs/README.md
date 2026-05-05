# AI & Full Stack Workshop 2026 - Registration Platform

A modern, fully-featured workshop registration website built with Next.js 16, featuring real-time registration, digital event card generation, and Google Sheets integration.

## Features

### User-Facing Features
- **Beautiful Hero Section** - Eye-catching landing with event overview and key details
- **Workshop Details** - Comprehensive information about the workshop with key highlights
- **Speaker Showcase** - Featured instructors with bios and expertise areas
- **Full Schedule** - Complete day-long agenda with break times and session descriptions
- **Registration System** - Modal form with real-time validation and error handling
- **Digital Event Cards** - Auto-generated confirmation cards with:
  - Participant name
  - Event details (date, time, location)
  - Unique registration ID
  - Downloadable as PNG image
- **Success Confirmation** - Post-registration screen with next steps and card management
- **Responsive Design** - Fully mobile-optimized interface
- **Modern UI** - Vibrant purple/indigo accent colors with dark theme

### Technical Features
- **Form Validation** - Real-time validation for name, email (with regex check)
- **API Integration** - Backend route for handling registrations (`/api/register`)
- **Data Persistence** - In-memory storage (development) with Google Sheets integration ready
- **Toast Notifications** - User feedback using Sonner toast library
- **Image Export** - HTML-to-canvas conversion for event card downloads
- **SEO Optimized** - Metadata configuration in layout for search engine visibility
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation support

## Tech Stack

- **Frontend**: Next.js 16 with React 19.2
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner (toast library)
- **Image Export**: html2canvas
- **Backend**: Next.js API Routes
- **Database**: Ready for Google Sheets integration (currently using in-memory)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # Registration API endpoint
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles and design tokens
│   └── page.tsx                  # Main page component
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── hero-section.tsx          # Hero banner
│   ├── event-details.tsx         # Workshop details section
│   ├── speaker-section.tsx       # Speaker showcase
│   ├── schedule-section.tsx      # Workshop schedule/agenda
│   ├── registration-modal.tsx    # Registration form modal
│   ├── event-card.tsx            # Digital event card
│   ├── success-screen.tsx        # Post-registration screen
│   └── footer.tsx                # Page footer
├── SETUP_GOOGLE_SHEETS.md        # Google Sheets integration guide
└── README.md                     # This file
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd workshop-2026

# Install dependencies
pnpm install
# or npm install / yarn install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### User Flow

1. **Visit Website**: User lands on the hero section with workshop overview
2. **Explore Content**: User scrolls through event details, speakers, and schedule
3. **Register**: User clicks "Register Now" button to open registration modal
4. **Fill Form**: User enters name (required), email (required), phone (optional), and college/department (optional)
5. **Submit**: Form validates in real-time and submits to backend
6. **Confirmation**: User sees success screen with digital event card
7. **Download**: User can download the event card as PNG image
8. **Next Steps**: User sees 4-step guide for event preparation

### Registration Form Validation

- **Name**: Required, must not be empty
- **Email**: Required, must be valid email format
- **Phone**: Optional, any format accepted
- **College/Department**: Optional, any text accepted

## API Reference

### POST /api/register

Register a new participant for the workshop.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "college": "Computer Science"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Registration successful",
  "uniqueId": "WS1715000000ABC123DEF"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Name and email are required"
}
```

## Data Storage

### Current Implementation
- **In-Memory Storage**: Registrations stored in RAM (development only)
- **View Registrations**: GET `/api/register` (development mode only)

### Google Sheets Integration
To persist data to Google Sheets:

1. Follow the setup guide in `SETUP_GOOGLE_SHEETS.md`
2. Create a Google Cloud Service Account
3. Set up environment variables:
   ```
   GOOGLE_SHEETS_ID=YOUR_SPREADSHEET_ID
   GOOGLE_SERVICE_ACCOUNT=YOUR_SERVICE_ACCOUNT_JSON
   ```
4. Install dependencies:
   ```bash
   pnpm add googleapis google-auth-library
   ```
5. Update `/app/api/register/route.ts` with the Google Sheets implementation

## Design System

### Color Palette
- **Background**: Deep black (`oklch(0.065 0 0)`)
- **Foreground**: Off-white (`oklch(0.97 0 0)`)
- **Primary Accent**: Vibrant purple/indigo (`oklch(0.65 0.18 280)`)
- **Secondary**: Muted dark slate (`oklch(0.15 0.02 290)`)
- **Border**: Subtle dark (`oklch(0.18 0.01 290)`)

### Typography
- **Font Family**: Geist (sans-serif)
- **Heading Sizes**: 6xl (hero), 5xl (section), 2xl (subsection)
- **Line Height**: 1.4-1.6 for body text
- **Font Weight**: Regular (400), Semibold (600), Bold (700)

## Customization

### Modifying Event Details
Edit the following components to change event information:

- **Hero Section** (`components/hero-section.tsx`): Change date, time, location, description
- **Event Details** (`components/event-details.tsx`): Update workshop highlights
- **Speaker Section** (`components/speaker-section.tsx`): Add/remove speakers and bios
- **Schedule Section** (`components/schedule-section.tsx`): Update session times and topics
- **Event Card** (`components/event-card.tsx`): Customize card design and information

### Changing Colors
Edit design tokens in `app/globals.css` within the `:root` section:

```css
:root {
  --primary: oklch(0.65 0.18 280); /* Change primary color */
  --background: oklch(0.065 0 0);   /* Change background */
  /* Update other tokens as needed */
}
```

## Performance Optimizations

- **CSS Framework**: Tailwind CSS v4 with optimized production builds
- **Image Export**: Debounced canvas conversion to prevent blocking
- **Form Validation**: Client-side validation before API calls
- **Responsive Images**: Mobile-first design approach
- **Code Splitting**: Next.js automatic route-based splitting

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Accessibility

- Semantic HTML elements (`<main>`, `<section>`, `<footer>`)
- ARIA labels on form inputs and buttons
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly content

## Troubleshooting

### Registration not working
1. Check browser console for errors
2. Verify API route is accessible at `/api/register`
3. Check network tab in DevTools for failed requests
4. Ensure form validation passes (check for error messages)

### Cards not downloading
1. Ensure html2canvas is installed: `pnpm add html2canvas`
2. Check browser console for canvas-related errors
3. Verify browser permissions for downloads
4. Try a different browser to isolate issues

### Styling issues
1. Clear Next.js cache: `rm -rf .next`
2. Rebuild: `pnpm dev`
3. Check CSS cascade in browser DevTools
4. Verify Tailwind classes are correctly applied

## Development

### Running Tests
```bash
pnpm test
```

### Building for Production
```bash
pnpm build
pnpm start
```

### Environment Variables
Create `.env.local` file:
```
# Optional - for Google Sheets integration
GOOGLE_SHEETS_ID=YOUR_SHEET_ID
GOOGLE_SERVICE_ACCOUNT=YOUR_JSON_CONTENT
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
1. Build: `pnpm build`
2. Start: `pnpm start`
3. Deploy the `.next` folder to your hosting platform

## Contributing

Guidelines for contributing to this project:
1. Create a feature branch
2. Make changes in small, focused commits
3. Test thoroughly before submitting PR
4. Update documentation as needed
5. Follow the existing code style

## License

MIT License - feel free to use this project for your workshops and events.

## Support

For issues, questions, or suggestions:
- Check the troubleshooting section above
- Review `SETUP_GOOGLE_SHEETS.md` for data integration help
- Open an issue on the repository

---

**Event Date**: June 15, 2026  
**Duration**: 9:00 AM - 5:00 PM  
**Format**: Hybrid (NYC & Online)

Built with ❤️ for developers
