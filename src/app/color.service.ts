import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  constructor() {}

  getColor(match, employee) : string{
    if (employee && employee.id)
      return "unavailable";

    if (match > 90)
      return "match_Level_90";
    else if (match > 80)
      return "match_Level_80";
    else if (match > 60)
      return "match_Level_60";
    else if (match > 40)
      return "match_Level_40";
    else if (match > 20)
      return "match_Level_20";
    else if (match > 0)
      return "match_Level_0";
    else
      return "unavailable";
  }
}
