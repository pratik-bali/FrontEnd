import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Demoentity } from './demoentity.model';
import { DemoentityPopupService } from './demoentity-popup.service';
import { DemoentityService } from './demoentity.service';

@Component({
    selector: 'jhi-demoentity-delete-dialog',
    templateUrl: './demoentity-delete-dialog.component.html'
})
export class DemoentityDeleteDialogComponent {

    demoentity: Demoentity;

    constructor(
        private demoentityService: DemoentityService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.demoentityService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'demoentityListModification',
                content: 'Deleted an demoentity'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demoentity-delete-popup',
    template: ''
})
export class DemoentityDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private demoentityPopupService: DemoentityPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.demoentityPopupService
                .open(DemoentityDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
