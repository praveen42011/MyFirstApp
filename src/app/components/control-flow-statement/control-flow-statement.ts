import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-control-flow-statement',
  styleUrl: './control-flow-statement.css',
  templateUrl: './control-flow-statement.html',
})
export class ControlFlowStatement {

  isShow:boolean = false;

  monthName:string = 'jan';

  fruits:string[] = ['Apple','Banana','Mango','Grapes'];
  CustomerDretals:any = [
    {CustomerName:'Praveen',CustomerAge:30,CustomerAddress:'Hyderabad'},
    {CustomerName:'Ravi',CustomerAge:25,CustomerAddress:'Bangalore'},
    {CustomerName:'Ramesh',CustomerAge:35,CustomerAddress:'Chennai'},
  ]

ShowP(data:any){
  if(data == true){
    this.isShow = true;
  }else{
    this.isShow = false;
  }
}
}
