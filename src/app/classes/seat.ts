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
  match:number;

  constructor(id, position, employeeId, match){
    this.id = id;
    this.position = position;
    this.employeeId = employeeId;
    this.match = match;
  }

  constructor(id, layout){
    this.id = id;
    this.layout = layout;
  }
}
