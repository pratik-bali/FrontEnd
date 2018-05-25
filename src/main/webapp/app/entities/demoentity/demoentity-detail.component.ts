import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Demoentity } from './demoentity.model';
import { DemoentityService } from './demoentity.service';

@Component({
    selector: 'jhi-demoentity-detail',
    templateUrl: './demoentity-detail.component.html'
})
export class DemoentityDetailComponent implements OnInit, OnDestroy {

    demoentity: Demoentity;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private demoentityService: DemoentityService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDemoentities();
    }

    load(id) {
        this.demoentityService.find(id)
            .subscribe((demoentityResponse: HttpResponse<Demoentity>) => {
                this.demoentity = demoentityResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDemoentities() {
        this.eventSubscriber = this.eventManager.subscribe(
            'demoentityListModification',
            (response) => this.load(this.demoentity.id)
        );
    }
}
