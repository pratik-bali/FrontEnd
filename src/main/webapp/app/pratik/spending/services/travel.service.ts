import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Travel } from './travel.model';

@Injectable()
export class TravelService {

  constructor(private http: HttpClient) { }

  public ServiceTravel(travel) {
      console.log(travel.food );
      console.log(travel.entertainment );
      console.log(travel.dineout );
      console.log(travel.vacation );
      console.log(travel.hobby );

      return this.http.post<Travel[]>(SERVER_API_URL + 'api/', travel);
  }
}
