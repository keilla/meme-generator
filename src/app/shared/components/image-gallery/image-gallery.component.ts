import { Component, Input, ViewChildren, QueryList, OnDestroy, ChangeDetectionStrategy, OnChanges, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

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

  constructor() { }

  clearSelected() {
    const selectedImage = this.imagesComponents.find(image => image.selected);

    if (selectedImage) {
      selectedImage.unselect();
    }
  }

}
