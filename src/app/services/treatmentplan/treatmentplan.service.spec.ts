import { TestBed } from '@angular/core/testing';

import { TreatmentplanService } from './treatmentplan.service';

describe('TreatmentplanService', () => {
  let service: TreatmentplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
