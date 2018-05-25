import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Income } from './income.model';
import { SERVER_API_URL } from '../../../app.constants';

@Injectable()
export class IncomeService {

  constructor(private http: HttpClient) { }

  public ServiceIncome(income) {
      console.log(income);

      return this.http.post<Income[]>(SERVER_API_URL + 'api/', income);
  }

}
