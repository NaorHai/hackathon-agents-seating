import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {Person, Seat} from '../../classes/seat';
import {ColorService} from '../../color.service';
import {Observable, Subject} from 'rxjs';
import {ApiService} from '../../services/api.service';

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
  private person: Person;


  constructor(
    private layoutService: LayoutService,
    private colorService: ColorService,
    ) { }

  ngOnInit() {
    this.load()
    this.layoutService.getPersonSubject()
      .subscribe(result => {
        console.log(result);
        this.person = result;
      })
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

    if(seat.employee && seat.employee.id){
      this.popContent = seat.employee.name;
      this.popImage = seat.employee.image;
      this.popTitle = 'Occupied';
    }
    else {
      if(!seat.matching){
        this.layoutService.getPersonDetails()
          .then(()=> {
            seat.employee.setUserDetails(15,this.person.name, this.person.picture);
            this.changePopContent(seat);
          });
      }
      else{
        this.popTitle = 'Available';
        this.popContent = 'Matching: ' + seat.matching + '%';
        this.popImage = undefined;
      }
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
