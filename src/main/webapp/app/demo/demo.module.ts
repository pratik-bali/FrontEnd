import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuckswiseFrontEndSharedModule } from '../shared';

import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { MyloginService } from './mylogin.service';
import { WidgetModule } from './widget/widget.module';

@NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        DemoRoutingModule,
        WidgetModule
        ],
    declarations: [
        DemoComponent
        ],
    entryComponents: [
    ],
    providers: [
        MyloginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndDemoModule {}
