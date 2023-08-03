import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlainReponse } from '../shared/models/PlainReponse';
import { environment } from 'src/environments/environment';
import { AllUserInfo } from '../shared/models/AllUserInfo';
import { ActionStatus } from '../shared/models/TaxStatus';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private baseURL = environment.apiUrl + "Admin"

  GetUserInfoBySSN(ssn:string){
    return this.http.get<AllUserInfo>(this.baseURL+"/allinfo/"+ssn)
  }

  ChangeTaxReturnStatus(taxReturnID:number , newStatus:ActionStatus){
    return this.http.patch<PlainReponse>(this.baseURL+`/changestatus/${taxReturnID}` , {newStatus : newStatus})
  }
}
