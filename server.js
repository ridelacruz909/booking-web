import express from "express";
import morgan from "morgan";
import * as dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();


try{
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () =>{
        console.log(`server running in port ${port}`);
    })
}catch(error){
    console.log(error);
    //process.exit(1);
}
