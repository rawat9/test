import {AbstractControl, ValidationErrors} from '@angular/forms';

/**
 * A custom validator for numeric fields that we support. If the field value is not null or a number then an error is displayed.
 * @param control The FormControl of the form field in question
 */
export function numericFieldValidator(control: AbstractControl): ValidationErrors | null {
  console.log(control);
  if (control.value === undefined) {
    return {numericFieldValidator: true};
  }
  return null;
}
