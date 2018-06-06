import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../shared';

import { LifeInsuranceComponent } from './life-insurance.component';

export const lifeRoute: Route = {
    path: 'life',
    component:  LifeInsuranceComponent,
    data: {
        authorities: [],
        pageTitle: 'Life-insurance'
    }
};
