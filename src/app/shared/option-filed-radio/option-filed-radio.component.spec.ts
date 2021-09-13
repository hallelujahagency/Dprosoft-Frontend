import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFiledRadioComponent } from './option-filed-radio.component';

describe('OptionFiledRadioComponent', () => {
  let component: OptionFiledRadioComponent;
  let fixture: ComponentFixture<OptionFiledRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFiledRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFiledRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
