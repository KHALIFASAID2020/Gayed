import { TestBed } from '@angular/core/testing';

import { AuthetificationService } from './authetification.service';

describe('AuthetificationService', () => {
  let service: AuthetificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthetificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
