import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormLayoutComponent } from './card-form-layout.component';

describe('CardFormLayoutComponent', () => {
  let component: CardFormLayoutComponent;
  let fixture: ComponentFixture<CardFormLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
