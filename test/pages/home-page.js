import NavComponent from './components/nav-comp';

class HomePage {

    open(){
        browser.url('/');  //go to the base Url
    }

    get btnGetStarted(){  //getter function
        return $('#get-started');
    }

    get imageLogo(){
        return $('.custom-logo-link');
    }

    get txtHeading(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent(){
        return NavComponent;
    }

}

export default new HomePage(); //default means that this is the only class we want to import 
//new is initializing the class