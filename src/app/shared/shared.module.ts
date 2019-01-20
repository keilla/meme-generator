import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchFormComponent]
})
export class SharedModule { }
