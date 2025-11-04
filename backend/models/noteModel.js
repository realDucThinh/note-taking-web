import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Note', noteSchema);
//khi cần sử dụng model Note ở file khác thì dùng câu lệnh:
//const Note = require('đường_dẫn_đến_file/noteModel');