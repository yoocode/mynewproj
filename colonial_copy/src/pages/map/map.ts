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
    var dataElem = document.createElement("p");
    
  this.service.getAllMap().subscribe(data => {
      for( var i = 0; i < data.length; i++) {
        dataElem.innerHTML += "SCHOOL NAME: " + data[i].schoolname + "<br>";
        dataElem.innerHTML += "Street address: " + data[i].street1 + "<br>";              
        dataElem.innerHTML += "City: " + data[i].city + "<br>";              
        dataElem.innerHTML += "Zip: " + data[i].zip + "<br><br>";              
      }
    })
    
    document.getElementById("data").appendChild(dataElem);
  }

}
