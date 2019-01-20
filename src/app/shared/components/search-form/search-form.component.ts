import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  @Output() keyword = new EventEmitter();
  @ViewChild(ButtonComponent) button: ButtonComponent;
  @Input() $searchEnd: Subject<void>;
  $unsub = new Subject();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      image: ['', Validators.required],
    });

    this.$searchEnd
    .pipe(
      takeUntil(this.$unsub)
    )
    .subscribe(() => this.button.loading = false);
  }

  onSubmit() {
    if (this.form.valid) {
      this.keyword.emit(this.form.get('image').value);
      this.button.loading = true;
    }
  }

  ngOnDestroy() {
    this.$unsub.next();
    this.$unsub.complete();
  }

}
