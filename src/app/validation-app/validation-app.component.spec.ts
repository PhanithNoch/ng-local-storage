import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAppComponent } from './validation-app.component';

describe('ValidationAppComponent', () => {
  let component: ValidationAppComponent;
  let fixture: ComponentFixture<ValidationAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
