import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../shared';

import { MedicalInsuranceComponent } from './medical-insurance.component';

export const medicalRoute: Route = {
    path: 'medical',
    component:  MedicalInsuranceComponent,
    data: {
        authorities: [],
        pageTitle: 'medical-insurance'
    }
};
