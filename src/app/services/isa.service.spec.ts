import { TestBed } from '@angular/core/testing';

import { ISAService } from './isa.service';

describe('ISAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ISAService = TestBed.get(ISAService);
    expect(service).toBeTruthy();
  });
});
