import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {Seat} from '../../classes/seat';

@Component({
  selector: 'app-seat-bidding',
  templateUrl: './seat-bidding.component.html',
  styleUrls: ['./seat-bidding.component.css']
})
export class SeatBiddingComponent implements OnInit {

  layout: Seat[] = [];
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {

  }

}
