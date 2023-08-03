import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors , ValidatorFn } from "@angular/forms";
import { Observable } from 'rxjs';

export class CustomValidators{
    static CheckEmailAsync (checkEmailMethod:(email:string) => Observable<ValidationErrors | null>):AsyncValidatorFn {
      return (control:AbstractControl):Observable<ValidationErrors | null> => {

        return checkEmailMethod(control.value)
      }
    }

    static CheckPassword (fg:FormGroup):ValidationErrors | null  {
      let formgtoup = fg as FormGroup

      let passwordControl = formgtoup.get("password")
      let confirmPasswordControl = formgtoup.get("confirmpassword")

      if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
        return { passwordMismatch: true };
      }

      return null;
    }
}
