import { TestBed } from '@angular/core/testing';

import { GetJSONService } from './get-json.service';

describe('GetJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetJSONService = TestBed.get(GetJSONService);
    expect(service).toBeTruthy();
  });
});
