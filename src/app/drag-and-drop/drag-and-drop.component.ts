import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  dropList:any = [{x:0, y:0}, {x:52,y:52}]
  positionStart:any = {};
  constructor() { }

  ngOnInit() {
  }

  drop(event: any, i: number){
    console.log(event);
    let item = this.dropList[i];
    console.log(item);
    console.log(event.pageY - this.positionStart.y);
    console.log(event.pageX  - this.positionStart.x);
    item.y = item.y + (event.pageY - this.positionStart.y) + event.layerY;
    item.x = item.x + (event.pageX - this.positionStart.x) + event.layerX;

    console.log(item);
  }

  onDrag(event: any){
    console.log(event);
    this.positionStart = {
      x : event.pageX,
      y : event.pageY
    }
  }

  save(){
    console.log(this.dropList);
  }
}
