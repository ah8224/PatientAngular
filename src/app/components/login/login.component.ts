import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';
import { login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:login = {Username:"",Password:""};
  message:string;
  response:boolean;

  constructor(private signin:LoginService, private router:Router, private tokens:TokenService, private auth:AuthService) {
   }

  ngOnInit(): void {
  }

  login(){
      this.signin.login(this.user).subscribe({
      next: data => {
        this.tokens.save(data.token);
        this.auth.login();
        if(this.auth.isLoggedIn){
          this.router.navigateByUrl('home');
        }
      },
      error: error => {
        if(error.status==401){
          this.message = "Username or password is incorrect"
        }
        else{
          this.message = "We are having some issues. Please try again later."
        }
      }
    });
  }
}
