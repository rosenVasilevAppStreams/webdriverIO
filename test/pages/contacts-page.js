class ContactsPage {

    open(){
       return browser.url("/contact");
    }

    get contactsBtn(){
        return $("li[id='menu-item-493'] [href]");
    }

    get fieldName(){
        return $("#evf-277-field_ys0GeZISRs-1");
    }

    get emailField(){
        return $('#evf-277-field_LbH5NxasXM-2');
    }

    get phoneNumField(){
        return $('#evf-277-field_66FR384cge-3');
    }

    get messageField(){
        return $("#evf-277-field_yhGx3FOwr2-4");
    }

    get submitBtn(){
        return $("#evf-submit-277");
    }

    get successMessage(){
        return $(
            "//div[contains(text(),'Thanks for contacting us! We will be in touch with')]"
          );
    }

    async submitForm(name, email, phone, message){

        await this.fieldName.addValue(name); //or setValue() 1st clear (clearValue()) the text addValue adds the text in the input field
        //or await $("#evf-277-field_ys0GeZISRs-1").addValue("test name")
        await this.emailField.addValue(email);
        await this.phoneNumField.addValue(phone);
        await this.messageField.addValue(message);
        await this.submitBtn.click();  //this means that we want to access this particular class 

    }

}

export default new ContactsPage();