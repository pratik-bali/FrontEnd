import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuckswiseFrontEndSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ReferComponent } from './refer/refer.component';
import { HowDoWeDoItComponent } from './how-do-we-do-it/how-do-we-do-it.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        BannerComponent,
        MainBodyComponent,
        IntroComponent,
        ServicesComponent,
        SubscriptionComponent,
        ReferComponent,
        HowDoWeDoItComponent,
        PartnersComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndHomeModule {}
