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

  constructor(private layoutService: LayoutService) {
    let position = {x:0, y: 0};
    let employee = {id: undefined,name: undefined, image: undefined};
    this.seats.push(new Seat(this.seats.length+1, position , employee, undefined));
  }

  addSeat() {
    let position = {x:0, y: 0};
    let employee = {id: undefined,name: undefined, image: undefined};
    this.seats.push(new Seat(this.seats.length+1, position , employee, undefined));
  }

  addChair(i: number){
    let position = {x:0, y: 0};
    let employee = {id: undefined,name: undefined, image: undefined};
    this.seats.unshift(new Seat(this.seats.length+1, position , employee, undefined));
  }

  clearAll() {
    this.seats = [];
    this.addChair(0);
  }

  save(){
    this.layoutService.save(this.seats.filter(i => i.position.y > 50));
    console.log(this.seats);
  }

}
