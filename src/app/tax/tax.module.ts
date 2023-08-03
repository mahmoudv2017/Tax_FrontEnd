import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { TaxHistoryComponent } from './tax-history/tax-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusPipePipe } from './pipes/status-pipe.pipe';


@NgModule({
  declarations: [
    TaxFormComponent,
    TaxHistoryComponent,
    StatusPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaxRoutingModule
  ],
  exports:[StatusPipePipe]
})
export class TaxModule { }
