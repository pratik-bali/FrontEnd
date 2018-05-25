import { Route } from '@angular/router';

import { DemoComponent } from './';

export const DemoRoute: Route = {
    path: 'demo',
    component: DemoComponent,
    data: {
        authorities: [],
        pageTitle: 'this is demo'
    }
};
