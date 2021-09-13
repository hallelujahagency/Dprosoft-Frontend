import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFieldTextComponent } from './option-field-text.component';

describe('OptionFieldTextComponent', () => {
  let component: OptionFieldTextComponent;
  let fixture: ComponentFixture<OptionFieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFieldTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
