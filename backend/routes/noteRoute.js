// Tạo server Express.
// Dùng app.get, app.post, app.put, app.delete để tạo route.
// Dùng Postman hoặc Thunder Client để gửi request và kiểm tra phản hồi.


import express from 'express';
const router = express.Router();

// Thêm các route cho note
import {
    createNote,
    getAllNotes,
    updateNoteById,
    deleteNoteById
} from '../controllers/noteController.js';

//các hàm controller
router.post('/notes', createNote); // Tạo note mới
router.get('/notes', getAllNotes); // Lấy tất cả note
router.put('/notes/:id', updateNoteById); // Cập nhật note theo ID
router.delete('/notes/:id', deleteNoteById); // Xóa note theo ID

export default router;
