import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredTextValidator } from '../required-text-validator/required-text-validator';

@Component({
  selector: 'app-form-input-texts',
  templateUrl: './form-input-texts.component.html',
  styleUrls: ['./form-input-texts.component.scss']
})
export class FormInputTextsComponent implements OnInit {

  form: FormGroup;
  @Output() $submit = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      topText: [''],
      bottomText: [''],
    }, { validators: requiredTextValidator });
  }

  onSubmit() {
    if (this.form.valid) {
      this.$submit.emit();
    } else {
      this.form.get('topText').markAsTouched();
    }
  }
}
