const express = require('express'); 
const mongoose = require('mongoose'); 
const Task = require('./taskModel'); // Import the Task model 
const cors = require('cors'); 
 
const app = express(); 
// --- Middleware --- 
 
// 1. CORS Middleware: Allows your Angular app (running on a different port) to access the API 
app.use(cors());  
 
// Middleware to parse JSON request bodies 
app.use(express.json()); 
 
// --- MongoDB Connection Setup --- 
const MONGODB_URI = 'mongodb://localhost:27017/exp_11'; // Replace with your actual MongoDB URI 
 
mongoose.connect(MONGODB_URI) 
  .then(() => console.log('Connected to MongoDB!')) 
  .catch(err => console.error('Could not connect to MongoDB:', err)); 
 
// --- API Routes --- 
app.get('/tasks', async (req, res) => { 
  try { 
    
    const tasks = await Task.find({}); 
    res.status(200).send(tasks); 
  } catch (error) { 
    // Handle server errors 
    res.status(500).send(error); 
  } 
}); 
 
app.post('/tasks', async (req, res) => { 
  try { 
    // Create a new Task instance using the request body data 
    const task = new Task(req.body); 
     
    // Save the new task to the database 
    await task.save(); 
 
    // Respond with the created task and a 201 Created status 
    res.status(201).send(task); 
  } catch (error) { 
    // Handle validation or other errors 
    res.status(400).send(error); 
  } 
}); 
 
 
app.delete('/tasks/:id', async (req, res) => { 
  const _id = req.params.id; 
 
  try { 
    // Find a task by its ID and delete it 
    const task = await Task.findByIdAndDelete(_id); 
 
    // Check if the task was found and deleted 
    if (!task) { 
      return res.status(404).send({ message: 'Task not found' }); 
    } 
 
    // Respond with a success message or the deleted task 
    res.send({ message: 'Task deleted successfully', deletedTask: task }); 
  } catch (error) { 
    // Handle invalid ID format or other server errors 
    res.status(500).send(error); 
  } 
}); 
 
// --- Server Start --- 
app.listen(3000, () => { 
  console.log(`Server is running on port 3000`); 
});  