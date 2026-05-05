# IIC Club Workshop Registration Platform

A full-stack registration platform built with **Next.js 16**, **Express.js**, and **MongoDB**. This project features a stunning, modern UI with progressive form registration, digital event card generation, and persistent database storage.

## 🚀 Features

-   **Modern UI/UX**: Dark-themed, glassmorphic design with smooth Framer Motion animations.
-   **Progressive Registration**: A multi-step form for an engaging user experience.
-   **Digital Event Card**: Automatically generates a downloadable confirmation card with a unique registration ID.
-   **Full-Stack Backend**: Persistent storage using MongoDB Atlas and a dedicated Express.js server.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **SEO Optimized**: Semantic HTML and optimized metadata.

## 🛠️ Tech Stack

-   **Frontend**: Next.js 16 (React 19), Tailwind CSS v4, shadcn/ui, Framer Motion.
-   **Backend**: Node.js, Express.js, Mongoose.
-   **Database**: MongoDB Atlas.
-   **Styling**: Lucide Icons, Sonner (Toasts), Google Fonts (Inter).

## 📂 Project Structure

```text
├── app/                # Next.js App Router (Frontend)
├── backend/            # Express.js Server (Backend)
│   ├── config/         # DB connection config
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
├── components/         # Reusable UI components
├── public/             # Static assets
└── docs/               # Technical documentation & archive
```

## 🚥 Getting Started

### 1. Prerequisites
-   Node.js (v18+)
-   MongoDB Atlas account

### 2. Backend Setup
1.  Navigate to the backend directory:
    ```bash
    cd backend
    npm install
    ```
2.  Create/Update `backend/.env` with your MongoDB URI:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_uri
    ```
3.  Start the backend server:
    ```bash
    npm run dev
    ```

### 3. Frontend Setup
1.  Navigate to the root directory:
    ```bash
    pnpm install
    ```
2.  Start the Next.js development server:
    ```bash
    pnpm dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Documentation
For detailed implementation details, setup guides, and features, please refer to the files in the `docs/` folder.

## 📄 License
This project is for workshop submission purposes.

---
Built with ❤️ for the IIC Club Submission 2026.
