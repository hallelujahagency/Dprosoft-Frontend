import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCollaborateurComponent } from './classe-collaborateur.component';

describe('ClasseCollaborateurComponent', () => {
  let component: ClasseCollaborateurComponent;
  let fixture: ComponentFixture<ClasseCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
