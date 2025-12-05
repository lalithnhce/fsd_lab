const mongoose = require('mongoose'); 
 
// Define the schema for a Task 
const TaskSchema = new mongoose.Schema({ 
  title: { 
    type: String, 
    required: true, 
    trim: true, 
  }, 
  description: { 
    type: String, 
    trim: true, 

  }, 
  completed: { 
    type: Boolean, 
    default: false, 
  }, 
}, { 
  timestamps: true // Adds createdAt and updatedAt fields automatically 
}); 
 
// Create and export the Task model 
const Task = mongoose.model('Task', TaskSchema); 
module.exports = Task;