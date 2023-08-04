import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaxService } from '../tax.service';
import { AdminService } from './../../admin/admin.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css']
})
export class TaxFormComponent implements OnInit {
  form:FormGroup
  statusMsg:string = ""
  hidden_flag = true
  maxYearMonth!:string
  constructor(fb:FormBuilder , private taxService:TaxService , private router:Router) {

    this.form = fb.group({
        income: [0 , [Validators.required , Validators.min(1000)]],
        adjustedGrossIncome: [0 , [Validators.required , Validators.min(10)]],
        taxableIncome: [0 , [Validators.required , Validators.min(10)]],
        totalTax: [0 , [Validators.required ,  Validators.min(10)]],
        taxWithheld: [0 , [Validators.required ,  Validators.min(10)]],
        forMonth : [null]
    },{
      updateOn:"blur",

    })
  }
  ngOnInit(): void {
    this.maxYearMonth = this.getCurrentYearMonth()
    console.log(this.maxYearMonth)
  }

  getCurrentYearMonth(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1);
    return `${year}-${month}`;
  }
  targetMonth(month:string){
    var yeamonth = month.split("-")
    var todayDate = new Date()
    if(+yeamonth[0] <= todayDate.getFullYear() && +yeamonth[1] <=  todayDate.getMonth() + 1){

      this.taxService.CheckMonth(+yeamonth[1]).subscribe((res) => {
        if(!res){

          this.form.get("forMonth")?.setValue(month)
          this.hidden_flag = false
        }else{
          Swal.fire("Error" , "You Have Already Entered Your Tax For This Month" , "info")

        }
      })
    }else{
      Swal.fire("Error" , "Wrong Date Has Been Entered" , "error")
    }
  }
  onSubmit(){

    this.taxService.AddTaxReturn(this.form.value).subscribe(() => {
      this.router.navigate(["tax/taxhistory"])
    })
  }
}
