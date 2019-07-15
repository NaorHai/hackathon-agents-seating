import { Injectable } from '@angular/core';
import {Position, Seat} from '../classes/seat';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout:Seat[] = [];
  constructor() {
    let rawSeats:any[] = JSON.parse(localStorage.getItem('layout'));

    if (rawSeats) {
      let random_boolean = Math.random() >= 0.5;
      rawSeats.forEach(seat => this.layout.push(new Seat(seat.id,
        new Position(seat.position.x, seat.position.y),
        seat.employeeId,
        seat.matching)));
    }
    else {
      this.layout = [
        new Seat(1, new Position(0,0), undefined, 50),
        new Seat(1, new Position(50,50), "1", undefined),
        new Seat(1, new Position(75,75), undefined, 75),
        new Seat(1, new Position(90,90), "2", undefined),
      ]
    }
  }

  save(layout:Seat[]){
    localStorage.setItem('layout', JSON.stringify(layout));
  }

  load():Seat[]{
    return this.layout;
  }

  getRandomMatch(): number{
    return Math.floor(Math.random() * 100) + 1;
  }

}
