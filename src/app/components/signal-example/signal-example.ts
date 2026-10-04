import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-example',
  styleUrl: './signal-example.css',
  templateUrl: './signal-example.html',
})
export class SignalExample {

CustomerName:string = 'Praveen';
CourseName =  signal<string>("Angular");
CourseDuration =  signal<string>("15 Vidoes");

CourseDetails = computed(()=> this.CourseName() + " - " + this.CourseDuration());

constructor() {

  console.log(this.CustomerName);
this.CourseName.set('Angular 17');
 console.log(this.CourseName());

 setTimeout(() => {
  this.CourseName.set('react')
}
,5000)

}
}
