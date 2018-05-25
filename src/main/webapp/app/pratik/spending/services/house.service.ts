import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { House } from './house.model';

@Injectable()
export class HouseService {

  constructor(private http: HttpClient) { }

  public ServiceHouse(house) {
      console.log(house.milk );
      console.log(house.fruit );
      console.log(house.rent );
      console.log(house.fuel );
      console.log(house.medical );
      console.log(house.society );
      console.log(house.auto );
      console.log(house.edu );
      console.log(house.grocery );
      console.log(house.servent );
      console.log(house.laundry );
      console.log(house.vcd );
      console.log(house.selfcare );
      console.log(house.property );

      return this.http.post<House[]>(SERVER_API_URL + 'api/', house);
  }

}
