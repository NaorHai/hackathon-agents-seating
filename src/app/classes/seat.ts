export class Position{
  x:number;
  y:number;

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

}

export class Employee{
  id:string;
  name:string;
  image:string;

  constructor(id, name, url){
    this.id = id;
    this.name = name;
    this.image = url;
  }

  setUserDetails(id, name, url){
    if(id && !this.id) this.id = id;
    if(name && !this.name) this.name = name;
    if(url && !this.image) this.image = url;
  }

  clearEmployee(){
    this.id = undefined;
    this.name = undefined;
    this.image = undefined;
  }
}

export class Seat {
  id:number;
  position:Position;
  matching:number;
  class: string;
  employee: Employee;
  inBoundary: boolean = false;

  constructor(id, position, employee, match){
    this.id = id;
    this.position = position;
    this.matching = match;
    this.employee = employee;
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
