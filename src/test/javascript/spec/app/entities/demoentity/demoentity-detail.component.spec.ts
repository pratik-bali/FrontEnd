/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BuckswiseTestModule } from '../../../test.module';
import { DemoentityDetailComponent } from '../../../../../../main/webapp/app/entities/demoentity/demoentity-detail.component';
import { DemoentityService } from '../../../../../../main/webapp/app/entities/demoentity/demoentity.service';
import { Demoentity } from '../../../../../../main/webapp/app/entities/demoentity/demoentity.model';

describe('Component Tests', () => {

    describe('Demoentity Management Detail Component', () => {
        let comp: DemoentityDetailComponent;
        let fixture: ComponentFixture<DemoentityDetailComponent>;
        let service: DemoentityService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BuckswiseTestModule],
                declarations: [DemoentityDetailComponent],
                providers: [
                    DemoentityService
                ]
            })
            .overrideTemplate(DemoentityDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemoentityDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemoentityService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Demoentity(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.demoentity).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
