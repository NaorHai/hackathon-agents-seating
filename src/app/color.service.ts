import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  constructor() {}

  getColor(match) {
    if (match > 90)
      return "match_Level_90";
    else if (match > 80)
      return "match_Level_80";
    else if (match > 70)
      return "match_Level_70";
    else if (match > 60)
      return "match_Level_60";
    else if (match > 50)
      return "match_Level_50";
    else if (match > 40)
      return "match_Level_40";
    else if (match > 30)
      return "match_Level_30";
    else if (match > 20)
      return "match_Level_20";
    else if (match > 10)
      return "match_Level_10";
    else
      return "unavailable";
  }
}
