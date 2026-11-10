import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";


dotenv.config(); //allows us to process environment variable
//create an instance of express
const app =express();

const PORT = process.env.PORT;

const startServer = async()=>{

     connectDB();

    app.listen(PORT, ()=>{
    console.log(`Listening to req via PORT ${PORT}`)
});

}
startServer();