import mongoose from "mongoose"

// This describes what a note looks like in the database
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: "Workout"
    }
  },
  { timestamps: true }
)

export default mongoose.model("Note", noteSchema)
