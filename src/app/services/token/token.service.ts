import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:string;

  constructor() {
    this.token = "";
   }

   save(newtoken:any){
     this.token = newtoken;
   }

   getToken():string{
     return this.token;
   }

   removeToken(){
     this.token = "";
   }
}
