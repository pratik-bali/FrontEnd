import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BuckswiseFrontEndFamilyModule } from './family/family.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BuckswiseFrontEndFamilyModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndEntityModule {}
