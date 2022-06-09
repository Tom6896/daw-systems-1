import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginGroup = new FormGroup({
    emailValid : new FormControl(null,[Validators.email, Validators.required, Validators.minLength(8)]),
    passwordValid : new FormControl(null,[Validators.required, Validators.minLength(4)])

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
