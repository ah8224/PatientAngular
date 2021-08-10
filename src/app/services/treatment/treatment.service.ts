import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ailments } from 'src/app/Models/ailment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  
  constructor(private http:HttpClient) { }
  
  //https://localhost:44375/api/Offering/IpTreatmentPackages
  getlist():any{
    return this.http.get<any>("https://patientoffering.azurewebsites.net/api/Offering/IpTreatmentPackages");
  }

  //https://localhost:44375/api/Offering/IpTreatmentPackagesByName/
  getlistById(id:number):any{
    return this.http.get<any>("https://patientoffering.azurewebsites.net/api/Offering/IpTreatmentPackagesByName/"+id);
  }
}
