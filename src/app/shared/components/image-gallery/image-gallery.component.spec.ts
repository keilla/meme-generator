import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryComponent } from './image-gallery.component';
import { ImageGalleryItemComponent } from './image-gallery-item/image-gallery-item.component';
import { Image } from 'src/app/core/models';

describe('ImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryComponent, ImageGalleryItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    component.images = [
      new Image(
        {
          url: 'firstImageUrl'
        }
      ),
      new Image(
        {
          url: 'secondImageUrl'
        }
      )
    ];
    fixture.detectChanges();
  });

  it('should have 2 imagesComponents', () => {
    expect(component.imagesComponents.length).toBe(2);
  });

  describe('unselectImage', () => {
    it('should unselect image', () => {
      component.imagesComponents.first.selected = true;
      const spyImageUnselect = spyOn(component.imagesComponents.first, 'unselect');
      component.clearSelected();
      expect(spyImageUnselect).toHaveBeenCalled();
    });

    it('should not unselect image', () => {
      const spyImageUnselect = spyOn(component.imagesComponents.first, 'unselect');
      component.clearSelected();
      expect(spyImageUnselect).not.toHaveBeenCalled();
    });

    it('should call when select image', () => {
      const spyUnselectImge = spyOn(component, 'clearSelected');
      component.imagesComponents.first.$select.next();
      expect(spyUnselectImge).toHaveBeenCalled();
    });
  });
});
