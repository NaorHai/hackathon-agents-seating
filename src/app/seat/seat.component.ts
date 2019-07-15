import {Component, Input, OnInit} from '@angular/core';
import {ColorService} from '../color.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() matching: number;
  @Input() seatId: number;
  class: string;

  constructor(private colorService: ColorService){}

  ngOnInit() {
    this.class = this.colorService.getColor(this.matching)

  }

}
