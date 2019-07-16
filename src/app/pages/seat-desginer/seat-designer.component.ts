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
    this.seats.push(new Seat(this.seats.length+1, {x:this.seats.length*10, y: 0}, undefined, undefined, undefined));

  }

  clearAll() {
    this.seats = [];
  }

  save(){
    this.layoutService.save(this.seats);
    console.log(this.seats);
  }
}
