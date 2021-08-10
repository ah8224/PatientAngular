import { isPlatformServer } from '@angular/common';
import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { imageSlider } from 'src/app/Models/imageSlider';
import { patient } from 'src/app/Models/patient';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { TreatmentService } from 'src/app/services/treatment/treatment.service';
import { TreatmentplanService } from 'src/app/services/treatmentplan/treatmentplan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameError:string;
  dateError:string;
  ageError:string;
  logout:boolean;
  list:any;
  display:boolean;
  pat:patient = { Name:"", age: null, Ailment:"Urology", PackageName: "Package 1", CommencementDate: null};
  plan:any = {packageName:"", testDetails:"", cost:null, specialistName:"", commencement:"", complete: null};
  commence:string;
  end:string;
  ailments:any = [{ id:1, name:"Urology"},{id:2, name:"Orthopaedics"}];
  servicesError:string;
  planError:string;
  mainMessage:string;

  constructor(private auth:AuthService, private token:TokenService, private act:ActivatedRoute, private router:Router,private getTreatment:TreatmentService, private treatment:TreatmentplanService) {
    this.logout = auth.isLoggedIn();
    this.display = true;
    this.act.params.subscribe(params =>{
      let id = params['id'];
      if(id==1){
        this.auth.logout();
        this.router.navigateByUrl('home');
      }
    });
    this.getTreatment.getlist().subscribe({
      next: data => {
        this.list = data;
        this.servicesError = "";
      },
      error: error => {
        this.servicesError = "We are having some issues at the moment. Please try again later."
      }
    });
  }

  ngOnInit(): void {
  }

  submit():void{
    var newDate = new Date(this.pat.CommencementDate);
    if(this.pat.age!=null || this.pat.CommencementDate!=null || this.pat.Name!="" || this.pat.age<150 || this.pat.Name.length>=3 || this.pat.age>0 || newDate > new Date){
      if(this.pat.age!=null && this.pat.age<150 && this.pat.age>0){
        this.ageError = "";
      }
      if(this.pat.CommencementDate!=null && newDate>new Date){
        this.dateError = "";
      }
      if(this.pat.Name!=null && this.pat.Name.length>=3){
        this.nameError = "";
      }
    }
    if(this.pat.age==null || this.pat.CommencementDate==null || this.pat.Name=="" || this.pat.age>=150 || this.pat.Name.length<3 || this.pat.age<=0 || newDate < new Date || this.auth.isLoggedIn()){
      if(this.auth.isLoggedIn()){
        this.mainMessage = "ADMIN is not allowed to submit details";
      }
      if(this.pat.age==null){
        this.ageError = "Please enter your age."
      }
      else if(this.pat.age<=0){
        this.ageError = "Please enter a valid age."
      }
      else if(this.pat.age>=150){
        this.ageError = "Please enter a valid age."
      }
      if(this.pat.CommencementDate==null){
        this.dateError = "Please choose a date."
      }
      else if(newDate<new Date){
        this.dateError = "Please choose a valid date."
      }
      if(this.pat.Name==""){
        this.nameError = "Please enter your name."
      }
      else if(this.pat.Name.length<3){
        this.nameError = "Please enter a name that is atleast 3 characters long." 
      }
    }
    else{
      
      this.treatment.getPlan(this.pat).subscribe({
        next: data => {
          this.plan = data;
          this.commence = data.treatmentCommencementDate;
          this.commence = this.commence.substring(0,this.commence.indexOf('T'));
          this.end = data.treatmentEndDate;
          this.end = this.end.substring(0,this.end.indexOf('T'));
          this.display=false;
        },
        error: error => {
          this.planError = "We are having some issues at the moment. Please try again later."
        }
      });
      this.pat.Name="";
      this.pat.Ailment="Urology";
      this.pat.age=null;
      this.pat.CommencementDate=null;
      this.pat.PackageName="Package 1";
    }
  }
 

}
