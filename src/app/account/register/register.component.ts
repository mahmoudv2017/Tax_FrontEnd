import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
  form:FormGroup
  constructor(fb:FormBuilder , private accoutnService:AccountService ,private http:HttpClient) {

    this.form = fb.group({
      "displayName": ["" , [Validators.required , Validators.pattern(/^\s*[a-zA-Z]+(\s?[a-zA-Z]+)+\s*$/)]],
      "username": ["" , Validators.required],
      "password": ["" , [Validators.required ,  Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/)]],
      "confirmpassword": ["" , Validators.required],
      "role" : ["TaxPayer"],
      "ssn": ["" , [Validators.required , Validators.minLength(14) , Validators.maxLength(14)]],
      "email": ["" , [Validators.required , Validators.email] , [CustomValidators.CheckEmailAsync(accoutnService.CheckEmailAsync.bind(this))] ],
      "city":["" , [Validators.required, Validators.pattern(/^[a-zA-Z]+$/g)]],
      "phoneNumber":["" , [Validators.required , Validators.pattern(/^01\d{9}$/g)]]
,
      "state": ["" , [Validators.required,   Validators.pattern(/^[a-zA-Z]+(\s?[a-zA-Z]+)+$/)]],
      "country": ["" , [Validators.required, Validators.pattern(/^[a-zA-Z-]+$/g)]],
      "postalCode": ["" , [Validators.required , Validators.pattern(/^\d{5}$/)]]
    },{
      updateOn:"blur",
      validators : [CustomValidators.CheckPassword]
    })
  }
  setRole(){

  }

  onSubmit(){

    delete this.form.value["confirmpassword"]

    this.accoutnService.RegisterUser(this.form.value)
  }
}
