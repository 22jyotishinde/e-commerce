import { TestBed } from '@angular/core/testing';

import { HttpmethodService } from './httpmethod.service';

describe('HttpmethodService', () => {
  let service: HttpmethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpmethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
