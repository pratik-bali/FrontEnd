import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Register } from './register.service';
import { LoginModalService, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from '../../shared';

@Component({
    selector: 'jhi-register',
    templateUrl: './register.component.html',
    styleUrls: [
        'register.component.css'
    ]
})
export class RegisterComponent implements OnInit, AfterViewInit {

    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    modalRef: NgbModalRef;
    submitEvent = false;
    userMailOtp;
    systemMailOtp ;
    VerifyButtonClicked = false;
    isVerify = false;

    constructor(
        private loginModalService: LoginModalService,
        private registerService: Register,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
    }

    ngOnInit() {
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    register() {
        this.submitEvent = true;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.registerAccount.langKey = 'en';
            this.registerService.save(this.registerAccount)
                .subscribe( (data)  => {
                    console.log('under save component', data);
                    this.systemMailOtp = data;
                this.success = true;
            }, (response) => {
                this.processError(response);
                console.log('responce from register : ', response);
                }
            );
        }
        console.log(this.registerAccount.email);
        this.registerService.sendMail(this.registerAccount.email);
    }

    verify() {
        // this.submitEvent = 'true';
        // console.log(this.userMailOtp);
        // console.log(this.registerAccount.email);
        this.VerifyButtonClicked = true;
        if (this.userMailOtp === this.systemMailOtp) {
            console.log('success');
            this.isVerify = true;
        } else {
            console.log('failed');
            this.isVerify = false;
        }
    }

    openLogin() {
        this.modalRef = this.loginModalService.open();
    }

    private processError(response: HttpErrorResponse) {
        this.success = null;
        if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = 'ERROR';
        }
    }
}
