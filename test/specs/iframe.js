describe('iFrame', () => {
    it('Working with iFrame', async () => {

        //open url
        await browser.url('/iframe-sample');

//access the iframe 1st
  
        const iframe = await $("//iframe[@id='advanced_iframe']");
        await browser.switchToFrame(iframe);

        //verify if the logo exist
        await expect($('#site-logo')).toExist();

       //switch to parent frame
       await browser.switchToParentFrame();

        //verify page title
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    })
} )