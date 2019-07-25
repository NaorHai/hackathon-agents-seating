import { Injectable } from '@angular/core';
import { Position, Seat, Employee } from '../classes/seat';
import { ApiService } from './api.service';
import { initLayout }from '../../assets/mockInitLayout';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  personGenerator: Observable<any[]>;
  personSubjet = new Subject<any>();

  layout: any = [];
  constructor(private api: ApiService) {
    let rawSeats:any[] = JSON.parse(localStorage.getItem('layout'));
    
    // this.personGenerator = this.api.generateUserDetails(1);
    (rawSeats && rawSeats.length > 0) ? this.initSeats(rawSeats): this.initSeats(initLayout);
  }

  getPerson() {
    return this.personSubjet.asObservable();
  }

  getPersonDetails(){
    this.api.generateUserDetails(1)
    .subscribe((res)=> this.personSubjet.next(res.results[0].email))
    
  }

  // generatePerson() {
  //  const sub = this.personGenerator.subscribe((res) => {
  //     console.log(res);
  //     console.log(sub);
  //     sub.unsubscribe();
  //   })

  // }

  initSeats(items: any[]){
    items.forEach(seat => this.layout.push(
      new Seat(
        seat.id,
        new Position(seat.position.x, seat.position.y),
        new Employee(seat.employee && seat.employee.id, seat.employee && seat.employee.name,seat.employee && seat.employee.image),
        seat.matching)
    ));
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
