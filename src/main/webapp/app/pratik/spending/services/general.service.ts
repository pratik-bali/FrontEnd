import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { General } from './general.model';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient) { }

  public ServiceGeneral(general) {
      console.log(general);
      console.log('success service ');

      return this.http.post<General[]>(SERVER_API_URL + 'api/', general);
  }

}
