import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import { SharedRoutingModule } from './shared-routing.module';
import { HomeModule } from '../home/home.module';
import { CoreModule } from '../core/core.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    SharedRoutingModule,

  ],
  exports:[CarouselModule , BsDropdownModule]
})
export class SharedModule { }
