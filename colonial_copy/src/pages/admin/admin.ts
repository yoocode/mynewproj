import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';
import { HomePage } from '../pages';

/**
 * Generated class for the AdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  date: String ="";
  entree: String ="";
  fruitOption: String ="";
  vegieOption: String ="";
  milkOption: String ="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:Service) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  postMenu(){
    var menudata = {
      date: this.date,
      entree: this.entree,
      fruitOption:  this.fruitOption,
      vegieOption: this.vegieOption,
      milkOption: this.milkOption
    };
    console.log(menudata);
    this.service.postMenu(menudata)
    .subscribe(data => {
      console.log(data);
    });;
    this.service.getAllMap()
    .subscribe(data => {
      console.log(data);
    });;
    this.navCtrl.setRoot(HomePage);
  }

}
