import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule,FormControl,Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
userList:any=[];

userForm:FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(3)]),
  email: new FormControl('',[Validators.required, Validators.email]),
  website: new FormControl('')
});


  constructor(private http: HttpClient) {
    console.log('constructor');
  }

  ngOnInit() {   
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resp)=>{
    this.userList = resp;
    });
  }

  resetUser(){
    this.userForm.reset();
  }

  addUser(){
    let userObj = this.userForm.value;
    this.userList.push(userObj);
    this.resetUser();
  }
}
