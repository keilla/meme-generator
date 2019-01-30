import { requiredTextValidator } from './required-text-validator';
import { FormGroup, FormControl } from '@angular/forms';

describe('requiredTextValidator', () => {
  it('should return required', () => {
    const form = new FormGroup({
      topText: new FormControl(),
      bottomText: new FormControl()
    });
    expect(requiredTextValidator(form)).toEqual({ 'required': true });
  });

  it('should return null', () => {
    const form = new FormGroup({
      topText: new FormControl(),
      bottomText: new FormControl()
    });
    form.get('topText').patchValue('anything');
    expect(requiredTextValidator(form)).toEqual(null);
  });
});
