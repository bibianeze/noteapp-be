import express from "express"
import cors from "cors"
import notesRoutes from "./routes/notes"
import { connectDB } from "./config/db"


const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use("/notes", notesRoutes)

app.listen(4000, () => {
  console.log("Server running on 4000")
})
