import { Component, NgModule, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //Validators
  loginGroup = new FormGroup({
    emailValid : new FormControl(null,[Validators.email, Validators.required, Validators.minLength(8)]),
    passwordValid : new FormControl(null,[Validators.required, Validators.minLength(4)])

  })
  //home guard variables
  static isLoggedIn:boolean = false;
  //correct login data (test purposes)
  correctLogin='abc@example.pl';
  correctPassword='1234';
  //trigger bad login data
  correctLoginData: boolean = true;
  //login data from user
  loginFormEmail = '';
  loginFormPassword = ''; 
  //login data form user (test purposes)
  loginFormData: string[] = [];
  
  // attach login service and router for redirection
  constructor(private loginService: loginService, private activatedRoute: ActivatedRoute){}// uncomment if direct redirection is needed , private router: Router) { }
  //set allert boc to hidden by default always
  ngOnInit(): void {
    this.correctLoginData = true;
  }

  //Login method (check input and redirect)
  loginData(){
    this.fillLoginData();
    console.log(this.loginFormData);
    //check if login data is good
    if (this.loginFormEmail==this.correctLogin && this.loginFormPassword==this.correctPassword){
      // redirection without service
      //this.router.navigate(['/home']);
      // redirection with service
      //clear the array
      this.loginFormData = [];
      //enable home page for home guard
      LoginComponent.isLoggedIn = true;
      //console.log(this.loginFormData);
      this.loginService.redirectToHome();
      //hide alert bad login data
      this.correctLoginData = true;

    }else{
      //trigger alert and clear the array
      this.loginFormData = [];
      //disable home page for home guard
      LoginComponent.isLoggedIn = false;
      //console.log(this.loginFormData);
      this.correctLoginData = false;
    }
    
  }
  //get email input
  insertEmail(value: string){
    this.loginFormEmail = value;
  }
  //get password input
  insertPassword(value: string){
    this.loginFormPassword = value;
  }
  //write all data to the array (test purposes)
  fillLoginData(){
    this.loginFormData.push(this.loginFormEmail);
    this.loginFormData.push(this.loginFormPassword);
  }

}


//Logging service
@Injectable({
  providedIn: 'root'
})
export class loginService{
  constructor(private router: Router){}
  //redirect method
  redirectToHome(){
    this.router.navigate(['home'])
  }

}
