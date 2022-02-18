import HomePage from "../pages/home-page";
import allureReporter from "@wdio/allure-reporter";

describe("Navigation menu", () => {
  it("get the text of all menu items and assert them", async () => {

    allureReporter.addFeature('Navigation feature');
    //allureReporter.addSeverity('critical');

   await HomePage.open(); //  '/' will go the base url in the conf file!

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    expect(expectedLinks).toEqual(actualLinks);
  });

  it("get the text of all menu items and assert them -using wait command ", async () => {
    await browser.url("/"); //  '/' will go the base url in the conf file!

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    await $("#primary-menu").waitForDisplayed({ timeout: 1000 }); //custom time to wait in the {}. the global wait is set in the conf file

    // await $('#primary-menu').waitForClickable({timeout:1000});

    //wait until the HOme string is  displayed in the navigation
    await browser.waitUntil(
      async function () {
        const homeText = await HomePage.NavComponent.firstListNavMenu.getText(); //Home
        return homeText === "Home"; // true or false
      },
      {
        timeoutMsg: "Could not verify the Home text for primary-menu element",
      }
    );

    //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    expect(expectedLinks).toEqual(actualLinks);
  });
});
