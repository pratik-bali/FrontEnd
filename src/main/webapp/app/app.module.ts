import { DashBoardModule } from './dashboard/dashboard.module';
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

import { Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BuckswiseFrontEndMyAssetsModule } from './my-assets/my-assets.module';
import { FamilyModule } from './family/family.module';
import { GoalModule } from './goal/goal.module';
// import { SubscribeModule } from './subscribe/subscribe.module';
// import { SubscriberModule } from './subscriber/subscriber.module';
import { BuckswiseFrontEndRiskModule } from './risk/risk.module';
import { RiskComponent } from './risk/risk.component';
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { DraggableModule } from './demo/widget/draggable/draggable.module';
// import { SubscriberComponent } from './subscriber/subscriber.component';
// import { SubscribeComponent } from './subscribe/subscribe.component';
// import { GoalComponent } from './goal/goal.component';

@NgModule({
    imports: [
        BrowserModule,
        BuckswiseFrontEndAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BuckswiseFrontEndSharedModule,
        BuckswiseFrontEndHomeModule,
        BuckswiseFrontEndAdminModule,
        BuckswiseFrontEndAccountModule,
        BuckswiseFrontEndEntityModule,

        BuckswiseFrontEndMyAssetsModule,
        BuckswiseFrontEndRiskModule,
        FamilyModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        GoalModule,
        BuckswiseFrontEndPratikModule,
        BuckswiseFrontEndDemoModule,
        BuckswiseAppSheetalModule,
        BuckswiseAppSheetalModule,
        DraggableModule,

        DashBoardModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        SuccessComponent,
        FailComponent,
        RiskComponent,
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
    bootstrap: [ JhiMainComponent ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class BuckswiseFrontEndAppModule {}
