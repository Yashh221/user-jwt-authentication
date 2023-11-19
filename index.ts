import express, { Express } from "express";
import dotenv from 'dotenv'
import path = require("path");
import connectDB from "./config/db";
import { router } from './routes/userRoutes'
import { notFound , errorHandler } from "./middlewares/errorMiddleware";
import cors from 'cors'
dotenv.config({path:path.resolve(__dirname, './.env') })

connectDB();

const app : Express = express();
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Port is listening at ${PORT}`)
});
app.use(express.json())
app.use(cors())
app.use('/api/user',router)
app.use(notFound)
app.use(errorHandler)