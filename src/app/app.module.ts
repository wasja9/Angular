import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KatComponent } from './components/kat/kat.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLajoutComponent } from './components/shared/layouts/auth-lajout/auth-lajout.component';
import { SiteLajoutComponent } from './components/shared/layouts/site-lajout/site-lajout.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TestComponent } from './components/test/test.component';
import { SignInComponent } from './sign-in/sign-in.component';
//import {freeApiService} from  './services/freeapi.service';


const  appRoutes: Routes=[
  {path: '', component:CarComponent},
  {path: 'about', component:KatComponent},
  {path: 'log', component:LoginPageComponent},
  {path: 'reg', component:RegisterPageComponent},
  {path: 'test', component:TestComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KatComponent,
    LoginPageComponent,
    AuthLajoutComponent,
    SiteLajoutComponent,
    RegisterPageComponent,
    TestComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],//freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
