import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';
import { Loan } from './loan.model';

@Injectable()
export class LoanService {

  constructor(private http: HttpClient) { }

  public ServiceLoan(loan) {
      console.log(loan.loan_type );
      console.log(loan.lender );
      console.log(loan.applicant );
      console.log(loan.amnt );
      console.log(loan.ldate );
      console.log(loan.check );
      console.log(loan.tenure );
      console.log(loan.intrest_type );
      console.log(loan.roi );
      console.log(loan.rdate );

      console.log('SaveLoan() call success');

      return this.http.post<Loan[]>(SERVER_API_URL + 'api/', loan);
  }
}
