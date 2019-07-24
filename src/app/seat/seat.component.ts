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
  @Input() addChair: any;
  @Input() seatId: number;
  @Input() seats: Seat[];
  class: string;
  positionStart:any = {};

  constructor(private colorService: ColorService){}

  ngOnInit() {
    this.class = this.colorService.getColor(this.matching, undefined)
  }

  drop(event: any, i: number){
    console.log(i);
    let item = this.seats[i];
    let x = event.clientX;
    let y = event.clientY;
    item.inBoundary = (y > 80);
    item.setPosition(x,y);
    if(i === 0 ) this.addChair(i);
  }

  onDrag(event: any){
    this.positionStart = {
      x : event.offsetX,
      y : event.offsetY
    }
  }
}
