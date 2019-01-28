import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

import { SearchFormComponent } from 'src/app/shared/components';
import { ImageService } from 'src/app/core/services';
import { Image } from 'src/app/core/models';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.scss']
})
export class MemeGeneratorComponent implements OnInit {

  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  images: Observable<Image[]>;
  $searchEnd = new Subject();

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchImage(keyword: string) {
    this.images = this.imageService.getImages(keyword)
    .pipe(
      finalize(() => this.$searchEnd.next()),
      take(1)
    );
  }

}
