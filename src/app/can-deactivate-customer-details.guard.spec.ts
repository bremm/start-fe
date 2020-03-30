import { TestBed } from '@angular/core/testing';

import { CanDeactivateCustomerDetailsGuard } from './can-deactivate-customer-details.guard';

describe('CanDeactivateCustomerDetailsGuard', () => {
  let guard: CanDeactivateCustomerDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateCustomerDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
