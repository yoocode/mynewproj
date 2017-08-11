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
    var myVar = document.createElement("p");
    
    console.log(this.service.getAllMap().subscribe(data => {
      for( var i = 0; i < data.length; i++) {
        myVar.innerHTML += "SCHOOL NAME: " + data[i].schoolname + "<br>";
        myVar.innerHTML += "Street address: " + data[i].street1 + "<br>";              
        myVar.innerHTML += "City: " + data[i].city + "<br>";              
        myVar.innerHTML += "Zip: " + data[i].zip + "<br><br>";              
                
      }
    }))
    document.getElementById("data").appendChild(myVar);
  }

}
