import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorflowConfigureComponent } from './worflow-configure.component';

describe('WorflowConfigureComponent', () => {
  let component: WorflowConfigureComponent;
  let fixture: ComponentFixture<WorflowConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorflowConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorflowConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
