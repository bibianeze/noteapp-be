// import { Router } from "express"
// import { Note } from "../types/note"

// const router = Router()

// let notes: Note[] = []

// // CREATE
// router.post("/", (req, res) => {
//   const newNote: Note = {
//     id: Date.now(),
//     title: req.body.title,
//     content: req.body.content
//   }

//   notes.push(newNote)
//   res.status(201).json(newNote)
// })

// // READ
// router.get("/", (req, res) => {
//   res.json(notes)
// })

// // UPDATE
// router.put("/:id", (req, res) => {
//   const id = Number(req.params.id)
//   notes = notes.map(note =>
//     note.id === id ? { ...note, ...req.body } : note
//   )
//   res.json({ message: "Note updated" })
// })

// // DELETE
// router.delete("/:id", (req, res) => {
//   const id = Number(req.params.id)
//   notes = notes.filter(note => note.id !== id)
//   res.json({ message: "Note deleted" })
// })

// export default router


import { Router } from "express"
import { Note } from "../models/Note"

const router = Router()

// CREATE
router.post("/", async (req, res) => {
  const note = await Note.create(req.body)
  res.status(201).json(note)
})

// READ
router.get("/", async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
})

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updated)
})

// DELETE
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: "Note deleted" })
})

export default router

