import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Utility, Credit, General, Health, House, Income, Life, Loan, Misc, Travel } from './spending.model';

@Injectable()
export class IncomeService {
    response: Observable<any>;
    constructor(private http: HttpClient) { }

    public PutIncome(income) {
    console.log(income);
    console.log('putIncome service');
    return this.http.put('https://demologin-79c13.firebaseio.com/income.json' , income);
    }

    public GetIncome() {
        console.log('getIncome service');
        return this.request();
    }
    request() {
        const url = 'https://demologin-79c13.firebaseio.com/income.json';
        this.response = this.http.get(url, {observe: 'body'});
        console.log( 'inside request' );
        console.log( this.response);
        return this.response;
    }
}

@Injectable()
export class UtilityService {

  constructor(private http: HttpClient) { }

  public PutUtility(utility) {
      console.log(utility);
      return this.http.put('https://demologin-79c13.firebaseio.com/utility.json', utility);
  }
  public GetUtility() {
    console.log('getIncome service');
    return this.http.get('https://demologin-79c13.firebaseio.com/utility.json');
  }
}

@Injectable()
export class CreditService {
    constructor(private http: HttpClient) { }
    public ServiceCredit(credit) {
    console.log('credit service success');
    return this.http.post<Credit[]>(SERVER_API_URL + 'api/', credit);
  }
}

@Injectable()
export class GeneralService {
    constructor(private http: HttpClient) { }
    public ServiceGeneral(general) {
        console.log(general);
        console.log('success service ');

        return this.http.post<General[]>(SERVER_API_URL + 'api/', general);
    }
}

@Injectable()
export class HealthService {
    constructor(private http: HttpClient) { }

    public ServiceHealth(health) {
        console.log('service success');
        console.log(health);

        return this.http.post<Health[]>(SERVER_API_URL + 'api/', health);
    }
}

@Injectable()
export class HouseService {
    constructor(private http: HttpClient) { }
    public ServiceHouse(house) {
    console.log(house);

    return this.http.post<House[]>(SERVER_API_URL + 'api/', house);
    }
}

@Injectable()
export class LifeService {
    constructor(private http: HttpClient) { }
    public ServiceLife(life) {
    console.log('life service success');
    console.log(life);

    return this.http.post<Life[]>(SERVER_API_URL + 'api/', life);
    }
}

@Injectable()
export class LoanService {
    constructor(private http: HttpClient) { }
    public ServiceLoan(loan) {
    console.log(loan);

    console.log('SaveLoan() call success');

    return this.http.post<Loan[]>(SERVER_API_URL + 'api/', loan);
    }
}

@Injectable()
export class MiscService {
    constructor(private http: HttpClient) { }
    public ServiceMisc(misc) {
    console.log(misc);

    return this.http.post<Misc[]>(SERVER_API_URL + 'api/', misc);
    }
}

@Injectable()
export class TravelService {
    constructor(private http: HttpClient) { }
    public ServiceTravel(travel) {
    console.log(travel);

    return this.http.post<Travel[]>(SERVER_API_URL + 'api/', travel);
    }
}
