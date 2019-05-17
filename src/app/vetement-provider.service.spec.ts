import { TestBed } from '@angular/core/testing';

import { VetementProviderService } from './vetement-provider.service';

describe('VetementProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VetementProviderService = TestBed.get(VetementProviderService);
    expect(service).toBeTruthy();
  });
});
