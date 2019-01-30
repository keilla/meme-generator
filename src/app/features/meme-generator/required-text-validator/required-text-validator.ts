import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

export const requiredTextValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const topText = control.get('topText').value;
  const bottomText = control.get('bottomText').value;
  return !topText && !bottomText ? { 'required': true } : null;
};
