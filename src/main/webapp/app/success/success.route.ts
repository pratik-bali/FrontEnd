import { Route } from '@angular/router';
import { UserRouteAccessService } from '../shared';
import { SuccessComponent } from './success.component';

export const successRoute: Route = 
{
    path: 'success',
    component: SuccessComponent,
    data: {
        authorities: [],
        pageTitle: 'subscriber.title'
    }
}; 