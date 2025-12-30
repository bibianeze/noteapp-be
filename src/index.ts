// Load environment variables from .env file
import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import connectDB from "./config/db"
import noteRoutes from "./routes/noteRoutes"

// Create express app
const app = express()

// Middleware
// This allows our app to read JSON data from requests
app.use(express.json())

// This allows frontend (React) to talk to backend
app.use(cors())

// Routes
// All note routes will start with /api/notes
app.use("/api/notes", noteRoutes)

// Connect to database
connectDB()

// Get port from .env
const PORT = process.env.PORT || 4000

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
