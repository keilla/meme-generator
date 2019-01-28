import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchFormComponent,
  ButtonComponent,
  ImageGalleryComponent
} from './components';
import { ImageGalleryItemComponent } from './components/image-gallery/image-gallery-item/image-gallery-item.component';

@NgModule({
  declarations: [SearchFormComponent, ButtonComponent, ImageGalleryComponent, ImageGalleryItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [SearchFormComponent, ButtonComponent, ImageGalleryComponent, ImageGalleryItemComponent],
})
export class SharedModule { }
