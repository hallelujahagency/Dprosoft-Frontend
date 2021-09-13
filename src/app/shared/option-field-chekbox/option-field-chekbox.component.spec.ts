import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFieldChekboxComponent } from './option-field-chekbox.component';

describe('OptionFieldChekboxComponent', () => {
  let component: OptionFieldChekboxComponent;
  let fixture: ComponentFixture<OptionFieldChekboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFieldChekboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFieldChekboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
