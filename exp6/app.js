const express = require('express'); 
const dotenv = require('dotenv').config(); 
const connectDB = require('./config/dbConnect'); 
const tasksRoutes = require('./routes/taskRoutes'); 
connectDB(); 
const app = express(); 
app.use(express.json()); 
// main routes 
app.use("/api/tasks",tasksRoutes); 
// catch-all route (for wrong URLs) 
app.use((req, res) => { 
res.status(404).json({ message: 'Route not found' }); 
}); 
app.listen(3000,()=>{ 
console.log("server is running at port http://localhost:3000"); 
}) 