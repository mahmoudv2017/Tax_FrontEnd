import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { BusyService } from '../Service/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private bustService:BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.bustService.busy()
    return next.handle(request).pipe(delay(1000) , finalize(() => this.bustService.idle()));
  }
}
