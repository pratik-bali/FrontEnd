import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { FamilyComponent } from './';

export const familyRoute: Route = 
{
    path: 'myfamily',
    component: FamilyComponent,
    data: {
        authorities: [],
        pageTitle: 'family.title'
    }
}; 