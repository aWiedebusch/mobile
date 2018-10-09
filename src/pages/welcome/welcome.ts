import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  bg_url: string;
  logo: string;

  constructor(public navCtrl: NavController) { 
    //Can put dealership check for splash bg and icon here
    //Use local storage after login to set url.
    this.bg_url = "../assets/imgs/hbs_people.jpg";
    this.logo = "../assets/imgs/hbs_logo.png";
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  // signup() {
  //   this.navCtrl.push('SignupPage');
  // }
}
