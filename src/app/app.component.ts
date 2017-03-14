import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService ,private http:Http){}
  connect(){
    this.authService.loginWithGoogle().then(
      (data)=>{  

                  var authInfo = {
                    name:data.auth.providerData[0].displayName,
                    email:data.auth.providerData[0].email 
                  }
                  //this.authService.authentification(data.auth.getToken()).subscribe(dat => console.log(dat));
                  console.log(data.auth.getToken());
              });
  }
}
