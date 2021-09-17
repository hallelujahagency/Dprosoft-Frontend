import { TestBed } from '@angular/core/testing';

import { NoteFraisService } from './note-frais.service';

describe('NoteFraisService', () => {
  let service: NoteFraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteFraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
