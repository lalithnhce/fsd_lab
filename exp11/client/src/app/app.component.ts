import { Component } from '@angular/core';
import { TaskService } from './service/task.service';
import { Task } from './model/task.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'client'; 
  tasks: Task[] = []; 
  newTaskTitle: string = ''; 
  newTaskDescription:string = ''; 
  constructor(private taskService:TaskService ){} 
  ngOnInit(): void { 
    this.loadTasks(); 
  }
   // Loads all tasks from the backend 
  loadTasks(): void { 
    this.taskService.getTasks().subscribe({ 
      next: (data) => { 
        this.tasks = data; 
      }, 
      error: (err) => { 
        console.error('Failed to load tasks', err); 
        // Basic user feedback needed here in a real app 
      } 
    }); 
  }// Adds a new task 
  addTask(): void { 
    if (!this.newTaskTitle.trim()) { 
      return; // Prevent adding empty tasks 
    } 
 
    this.taskService.addTask(this.newTaskTitle,this.newTaskDescription).subscribe({ 
      next: (task) => { 
        this.tasks.push(task); // Add the new task to the local array 
        this.newTaskTitle = ''; // Clear the input 
        this.newTaskDescription=''; 
      }, 
      error: (err) => { 
        console.error('Failed to add task', err); 
      } 
    }); 
  } 
  // Deletes a task 
  deleteTask(id: string): void { 
    this.taskService.deleteTask(id).subscribe({ 
      next: () => { 
        // Filter out the deleted task from the local array 
        this.tasks = this.tasks.filter(task => task._id !== id); 
      }, 
      error: (err) => { 
        console.error('Failed to delete task', err); 
      } 
    }); 
  }
}
