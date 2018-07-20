import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  private url: String = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdunit(unit_name, unit_price) {
    const adunit = {
      unit_name: unit_name,
      unit_price: unit_price
    };

    this.http.post(`${this.url}/add`, adunit)
      .subscribe(res => console.log('Done'));
  }

}// end AdunitService
