# 🚀 IIC Club Workshop: Full-Stack Registration Platform

A high-performance, visually stunning registration system designed for the **IIC Club Submission 2026**. This platform provides a seamless bridge between event organizers and participants, featuring a premium UI and a robust MongoDB-powered backend.

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

## 📝 Problem Statement

Traditional event registration systems often suffer from clunky user interfaces, lack of real-time confirmation, and fragmented data management. For technical clubs like IIC, a manual registration process or simple forms often lead to:
1.  **Poor User Experience**: High drop-off rates due to boring, complex forms.
2.  **Lack of Professionalism**: No immediate digital confirmation or downloadable event pass.
3.  **Data Fragmentation**: Using multiple platforms (Forms, Sheets, Manual Entry) makes it difficult to track participants efficiently.

**The Solution**: This project solves these issues by providing a **unified, full-stack platform** that combines an engaging, animated "Progressive Registration" flow with a secure database and instant digital card generation.

---

## ✨ Features of the System

### 🎨 Premium User Experience
-   **Cinematic UI**: A dark-themed, glassmorphic design featuring vibrant indigo and cyan accents.
-   **Progressive Form Flow**: A multi-step registration process that reduces cognitive load and increases completion rates.
-   **Framer Motion Animations**: Smooth transitions, hover effects, and interactive elements that make the site feel alive.

### 🎫 Digital Pass Generation
-   **Instant Card Generation**: Automatically creates a personalized digital pass upon successful registration.
-   **Unique ID System**: Assigns a secure, timestamped Unique ID (UID) to every participant.
-   **Downloadable Assets**: High-quality PNG download functionality for participants to save their entry cards.

### ⚙️ Robust Architecture
-   **Real-time Validation**: Client-side and server-side validation for emails and required fields.
-   **MongoDB Persistence**: Reliable data storage for high-volume participant management.
-   **API Proxying**: Seamless frontend-to-backend communication via Next.js rewrites.

---

## 🛠️ Tech Stack Used

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19, Tailwind CSS v4 |
| **Components** | shadcn/ui, Lucide Icons |
| **Animations** | Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Notifications** | Sonner (Toast System) |

---

## 🚀 Setup Instructions

### 1. Prerequisites
-   **Node.js** (v18 or higher)
-   **MongoDB Atlas** account (or local MongoDB instance)
-   **npm** or **pnpm** package manager

### 2. Backend Configuration
1.  Navigate to the backend directory:
    ```bash
    cd backend
    npm install
    ```
2.  Create a `.env` file in the `backend/` folder:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_string
    ```
3.  Start the backend server:
    ```bash
    npm run dev
    ```

### 3. Frontend Configuration
1.  Navigate to the root directory and install dependencies:
    ```bash
    npm install
    ```
2.  Start the Next.js development server:
    ```bash
    npm run dev
    ```
3.  Access the platform at `http://localhost:3000`.

---

## ⚖️ General Guidelines

-   **Environment Safety**: Never commit your `.env` file to a public repository. A `.env.example` has been provided for reference.
-   **Database Access**: Ensure your MongoDB Atlas IP Access List is configured to allow connections from your current IP.
-   **Production Build**: To prepare the project for production, run `npm run build` in the root directory.
-   **Code Quality**: Maintain semantic HTML structure and descriptive variable naming for future scalability.

---

Built with ❤️ for the IIC Club.
