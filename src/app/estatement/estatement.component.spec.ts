import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatementComponent } from './estatement.component';

describe('EstatementComponent', () => {
  let component: EstatementComponent;
  let fixture: ComponentFixture<EstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
