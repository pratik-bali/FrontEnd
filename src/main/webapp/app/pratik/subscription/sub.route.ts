import { Route } from '@angular/router';

import { SubscriptionComponent } from './subscription.component';

export const subRoute: Route = {
    path: 'subscription',
    component: SubscriptionComponent,
    data: {
        authorities: [],
        pageTitle: 'Subscription'
    }
};
