import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  form: FormGroup;
  @Output() imageWord = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.imageWord.emit(this.form.get('image').value);
    }
  }

}
