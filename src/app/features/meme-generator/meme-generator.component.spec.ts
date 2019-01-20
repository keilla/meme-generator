import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeGeneratorComponent } from './meme-generator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MemeGeneratorComponent', () => {
  let component: MemeGeneratorComponent;
  let fixture: ComponentFixture<MemeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeGeneratorComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
