import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { BuckswiseFrontEndSharedModule, UserRouteAccessService } from './shared';
import { BuckswiseFrontEndAppRoutingModule} from './app-routing.module';
import { BuckswiseFrontEndHomeModule } from './home/home.module';
<<<<<<< HEAD
=======

import { BuckswiseFrontEndPratikModule } from './pratik/pratik.module';
import { BuckswiseFrontEndDemoModule } from './demo/demo.module';
import { BuckswiseAppSheetalModule } from './sheetal/sheetal.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 17a22a215a62a48b1d0a25b2a21e8f3b5348c2cc
import { BuckswiseFrontEndAdminModule } from './admin/admin.module';
import { BuckswiseFrontEndAccountModule } from './account/account.module';
import { BuckswiseFrontEndEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { Routes } from '@angular/router';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BuckswiseFrontEndMyAssetsModule } from './my-assets/my-assets.module';
//import { GoalSelectComponent }
// import { MyprofileComponent } from './family/myprofile/myprofile.component';
// import { FamilyprofileComponent } from './family/familyprofile/familyprofile.component';
    import { FamilyModule } from './family/family.module';
    import { GoalModule } from './goal/goal.module';
    import { SubscribeModule } from './subscribe/subscribe.module';
    import { SubscriberModule } from './subscriber/subscriber.module';
    import { BuckswiseFrontEndRiskModule } from './risk/risk.module';
    import { RiskComponent } from './risk/risk.component';
    //import { PaymentComponent } from './subscriber/payment/payment.component';
    import { BuckswiseFrontEndPratikModule } from './pratik/pratik.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
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
// import { SubscriberComponent } from './subscriber/subscriber.component';
//import { SubscribeComponent } from './subscribe/subscribe.component';
//import { GoalComponent } from './goal/goal.component';

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
<<<<<<< HEAD
        BuckswiseFrontEndMyAssetsModule,
        BuckswiseFrontEndRiskModule,     
        FamilyModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        GoalModule,
        SubscribeModule,
        SubscriberModule,
        BuckswiseFrontEndPratikModule

=======
        BuckswiseFrontEndDemoModule,
        BuckswiseAppSheetalModule
>>>>>>> 17a22a215a62a48b1d0a25b2a21e8f3b5348c2cc
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        SuccessComponent,
        FailComponent,
        RiskComponent
       // PaymentComponent
        // SubscriberComponent
        // GoalComponent
       
        // MyprofileComponent,
        // FamilyprofileComponent
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

