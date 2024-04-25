import { TestBed } from '@angular/core/testing';

import { SignInUpServiceService } from '../authService/sign-in-up-service.service';

describe('SignInUpServiceService', () => {
  let service: SignInUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
