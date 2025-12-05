import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Task } from '../model/task.model'; 
@Injectable({ 
  providedIn: 'root' 
}) 
export class TaskService { 
private apiUrl = 'http://localhost:3000/tasks'; // my Node.js API endpoint 
  constructor(private http:HttpClient) { } 
  // READ: Get all tasks 
  // getTasks(){ 
  //   return this.http.get(this.apiUrl); 
  // } 
  // READ: Get all tasks 
  getTasks(): Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl); 
  } 
 
  // CREATE: Add a new task 
  addTask(title: string,description:string): Observable<Task> { 
    const newTask = { title: title, description: description }; // Only sending the title for simplicity 
    return this.http.post<Task>(this.apiUrl, newTask); 
  } 
 
  // DELETE: Delete a task 
  deleteTask(id: string): Observable<any> { 
    return this.http.delete(`${this.apiUrl}/${id}`); 
  } 
}