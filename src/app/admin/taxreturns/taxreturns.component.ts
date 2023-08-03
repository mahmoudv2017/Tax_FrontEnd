import { Component , OnInit } from '@angular/core';
import { AllUserInfo } from 'src/app/shared/models/AllUserInfo';
import { ActionStatus } from 'src/app/shared/models/TaxStatus';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taxreturns',
  templateUrl: './taxreturns.component.html',
  styleUrls: ['./taxreturns.component.css']
})
export class TaxreturnsComponent implements OnInit {

  target_user!:AllUserInfo
  status_msg:string=""
  maxYearMonth!:string
  StatusData = [{
    value:"0" , display:"UnderReview"},
   { value:"1" , display:"Approved"},
    {value:"2" , display:"Rejected"},
  ]
  constructor(private adminService:AdminService) { }
  ngOnInit(): void {

   // this.ChangeStatus(1)
  }
  getUserData(ssn:string){
    this.adminService.GetUserInfoBySSN(ssn).subscribe({
      next : res => {
        this.target_user = res
        console.log(res)
      },
      error : (err) => {
        console.log(err)
        Swal.fire( "Error" , "No User With that Social Security Number Exists" , "error")
      }
    }

    )
  }

  ChangeStatus(taxReturnID:number , event:any){

    debugger
    this.adminService.ChangeTaxReturnStatus(+taxReturnID , event.target.selectedIndex).subscribe(res => {
      console.log(res)
    })
  }



}
