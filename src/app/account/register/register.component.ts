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
      "displayName": ["" , Validators.required],
      "username": ["" , Validators.required],
      "password": ["" , Validators.required],
      "confirmpassword": ["" , Validators.required],

      "ssn": ["" , [Validators.required , Validators.minLength(14) , Validators.maxLength(14)]],
      "email": ["" , [Validators.required , Validators.email] , [CustomValidators.CheckEmailAsync(accoutnService.CheckEmailAsync.bind(this))] ],
      "city":["" , Validators.required],
      "phoneNumber":["" , Validators.required],
      "state": ["" , Validators.required],
      "country": ["" , Validators.required],
      "postalCode": ["" , Validators.required]
    },{
      updateOn:"blur",
      validators : [CustomValidators.CheckPassword]
    })
  }


  onSubmit(){
    delete this.form.value["confirmpassword"]

    this.accoutnService.RegisterUser(this.form.value)
  }
}
