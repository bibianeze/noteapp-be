import { Request, Response } from "express"
import Note from "../models/noteModel"

// CREATE a note
export const createNote = async (req: Request, res: Response) => {
  const note = await Note.create(req.body)
  res.status(201).json(note)
}

// READ all notes
export const getNotes = async (_req: Request, res: Response) => {
  const notes = await Note.find()
  res.json(notes)
}

// UPDATE a note
export const updateNote = async (req: Request, res: Response) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updated)
}

// DELETE a note
export const deleteNote = async (req: Request, res: Response) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: "Note deleted" })
}
