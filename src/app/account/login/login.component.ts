import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup
  constructor( fb:FormBuilder , private accountService:AccountService) {
    this.form = fb.group({
      email : ["" , [Validators.required , Validators.email]],
      password : ["" , Validators.required]
    })
  }

  onsubmit(){

    this.accountService.loginUser(this.form.value)
  }

}
