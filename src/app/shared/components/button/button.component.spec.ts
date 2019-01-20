import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const botao = fixture.debugElement.queryAll(By.css('.botao'));
    expect(botao[0].nativeElement.className.indexOf('-loading')).toBeTruthy();
    const label = fixture.debugElement.queryAll(By.css('.label'));
    expect(label[0]).toBeUndefined();
  });
});
