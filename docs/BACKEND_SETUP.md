# Backend Setup Guide (Node.js + MongoDB Atlas)

I have built a full Express.js backend for your project. This backend replaces the in-memory storage with a persistent MongoDB database.

## 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

## 2. Setting up MongoDB Atlas
1. Log in to MongoDB Atlas.
2. Create a new project and a free cluster.
3. In **Database Access**, create a user with a password.
4. In **Network Access**, add your IP address (or `0.0.0.0/0` for all IPs).
5. Go to **Clusters** > **Connect** > **Connect your application**.
6. Copy the Connection String (looks like `mongodb+srv://<username>:<password>@cluster0...`).

## 3. Configuration
1. Open `backend/.env`.
2. Replace `MONGO_URI` with your connection string from step 6.
   - Make sure to replace `<username>` and `<password>` with your actual credentials.

## 4. Running the Backend
In a separate terminal, navigate to the `backend` folder and run:
```bash
cd backend
npm run dev
```
The server will start on `http://localhost:5000`.

## 5. Running the Frontend
In your main project directory, run:
```bash
pnpm dev
```
The frontend is already configured to proxy `/api/register` requests to the backend server.

## Features Added
- **Persistent Storage**: All registrations are saved to MongoDB.
- **Unique IDs**: Each registration gets a unique ID (e.g., `WS171500...`).
- **CORS Support**: Ready for cross-origin requests.
- **Proxy Config**: Seamless integration with Next.js via `next.config.mjs`.
- **Validation**: Server-side validation for name and email.
- **GET Endpoint**: View all registrations at `http://localhost:5000/api/register`.
