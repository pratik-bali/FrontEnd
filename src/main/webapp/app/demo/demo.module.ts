import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuckswiseFrontEndSharedModule } from '../shared';

import { DemoComponent } from './demo.component';
import { DemoRoute } from './demo.route';
import { MyloginService } from './mylogin.service';

@NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        RouterModule.forChild([DemoRoute])
    ],
    declarations: [
        DemoComponent,
    ],
    entryComponents: [
    ],
    providers: [
        MyloginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndDemoModule {}