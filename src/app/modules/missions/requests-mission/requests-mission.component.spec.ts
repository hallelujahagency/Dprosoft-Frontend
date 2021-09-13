import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsMissionComponent } from './requests-mission.component';

describe('RequestsMissionComponent', () => {
  let component: RequestsMissionComponent;
  let fixture: ComponentFixture<RequestsMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
