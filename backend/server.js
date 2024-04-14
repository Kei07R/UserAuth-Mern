import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();

const app=express();

// Production Stuff
app.use(express.static(path.join(__dirname, '/frontend/dist/')))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});

//routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// Middleware to handle errors
app.use((err, req, res, enxt) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode
    })
})