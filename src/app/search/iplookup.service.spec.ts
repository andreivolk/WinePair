import { TestBed, inject } from '@angular/core/testing';

import { IplookupService } from './iplookup.service';

describe('IplookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IplookupService]
    });
  });

  it('should ...', inject([IplookupService], (service: IplookupService) => {
    expect(service).toBeTruthy();
  }));
});
