import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryItemComponent } from './image-gallery-item.component';
import { Image } from 'src/app/core/models';

describe('ImageGalleryItemComponent', () => {
  let component: ImageGalleryItemComponent;
  let fixture: ComponentFixture<ImageGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryItemComponent);
    component = fixture.componentInstance;
    component.image = new Image(
      {
        url: 'imageUrl'
      }
    );
    fixture.detectChanges();
  });


  describe('onClick', () => {
    it('should select image', () => {
      const spySelectEmit = spyOn(component.$select, 'emit');
      component.onClick();
      expect(component.selected).toBeTruthy();
      expect(spySelectEmit).toHaveBeenCalled();
    });
  });
});
