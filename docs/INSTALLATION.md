# AI & Full Stack Workshop - Installation & Setup Guide

## Quick Start

### 1. Extract Archive
```bash
tar -xzf workshop-website.tar.gz
cd workshop-website
```

### 2. Install Dependencies
```bash
pnpm install
# or npm install / yarn install / bun install
```

### 3. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── api/register/        # Registration API endpoint
│   ├── globals.css          # Global styles & theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── event-card.tsx       # Event pass with QR code
│   ├── event-details.tsx    # Workshop info section
│   ├── footer.tsx           # Footer component
│   ├── hero-section.tsx     # Hero with 3D tilt
│   ├── progressive-registration.tsx  # Multi-step form
│   ├── qr-code.tsx          # QR code generator
│   ├── schedule-section.tsx # Day schedule
│   ├── speaker-section.tsx  # Instructors
│   ├── success-screen.tsx   # Registration confirmation
│   └── registration-modal.tsx # Modal wrapper
├── public/                  # Static assets
└── package.json

```

## Key Features

- **3D Tilt Effects** - Cards respond to mouse movement with parallax tilt
- **Progressive Registration** - Multi-step form with real-time validation
- **QR Code Generation** - Unique scannable codes for each registration
- **Event Pass Flip Card** - 3D flip animation with QR code on back
- **Glassmorphism UI** - Modern frosted glass effect throughout
- **Smooth Animations** - Framer motion for professional transitions
- **Responsive Design** - Works on mobile, tablet, and desktop

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Parallax Tilt** - 3D card effects
- **QRCode** - QR code generation
- **html2canvas** - Card download functionality

## API Endpoints

### POST /api/register
Register a participant for the workshop.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "college": "Engineering"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "uniqueId": "WS1715000000ABC123"
}
```

### GET /api/register
View all registrations (development only).

## Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Other Platforms
1. Build: `pnpm build`
2. Start: `pnpm start`
3. Deploy the `.next` folder and `node_modules`

## Environment Variables

No environment variables required for basic functionality.

For production deployments, consider adding:
- Email service configuration
- Database integration
- Analytics tracking

## Support & Documentation

- See `BUILD_COMPLETE.md` for implementation details
- See `CINEMATIC_ENHANCEMENTS.md` for animation features
- See `QR_CODE_FEATURE.md` for QR code documentation

## License

MIT License - Feel free to use this for your workshop or events.

## Contact

For issues or questions, please refer to the documentation files included in the project.
