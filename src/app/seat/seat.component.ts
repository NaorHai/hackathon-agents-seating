import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() matching: number;
  @Input() seatId: number;

  constructor() { }

  ngOnInit() {
  }

}
