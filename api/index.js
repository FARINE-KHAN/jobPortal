import express from 'express';
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from "cors";
dotenv.config();
import { routes } from './router';

app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use("/", routes);
//db connection
const connectMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to dataBase")
        
    } catch (error) {
        throw error;
    }
}


app.listen(8900,()=>{
    connectMongoDB()
    console.log("connected to backend")
})