import { element, by, ElementFinder } from 'protractor';

export class VtopicComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-vtopic div table .btn-danger'));
    title = element.all(by.css('jhi-vtopic div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class VtopicUpdatePage {
    pageTitle = element(by.id('jhi-vtopic-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    creationDateInput = element(by.id('field_creationDate'));
    vtopictitleInput = element(by.id('field_vtopictitle'));
    vtopicdescInput = element(by.id('field_vtopicdesc'));
    userSelect = element(by.id('field_user'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setCreationDateInput(creationDate) {
        await this.creationDateInput.sendKeys(creationDate);
    }

    async getCreationDateInput() {
        return this.creationDateInput.getAttribute('value');
    }

    async setVtopictitleInput(vtopictitle) {
        await this.vtopictitleInput.sendKeys(vtopictitle);
    }

    async getVtopictitleInput() {
        return this.vtopictitleInput.getAttribute('value');
    }

    async setVtopicdescInput(vtopicdesc) {
        await this.vtopicdescInput.sendKeys(vtopicdesc);
    }

    async getVtopicdescInput() {
        return this.vtopicdescInput.getAttribute('value');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class VtopicDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-vtopic-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-vtopic'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
