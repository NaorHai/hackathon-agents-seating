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
  @Input() seats: any[];
  class: string;
  positionStart:any = {};

  constructor(private colorService: ColorService){}

  ngOnInit() {
    this.class = this.colorService.getColor(this.matching)
  }

  drop(event: any, i: number){
    let item = this.seats[i];
    item.y = item.y + (event.pageY - this.positionStart.y);
    item.x = item.x + (event.pageX - this.positionStart.x);
  }

  onDrag(event: any){
    this.positionStart = {
      x : event.pageX,
      y : event.pageY
    }
  }
}
