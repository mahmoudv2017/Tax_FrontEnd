import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient , private router:Router) { }

  private baseApi:string = environment.apiUrl + "account"
  private CurrentUserSource$ = new ReplaySubject<User | null>(1)
  currentUser$:Observable<User | null> = this.CurrentUserSource$.asObservable()

  loginUser(loginform:any){
    this.http.post<User>(this.baseApi+"/login" , loginform).subscribe(
      {
        next:(user: User ) => {
          this.CurrentUserSource$.next(user)
          localStorage.setItem("token" , user.token)
          this.router.navigate(["/"])
        },
        error:() => {
          Swal.fire("Invalid Credentials" , "You Have Entered the wrong email or password")
        }
      }
     )
  }


  RegisterUser(registerForm:any){
      registerForm["role"] = "TaxPayer"

     this.http.post<User>(this.baseApi+"/register" , registerForm).subscribe({
      next : user => {
        this.CurrentUserSource$.next(user)

        localStorage.setItem("token" , user.token)
        this.router.navigate(["/"])
      },
      error : (err) => {
        console.log(err)
        Swal.fire("Error" , "Social Security Number and Username must be unqiue" , "error")
      }
     })
  }

  CheckEmailAsync(email:string) : Observable<ValidationErrors | null>{
   var baseApi = environment.apiUrl + "account"
   return this.http.get<boolean>(baseApi+"/emailexists?email="+email).pipe(map(res => {
      if(res){
        return {EmailExists:true}
      }
      return null
    }))
 }

  LoadCurrentUser(){

    var token = localStorage.getItem("token") || null
    if(!token){
      this.CurrentUserSource$.next(null)
      return
    }

    this.http.get<User>(this.baseApi+"/getuser").subscribe(user => {
     this.CurrentUserSource$.next(user)
     localStorage.setItem("token" , user.token)
   })
 }

  logout(){
    this.CurrentUserSource$.next(null);
    localStorage.removeItem("token" );
    this.router.navigate(["/"])

  }
}
