export interface Task { 
  _id: string; // MongoDB automatically adds this 
  title: string; 
  description?: string; 
  completed: boolean; 
  createdAt: Date; 
}