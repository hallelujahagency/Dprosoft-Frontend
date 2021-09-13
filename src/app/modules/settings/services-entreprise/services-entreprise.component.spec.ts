import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEntrepriseComponent } from './services-entreprise.component';

describe('ServicesEntrepriseComponent', () => {
  let component: ServicesEntrepriseComponent;
  let fixture: ComponentFixture<ServicesEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
