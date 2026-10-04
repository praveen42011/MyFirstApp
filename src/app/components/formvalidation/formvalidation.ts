import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-formvalidation',
  styleUrl: './formvalidation.css',
  templateUrl: './formvalidation.html',
})
export class Formvalidation {

  userObj: any = {
    name: '',
    email: '',
    phone: '',
    website: ''
  };

  userForm = new FormGroup({
    custname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    custemail: new FormControl('', [Validators.required, Validators.email]),
    custphone: new FormControl(''),
    custwebsite: new FormControl('')
  });

  addUser(){
    if(this.userForm.valid){
      // this.userObj.name = this.userForm.value.custname ;
      // this.userObj.email = this.userForm.value.custemail;
      // this.userObj.phone = this.userForm.value.custphone;
      // this.userObj.website = this.userForm.value.custwebsite;
      // alert( JSON.stringify(this.userForm.valid) );
    }
    console.log(this.userObj);
  }

}
