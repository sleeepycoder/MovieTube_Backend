// require('dotenv').config();

import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})




connectDB()
.then(() => {
app.listen(process.env.PORT || 8000,()=>{
console.log("listening on port:http://localhost:"+process.env.PORT);
});


}).catch(()=>{
    console.log("Failed to listen on the specified port:"+process.env.PORT);
});























// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import  express from "express";
// import 'dotenv/config'

// const app = express();
// const PORT  =process.env.PORT || 3000;

// (async() =>{
// try {
//    await mongoose.connect(`${process.env.MONGO_URL} / ${DB_NAME}`)

//    app.on( 'error',()=>{console.log( "Error" +  error)})
   
//    app.listen(PORT,()=>{console.log(`Server running :${PORT}`)})

// } catch (error) {

//     console.log(error);
// }

// })()
