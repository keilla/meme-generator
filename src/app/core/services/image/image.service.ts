import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url = 'Generators_Search';

  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  getImages(keyword: string): Observable<Image[]> {
    const options = keyword ?
   { params: new HttpParams().set('q', keyword) } : {};

    return this.http.get(
      `${this.configurationService.settings}/${this.url}`, options
      )
      .pipe(
        map((response: []) => response.map(r => new Image(r)))
      );
  }
}
