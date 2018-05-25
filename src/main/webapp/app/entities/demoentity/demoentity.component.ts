import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Demoentity } from './demoentity.model';
import { DemoentityService } from './demoentity.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-demoentity',
    templateUrl: './demoentity.component.html'
})
export class DemoentityComponent implements OnInit, OnDestroy {
demoentities: Demoentity[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private demoentityService: DemoentityService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.demoentityService.query().subscribe(
            (res: HttpResponse<Demoentity[]>) => {
                this.demoentities = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDemoentities();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Demoentity) {
        return item.id;
    }
    registerChangeInDemoentities() {
        this.eventSubscriber = this.eventManager.subscribe('demoentityListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
