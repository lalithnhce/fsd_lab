const mongoose = require("mongoose"); 
 
const tasksSchema = mongoose.Schema({ 
    title: { 
     type: String, 
     required: true 
   }, 
   description: { 
     type: String, 
     required: false 
   }, 
   status: { 
     type: String, 
     enum: ['Pending', 'In Progress', 'Completed'], 
     default: 'Pending' 
   }, 
    }) 
module.exports = mongoose.model("Task",tasksSchema); 