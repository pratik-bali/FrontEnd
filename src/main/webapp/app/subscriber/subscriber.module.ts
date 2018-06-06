import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriberComponent } from './subscriber.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { subscriberRoute } from './subscriber.route';
import { PaymentComponent,PaymentService } from '.';
// import { FooterComponent } from '../layouts';
@NgModule({
    imports: [
        RouterModule.forRoot([subscriberRoute], { useHash: true }),
        FormsModule,
        CommonModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        SubscriberComponent,
        // FooterComponent
        PaymentComponent
    ],
    entryComponents: [
    ],
    providers: [
        PaymentService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class SubscriberModule { }