import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ZidanePage } from '../pages/zidane/zidane';
import { LocalizePage} from "../pages/localize/localize";
import {RestaurantListPage} from "../pages/restaurant-list/restaurant-list";
import {AddrestaurantPage} from "../pages/addrestaurant/addrestaurant";
import { CategorizerestaurantPage } from "../pages/categorizerestauraurant/categorizerestaurant";
import { CategorizeListPage } from "../pages/categorizerestauraurant/categorize-list";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from '@ionic-native/google-maps';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import { File } from '@ionic-native/file';
import { HTTP } from "@ionic-native/http";
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ZidanePage,
    LocalizePage,
    RestaurantListPage,
    AddrestaurantPage,
    CategorizerestaurantPage,
    CategorizeListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ZidanePage,
    LocalizePage,
    RestaurantListPage,
    AddrestaurantPage,
    CategorizerestaurantPage,
    CategorizeListPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    GoogleMaps,
    SQLite,
    SplashScreen,
    File,
    HTTP,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  db: SQLiteObject;

  constructor(public sqlite: SQLite) {
    this.sqlite.create({
      name: 'restaurants.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS restaurant (Nom TEXT, Categorie TEXT, Adresse TEXT, City TEXT, Lat INTEGER, Lng INTEGER, Time INTEGER);", {})
      .then(() => {
        db.executeSql("SELECT * FROM restaurant;", {},)
        .then(res => {
          if (res.rows.length == 0)
            this.initializeDB(db);
        })
      })
    });
  }

  initializeDB(db) {
    this.db = db;
    let arrayBase = this.initializeRestaurant();
    for (let i = 0; i < arrayBase.length; i++) {
      let sql = 'INSERT INTO restaurant (Nom, Categorie, Adresse, City, Lat, Lng, Time) VALUES ("'+
        arrayBase[i].name+'", "'+arrayBase[i].categorie+'", "'+arrayBase[i].address+'", "'+arrayBase[i].city+'", '+arrayBase[i].lat+
        ', '+arrayBase[i].lng+', '+arrayBase[i].time+')';
      this.db.executeSql(sql, {});
      this.db.executeSql("CREATE TABLE IF NOT EXISTS categorie (Nom TEXT);", {})
        .then(() => {
          this.db.executeSql("INSERT INTO categorie (Nom) VALUES (\"Cancer\");", {});
        });
    }
  }

  initializeRestaurant() {
    let restaurants = [
      {name: "Saiko Chicken", categorie: "Cancer", address: "8 rue du Vieux Marché aux Vins", city: 'Strasbourg', lat: 48.58360070000001, lng: 7.7409376, time: 10},
      {name: "Monoprix", categorie: "", address: "Place Kléber", city: 'Strasbourg', lat: 48.58327209999999, lng: 7.7451787, time: 4},
      {name: "Subway", categorie: "", address: "9 Rue des Frères", city: 'Strasbourg', lat: 48.5827021, lng: 7.7522498, time: 4},
      {name: "Cap'tain Flam", categorie: "", address: "9b Rue des Frères", city: 'Strasbourg', lat: 48.582733, lng: 7.7523836, time: 4},
      {name: "Banette", categorie: "", address: "11 Rue des Frères", city: 'Strasbourg', lat: 48.5828283, lng: 7.752460699999999, time: 4},
      {name: "Flam's", categorie: "", address: "29 Rue des Frères", city: 'Strasbourg', lat: 48.5824716, lng: 7.751331800000001, time: 4},
      {name: "Tentations", categorie: "", address: "15 Rue des Sœurs", city: 'Strasbourg', lat: 48.5828239, lng: 7.753502399999999, time: 4},
      {name: "Hot Dog City", categorie: "", address: "26 Rue des Frères", city: 'Strasbourg', lat: 48.5830171, lng: 7.753940399999999, time: 4},
      {name: "Kebab Food", categorie: "", address: "37 Rue des Frères", city: 'Strasbourg', lat: 48.5831021, lng: 7.7539998, time: 5},
      {name: "FEC", categorie: "", address: "17 Place St Étienne", city: 'Strasbourg', lat: 48.5829755, lng: 7.7544423, time: 5},
      {name: "231 East Street", categorie: "", address: "3 Place St Étienne", city: 'Strasbourg', lat: 48.5831058, lng: 7.7543769, time: 5},
      {name: "Burgers de Papa", categorie: "", address: "1 Place St Étienne", city: 'Strasbourg', lat: 48.5831192, lng: 7.754293700000001, time: 5},
      {name: "Académie de la Bière Cathédrale", categorie: "", address: "29 Rue des Juifs", city: 'Strasbourg', lat: 48.5842117, lng: 7.753300299999999, time: 5},
      {name: "Pizzeria Les 4 Saisons", categorie: "Cancer", address: "22 Rue Brûlée", city: 'Strasbourg', lat: 48.5848232, lng: 7.753807600000001, time: 6},
      {name: "Nooï", categorie: "", address: "6 Passage de la Pomme de Pin", city: 'Strasbourg', lat: 48.5839483, lng: 7.7470173, time: 3},
      {name: "Mac Donald's", categorie: "", address: "33 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5830168, lng: 7.7471474, time: 3},
      {name: "Pomme de Pain", categorie: "", address: "6 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5830594, lng: 7.7468801, time: 3},
      {name: "Brioche Dorée", categorie: "", address: "4 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5831306, lng: 7.7468801, time: 3},
      {name: "Simply Market", categorie: "", address: "47 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5825856, lng: 7.7474455, time: 3},
      {name: "Paul", categorie: "", address: "41/45 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5827512, lng: 7.7467618, time: 2},
      {name: "Made In France Nancy", categorie: "", address: "1 Rue Saint-Epvre", city: 'Nancy', lat: 48.6963429, lng: 6.179468099999999, time: 100519}
    ];
    return restaurants;
  }

}
