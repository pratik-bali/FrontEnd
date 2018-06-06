import { Route } from '@angular/router';

import { MutualFundComponent } from './mutual-fund.component';

export const mutualRoute: Route = {
    path: 'mutual-fund',
    component: MutualFundComponent,
    data: {
        authorities: [],
        pageTitle: 'Mutual-Fund'
    }
};
