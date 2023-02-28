import { TestBed } from '@angular/core/testing';

import { CarsLocalStorageService } from './cars-local-storage.service';

describe('CarsLocalStorageService', () => {
  let service: CarsLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
