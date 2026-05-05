# 🚀 IIC Task 4: Full-Stack Workshop Registration Platform

Hey! This is my solution for **IIC Task 4**. I wanted to build something that doesn't just "work," but actually feels premium and exciting for anyone registering for a workshop.

**🔗 Live Demo**: [https://full-stack-development-workshop-web.vercel.app/](https://full-stack-development-workshop-web.vercel.app/)  
**🎥 UI Video Tour**: [Watch the Video on Drive](https://drive.google.com/file/d/1EnDAki-On3f9dN4wtnS_fcg6AYKDuoar/view?usp=sharing)

---

## 🛠️ How it Works: Step-by-Step

I've designed the user journey to be as smooth as possible. Here's exactly how the website guides a user from discovery to registration:

### Step 1: The Landing Page
When you first arrive, you're greeted with a cinematic dark-themed interface. I added smooth scroll animations and glassmorphic cards to make the event details (date, speaker, and agenda) pop.

![Discovery](ui%20images/Screenshot%202026-05-06%20003021.png)

### Step 2: Starting Registration
Clicking "Register" doesn't just open a boring static page. Instead, a clean, modern modal slides in. I used a **Progressive Flow** here, meaning users only see a couple of fields at a time. This keeps them from feeling overwhelmed.

![Modal Open](ui%20images/Screenshot%202026-05-06%20003122.png)

### Step 3: Interactive Form
As you type your name, email, and college details, the system validates everything in real-time. The transitions between steps are handled by Framer Motion for that "snappy" feel.

![Filling Form](ui%20images/Screenshot%202026-05-06%20003138.png)

### Step 4: Instant Data Persistence
The moment you hit "Complete," the data is sent to a **MongoDB Atlas** database via a custom Node.js/Express backend. No more lost data or messy spreadsheets!

![Success Message](ui%20images/Screenshot%202026-05-06%20003430.png)

### Step 5: Your Digital Pass is Ready!
Finally, the system instantly generates a personalized **Digital Event Pass**. It features your name, a Unique Reference ID, and a scannable QR code. Plus, I added a "Download" button so you can save it as a PNG for the day of the event.

![Digital Pass](ui%20images/Screenshot%202026-05-06%20003418.png)

---

## 💡 Why I Built This (The Problem)
Most college workshops use scattered Google Forms and send no real confirmation. I wanted to fix that. This project replaces fragmentation with a **unified platform** that manages the entire lifecycle of an attendee's registration.

---

## ✨ Features I'm Proud Of
-   **Premium UI/UX**: Dark mode, glassmorphism, and smooth transitions.
-   **Full-Stack Power**: A dedicated Express backend with MongoDB Atlas.
-   **Pass Generator**: Instant PNG pass generation with unique IDs.
-   **Responsive Design**: It looks just as good on your phone as it does on your laptop.

---

## 🛠️ Tech Stack
-   **Frontend**: Next.js 16, React 19, Tailwind CSS v4.
-   **Animations**: Framer Motion.
-   **Backend**: Node.js & Express.js.
-   **Database**: MongoDB Atlas.
-   **Storage**: Everything deployed via Vercel & Render.

---

## 🚀 How to Run it Locally

If you want to play around with the code yourself:

1.  **Backend**: `cd backend`, then `npm install`. Add your `MONGO_URI` to a `.env` file and run `npm run dev`.
2.  **Frontend**: In the root folder, run `npm install`, set your backend URL in `.env`, and run `npm run dev`.
3.  **Visit**: `http://localhost:3000`

---

Built with ❤️ for the IIC Club.
