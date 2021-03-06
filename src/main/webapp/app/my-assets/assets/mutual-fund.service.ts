import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MutualFund } from './mutual-fund.model';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class MutualFundService {

  constructor(private http: HttpClient) { }
 public SubmitUser(mutualfund) {

     return this.http.post<MutualFund[]>(SERVER_API_URL + 'api/', mutualfund);
 }
}
