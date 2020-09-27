import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReoccuringDepositComponent } from './reoccuring-deposit.component';

describe('ReoccuringDepositComponent', () => {
  let component: ReoccuringDepositComponent;
  let fixture: ComponentFixture<ReoccuringDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReoccuringDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReoccuringDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
