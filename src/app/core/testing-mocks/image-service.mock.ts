import { of } from 'rxjs';
import { Image } from '../models';

export class ImageServiceMock {
  getImages(keyword: string) {
    return of([
      new Image({ imageID: 1, imageUrl: 'urlA', displayName: 'nameA' })
    ]);
  }
}
