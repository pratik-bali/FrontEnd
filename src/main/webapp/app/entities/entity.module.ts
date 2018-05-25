import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BuckswiseFrontEndDemoentityModule } from './demoentity/demoentity.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BuckswiseFrontEndDemoentityModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuckswiseFrontEndEntityModule {}
