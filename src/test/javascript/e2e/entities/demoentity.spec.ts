import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Demoentity e2e test', () => {

    let navBarPage: NavBarPage;
    let demoentityDialogPage: DemoentityDialogPage;
    let demoentityComponentsPage: DemoentityComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Demoentities', () => {
        navBarPage.goToEntity('demoentity');
        demoentityComponentsPage = new DemoentityComponentsPage();
        expect(demoentityComponentsPage.getTitle())
            .toMatch(/Demoentities/);

    });

    it('should load create Demoentity dialog', () => {
        demoentityComponentsPage.clickOnCreateButton();
        demoentityDialogPage = new DemoentityDialogPage();
        expect(demoentityDialogPage.getModalTitle())
            .toMatch(/Create or edit a Demoentity/);
        demoentityDialogPage.close();
    });

    it('should create and save Demoentities', () => {
        demoentityComponentsPage.clickOnCreateButton();
        demoentityDialogPage.setUsernameInput('username');
        expect(demoentityDialogPage.getUsernameInput()).toMatch('username');
        demoentityDialogPage.setPasswordInput('password');
        expect(demoentityDialogPage.getPasswordInput()).toMatch('password');
        demoentityDialogPage.save();
        expect(demoentityDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class DemoentityComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-demoentity div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class DemoentityDialogPage {
    modalTitle = element(by.css('h4#myDemoentityLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    usernameInput = element(by.css('input#field_username'));
    passwordInput = element(by.css('input#field_password'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setUsernameInput = function(username) {
        this.usernameInput.sendKeys(username);
    };

    getUsernameInput = function() {
        return this.usernameInput.getAttribute('value');
    };

    setPasswordInput = function(password) {
        this.passwordInput.sendKeys(password);
    };

    getPasswordInput = function() {
        return this.passwordInput.getAttribute('value');
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
