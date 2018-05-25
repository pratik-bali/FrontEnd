import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuckswiseFrontEndSharedModule } from '../../shared';
import {
    DemoentityService,
    DemoentityPopupService,
    DemoentityComponent,
    DemoentityDetailComponent,
    DemoentityDialogComponent,
    DemoentityPopupComponent,
    DemoentityDeletePopupComponent,
    DemoentityDeleteDialogComponent,
    demoentityRoute,
    demoentityPopupRoute,
} from './';

const ENTITY_STATES = [
    ...demoentityRoute,
    ...demoentityPopupRoute,
];

@NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DemoentityComponent,
        DemoentityDetailComponent,
        DemoentityDialogComponent,
        DemoentityDeleteDialogComponent,
        DemoentityPopupComponent,
        DemoentityDeletePopupComponent,
    ],
    entryComponents: [
        DemoentityComponent,
        DemoentityDialogComponent,
        DemoentityPopupComponent,
        DemoentityDeleteDialogComponent,
        DemoentityDeletePopupComponent,
    ],
    providers: [
        DemoentityService,
        DemoentityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndDemoentityModule {}
