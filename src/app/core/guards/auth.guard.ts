import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import  Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService:AccountService , private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {

      return  this.accountService.currentUser$.pipe(map(res => {

        debugger

          if(res?.role != null && route.firstChild?.routeConfig?.path?.includes("taxdetails")){
            return true
          }
          if(route.url[0].path != "account" && res == null
          ||

          res?.role == "TaxPayer" && route.url[0].path == "admin"



          ||
        res?.role == "Admin" && (route.url[0].path != "admin"   )



          ){
            Swal.fire("Error" , "You Are Not Allowed to Visit this page")
            this.router.navigate(["/"])
            return false
          }



          return true
      }))

  }

}
