import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuckswiseSharedModule } from '../shared';

import { MainComponent,
    mainRoute,
    ContactusComponent,
    contactRoute,
    RequestmeetingComponent,
    meetRoute,
    TaxComponent,
    taxRoute,
    sheetalState,

} from './';

import { FormsModule } from '@angular/forms';
import { GrossService } from './main/Services/gross.service';
import { MeetService } from './requestmeeting/meet.service';
import { ContactService } from './contactus/contact.service';
import { EightydService } from './main/Services/eightyd.service';
import { EightycService } from './main/Services/eightyc.service';
import { HomeService } from './main/Services/home.service';
import { OtherService } from './main/Services/other.service';

@NgModule({
    imports: [
        FormsModule,
        BuckswiseSharedModule,
        RouterModule.forChild(sheetalState)
    ],
    declarations: [
        MainComponent,
        ContactusComponent,
        RequestmeetingComponent,
        TaxComponent,
    ],
    providers: [
        GrossService,
        EightycService,
        HomeService,
        EightydService,
        OtherService,
        MeetService,
        ContactService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseAppSheetalModule {}
