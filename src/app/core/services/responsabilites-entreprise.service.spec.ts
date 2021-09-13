import { TestBed } from '@angular/core/testing';

import { ResponsabilitesEntrepriseService } from './responsabilites-entreprise.service';

describe('ResponsabilitesEntrepriseService', () => {
  let service: ResponsabilitesEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsabilitesEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
