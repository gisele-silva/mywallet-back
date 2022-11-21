import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express ();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(authRoutes);

const PORT = process.env.PORT || 5008;

app.listen (PORT, () => {
    console.log("ok");
})