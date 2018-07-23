import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuckswiseFrontEndSharedModule } from '../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RiskService } from './risk.service';
import {
    LifeInsuranceComponent,
    MedicalInsuranceComponent,
    QuestionnaireComponent,
    lifeRoute,
    medicalRoute,
    questionnaireRoute,
    riskRoute
     } from '.';

// import { QuestionnaireComponent } from './questinnaire/questionnaire.component';
     @NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        RouterModule.forRoot([riskRoute], {useHash: true}),
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        LifeInsuranceComponent,
        MedicalInsuranceComponent,
        QuestionnaireComponent
    ],
    providers: [
        NgbActiveModal,
        RiskService
            ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BuckswiseFrontEndRiskModule {}
