import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TestComponent } from './components/test/test.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViwRpojComponent } from './components/viw-rpoj/viw-rpoj.component';
import { BrenchOverComponent } from './components/brench-over/brench-over.component';

import { ConstructorComponent } from './components/constructor_pr/constructor.component';
import { TehProcessComponent } from './components/teh-process/teh-process.component';
import { HeadComponent } from './components/head/head.component';
import { PrjComponent } from './components/prj/prj.component';
import { BrnTreeComponent } from './components/brn-tree/brn-tree.component';
import { AddPrjBrenComponent } from './components/add-prj/add-prj-bren.component';
import { ConstructorBrComponent } from './components/constructor-br/constructor-br.component';
import { AddBrenComponent } from './components/add-bren/add-bren.component';
import { ConstructorForComponent } from './components/constructor-for/constructor-for.component';
import { AddForComponent } from './components/add-for/add-for.component';


const  appRoutes: Routes=[
  {path: 'car', component:CarComponent},
  {path: 'log', component:LoginPageComponent},
  {path: 'reg', component:RegisterPageComponent},
  {path: 'test', component:TestComponent},
  {path: 'sig', component:SignUpComponent},
  {path: 'prj', component:ViwRpojComponent},
  {path: 'brn', component:BrenchOverComponent},

  {path: 'teh', component:TehProcessComponent},

  {path: 'const_p', component:ConstructorComponent},
  {path: 'head', component:HeadComponent},
  {path: 'pr', component:PrjComponent},
  {path: 'br', component:BrnTreeComponent},
  {path: 'add_p', component:AddPrjBrenComponent},
  {path: 'const_b', component:ConstructorBrComponent},
  {path: 'add_b', component:AddBrenComponent},

  {path: 'const_f', component:ConstructorForComponent},
  {path: 'add_f', component:AddForComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,

    LoginPageComponent,

    RegisterPageComponent,
    TestComponent,
    SignUpComponent,
    ViwRpojComponent,
    BrenchOverComponent,

    ConstructorComponent,
    TehProcessComponent,
    HeadComponent,
    PrjComponent,
    BrnTreeComponent,
    AddPrjBrenComponent,
    ConstructorBrComponent,
    AddBrenComponent,
    ConstructorForComponent,
    AddForComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   // ,TehProcessComponent
  ],
  providers: [],//freeApiService],
  bootstrap: [
    AppComponent
   ,TehProcessComponent
  ]
})
export class AppModule { }
