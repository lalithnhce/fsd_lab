const mongoose = require("mongoose"); 
const dotenv = require("dotenv").config() 
 
const connectDB = async()=>{ 
    try{ 
        const connect = await mongoose.connect(process.env.CONNECTION_STRING); 
        console.log("Database connected");   
    }
 
    catch(err){ 
 
        console.log(err);   
    } 
} 
module.exports = connectDB; 