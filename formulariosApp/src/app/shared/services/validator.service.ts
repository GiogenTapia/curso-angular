import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nombrePattern  : string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }


  noPuedeSerStrider( control : FormControl): ValidationErrors | null {
    
    const valor: string = control.value?.trim().toLowerCase();
    console.log(valor);

    if(valor == 'strider'){
      return { noStrider : true}
    }
    return null;
  }

  public isValidField( form: FormGroup,field : string){
    return form.get(field)?.invalid
     && form.get(field)?.touched;
  }


  
  validatePass(field1: string, field2 : string){
        
    return (formGroup: FormGroup):  ValidationErrors | null =>{

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({notEqual: true});
        return {notEqual: true}
      }

      formGroup.get(field2)?.setErrors(null);

      return null;

    }
  }

}
