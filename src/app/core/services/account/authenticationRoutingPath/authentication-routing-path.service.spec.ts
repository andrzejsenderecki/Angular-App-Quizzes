import { TestBed } from '@angular/core/testing';

import { AuthenticationRoutingPathService } from './authentication-routing-path.service';

describe('AuthenticationRoutingPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationRoutingPathService = TestBed.get(AuthenticationRoutingPathService);
    expect(service).toBeTruthy();
  });
});
