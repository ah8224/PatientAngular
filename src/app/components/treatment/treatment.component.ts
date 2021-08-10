import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { TreatmentService } from 'src/app/services/treatment/treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  logout:boolean;
  list:any;

  constructor(private getTreatment:TreatmentService, private auth:AuthService) {
    this.logout = auth.isLoggedIn();
    this.getTreatment.getlist().subscribe(data => {
      this.list = data;
    })
   }

  ngOnInit(): void {
  }

}
