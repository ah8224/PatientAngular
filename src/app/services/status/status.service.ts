import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) { }

  //https://localhost:44388/api/TreatmentPlan/GetMembers
  getMembers():any{
    return this.http.get<any>("https://patienttreatment.azurewebsites.net/api/TreatmentPlan/GetMembers");
  }
}
