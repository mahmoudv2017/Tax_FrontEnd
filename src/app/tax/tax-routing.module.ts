import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { TaxHistoryComponent } from './tax-history/tax-history.component';

const routes: Routes = [{
  path:"taxpay" , component:TaxFormComponent
} , {
  path:"taxhistory" , component:TaxHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRoutingModule { }
