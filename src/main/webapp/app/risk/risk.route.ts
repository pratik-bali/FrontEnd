import { Route } from '@angular/router';

import { lifeRoute, LifeInsuranceComponent } from '.';
import { RiskComponent } from './risk.component';

// const RISK_ROUTES = [
//    lifeRoute
//   ];
export const riskRoute: Route = {
    path: 'risk',
    component: RiskComponent,
};
