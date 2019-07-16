import {Injectable, Optional} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  generateUserDetails(amount:number): Observable<any> {
    return this.http.get(`https://randomuser.me/api/?result=${amount}`)
      .pipe(
        map((res) => {
          return (res);
        })
      );
  }
}
