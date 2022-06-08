import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fG = new FormGroup({
    email : new FormControl(Validators.email, Validators.required),
    password : new FormControl(Validators.minLength(4), Validators.required)

  })
  loginFormEmail = '';
  loginFormPassword = ''; 
  loginFormData: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loginData(){
    this.fillLoginData();
    console.log(this.loginFormData);
  }

  insertEmail(value: string){
    this.loginFormEmail = value;
  }

  insertPassword(value: string){
    this.loginFormPassword = value;
  }

  fillLoginData(){
    console.log('test');
    this.loginFormData.push(this.loginFormEmail);
    this.loginFormData.push(this.loginFormPassword);
  }

}
