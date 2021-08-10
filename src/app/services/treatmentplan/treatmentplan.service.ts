import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { patient } from 'src/app/Models/patient';

@Injectable({
  providedIn: 'root'
})
export class TreatmentplanService {

  data:any;

  constructor(private http:HttpClient) { }

  //https://localhost:44388/api/TreatmentPlan/FormulateTreatmentTimetable?Name=
  getPlan(pat:patient):any{
    return this.http.get<any>("https://patienttreatment.azurewebsites.net/api/TreatmentPlan/FormulateTreatmentTimetable?Name="+pat.Name+"&Age="+pat.age.toString()+"&Ailment="+pat.Ailment+"&TreatmentPackageName="+pat.PackageName+"&TreatmentCommencementDate="+pat.CommencementDate);
  }
  
}
