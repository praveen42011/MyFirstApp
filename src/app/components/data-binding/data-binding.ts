import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {

  courseName:string = "Angular 17"
  inputControl:string = "radio"
  myColor:string = "primaryColor"

  ShowWelecome(){

    this.courseName = "React - Updated"
  }

  ChangedCourseName(){
    this.courseName = "Angular 22 - Updated"
  }
}
