import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { take, finalize, tap } from 'rxjs/operators';

import { SearchFormComponent } from 'src/app/shared/components';
import { ImageService } from 'src/app/core/services';
import { Image } from 'src/app/core/models';
import { FormInputTextsComponent } from './form-input-texts/form-input-texts.component';
import { ImageGalleryComponent } from 'src/app/shared/components/image-gallery/image-gallery.component';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.scss']
})
export class MemeGeneratorComponent implements OnInit {

  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  @ViewChild(FormInputTextsComponent) formInputTexts: FormInputTextsComponent;
  @ViewChild(ImageGalleryComponent) imageGallery: ImageGalleryComponent;
  images: Observable<Image[]>;
  $searchEnd = new Subject();
  topText: string;
  bottomText: string;
  imageSelected: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchImage(keyword: string) {
    this.clearValues();
    this.images = this.imageService.getImages(keyword)
      .pipe(
        finalize(() => this.$searchEnd.next()),
        take(1)
      );
  }

  saveText() {
    this.topText = this.formInputTexts.form.get('topText').value;
    this.bottomText = this.formInputTexts.form.get('bottomText').value;
  }

  loadImage(image: Image) {
    this.imageSelected = image;
  }

  clearValues() {
    this.topText = null;
    this.bottomText = null;
    this.imageSelected = null;
  }

}
