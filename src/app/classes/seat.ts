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
  employeeName:string;
  matching:number;
  class: string;

  constructor(id, position, employeeId, match, employeeName){
    this.id = id;
    this.position = position;
    this.employeeId = employeeId;
    this.matching = match;
    this.employeeName = employeeName;
  }

  setEmployee(id:string, name:string){
    this.employeeId = id;
    this.employeeName = name;
  }

  setPosition(x:number, y:number){
    if(x){
      this.position.x = x;
    }

    if(y){
      this.position.y = y;
    }
  }
}
