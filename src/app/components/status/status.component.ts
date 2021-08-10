import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  list:any;
  logout:boolean;
  errorMessage:string;

  constructor(private members:StatusService,private auth:AuthService) {
    this.logout = auth.isLoggedIn();
    members.getMembers().subscribe({
      next: data => {
        this.list = data;
        this.errorMessage = "";
      },
      error: error => {
        this.errorMessage = "We are having some issues at the moment. Please try again later."
      }
    });
   }

  ngOnInit(): void {
  }

}
