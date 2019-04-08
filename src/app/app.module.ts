import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { Pearson } from './stores/pearson.store';

import { RecaptchaModule } from 'ng-recaptcha';


// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormularioComponent,
    NavbarComponent,
    AboutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    BrowserAnimationsModule
    
    // RecaptchaFormsModule, // if you need forms support
    
    
    
  ],
  providers: [
    Pearson
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
