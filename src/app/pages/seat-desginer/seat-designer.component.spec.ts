import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatDesignerComponent } from './seat-designer.component';

describe('SeatDesignerComponent', () => {
  let component: SeatDesignerComponent;
  let fixture: ComponentFixture<SeatDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
