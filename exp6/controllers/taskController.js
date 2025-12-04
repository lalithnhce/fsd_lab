const Task = require("../models/taskModel"); 
 
const getAllTasks = async (req, res) => { 
    try { 
        // Find all tasks  
        const tasks = await Task.find() 
        res.status(200).json(tasks); 
    } 
    catch (error) { 
        res.status(500).json({ message: 'Error retrieving tasks', error: 
error.message }); 
    } 
} 
const createTask = async (req, res) => { 
    try { 
    const {title,description,status} = req.body; 
    if(!title || !description){ 
 
        res.status(400).json({message:"Title and description is mandatory"}); 
    } 
    const task = await Task.create({ 
        title, 
        description, 
        status 
    }); 
    res.status(201).json(task); 
    } 
    catch (error) { 
        res.status(500).json({ message: 'Error retrieving tasks', error: 
error.message }); 
    } 
} 
const editTask = async (req, res) => { 
    try { 
    /* * Find the task by ID and update it.  
      * { new: true } returns the modified document rather than the original. 
      * { runValidators: true } ensures status enum rules are applied to the 
update. 
      */ 
    const task = await Task.findByIdAndUpdate( 
      req.params.id,  
      req.body,  
      { new: true, runValidators: true } 
    ); 
 
    if (!task) { 
      return res.status(404).json({ message: 'Task not found for update' }); 
    } 
    res.status(200).json(task); 
  } catch (error) { 
    res.status(400).json({ message: 'Error updating task', error: 
error.message }); 
  } 
 
} 
 
const deleteTask = async (req, res) => { 
    try { 
    const task = await Task.findByIdAndDelete(req.params.id); 
     
    if (!task) { 
      return res.status(404).json({ message: 'Task not found for deletion' }); 
    } 
    // Respond with status 204 (No Content) for successful deletion 
    res.status(204).send();  
  } catch (error) { 
 
    res.status(500).json({ message: 'Error deleting task', error: 
error.message }); 
  } 
} 
 
module.exports = { 
    getAllTasks, 
    createTask, 
    editTask, 
    deleteTask 
} 