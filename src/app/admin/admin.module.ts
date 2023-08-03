import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TaxreturnsComponent } from './taxreturns/taxreturns.component';
import { TaxModule } from "../tax/tax.module";


@NgModule({
    declarations: [
        TaxreturnsComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TaxModule
    ]
})
export class AdminModule { }
