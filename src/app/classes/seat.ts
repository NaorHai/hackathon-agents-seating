export class Position{
  x:number;
  y:number;
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

}

export class Seat {
  id:number;
  position:Position;
  employeeId:string;
  matching:number;
  class: string;

  constructor(id, position, employeeId, match){
    this.id = id;
    this.position = position;
    this.employeeId = employeeId;
    this.matching = match;
  }
}
