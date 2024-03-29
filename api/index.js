import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
    .connect("mongodb+srv://kdh001126:ocnj7MOFbBBOJ3Tg@mern-estate.0czau0t.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
    console.log('not connected')
});
const app = express();

app.listen(3000,() =>{
    console.log('Server is running on port 3000');
});
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err,req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Serval Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})