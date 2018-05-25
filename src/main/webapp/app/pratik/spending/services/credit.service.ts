import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Credit } from './credit.model';

@Injectable()
export class CreditService {

  constructor(private http: HttpClient) { }

  public ServiceCredit(credit) {
      console.log('credit service success');

      return this.http.post<Credit[]>(SERVER_API_URL + 'api/', credit);
  }

}
