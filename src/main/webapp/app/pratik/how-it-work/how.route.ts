import { Route } from '@angular/router';

import { HowItWorkComponent } from './how-it-work.component';

export const howRoute: Route = {
    path: 'how',
    component: HowItWorkComponent,
    data: {
        authorities: [],
        pageTitle: 'How it works'
    }
};
