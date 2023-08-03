import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxreturnsComponent } from './taxreturns/taxreturns.component';

const routes: Routes = [{
  path:"" , component:TaxreturnsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
