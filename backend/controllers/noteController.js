// PascalCase → class hoặc model
// camelCase → biến, function

import Note from '../models/noteModel.js';
import mongoose from 'mongoose';

// Create a new note   (CRUD - Create)
const createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
        //phía client trả về note vừa tạo dưới dạng JSON
        //ở phía server trả về 200 (thành công)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create note' });
        //ở phía server trả về lỗi 500 nếu có lỗi xảy ra
        //ở phía client sẽ nhận được thông báo lỗi trong json
    }
}

// Get all notes       (CRUD - Read)
const getAllNotes = async (req, res) => {
    try {
        const note = await Note.find({});
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve notes' });
    }
}

// Update a note by ID (CRUD - Update)
const updateNoteById = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
};

// Delete a note by ID (CRUD - Delete)
const deleteNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully', note });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
};

export {
    createNote,
    getAllNotes,
    updateNoteById,
    deleteNoteById
};