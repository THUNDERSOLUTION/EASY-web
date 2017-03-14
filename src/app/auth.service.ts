import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(public af:AngularFire , private http:Http) { }
   
   public loginWithGoogle(){

        return this.af.auth.login({
              provider:AuthProviders.Google,
              method:AuthMethods.Popup
            });
   }

   public logout(){
       return this.af.auth.logout();
   }
   public authentification(token){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('token',token);
      return this.http.get('http://localhost:3000/enseignants/list',{headers:headers})
                      .map(res => res.json());
  }

}
