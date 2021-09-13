import { TestBed } from '@angular/core/testing';

import { FonctionEntrepriseService } from './fonction-entreprise.service';

describe('FonctionEntrepriseService', () => {
  let service: FonctionEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
