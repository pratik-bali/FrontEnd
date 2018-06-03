import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Gross } from './gross.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class GrossService {

    constructor(private http: HttpClient) { }
    public ServiceGross(gross) {
    console.log(gross.bsalary);
    console.log(gross.da);
    console.log(gross.hra);
    console.log(gross.conveyance);
    console.log(gross.childedu);
    console.log(gross.medical);
    console.log(gross.lta);
    console.log(gross.otherallown);
    console.log(gross.bonus);
    console.log(gross.rentincome);
    console.log(gross.saving);
    console.log(gross.bonds);
    console.log(gross.convay);
    return this.http.post<Gross[]>(SERVER_API_URL + 'api/', gross);
    }
}
