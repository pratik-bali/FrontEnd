import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Demoentity } from './demoentity.model';
import { DemoentityPopupService } from './demoentity-popup.service';
import { DemoentityService } from './demoentity.service';

@Component({
    selector: 'jhi-demoentity-dialog',
    templateUrl: './demoentity-dialog.component.html'
})
export class DemoentityDialogComponent implements OnInit {

    demoentity: Demoentity;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private demoentityService: DemoentityService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.demoentity.id !== undefined) {
            this.subscribeToSaveResponse(
                this.demoentityService.update(this.demoentity));
        } else {
            this.subscribeToSaveResponse(
                this.demoentityService.create(this.demoentity));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Demoentity>>) {
        result.subscribe((res: HttpResponse<Demoentity>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Demoentity) {
        this.eventManager.broadcast({ name: 'demoentityListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-demoentity-popup',
    template: ''
})
export class DemoentityPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private demoentityPopupService: DemoentityPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.demoentityPopupService
                    .open(DemoentityDialogComponent as Component, params['id']);
            } else {
                this.demoentityPopupService
                    .open(DemoentityDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
