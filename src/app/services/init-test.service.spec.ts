import { TestBed } from '@angular/core/testing';

import { InitTestService } from './init-test.service';

describe('InitTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitTestService = TestBed.get(InitTestService);
    expect(service).toBeTruthy();
  });
});
