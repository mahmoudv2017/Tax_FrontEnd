import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:"" , component:HomeComponent , pathMatch:"full"},
  {path:"account" , canActivate:[AuthGuard] , loadChildren: async () => (await import("./account/account.module")).AccountModule },
  {path:"tax" , canActivate:[AuthGuard] , loadChildren: async () => (await import("./tax/tax.module")).TaxModule},
  {path:"admin" , canActivate:[AuthGuard] , loadChildren: async () => (await import("./admin/admin.module")).AdminModule},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
