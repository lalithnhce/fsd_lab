import { Component } from '@angular/core';
interface Student { 
  studentName: string; 
  usn: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-form';
   studentModel: Student = { 
    studentName: '', 
    usn: '' 
  }; 

   onSubmit(): void { 
    // TypeScript now knows studentModel has 'studentName' and 'usn' 
    console.log('Form Submitted Data:', this.studentModel); 
    alert(`Registration successful for: ${this.studentModel.studentName}`); 
    this.studentModel = { studentName: '', usn: '' }; 
  } 

}
