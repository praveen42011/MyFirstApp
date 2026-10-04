import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-get-api',
  styleUrl: './get-api.css',
  templateUrl: './get-api.html',
})
export class GetApi {

userList:any=[];
todoList:any=[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {   
    this.getUsers();
    this.getTo();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result)=>{
    this.userList = result;
    });
  }

  getTo() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((resp)=>{
    this.todoList = resp;
    });
  }
}
