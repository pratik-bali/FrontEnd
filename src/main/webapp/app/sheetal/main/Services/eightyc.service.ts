import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Eightyc } from './eightyc.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class EightycService {

  constructor(private http: HttpClient) { }

  public ServiceEightyc(eightyc)
  {
    console.log(eightyc.fixed);
    console.log(eightyc.tution);
    console.log(eightyc.nsc);
    console.log(eightyc.nss);
    console.log(eightyc.post);
    console.log(eightyc.reinvest);
    console.log(eightyc.licpremium);
    console.log(eightyc.equity);
    console.log(eightyc.pf);
    console.log(eightyc.ppf);
    console.log(eightyc.other);
    console.log(eightyc.tutionfee);
    console.log(eightyc.ulip);

    return this.http.post<Eightyc[]>(SERVER_API_URL + 'api/', eightyc);
  }
    
    
  }


