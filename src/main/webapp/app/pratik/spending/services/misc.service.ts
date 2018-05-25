import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Misc } from './misc.model';

@Injectable()
export class MiscService {

  constructor(private http: HttpClient) { }

  public ServiceMisc(misc) {
      console.log(misc.shoes );
      console.log(misc.pet );
      console.log(misc.electronics );
      console.log(misc.furniture );
      console.log(misc.charity );
      console.log(misc.gift );
      console.log(misc.cloth );

      return this.http.post<Misc[]>(SERVER_API_URL + 'api/', misc);
  }
}
