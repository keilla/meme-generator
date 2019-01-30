import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchFormComponent,
  ButtonComponent,
} from './components';
import { ImageGalleryModule } from './components/image-gallery/image-gallery.module';

@NgModule({
  declarations: [
    SearchFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageGalleryModule,
  ],
  exports: [
    ReactiveFormsModule,
    SearchFormComponent,
    ButtonComponent,
    ImageGalleryModule
  ],
})
export class SharedModule { }
