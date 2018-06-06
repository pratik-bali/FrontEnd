import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { subscribeRoute } from './subscribe.route';

@NgModule({
    imports: [
        RouterModule.forRoot([subscribeRoute], { useHash: true }),
        FormsModule,
        CommonModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        SubscribeComponent
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class SubscribeModule { }