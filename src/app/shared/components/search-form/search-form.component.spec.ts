import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { SharedModule } from '../../shared.module';
import { Subject } from 'rxjs';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    component.$searchEnd = new Subject();
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should has a form', () => {
      expect(component.form).toBeDefined();
    });
  });

  describe('onSubmit', () => {
    it('should send image word if form is valid', () => {
      component.form.get('image').setValue('banana');
      const spyEmit = spyOn(component.keyword, 'emit');
      fixture.detectChanges();
      component.onSubmit();
      expect(component.form.valid).toBeTruthy();
      expect(spyEmit).toHaveBeenCalledWith('banana');
    });

    it('should send image word if form is invvalid', () => {
      const spyEmit = spyOn(component.keyword, 'emit');
      fixture.detectChanges();
      component.onSubmit();
      expect(component.form.valid).toBeFalsy();
      expect(spyEmit).not.toHaveBeenCalled();
    });
  });

});
