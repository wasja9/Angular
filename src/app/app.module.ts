import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLajoutComponent } from './components/shared/layouts/auth-lajout/auth-lajout.component';
import { SiteLajoutComponent } from './components/shared/layouts/site-lajout/site-lajout.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TestComponent } from './components/test/test.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViwRpojComponent } from './components/viw-rpoj/viw-rpoj.component';
import { BrenchOverComponent } from './components/brench-over/brench-over.component';
import { IraComponent } from './components/ira/ira.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { TehProcessComponent } from './components/teh-process/teh-process.component';
import { HeadComponent } from './components/head/head.component';
import { PrjComponent } from './components/prj/prj.component';
import { BrnTreeComponent } from './components/brn-tree/brn-tree.component';
import { AddPrjBrenComponent } from './components/add-prj-bren/add-prj-bren.component';


const  appRoutes: Routes=[
  {path: 'car', component:CarComponent},
  {path: 'log', component:LoginPageComponent},
  {path: 'reg', component:RegisterPageComponent},
  {path: 'test', component:TestComponent},
  {path: 'sig', component:SignUpComponent},
  {path: 'prj', component:ViwRpojComponent},
  {path: 'brn', component:BrenchOverComponent},
  {path: 'ir', component:IraComponent},
  {path: 'const', component:ConstructorComponent},
  {path: 'head', component:HeadComponent},
  {path: 'pr', component:PrjComponent},
  {path: 'br', component:BrnTreeComponent},
  {path: 'add', component:AddPrjBrenComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,

    LoginPageComponent,
    AuthLajoutComponent,
    SiteLajoutComponent,
    RegisterPageComponent,
    TestComponent,
    SignUpComponent,
    ViwRpojComponent,
    BrenchOverComponent,
    IraComponent,
    ConstructorComponent,
    TehProcessComponent,
    HeadComponent,
    PrjComponent,
    BrnTreeComponent,
    AddPrjBrenComponent
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
