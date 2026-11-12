import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";
import employerRoutes from "./routes/employer.routes.js";


dotenv.config(); //allows us to process environment variable
//create an instance of express
const app =express();

const PORT = process.env.PORT;

//health check 
app.use("/api/v1/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"backend working just fine"
    });
});

//paths
app.use("/api/v1/employer", employerRoutes)

const startServer = async()=>{

     connectDB();

    app.listen(PORT, ()=>{
    console.log(`Listening to req via PORT ${PORT}`)
});

}
startServer();