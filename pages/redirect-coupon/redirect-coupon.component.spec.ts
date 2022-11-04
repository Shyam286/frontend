import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCouponComponent } from './redirect-coupon.component';

describe('RedirectCouponComponent', () => {
  let component: RedirectCouponComponent;
  let fixture: ComponentFixture<RedirectCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
