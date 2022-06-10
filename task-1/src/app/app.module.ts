import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, loginService } from './login/login.component';
import { homeGuardService, MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    loginService,
    homeGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
