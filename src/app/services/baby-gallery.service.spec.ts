import { TestBed, inject } from '@angular/core/testing';

import { BabyGalleryService } from './baby-gallery.service';

describe('BabyGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabyGalleryService]
    });
  });

  it('should be created', inject([BabyGalleryService], (service: BabyGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
