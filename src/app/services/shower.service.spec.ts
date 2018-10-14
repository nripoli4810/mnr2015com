import { TestBed, inject } from '@angular/core/testing';

import { ShowerService } from './shower.service';

describe('ShowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowerService]
    });
  });

  it('should be created', inject([ShowerService], (service: ShowerService) => {
    expect(service).toBeTruthy();
  }));
});
