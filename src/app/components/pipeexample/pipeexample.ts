import { Component } from '@angular/core';
import { UpperCasePipe,LowerCasePipe,SlicePipe,JsonPipe,DatePipe} from '@angular/common';
import { NaPipe } from '../../pipe/na-pipe';

@Component({
  imports: [UpperCasePipe, LowerCasePipe,SlicePipe,JsonPipe,DatePipe,NaPipe],
  selector: 'app-pipeexample',
  styleUrl: './pipeexample.css',
  templateUrl: './pipeexample.html',
})
export class Pipeexample {

  corseName:string = 'Angular 17';
  Numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
  studentObj:any = {
    name: 'Praveen Kumar',
    age: 25,
    email: 'praveen.kumar@example.com'
}
currentDate: Date = new Date();
}
