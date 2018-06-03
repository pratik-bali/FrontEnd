import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Home } from './home.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  public ServiceHome(home) {
  console.log(home.homeloan);
  console.log(home.prncpalloan);
  console.log(home.rentclm);
  console.log(home.remintrst);
  console.log(home.rentclmgg);

  return this.http.post<Home[]>(SERVER_API_URL + 'api/', home);

  }
}
