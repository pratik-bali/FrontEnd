import { Route } from '@angular/router';
import { UserRouteAccessService } from '../shared';
import { SubscriberComponent } from './subscriber.component';

export const subscriberRoute: Route = 
{
    path: 'subscriber',
    component: SubscriberComponent,
    data: {
        authorities: [],
        pageTitle: 'subscriber.title'
    }
}; 