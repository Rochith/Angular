import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositComponent } from './fixed-deposit.component';

describe('FixedDepositComponent', () => {
  let component: FixedDepositComponent;
  let fixture: ComponentFixture<FixedDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
