import { Injectable } from '@angular/core';
import {Position, Seat} from '../classes/seat';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout:Seat[] = [];
  constructor() {
    let rawSeats:any[] = localStorage.getItem('layout');
    let random_boolean = Math.random() >= 0.5;
    rawSeats.forEach(seat => this.layout.push(new Seat(seat.id,
                                                new Position(seat.position.x, seat.position.y),
                                                random_boolean? "1" : undefined,
                                                random_boolean ? undefined : this.getRandomMatch())));
  }

  save(layout:Seat[]){
    localStorage.setItem('layout', layout.toString());
  }

  load():Seat[]{
    return this.layout;
  }

  getRandomMatch(): number{
    return Math.floor(Math.random() * 100) + 1;
  }

}
