import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Demoentity } from './demoentity.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Demoentity>;

@Injectable()
export class DemoentityService {

    private resourceUrl =  SERVER_API_URL + 'api/demoentities';

    constructor(private http: HttpClient) { }

    create(demoentity: Demoentity): Observable<EntityResponseType> {
        const copy = this.convert(demoentity);
        return this.http.post<Demoentity>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(demoentity: Demoentity): Observable<EntityResponseType> {
        const copy = this.convert(demoentity);
        return this.http.put<Demoentity>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Demoentity>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Demoentity[]>> {
        const options = createRequestOption(req);
        return this.http.get<Demoentity[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Demoentity[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Demoentity = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Demoentity[]>): HttpResponse<Demoentity[]> {
        const jsonResponse: Demoentity[] = res.body;
        const body: Demoentity[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Demoentity.
     */
    private convertItemFromServer(demoentity: Demoentity): Demoentity {
        const copy: Demoentity = Object.assign({}, demoentity);
        return copy;
    }

    /**
     * Convert a Demoentity to a JSON which can be sent to the server.
     */
    private convert(demoentity: Demoentity): Demoentity {
        const copy: Demoentity = Object.assign({}, demoentity);
        return copy;
    }
}
