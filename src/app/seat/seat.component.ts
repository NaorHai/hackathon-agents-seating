import {Component, Input, OnInit} from '@angular/core';
import {ColorService} from '../color.service';
import {Seat} from '../classes/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() matching: number;
  @Input() seatId: number;
  @Input() seats: Seat[];
  class: string;
  positionStart:any = {};

  constructor(private colorService: ColorService){}

  ngOnInit() {
    this.class = this.colorService.getColor(this.matching, undefined)
  }

  drop(event: any, i: number){
    console.log(event);
    let item = this.seats[i];
    let x = event.clientX;
    let y = event.clientY;
    item.setPosition(x,y);
    console.log(item);
  }

  onDrag(event: any){
    console.log(event);
    this.positionStart = {
      x : event.offsetX,
      y : event.offsetY
    }
  }
}
