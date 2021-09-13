import { TestBed } from '@angular/core/testing';

import { StatutServicesService } from './statut-services.service';

describe('StatuttServicesService', () => {
  let service: StatutServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
