import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuckswiseFrontEndSharedModule } from '../shared';
import { StocksService } from './assets/stocks.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {
    AssetsComponent,
    MutualFundComponent,
    mutualRoute,
    userprofileState
     } from './';
import { MutualFundService } from './assets/mutual-fund.service';
import { AssetsService } from './assets/assets.service';
// import { stocksRoute } from '../entities/stocks';

@NgModule({
    imports: [
        BuckswiseFrontEndSharedModule,
        RouterModule.forChild(userprofileState),
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        AssetsComponent,
        MutualFundComponent
    ],
    providers: [
        StocksService,
        NgbActiveModal,
        MutualFundService,
        AssetsService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BuckswiseFrontEndMyAssetsModule {}
