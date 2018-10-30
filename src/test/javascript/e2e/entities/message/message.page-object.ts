import { element, by, ElementFinder } from 'protractor';

export class MessageComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-message div table .btn-danger'));
    title = element.all(by.css('jhi-message div h2#page-heading span')).first();

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

export class MessageUpdatePage {
    pageTitle = element(by.id('jhi-message-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    creationDateInput = element(by.id('field_creationDate'));
    messageTextInput = element(by.id('field_messageText'));
    isDeliveredInput = element(by.id('field_isDelivered'));
    userSelect = element(by.id('field_user'));
    communitySelect = element(by.id('field_community'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setCreationDateInput(creationDate) {
        await this.creationDateInput.sendKeys(creationDate);
    }

    async getCreationDateInput() {
        return this.creationDateInput.getAttribute('value');
    }

    async setMessageTextInput(messageText) {
        await this.messageTextInput.sendKeys(messageText);
    }

    async getMessageTextInput() {
        return this.messageTextInput.getAttribute('value');
    }

    getIsDeliveredInput() {
        return this.isDeliveredInput;
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

    async communitySelectLastOption() {
        await this.communitySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async communitySelectOption(option) {
        await this.communitySelect.sendKeys(option);
    }

    getCommunitySelect(): ElementFinder {
        return this.communitySelect;
    }

    async getCommunitySelectedOption() {
        return this.communitySelect.element(by.css('option:checked')).getText();
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

export class MessageDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-message-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-message'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
