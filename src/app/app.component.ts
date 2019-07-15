import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seats = [];
  amount = 1;

  addSeat() {
    for (let i = 0; i < this.amount; i++) {
      this.seats.push({x:0, y:0});
    }
  }

  clearAll() {
    this.seats = [];
  }

  save(){
    console.log(this.seats);
  }
}
