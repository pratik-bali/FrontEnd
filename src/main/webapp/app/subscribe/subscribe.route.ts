import { Route } from '@angular/router';
import { UserRouteAccessService } from '../shared';
import { SubscribeComponent } from './subscribe.component';

export const subscribeRoute: Route = 
{
    path: 'subscribe',
    component: SubscribeComponent,
    data: {
        authorities: [],
        pageTitle: 'subscribe.title'
    }
}; 