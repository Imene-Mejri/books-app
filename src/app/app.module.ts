import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { SignupComponent } from './components/Authentification/signup/signup.component';
import { SigninComponent} from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import{AngularFireAuthModule} from '@angular/fire/auth';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
