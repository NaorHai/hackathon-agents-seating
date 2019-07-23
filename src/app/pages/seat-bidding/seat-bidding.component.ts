import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {Seat} from '../../classes/seat';
import {ColorService} from '../../color.service';

@Component({
  selector: 'app-seat-bidding',
  templateUrl: './seat-bidding.component.html',
  styleUrls: ['./seat-bidding.component.css']
})
export class SeatBiddingComponent implements OnInit {

  seats: Seat[] = [];
  isSelected = false;
  popContent:any;
  popTitle:any;
  popImage: string;

  constructor(
    private layoutService: LayoutService,
    private colorService: ColorService) { }

  ngOnInit() {
    this.load()
  }

  save(){
    this.layoutService.save(this.seats);
    this.load()
  }

  load(){
    this.seats = this.layoutService.load();
    this.seats.forEach(seat => {
      seat.class = this.colorService.getColor(seat.matching, seat.employee);
    });
  }

  changePopContent(seat){
    console.log(seat);
    if(seat.employee && seat.employee.id){
      this.popContent = seat.employee.name;
      this.popImage = seat.employee.image;
      this.popTitle = 'Occupied';
    }
    else {
      this.popTitle = 'Available';
      this.popContent = 'Matching: ' + seat.matching + '%';
      this.popImage = undefined;
    }

  }

  selectSeat(seat) {
    if (seat.class != "unavailable") {
      if (this.isSelected) {
        if (seat.selected) {
          seat.selected = false;
          seat.employee.clearEmployee();
          seat.class = this.colorService.getColor(seat.matching, seat.employee);
          this.isSelected = false;
        }
      }
      else {
        this.isSelected = true;
        seat.selected = true;
        seat.employee.setUserDetails(100,'Yoav Alroy',"https://media.licdn.com/dms/image/C4E03AQHuHgzPai4EzA/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=gC3gcbJEjMlMQgrT32gePQlZ499icBf7mRABaV_H0PA");
        seat.class = 'selected-seat';
      }
    }
  }

  getSimilarity(){
    return 85;
  }
}
