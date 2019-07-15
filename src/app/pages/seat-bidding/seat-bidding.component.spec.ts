import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBiddingComponent } from './seat-bidding.component';

describe('SeatBiddingComponent', () => {
  let component: SeatBiddingComponent;
  let fixture: ComponentFixture<SeatBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
