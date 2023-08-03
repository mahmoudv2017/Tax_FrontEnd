import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlainReponse } from '../shared/models/PlainReponse';
import { TaxReturn } from '../shared/models/TaxReturn';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private http:HttpClient) { }

  private baseURL = environment.apiUrl + "TaxPayer"
  AddTaxReturn(taxform:any){
    return this.http.post<PlainReponse>(this.baseURL + "/TaxReturn" , taxform)
  }

  GetAllTaxesByUser(){
    return this.http.get<TaxReturn[]>(this.baseURL + "/gethistory" )
  }
}
