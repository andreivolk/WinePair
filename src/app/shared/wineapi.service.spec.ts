import { TestBed, inject } from '@angular/core/testing';

import { WineapiService } from './wineapi.service';

describe('WineapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineapiService]
    });
  });

  it('should ...', inject([WineapiService], (service: WineapiService) => {
    expect(service).toBeTruthy();
  }));
});
