import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { User } from '../../shared';
import { createRequestOption } from '../../shared/model/request-util';

@Injectable()
export class Register {

    private resourceUrl = SERVER_API_URL + 'api/users';

    constructor(private http: HttpClient) {}

    save(account: any): Observable<any> {
        return this.http.post(SERVER_API_URL + 'api/register', account);
    }

    sendMail(email: any): Observable<any> {
        // console.log(email);
        return this.http.post(SERVER_API_URL + 'api/mail/send-mail', email);
    }

    update(user: User): Observable<HttpResponse <User>> {
        return this.http.put<User>(this.resourceUrl, user, { observe: 'response' });
    }
    query(req?: any): Observable<HttpResponse<User[]>> {
        const options = createRequestOption(req);
        return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
    }
    getUsers() {
        return this.http.get<User[]>(this.resourceUrl);
    }
    activateUser(registerAccount) {
        this.http.put(SERVER_API_URL + 'api/users', registerAccount);
    }
    activate(key) {
        this.http.get(SERVER_API_URL + 'api/activate', key);
    }
}
