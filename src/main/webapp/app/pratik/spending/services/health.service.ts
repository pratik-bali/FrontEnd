import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Health } from './health.model';

@Injectable()
export class HealthService {

  constructor(private http: HttpClient) { }

  public ServiceHealth(health) {
      console.log('service success');

      return this.http.post<Health[]>(SERVER_API_URL + 'api/', health);
  }

}
