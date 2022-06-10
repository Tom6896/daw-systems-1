import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private homeGuardService: homeGuardService, private router: Router) { }

  ngOnInit(): void {
    this.checkHomeGuard();
  }

  logout(){
    this.router.navigate(['login']);
  }
  checkHomeGuard(){
    this.homeGuardService.check();
  }

}

//home guard
@Injectable({
  providedIn: 'root'
})
export class homeGuardService{
  constructor(private router: Router){
  }
  //method that checks if user was logged or not
  check(){
    if(LoginComponent.isLoggedIn){
    }else{
      this.router.navigate(['login']);
    }
  }

}