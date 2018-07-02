import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute} from './layouts';
import {registerRoute} from './account';
import { DEBUG_INFO_ENABLED } from './app.constants';
 import { GoalComponent } from './goal/goal.component';
import { GoalSelectComponent } from './goal';
import { GoalAddButtonComponent} from './goal';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SuccessComponent } from './success/success.component';
import { LifeInsuranceComponent } from './risk/life-insurance/life-insurance.component';
import { lifeRoute } from './risk/life-insurance/life-insurance.route';
import { medicalRoute, MedicalInsuranceComponent, questionnaireRoute } from './risk';

const LAYOUT_ROUTES = [
    navbarRoute,
    registerRoute,
    lifeRoute,
    medicalRoute,
    questionnaireRoute,
    ...errorRoute,
    {path: 'goalselect', component: GoalSelectComponent },
    {path: 'goalAdd', component: GoalAddButtonComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: false , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class BuckswiseFrontEndAppRoutingModule {}
export const routingComponents = [ LifeInsuranceComponent, MedicalInsuranceComponent,
];
