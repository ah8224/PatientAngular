import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/app/components/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //https://localhost:44335/
  login(user:login):Observable<any>{
      return this.http.post<any>("https://patientauthorize.azurewebsites.net/api/Login",{Username:user.Username,Password:user.Password});
  }
  
}
