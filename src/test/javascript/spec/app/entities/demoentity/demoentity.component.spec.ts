/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BuckswiseTestModule } from '../../../test.module';
import { DemoentityComponent } from '../../../../../../main/webapp/app/entities/demoentity/demoentity.component';
import { DemoentityService } from '../../../../../../main/webapp/app/entities/demoentity/demoentity.service';
import { Demoentity } from '../../../../../../main/webapp/app/entities/demoentity/demoentity.model';

describe('Component Tests', () => {

    describe('Demoentity Management Component', () => {
        let comp: DemoentityComponent;
        let fixture: ComponentFixture<DemoentityComponent>;
        let service: DemoentityService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BuckswiseTestModule],
                declarations: [DemoentityComponent],
                providers: [
                    DemoentityService
                ]
            })
            .overrideTemplate(DemoentityComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemoentityComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemoentityService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Demoentity(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.demoentities[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
