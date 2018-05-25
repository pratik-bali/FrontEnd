import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { DemoentityComponent } from './demoentity.component';
import { DemoentityDetailComponent } from './demoentity-detail.component';
import { DemoentityPopupComponent } from './demoentity-dialog.component';
import { DemoentityDeletePopupComponent } from './demoentity-delete-dialog.component';

export const demoentityRoute: Routes = [
    {
        path: 'demoentity',
        component: DemoentityComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Demoentities'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'demoentity/:id',
        component: DemoentityDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Demoentities'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const demoentityPopupRoute: Routes = [
    {
        path: 'demoentity-new',
        component: DemoentityPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Demoentities'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'demoentity/:id/edit',
        component: DemoentityPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Demoentities'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'demoentity/:id/delete',
        component: DemoentityDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Demoentities'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
