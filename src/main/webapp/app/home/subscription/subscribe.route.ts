import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../shared';
import { SubscriptionComponent } from './subscription.component';

export const subscribeRoute: Route = {
    path: 'subscribe',
    component: SubscriptionComponent,
    data: {
        authorities: [],
        pageTitle: 'subscribe.title'
    }
};
