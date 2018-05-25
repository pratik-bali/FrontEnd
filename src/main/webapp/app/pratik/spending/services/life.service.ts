import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Life } from './life.model';

@Injectable()
export class LifeService {

  constructor(private http: HttpClient) { }

  public ServiceLife(life) {
      console.log('life service success');
      console.log(life.type );
      console.log(life.issuer );
      console.log(life.ins_name );
      console.log(life.proposer_name );
      console.log(life.start_date );
      console.log(life.policy_term );
      console.log(life.premium_mode );
      console.log(life.policy_name );
      console.log(life.sum );
      console.log(life.premium );
      console.log(life.premium_term );

      return this.http.post<Life[]>(SERVER_API_URL + 'api/', life);
  }

}
