import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { of } from 'rxjs';

import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageService } from 'src/app/core/services';
import { ImageServiceMock } from 'src/app/core/testing-mocks';
import { Image } from 'src/app/core/models';

describe('MemeGeneratorComponent', () => {
  let component: MemeGeneratorComponent;
  let fixture: ComponentFixture<MemeGeneratorComponent>;
  let imageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemeGeneratorComponent],
      imports: [SharedModule],
      providers: [
        { provide: ImageService, useClass: ImageServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    imageService = TestBed.get(ImageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchImage', () => {
    it('should call searchImage when keyword emit a value', () => {
      const spySearchImage = spyOn(component, 'searchImage');
      component.searchForm.keyword.emit('banana');
      expect(spySearchImage).toHaveBeenCalledWith('banana');
    });

    it('should call getImages', () => {
      const imageResponse = [
        new Image({ imageID: 1, imageUrl: 'urlA', displayName: 'nameA' })
      ];
      const spyGetImages = spyOn(imageService, 'getImages').and.returnValue(
        of(imageResponse)
      );
      component.searchImage('nameA');
      expect(spyGetImages).toHaveBeenCalled();
      expect(component.images).toEqual(imageResponse);
    });
  });

});
