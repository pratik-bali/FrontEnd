import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Other } from './other.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class OtherService {

  constructor(private http: HttpClient) { }

  public ServiceOther(other) {
    console.log(other.handicapped);
    console.log(other.medicaltreat);
    console.log(other.selfedu);
    console.log(other.nps);
    console.log(other.rgess);
    console.log(other.donation);

    return this.http.post<Other[]>(SERVER_API_URL + 'api/', other);

  }
}
