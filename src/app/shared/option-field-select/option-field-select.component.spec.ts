import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFieldSelectComponent } from './option-field-select.component';

describe('OptionFieldSelectComponent', () => {
  let component: OptionFieldSelectComponent;
  let fixture: ComponentFixture<OptionFieldSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFieldSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
