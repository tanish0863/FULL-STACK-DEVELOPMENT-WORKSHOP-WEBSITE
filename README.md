# 🚀 IIC Task 4: Full-Stack Workshop Registration Platform

**Live Demo**: [https://full-stack-development-workshop-web.vercel.app/](https://full-stack-development-workshop-web.vercel.app/)

## 📝 Project Overview
This platform is a comprehensive solution for **Task 4: Full Stack Development – Workshop Website**. It addresses the common fragmentation in college event registrations by providing a unified, professional, and automated system for event details, participant registration, and digital pass generation.

---

## 📸 UI Previews

<div align="center">
  <img src="ui%20images/Screenshot%202026-05-06%20003021.png" width="800" alt="Home Page">
  <br>
  <em>Main Landing Page with Cinematic Effects</em>
  <br><br>
  <img src="ui%20images/Screenshot%202026-05-06%20003122.png" width="400" alt="Registration Modal">
  <img src="ui%20images/Screenshot%202026-05-06%20003138.png" width="400" alt="Progressive Flow">
  <br>
  <em>Smooth Progressive Registration Flow</em>
  <br><br>
  <img src="ui%20images/Screenshot%202026-05-06%20003418.png" width="600" alt="Event Pass">
  <br>
  <em>Digital Event Pass with QR Code Generation</em>
</div>

---

## 🔍 Problem Statement (Scenario)
College events often suffer from scattered information, boring registration forms, and a total lack of structured confirmation systems. Participants rarely receive a professional entry pass, leading to confusion on the event day.

**The Solution**: This platform solves these issues by:
-   **Consolidating Information**: All workshop details, speaker bios, and agendas are in one cinematic interface.
-   **Modernizing Registration**: Replaces static forms with a premium "Progressive Flow" experience.
-   **Automating Confirmation**: Instantly generates a unique digital event card upon successful registration.

---

## 🔄 System Flow (Implementation)
The project strictly follows the required system flow:
1.  **Discovery**: User views the landing page with cinematic animations and event details.
2.  **Details**: Comprehensive sections for Speaker Bio, Schedule/Agenda, and Date/Time.
3.  **Registration**: A multi-step form captures Name, Email, Phone, and College/Department.
4.  **Storage**: Data is securely persisted in a **MongoDB Atlas** database.
5.  **Confirmation**: A success screen appears with a generated **Digital Event Card**.
6.  **Utility**: The card features a **Unique Reference ID** and is available for **PNG Download**.

---

## ✨ Features

### 1. Workshop Website (Frontend)
-   **Cinematic Design**: Dark-themed, glassmorphic UI built with Next.js and Tailwind CSS.
-   **Speaker Section**: Detailed bio and expertise profile.
-   **Schedule**: Interactive agenda and timeline.
-   **Responsive**: Fully optimized for mobile, tablet, and desktop.

### 2. Registration System
-   **Progressive Form**: Multi-step registration to reduce user fatigue.
-   **Real-time Validation**: Validates name, email format, and college details.

### 3. Data Storage
-   **MongoDB Atlas**: Full CRUD integration via a Node.js/Express backend.
-   **Persistence**: Ensuring every registration is recorded and retrievable.

### 4. Event Card Generation (Key Feature)
-   **Dynamic Rendering**: Generates a card with the participant's name and a Unique ID.
-   **QR Code**: Includes a scannable QR code for check-in verification.
-   **One-Click Download**: High-quality PNG download functionality using `html2canvas`.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose) |
| **Icons/UI** | Lucide-react, shadcn/ui |

---

## 🚀 Setup Instructions

### 1. Backend Configuration
```bash
cd backend
npm install
# Create .env with MONGO_URI and PORT
npm run dev
```

### 2. Frontend Configuration
```bash
npm install
# Set NEXT_PUBLIC_BACKEND_URL in your env
npm run dev
```

---

## ⚖️ General Guidelines
-   **Security**: `.env` files are ignored to protect sensitive credentials.
-   **Performance**: Optimized assets and lazy-loaded animations for fast performance.
-   **User Experience**: Instant feedback through `Sonner` toast notifications.

---

Built with ❤️ as a solution for **IIC Task 4**.
