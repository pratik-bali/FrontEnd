import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HowItWorkComponent, SpendingComponent, howRoute, SpendRoute, pratikState} from './';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { IncomeService } from './spending/services/income.service';
import { UtilityService } from './spending/services/utility.service';
import { HouseService } from './spending/services/house.service';
import { TravelService } from './spending/services/travel.service';
import { MiscService } from './spending/services/misc.service';
import { LoanService } from './spending/services/loan.service';
import { LifeService } from './spending/services/life.service';
import { HealthService } from './spending/services/health.service';
import { GeneralService } from './spending/services/general.service';
import { CreditService } from './spending/services/credit.service';

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
