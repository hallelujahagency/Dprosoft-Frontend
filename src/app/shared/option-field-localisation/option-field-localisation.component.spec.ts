import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFieldLocalisationComponent } from './option-field-localisation.component';

describe('OptionFieldLocalisationComponent', () => {
  let component: OptionFieldLocalisationComponent;
  let fixture: ComponentFixture<OptionFieldLocalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFieldLocalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFieldLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
