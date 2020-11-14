import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KatComponent } from './components/kat/kat.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLajoutComponent } from './components/shared/layouts/auth-lajout/auth-lajout.component';
import { SiteLajoutComponent } from './components/shared/layouts/site-lajout/site-lajout.component';

const  appRoutes: Routes=[
  {path: '', component:CarComponent},
  {path: 'about', component:KatComponent},
  {path: 'login', component:LoginPageComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KatComponent,
    LoginPageComponent,
    AuthLajoutComponent,
    SiteLajoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
