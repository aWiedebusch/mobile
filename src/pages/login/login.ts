import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  bg_url: string;
  logo: string;
  dealer: string;

  constructor(public navCtrl: NavController, public user: User, 
    public toastCtrl: ToastController, public storage: Storage) {

    //Will have to download the dealership image and logo and set their names.
    // angular new HttpRequest

    //Need save login check.
    //Check for login auth token
    //auth token generated on backend

    this.storage.get( 'dealer' ).then((dealer_value) => 
      {
        if( dealer_value === "Dealer1" ) {
          this.bg_url = "../assets/imgs/jeff_goldblum.png";
          this.logo = "../assets/imgs/target-logo.png";
        } else {
          this.bg_url = "../assets/imgs/hbs_people.jpg";
        this.logo = "../assets/imgs/hbs_logo.png";
        }
      });
    
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp : any) => {
      this.storage.set('dealer', resp.dealer);
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      let toast = this.toastCtrl.create({
        message: "Unable to log in",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
