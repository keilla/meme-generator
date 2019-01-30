import { Component, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { Image } from 'src/app/core/models';
import { ImageGalleryItemComponent } from './image-gallery-item/image-gallery-item.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {

  @Input() images: Image[];
  @ViewChildren(ImageGalleryItemComponent) imagesComponents: QueryList<ImageGalleryItemComponent>;
  @Output() $selected = new EventEmitter<Image>();

  constructor() { }

  clearSelected(newImage: Image) {
    const selectedImage = this.imagesComponents.find(image => image.selected);

    if (selectedImage) {
      selectedImage.unselect();
    }

    this.$selected.emit(newImage);
  }

}
