import ContactsPage from '../pages/contacts-page';


describe("Contacts page", () => {

  it("fill all input fields and submit form", async () => {

    await ContactsPage.open();
   await ContactsPage.submitForm("test name", "test@test.test", "2345678", "this is a test message");

   const successAlert = ContactsPage.successMessage;
    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with"
    );
  });
});
