import {Component, Input, OnInit} from '@angular/core';
import {ColorService} from '../color.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() match: number;
  @Input() id: number;
  class: string;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.class = this.colorService.getColor(this.match)

  }

}
