import { Component, OnInit } from '@angular/core';
import  { User } from './payment.model';
import { PaymentService } from './payment.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { SuccessComponent } from '../../success/success.component';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-payment',
  templateUrl: './payment.component.html',
  styles: []
})
export class PaymentComponent implements OnInit {

  constructor(private PaymentService: PaymentService, private http: HttpClient) { }

  user: User = new User();
  public paymentDetail = [];

  submitUser(){
    
    this.PaymentService.submitUser(this.user)
      .subscribe( data =>{
           this.paymentDetail = data
           console.log(this.paymentDetail);
     });     
  };

  ngOnInit() {
  }



}

