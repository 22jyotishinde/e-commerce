import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordmissMatch (control:AbstractControl)  : ValidationErrors | null{
    const password = control.get('password')?.value;
    const confirmpassword = control.get('confirmpassword')?.value;
    if(password.value ! = confirmpassword){
    return {'passwordNotMatch':true};
    } 
    return null;
  }
    // if (!password || !confirmpassword) {
    //     return null;
    //   }

    //   if (confirmpassword.errors && !confirmpassword.errors.passwordMismatch) {
    //     return null;
    //   }

    //   if (password.value !== confirmpassword.value) {
    //     confirmpassword.setErrors({ passwordMismatch: true });
    //   } else {
    //     confirmpassword.setErrors(null);
    //   }
    //   return null;
    // }
   
