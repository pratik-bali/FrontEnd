import { Route } from '@angular/router';

import { AssetsComponent } from './assets.component';

export const upRoute: Route = {
    path: 'assets',
    component: AssetsComponent,
    data: {
        authorities: [],
        pageTitle: 'user-profile'
    }
};
