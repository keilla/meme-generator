import { Component, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/core/models';

@Component({
  selector: 'app-image-gallery-item',
  templateUrl: './image-gallery-item.component.html',
  styleUrls: ['./image-gallery-item.component.scss'],

})
export class ImageGalleryItemComponent  {

  @Input() image: Image;
  @HostBinding('class') klass = 'image-gallery-item';
  selected = false;
  @Output() $select = new EventEmitter<Image>();

  constructor() { }

  @HostListener('click') onClick() {
    this.$select.emit(this.image);
    this.selected = true;
  }

  unselect() {
    this.selected = false;
  }

}
