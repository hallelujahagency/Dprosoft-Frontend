import { TestBed } from '@angular/core/testing';

import { ServicesEntrepriseService } from './services-entreprise.service';

describe('ServicesEntrepriseService', () => {
  let service: ServicesEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
