import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/recipe.routes.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser(process.env.SECRET_KEY))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));

app.use(express.json());
//recipe routes
app.use('/api', router);
//user routes
app.use('/api', userRoutes);

dotenv.config();

dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});