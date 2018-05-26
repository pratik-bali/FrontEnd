import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HowItWorkComponent, SpendingComponent, howRoute, SpendRoute, pratikState} from './';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// tslint:disable-next-line:max-line-length
import { IncomeService, UtilityService, HouseService, TravelService, MiscService, LoanService, LifeService, HealthService, GeneralService, CreditService } from './spending/spending.service';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule, CommonModule,
        RouterModule.forChild(pratikState),
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        HowItWorkComponent,
        SpendingComponent
    ],
    providers: [
        IncomeService,
        UtilityService,
        HouseService,
        TravelService,
        MiscService,
        LoanService,
        LifeService,
        HealthService,
        GeneralService,
        CreditService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndPratikModule {}