import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { insurer } from 'src/app/Models/insurer';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient, private token:TokenService) { }

  //https://localhost:44388/api/TreatmentPlan/GetNotCompletedMembers
  getnotcompleted():any{
    return this.http.get<any>("https://patienttreatment.azurewebsites.net/api/TreatmentPlan/GetNotCompletedMembers");
  }

  //https://localhost:44382/api/Insurance/InitiateClaim
  getbalance(details:insurer):any{
    var key = this.token.getToken();
    const headers= new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer '+key);
    return this.http.post<any>("https://patientclaim.azurewebsites.net/api/Insurance/InitiateClaim",{
      patientName:details.name,
      ailment:details.ailment,
      treatmentPackageName:details.package,
      insurerName:details.insurerName,
      totalInsuranceCost:details.cost
    },{'headers':headers});
  }

  //"https://localhost:44382/api/Insurance/AllInsurerDetail
  getinsurers():any{
    var key = this.token.getToken();
    const headers= new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer '+key);
    return this.http.get<any>("https://patientclaim.azurewebsites.net/api/Insurance/AllInsurerDetail",{'headers':headers});
  }

  //https://localhost:44388/api/TreatmentPlan/UpdateCost?id=
  updateStatus(id:number,cost:number,insurer:string):any{
    return this.http.get<any>("https://patienttreatment.azurewebsites.net/api/TreatmentPlan/UpdateCost?id="+id+"&cost="+cost+"&insurer="+insurer);
  }
}
