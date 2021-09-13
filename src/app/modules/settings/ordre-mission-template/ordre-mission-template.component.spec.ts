import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreMissionTemplateComponent } from './ordre-mission-template.component';

describe('OrdreMissionTemplateComponent', () => {
  let component: OrdreMissionTemplateComponent;
  let fixture: ComponentFixture<OrdreMissionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreMissionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreMissionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
