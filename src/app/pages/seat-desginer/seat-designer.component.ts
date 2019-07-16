import { Component, OnInit } from '@angular/core';
import {Seat} from '../../classes/seat';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'seat-designer',
  templateUrl: './seat-designer.component.html',
  styleUrls: ['./seat-designer.component.css']
})
export class SeatDesignerComponent {
  seats: Seat[] = [];

  constructor(private layoutService: LayoutService) {}

  addSeat() {
    let position = {x:0, y: 0};
    let emploeey = {id: undefined,name: undefined, image: undefined};
    this.seats.push(new Seat(this.seats.length+1, position , emploeey, undefined));

  }

  clearAll() {
    this.seats = [];
  }

  save(){
    this.layoutService.save(this.seats);
    console.log(this.seats);
  }

}
