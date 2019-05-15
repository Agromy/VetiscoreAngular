import { TestBed } from '@angular/core/testing';

import { AjoutComService } from './ajout-com.service';

describe('AjoutComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutComService = TestBed.get(AjoutComService);
    expect(service).toBeTruthy();
  });
});
