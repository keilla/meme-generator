import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextComponent } from './image-text.component';

describe('ImageTextComponent', () => {
  let component: ImageTextComponent;
  let fixture: ComponentFixture<ImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageTextComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('should clear and draw', () => {
      const spyClear = spyOn(component, 'clear');
      const spyDraw = spyOn(component, 'draw');
      component.ngOnChanges();
      expect(spyClear).toHaveBeenCalled();
    });
  });
});
