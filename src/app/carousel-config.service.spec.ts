import { TestBed, inject } from '@angular/core/testing';

import { CarouselConfigService } from './carousel-config.service';

describe('CarouselConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselConfigService]
    });
  });

  it('should be created', inject([CarouselConfigService], (service: CarouselConfigService) => {
    expect(service).toBeTruthy();
  }));
});
