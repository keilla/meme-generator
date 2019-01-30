import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputTextsComponent } from './form-input-texts.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FormInputTextsComponent', () => {
  let component: FormInputTextsComponent;
  let fixture: ComponentFixture<FormInputTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputTextsComponent],
      imports: [ReactiveFormsModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('onSubmit', () => {
    it('should call emit', () => {
      const spyEmit = spyOn(component.$submit, 'emit');
      spyOnProperty(component.form, 'valid').and.returnValue(true);
      component.onSubmit();
      expect(spyEmit).toHaveBeenCalled();
    });
  });
});
