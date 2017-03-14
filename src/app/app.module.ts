import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFire,AngularFireModule } from 'angularfire2'; 
import { AuthService } from './auth.service';

export const firebaseConfig ={
   apiKey: "AIzaSyDjnwduO8TDz8d3DM_YLWnVVIEhtoCKcEM",
    authDomain: "easy-mobile-project.firebaseapp.com",
    databaseURL: "https://easy-mobile-project.firebaseio.com",
    storageBucket: "easy-mobile-project.appspot.com",
    messagingSenderId: "128709382249"
}
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService,AngularFire],
  bootstrap: [AppComponent]
})
export class AppModule { }
