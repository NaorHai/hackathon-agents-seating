import { Injectable } from '@angular/core';
import {Position, Seat, Employee} from '../classes/seat';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout:Seat[] = [];
  constructor(private api: ApiService) {
    let rawSeats:any[] = JSON.parse(localStorage.getItem('layout'));

    if (rawSeats) {
      let random_boolean = Math.random() >= 0.5;
      rawSeats.forEach(seat => this.layout.push(new Seat(seat.id,
        new Position(seat.position.x, seat.position.y),
        new Employee(undefined, undefined, undefined),
        seat.matching)));
    }
    else {
      this.layout = [
        new Seat(1, new Position(0,0), new Employee(undefined, undefined, undefined), 50),
        new Seat(1, new Position(50,50), new Employee(undefined, undefined, undefined), undefined),
        new Seat(1, new Position(75,75), new Employee(undefined, undefined, undefined), 75),
        new Seat(1, new Position(90,90), new Employee(undefined, undefined, undefined), undefined),
      ]
    }
  }

  save(layout:Seat[]){
    localStorage.setItem('layout', JSON.stringify(layout));
  }

  load():Seat[]{
    this.getMatchCase();
    return this.layout;
  }

  getMatchCase(){
    if( this.layout.find(i => i.matching !== undefined)) return;
    let amount = Math.floor(this.layout.length*0.70);
    for(let i=0; i<amount; i++){
      this.layout[i].matching = this.getRandomMatch();
    }
    this.save(this.layout)
  }

  getRandomMatch(): number{
    return Math.floor(Math.random() * 100) + 1;
  }

}
