import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  token!:string | null ;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem("token") || null


    if(this.token){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.token}`
        }
      })
    }
    return next.handle(request);
  }
}
