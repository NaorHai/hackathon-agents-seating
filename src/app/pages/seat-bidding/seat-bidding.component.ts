import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {Seat} from '../../classes/seat';
import {ColorService} from '../../color.service';

@Component({
  selector: 'app-seat-bidding',
  templateUrl: './seat-bidding.component.html',
  styleUrls: ['./seat-bidding.component.css']
})
export class SeatBiddingComponent implements OnInit {

  seats: Seat[] = [];
  isSelected = false;
  popContent:String;
  popTitle:String;

  constructor(
    private layoutService: LayoutService,
    private colorService: ColorService) { }

  ngOnInit() {
    this.load()
  }

  save(){
    this.layoutService.save(this.seats);
    this.load()
  }

  load(){
    this.seats = this.layoutService.load();
    this.seats.forEach(seat => {
      seat.class = this.colorService.getColor(seat.matching, seat.employeeId);
    });
  }

  selectSeat(seat) {
    if (this.isSelected) {
      if (seat.selected) {
        seat.selected = false;
        seat.employeeId = seat.employeeId ? undefined : '1';
        seat.class = this.colorService.getColor(seat.matching, seat.employeeId);
        this.isSelected = false;
      }
    }
    else {
      this.isSelected = true;
      seat.selected = true;
      seat.employeeId = '1';
      seat.class = 'selected-seat';
    }
  }
}
