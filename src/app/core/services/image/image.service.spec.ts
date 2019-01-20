import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ImageService } from './image.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { ConfigurationServiceMock } from '../../testing-mocks';

describe('ImageService', () => {
  let httpMock, service, configurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ConfigurationService,
          useClass: ConfigurationServiceMock
        }
      ]
    });

    service = TestBed.get(ImageService);
    configurationService = TestBed.get(ConfigurationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('should return an Observable<Image[]>', () => {
      const imagesResponse = [
        { imageID: '1', imageUrl: 'urlA', displayName: 'nameA' },
        { imageID: '2', imageUrl: 'urlB', displayName: 'nameB' },
      ];

      service.getImages('name').subscribe(images => {
        expect(images.length).toBe(2);
        expect(images[0].name).toBe('nameA');
      });

      const apiUrl = configurationService.settings.api;
      const apiKey = configurationService.settings.apiKey;

      const req = httpMock.expectOne(`${apiUrl}/${service.url}?q=name&apiKey=${apiKey}`);
      req.flush(imagesResponse);
    });
  });
});
