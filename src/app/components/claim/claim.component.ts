import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { insurer } from 'src/app/Models/insurer';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { ClaimService } from 'src/app/services/claim/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  
  list:any;
  members:any;
  message:string;
  details:insurer = {id:0,name:"string",ailment:"string",package:"string",insurerName:"LIC",cost:0};
  errorMessage:string;

  constructor(private notCompleted:ClaimService, private router:Router) {
    notCompleted.getinsurers().subscribe({
      next: data => {
        this.list = data;
        this.errorMessage = "";
      },
      error: error => {
        this.errorMessage = "We are having some issues at the moment. Please try again later."
      }
    });
    notCompleted.getnotcompleted().subscribe({
      next: data => {
        this.members = data;
        this.errorMessage = "";
      },
      error: error => {
        this.errorMessage = "We are having some issues at the moment. Please try again later."
      }
    });
   }

  ngOnInit(): void {
  }

  submit(id:number,insurers:string,cost:number):void{
    if(insurers=="In-Progress"){
      this.message = "Please choose an insurer."
    }
    else{
      this.details.insurerName = insurers;
      this.details.cost = cost;
      this.notCompleted.getbalance(this.details).subscribe(data=>{
        if(data==null){
          this.message = "Please choose a valid insurer. Refer to the table above."
        }
        else{
          this.message="";
          cost = data[0];
          this.notCompleted.updateStatus(id,cost,insurers).subscribe(
            result => {
            },
            error => {
              this.notCompleted.getnotcompleted().subscribe(data => {
                this.members = data;
              })
            },
            () => {
            }
          );
        }
      })
    }
  }

  remove(id:number,cost:number,insurers:string):void{
    insurers = "No Insurer";
    this.notCompleted.updateStatus(id,cost,insurers).subscribe(
      result => {
      },
      error => {
        this.notCompleted.getnotcompleted().subscribe(data => {
          this.members = data;
        })
      },
      () => {
      }
    );
    
  }
}
