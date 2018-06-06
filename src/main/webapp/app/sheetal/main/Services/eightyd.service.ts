import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Eightyd } from './eightyd.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class EightydService {

  constructor(private http: HttpClient) { }

  public ServiceEightyd(eightyd) {

    console.log(eightyd.insureself);
    console.log(eightyd.insureparents);
    console.log(eightyd.health);

    return this.http.post<Eightyd[]>(SERVER_API_URL + 'api/', eightyd);

  }

}
