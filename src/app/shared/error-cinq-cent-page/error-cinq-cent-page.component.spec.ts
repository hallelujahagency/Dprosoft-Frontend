import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCinqCentPageComponent } from './error-cinq-cent-page.component';

describe('ErrorCinqCentPageComponent', () => {
  let component: ErrorCinqCentPageComponent;
  let fixture: ComponentFixture<ErrorCinqCentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCinqCentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCinqCentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
