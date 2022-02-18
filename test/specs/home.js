import HomePage from "../pages/home-page";

describe("Home", () => {


//   before(async () =>{ // it is run once before all the tests 
// console.log('This could be used for test setup')
//  //open url
//  await HomePage.open();
//   })

  beforeEach(async () =>{ // it is run once before all the tests 
    console.log('This runs before each test')
     //open url
     await HomePage.open();
     //login
      })

//       after(async () =>{ // it is run once before all the tests 
// console.log('This could be used for test cleanup')
//  //open url
//  await HomePage.open();
//   })

//   afterEach(async () =>{ // it is run once before all the tests 
//     console.log('This runs after each test')
//      logout
   
//       })

  it("open URL and assert title", async () => {
  

    //assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("open About page and assert url", async () => {
    await browser.url("https://practice.automationbro.com/about/");
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });


  it("open home page, click get started and assert that url contains get started text", async () => {
  

    //click get started button
    await HomePage.btnGetStarted.click();

    //assert url contains get started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("click the logo and assert that url does not contain get started text", async () => {
    //open home page
    await browser.url("https://practice.automationbro.com/get-started/");
    //click get started button

    await HomePage.imageLogo.click();

    //assert url does not contains get started texts
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Find the heading element and get the text", async () => {
 
    

    //click get started button

    //find heading element
    const headingEl = await HomePage.txtHeading;

    //get the text
    const headingText = await headingEl.getText();

    //assert the text
    //await expect(headingText).toHaveText('Think different. Make different.'); this assertion includes the getTEXT!
    await expect(headingText).toEqual("Think different. Make different."); //Jest library
    //await expect(headingText).toHaveText('Think different. Make different.'); // wdio library
  });
});
