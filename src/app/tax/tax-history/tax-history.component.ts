import { Component  , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TaxReturn } from 'src/app/shared/models/TaxReturn';
import { TaxService } from '../tax.service';

@Component({
  selector: 'app-tax-history',
  templateUrl: './tax-history.component.html',
  styleUrls: ['./tax-history.component.css']
})
export class TaxHistoryComponent implements OnInit {

  taxReturns!:TaxReturn[]
  constructor(private taxService:TaxService , public router:Router) { }

  ngOnInit(): void {
    this.loadTaxReturns()

  }

  loadTaxReturns(){
    this.taxService.GetAllTaxesByUser().subscribe(taxReturns => {
      this.taxReturns = taxReturns
    })
  }

  GetRecordHistories(taxID:number){
    this.taxService.GetTaxReturnHistory(taxID).subscribe()
  }
}
