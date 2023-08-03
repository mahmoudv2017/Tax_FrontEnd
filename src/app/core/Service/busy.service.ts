import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  loadingCounter = 0
  constructor(private spinnerService:NgxSpinnerService) { }

  busy(){
    this.loadingCounter++;
    this.spinnerService.show(undefined, {
      type: 'square-jelly-box',
      bdColor:  "rgba(0, 0, 0, 0.8)",
      size:"medium",
      color: '#ffff'
    });

  }

  idle(){
    this.loadingCounter--;
    if(this.loadingCounter <= 0){
      this.loadingCounter = 0;
      this.spinnerService.hide()
    }
  }
}
