import { NgClass, NgStyle , UpperCasePipe, LowerCasePipe,SlicePipe,JsonPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  imports: [NgClass, NgStyle,UpperCasePipe, LowerCasePipe,SlicePipe,JsonPipe,DatePipe],
  selector: 'app-attribute-directive',
  styleUrl: './attribute-directive.css',
  templateUrl: './attribute-directive.html',
})
export class AttributeDirective {

  colorName = signal<string>('');
  IsColor: boolean = true;

  courseName :string = 'Angular 17';
  StudentName :string = 'Prave n Kumar';

  studentList = [1,4,7,9,44,88]
  studentObj:any = {
    name: 'Praveen Kumar',
    age: 25,
    email: 'praveen.kumar@example.com'
  };  

  currentDate: Date = new Date();

  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngafterContentInit() {
    console.log('ngafterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  SetColor(color: string) {
    this.colorName.set(color);
  }


  Toggle(){
    this.IsColor= !this.IsColor;
  }
}
