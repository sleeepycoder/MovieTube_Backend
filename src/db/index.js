 import mongoose from "mongoose";
 import express  from 'express'
 import 'dotenv/config'
// import { DB_NAME } from "../constants.js";

 const app =express()   
 const PORT  =process.env.PORT || 3000
 const DB_NAME = "MovieTube";

 const connectDB = async()=>{
try {
  const connectionInstance  = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST :${connectionInstance}`)
} catch (error) {
    console.log("MOngo Connection Error" + error);
    // process.exit(1);
}
 }

 export default connectDB;