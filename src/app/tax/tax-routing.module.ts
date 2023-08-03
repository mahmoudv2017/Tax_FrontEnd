import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTaxComponent } from './single-tax/single-tax.component';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { TaxHistoryComponent } from './tax-history/tax-history.component';

const routes: Routes = [{
  path:"taxpay" , component:TaxFormComponent
} , {
  path:"taxhistory" , component:TaxHistoryComponent
},
{
  path:"taxdetails/:id" , component:SingleTaxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRoutingModule { }
