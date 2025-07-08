import { TestBed } from '@angular/core/testing';

import { Freestyle } from './freestyle';

describe('Freestyle', () => {
  let service: Freestyle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Freestyle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
