import { TestBed } from '@angular/core/testing';

import { BankConnectionService } from './bank-connection.service';

describe('BankConnectionService', () => {
  let service: BankConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
