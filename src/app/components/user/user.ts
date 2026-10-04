import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master-service';

@Component({
  imports: [FormsModule],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

 userList:any=[];

 userObj:any = {
    name: '',
    phone: 0,
    email: '',
    website: ''
 }

  constructor(private http: HttpClient,private masterService: MasterService) {
    console.log('constructor');
  }

  ngOnInit() {   
    this.getUsers();
  }

  getUsers() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resp)=>{
    // this.userList = resp;
    // });
    this.masterService.getUsers().subscribe((resp)=>{
      alert('appname: '+ this.masterService.appName)
      alert(JSON.stringify(resp));
      this.userList = resp;
    });
  }

  resetUser(){
    this.userObj = {
      name: '',
      age: 0,
      email: '',
      website: ''
   }

  }

  addUser(){
    this.userList.push(this.userObj);
    this.resetUser();
  }
}
