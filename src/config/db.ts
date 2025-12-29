import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/notes-db")
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB error", error)
  }
}
