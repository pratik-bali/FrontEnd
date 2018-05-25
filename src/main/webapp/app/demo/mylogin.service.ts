import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../app.constants';
import { Mylogin } from './mylogin.model';

@Injectable()
export class MyloginService {

    constructor(private http: HttpClient) { }

    public submit(mylogin) {
        console.log(mylogin.username);
        console.log(mylogin.password);

        return this.http.post<Mylogin[]>(SERVER_API_URL + 'api/', mylogin);
    }
}
