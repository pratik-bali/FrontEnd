import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Utility } from './utility.model';

@Injectable()
export class UtilityService {

  constructor(private http: HttpClient) { }

  public ServiceUtility(utility) {
      console.log(utility);

      return this.http.post<Utility[]>(SERVER_API_URL + 'api/', utility);
  }
}
