import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { BuckswiseFrontEndSharedModule, UserRouteAccessService } from './shared';
import { BuckswiseFrontEndAppRoutingModule} from './app-routing.module';
import { BuckswiseFrontEndHomeModule } from './home/home.module';

import { BuckswiseFrontEndPratikModule } from './pratik/pratik.module';
import { BuckswiseFrontEndDemoModule } from './demo/demo.module';
import { BuckswiseAppSheetalModule } from './sheetal/sheetal.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuckswiseFrontEndAdminModule } from './admin/admin.module';
import { BuckswiseFrontEndAccountModule } from './account/account.module';
import { BuckswiseFrontEndEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// import { FamilyModule } from './family/family.module';
// import { GoalModule } from './goal/goal.module';
// // import { SubscribeModule } from './subscribe/subscribe.module';
// import { SubscriberModule } from './subscriber/subscriber.module';
// import { BuckswiseFrontEndRiskModule } from './risk/risk.module';
// import { RiskComponent } from './risk/risk.component';
// import { BuckswiseFrontEndMyAssetsModule } from './my-assets/my-assets.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BuckswiseFrontEndAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BuckswiseFrontEndSharedModule,
        BuckswiseFrontEndHomeModule,
        BuckswiseFrontEndPratikModule,
        BuckswiseFrontEndAdminModule,
        BuckswiseFrontEndAccountModule,
        BuckswiseFrontEndEntityModule,
        BuckswiseFrontEndDemoModule,
        BuckswiseAppSheetalModule,
        // BuckswiseFrontEndMyAssetsModule,
        // BuckswiseFrontEndRiskModule,
        // FamilyModule,
        // FormsModule,
        // GoalModule,

        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        // RiskComponent
    ],
    providers: [
        ProfileService,
        PaginationConfig,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [
                LocalStorageService,
                SessionStorageService
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [
                JhiEventManager
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        }
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BuckswiseFrontEndAppModule {}
