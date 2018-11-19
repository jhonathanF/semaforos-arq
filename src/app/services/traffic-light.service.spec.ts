import { TestBed } from '@angular/core/testing';

import { TrafficLightService } from './traffic-light.service';

describe('TrafficLightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficLightService = TestBed.get(TrafficLightService);
    expect(service).toBeTruthy();
  });
});
