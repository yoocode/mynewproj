import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:Service) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    console.log(this.service.getAllMenu().subscribe(data => {
      console.log(data);
    }))
  }

}
