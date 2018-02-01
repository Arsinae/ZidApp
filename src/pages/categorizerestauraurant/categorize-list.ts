import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@Component({
  selector: 'page-categorize-list',
  templateUrl: 'categorize-list.html',
})
export class CategorizeListPage {

  a: string;
  categorie: string;
  items: Array<{name: string, city: string, lat: number, lng: number, time: number, icon: string}>;
  db: SQLiteObject;

  constructor(public params: NavParams, public viewCtrl: ViewController,
              public sqlite: SQLite, public alertCtrl: AlertController) {
    this.categorie = params.get('categorie');
    this.sqlite.create({
      name: 'restaurants.db',
      location: 'default'
    })
      .then(db => {
        this.db = db;
        this.SelectList();
      });
  }

  SelectList() {
    this.db.executeSql("SELECT * FROM restaurant WHERE Categorie LIKE \"%"+this.categorie+"%\";", {},)
      .then(res => {
        this.items = [];
        for (let i = 0; i < res.rows.length; i++) {
          let iconename = (this.categorie == "Cancer") ? "medkit" : "nutrition";
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
      .catch(err => this.a += "not selected");
  }

  dismiss() {
    this.viewCtrl.dismiss(null);
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

  deleteRestaurantFromCategorie(name) {
    this.db.executeSql("SELECT Categorie FROM restaurant WHERE NOM=?", [name])
      .then(res => {
        let categorie = res.rows.item(0)['Categorie'].replace(this.categorie, '');
        this.db.executeSql("UPDATE restaurant SET Categorie=? WHERE Nom=?", [categorie, name]);
        this.SelectList();
      })
  }

  addRestaurant() {
    let alert = this.alertCtrl.create({
      title: 'Ajouter à la catégorie '+this.categorie,
      buttons: [{
        text: 'Annuler',
        role: 'cancel'
      },{
        text: 'Valider',
        handler: data => {
          return (data);
        }
      }]
    });
    this.db.executeSql('SELECT Nom, Categorie FROM restaurant WHERE Categorie NOT LIKE "%'+this.categorie+'%";', {})
      .then(res => {
        for (let i = 0; i < res.rows.length; i++) {
          alert.addInput({
            name: res.rows.item(i)['Nom'],
            type: 'checkbox',
            label: res.rows.item(i)['Nom'],
            value: res.rows.item(i)['Nom']
          });
        }
        alert.present();
      });

    alert.onDidDismiss(data => {
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql('UPDATE restaurant SET Categorie=Categorie||"-'+this.categorie+'" WHERE Nom= ?', [data[i]])
          .then(res => {})
          .catch(err => {});
      }
      this.SelectList();
    });
  }
}
