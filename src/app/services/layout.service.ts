import { Injectable } from '@angular/core';
import {Position, Seat, Employee} from '../classes/seat';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout: any = [];
  constructor(private api: ApiService) {
    let rawSeats:any[] = JSON.parse(localStorage.getItem('layout'));

    if (rawSeats && rawSeats.length > 0) {
      let random_boolean = Math.random() >= 0.5;
      rawSeats.forEach(seat => this.layout.push(new Seat(seat.id,
        new Position(seat.position.x, seat.position.y),
        new Employee(seat.employee && seat.employee.id, seat.employee && seat.employee.name,seat.employee && seat.employee.image),
        seat.matching)));
    }
    else {
      this.layout = [
        {
          "id":1,
          "position":{
            "x":100,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":2,
          "position":{
            "x":45,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":3,
          "position":{
            "x":200,
            "y":260
          },
          "matching":95,
          "class":"match_Level_90",
          "employee":{}
        },
        {
          "id":4,
          "position":{
            "x":255,
            "y":260
          },
          "matching":95,
          "class":"match_Level_90",
          "employee":{}
        },
        {
          "id":5,
          "position":{
            "x":100,
            "y":260
          },
          "matching":45,
          "class":"match_Level_40",
          "employee":{}
        },
        {
          "id":6,
          "position":{
            "x":45,
            "y":260
          },
          "matching":45,
          "class":"match_Level_40",
          "employee":{}
        },
        {
          "id":7,
          "position":{
            "x":200,
            "y":205
          },
          "matching":95,
          "class":"match_Level_90",
          "employee":{}
        },
        {
          "id":8,
          "position":{
            "x":255,
            "y":205
          },
          "class":"unavailable",
          "employee": {
            "name": "Edmundo Mata",
            "id": "11",
            "image": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
          }
        },
        {
          "id":9,
          "position":{
            "x":100,
            "y":205
          },
          "matching":45,
          "class":"match_Level_40",
          "employee":{}
        },
        {
          "id":10,
          "position":{
            "x":45,
            "y":205
          },
          "matching":45,
          "class":"match_Level_40",
          "employee":{}
        },
        {
          "id":11,
          "position":{
            "x":45,
            "y":405
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":12,
          "position":{
            "x":255,
            "y":405
          },
          "matching":12,
          "class":"match_Level_0",
          "employee":{}
        },
        {
          "id":13,
          "position":{
            "x":200,
            "y":405
          },
          "matching":12,
          "class":"match_Level_0",
          "employee":{}
        },
        {
          "id":14,
          "position":{
            "x":255,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":15,
          "position":{
            "x":200,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":16,
          "position":{
            "x":100,
            "y":405
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":17,
          "position":{
            "x":355,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":18,
          "position":{
            "x":410,
            "y":260
          },
          "matching":65,
          "class":"match_Level_60",
          "employee":{}
        },
        {
          "id":19,
          "position":{
            "x":355,
            "y":260
          },
          "matching":85,
          "class":"match_Level_80",
          "employee":{}
        },
        {
          "id":20,
          "position":{
            "x":410,
            "y":205
          },
          "matching":65,
          "class":"match_Level_60",
          "employee":{}
        },
        {
          "id":21,
          "position":{
            "x":355,
            "y":205
          },
          "matching":85,
          "class":"match_Level_80",
          "employee":{}
        },
        {
          "id":22,
          "position":{
            "x":410,
            "y":405
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":23,
          "position":{
            "x":355,
            "y":405
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":24,
          "position":{
            "x":410,
            "y":350
          },
          "matching":22,
          "class":"match_Level_20",
          "employee":{}
        },
        {
          "id":25,
          "position":{
            "x":314,
            "y":90
          },
          "class":"unavailable",
          "employee": {
            "name": "Vilma Aro",
            "id": "1",
            "image": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
          }
        },
        {
          "id":26,
          "position":{
            "x":158,
            "y":90
          },
          "class":"unavailable",
          "employee": {
            "name": "Kaylee Horton",
            "id": "10",
            "image": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
          }
        },
        {
          "id":27,
          "position":{
            "x":265,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Eléna Marchand",
            "id": "9",
            "image": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
          }
        },
        {
          "id":28,
          "position":{
            "x":210,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Danial Sæland",
            "id": "8",
            "image": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
          }
        },
        {
          "id":29,
          "position":{
            "x":155,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Daphné Faure",
            "id": "6",
            "image": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
          }
        },
        {
          "id":30,
          "position":{
            "x":45,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Angelo Wielens",
            "id": "5",
            "image": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
          }
        },
        {
          "id":31,
          "position":{
            "x":100,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Sofie Muller",
            "id": "4",
            "image": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
          }
        },
        {
          "id":32,
          "position":{
            "x":430,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Simon Bouchard",
            "id": "3",
            "image": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
          }
        },
        {
          "id":33,
          "position":{
            "x":375,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Billy Torres",
            "id": "1",
            "image": "https://randomuser.me/api/portraits/thumb/men/62.jpg"
          }
        },
        {
          "id":34,
          "position":{
            "x":320,
            "y":520
          },
          "class":"unavailable",
          "employee": {
            "name": "Amarildo Da Cunha",
            "id": "2",
            "image": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
          }
        }
      ];
  }}

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
