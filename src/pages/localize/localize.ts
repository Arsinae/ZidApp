import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, MarkerOptions, Marker, GoogleMapOptions
} from '@ionic-native/google-maps';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Component({
  selector: 'page-localize',
  templateUrl: 'localize.html'
})

export class LocalizePage {
  latitude: number;
  longitude: number;
  map: GoogleMap;
  a: string;
  db: SQLiteObject;

  constructor(private geolocation: Geolocation, private googleMaps: GoogleMaps,
              private sqlite: SQLite) {
    this.sqlite.create({
      name: 'restaurants.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
    });
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
   this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     this.loadMap2();
   }).catch((error) => {
      this.a = 'Error getting location';
    });

  }


    loadMap2() {
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: this.latitude,
              lng: this.longitude
            },
            zoom: 15
          }
        };

        this.map = new GoogleMap('map', mapOptions);

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
          this.db.executeSql('SELECT Nom, Lat, Lng FROM restaurant', {})
            .then(res => {
              for (let i = 0; i < res.rows.length; i++) {
                this.map.addMarker({
                  title: res.rows.item(i)['Nom'],
                  icon: 'red',
                  animation: 'DROP',
                  position: {
                    lat: Number(res.rows.item(i)['Lat']),
                    lng: Number(res.rows.item(i)['Lng'])
                  }
                });
              }
            });
        });
    }
}
