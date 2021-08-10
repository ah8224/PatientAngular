import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patient } from 'src/app/Models/patient';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { TreatmentService } from 'src/app/services/treatment/treatment.service';
import { TreatmentplanService } from 'src/app/services/treatmentplan/treatmentplan.service';

@Component({
  selector: 'app-treatmentplan',
  templateUrl: './treatmentplan.component.html',
  styleUrls: ['./treatmentplan.component.css']
})
export class TreatmentplanComponent implements OnInit {

  pat:patient = { Name:"", age: null, Ailment:"Urology", PackageName: "Package 1", CommencementDate: null};
  plan:any = {packageName:"", testDetails:"", cost:null, specialistName:"", commencement:"", complete: null};
  ailments:any = [{ id:1, name:"Urology"},{id:2, name:"Orthopaedics"}];
  display:boolean;
  id:number;
  list:any;
  commence:string;
  end:string;
  logout:boolean;

  constructor(private treatment:TreatmentplanService, private router:Router, private auth:AuthService) {
    this.logout = auth.isLoggedIn();
    this.display = true;
   }

  ngOnInit(): void {
  }

  submit():void{
    this.display=false;
    this.treatment.getPlan(this.pat).subscribe(data=>{
      this.plan = data;
      this.commence = data.treatmentCommencementDate;
      this.commence = this.commence.substring(0,this.commence.indexOf('T'));
      this.end = data.treatmentEndDate;
      this.end = this.end.substring(0,this.end.indexOf('T'));
    });
    this.pat.Name="";
    this.pat.Ailment="Urology";
    this.pat.age=null;
    this.pat.CommencementDate=null;
    this.pat.PackageName="Package 1";
  }

  register():void{
   this.router.navigateByUrl('status'); 
  }

}
