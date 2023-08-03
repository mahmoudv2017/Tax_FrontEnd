import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { history } from 'src/app/shared/models/History';
import { TaxService } from '../tax.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-single-tax',
  templateUrl: './single-tax.component.html',
  styleUrls: ['./single-tax.component.css']
})
export class SingleTaxComponent implements OnInit {

  taxHistory!:history[]
  StatusData = [{
    value:"0" , display:"UnderReview" , color:"grey"},
   { value:"1" , display:"Approved"  , color:"lightgreen"},
    {value:"2" , display:"Rejected" , color:"lightred"},
  ]
  constructor(private taxService:TaxService , private ActivatedRoute:ActivatedRoute , private router:Router) {
    console.log(ActivatedRoute.snapshot.params)
   }


  ngOnInit(): void {
    console.log(ActivatedRoute)
    this.taxService.GetTaxReturnHistory(this.ActivatedRoute.snapshot.params['id'] as number).subscribe({
      next : res =>  this.taxHistory = res,
      error : () => {
        Swal.fire( "Error" , "Wrong TaxReturn ID Was Submitted" , "error")
        this.router.navigate(["/"])
      }

    })
  }

}
