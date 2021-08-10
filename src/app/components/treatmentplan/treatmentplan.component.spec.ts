import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentplanComponent } from './treatmentplan.component';

describe('TreatmentplanComponent', () => {
  let component: TreatmentplanComponent;
  let fixture: ComponentFixture<TreatmentplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
