import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:boolean;

  constructor() {
    this.loggedIn = false;
   }

  login():void{
    this.loggedIn = true;
  }

  logout():void{
    this.loggedIn = false;
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }
}
