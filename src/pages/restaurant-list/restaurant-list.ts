import { Component } from '@angular/core';
import {ModalController, NavController, ToastController, AlertController} from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { HTTP } from "@ionic-native/http";
import {AddrestaurantPage} from "../addrestaurant/addrestaurant";

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {

  items: Array<{name: string, city: string, lat: number, lng: number, time: number, icon: string}>;
  database: SQLiteObject;
  a: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public sqlite: SQLite, public modalCtrl: ModalController,
              public toastCtrl: ToastController, private http: HTTP) {
    this.sqlite.create({
      name: 'restaurants.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.initializeDatabase(db);
      })
      .catch(e => console.log(e));
  }

  initializeDatabase(db: SQLiteObject) {
    this.database = db;
    this.refreshList();
  }

  addRestaurant() {
    let modal = this.modalCtrl.create(AddrestaurantPage);
    modal.present();

    modal.onDidDismiss(data => {
      if (data)
        this.addRestaurantToDB(data, 1);
      this.refreshList();
    });
  }

  addRestaurantToDB(data, state) {
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json",
      {'key': 'AIzaSyC_wau-0xPQXdA9NnmPMQjtrH6TUQgGsCY',
        'address': data.address.replace(/ /g, "+", )+'+Strasbourg'}, {})
      .then(res => {
        let test = JSON.parse(res.data);
        let lat = (test.results[0].geometry.location.lat) ? (test.results[0].geometry.location.lat) : 48.5833924;
        let lng = (test.results[0].geometry.location.lng) ? (test.results[0].geometry.location.lng) : 7.749747699999999;
        let city = (test.results[0].formatted_address).split(" ").splice(-2)[0].slice(1, -1);
        city = (city) ? city : "Strasbourg";
        this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json",
          {
            'key': 'AIzaSyCMVZO6O4k9mYQT8au5kLTHfhBf3uopMCg', 'origins': '48.5833924,7.749747699999999',
            'destinations': String(lat)+','+String(lng),'mode': 'walking' }, {})
          .then(pos => {
            let test = JSON.parse(pos.data);
            let time = (test.rows[0].elements[0].duration.value) ? (test.rows[0].elements[0].duration.value) : 600;
            time = Math.round(time / 60);
            let sql = 'INSERT INTO restaurant (Nom, Categorie, Adresse, City, Lat, Lng, Time) VALUES ("' +
              data.name + '", "' + data.categorie + '", "' + data.address + '", "' + city + '", ' + lat + ', ' + lng + ', '+time+')';
            this.database.executeSql(sql, {})
              .then(() => {
                let toast = this.toastCtrl.create({
                  message: "Nouveau restaurant ajouté: " + data.name,
                  position: "top",
                  cssClass: "success",
                  duration: 2000
                });
                toast.present();
                this.refreshList();
              })
              .catch(() => this.createToastError());
          })
          .catch(() => this.createToastError());
      })
      .catch(err => this.createToastError());
  }

  createToastError() {
    let toast = this.toastCtrl.create({
      message: "Echec de l'ajout du restaurant",
      position: "top",
      cssClass: "error",
      duration: 2000
    });
    toast.present();
  }

  deleteRestaurantFromDB(name) {
    let sql = 'DELETE FROM restaurant WHERE Nom="'+name+'";';
    this.database.executeSql(sql, {})
      .then(() => {
          let toast = this.toastCtrl.create({
            message: "Restaurant supprimé: " + name,
            position: "top",
            cssClass: "success",
            duration: 2000
          });
          toast.present();
      })
      .catch(() => {
        let toast = this.toastCtrl.create({
          message: "Echec de la suppression du restaurant",
          position: "top",
          cssClass: "error",
          duration: 2000
        });
        toast.present();
      });
    this.refreshList();
  }

  refreshList() {
    this.database.executeSql("SELECT * FROM restaurant;", {},)
      .then((res) => {
        this.items = [];
        for (let i = 0; i < res.rows.length; i++) {
          let iconename = (res.rows.item(i)['Categorie'] == "Cancer") ? "medkit" : "nutrition";
          this.items.push({
            name: res.rows.item(i)['Nom'],
            city: res.rows.item(i)['City'],
            lat: res.rows.item(i)['Lat'],
            lng: res.rows.item(i)['Lng'],
            time: res.rows.item(i)['Time'],
            icon: iconename
          });
        }
      })
      .catch(e => console.log(e));
  }

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  }

  chooseRestaurant() {
      this.shuffle(this.items);
      let alert = this.alertCtrl.create({
        title: 'Nous vous conseillons:',
        message: this.items[0].name,
        buttons: ['Bon appétit'],
        cssClass: "alertClass"
      });
      alert.present();
  }

}
