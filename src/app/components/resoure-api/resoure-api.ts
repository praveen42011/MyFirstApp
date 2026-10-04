import { Component, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-resoure-api',
  styleUrl: './resoure-api.css',
  templateUrl: './resoure-api.html',
})
export class ResoureAPI {

 userData = resource({
  loader: () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json());
  }
});

 constructor( private http:HttpClient){ 
  setTimeout(()=>{
     this.userData.reload()
     alert('reload' + JSON.stringify(this.userData.value))
  },6000)
  
 }

 userList = rxResource({
   stream:()=>
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
   }
 )

}
