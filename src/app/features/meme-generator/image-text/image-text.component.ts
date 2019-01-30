import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent implements OnChanges {

  @ViewChild('canvas') canvas: ElementRef;
  @Input() color = '#fff';
  @Input() textTop = 'First text';
  @Input() textBottom = 'Second text';
  @Input() imageUrl: string;
  @Input() dimension = 250;

  constructor() { }

  ngOnChanges() {
    this.clear();
    this.draw();
  }

  get context() {
    return this.canvas.nativeElement.getContext('2d');
  }

  draw() {
    const image = new Image();
    image.onload = () => {
      this.context.drawImage(image, 0, 0, this.dimension, this.dimension);
      this.context.font = '20px Open Sans';
      this.context.fillStyle = this.color;

      if (this.textTop) {
        this.context.fillText(this.textTop, 10, 30);
      }

      if (this.textBottom) {
        this.context.fillText(this.textBottom, 10, 230);
      }
    };
    image.src = this.imageUrl;
  }

  clear() {
    this.context.clearRect(0, 0, 250, 250);
  }

}
