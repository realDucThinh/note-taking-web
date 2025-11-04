import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoute.js';

dotenv.config();

const app = express();
// kiểm tra và cho phép request từ origin khác
app.use(cors());
//parse JSON string 
app.use(express.json());

// Đăng ký routes
app.use('/api', noteRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});