import { Component } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {AlertController, ModalController} from "ionic-angular";

import { CategorizeListPage } from "./categorize-list";

@Component({
  selector: 'page-categorizerestaurant',
  templateUrl: 'categorizerestaurant.html',
})

export class CategorizerestaurantPage {
  a: string;
  categorie: Array<{name: string, count: number}>;
  db: SQLiteObject;

  constructor(public sqlite : SQLite, public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
    this.sqlite.create({
      name: 'restaurants.db',
      location: 'default'
    })
      .then(db => {
        this.db = db;
        this.getCategorie();
      });
  }

  getCategorie() {
    this.categorie = [];
    let sql = "SELECT DISTINCT(Nom) FROM categorie WHERE Nom!=\"\"";
    this.db.executeSql(sql, {})
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          this.db.executeSql("SELECT COUNT(*) as count FROM restaurant WHERE Categorie LIKE \"%"+res.rows.item(i)['Nom']+"%\";", {})
            .then(result => {
              this.categorie.push({
                name :res.rows.item(i)['Nom'],
                count : result.rows.item(0)['count']
              });
            })
            .catch(err => this.a += "not count");
        }
      })
      .catch(err => this.a = "not select");
  }

  CategorizeList(categorie) {
    let modal = this.modalCtrl.create(CategorizeListPage, {categorie: categorie});
    modal.present();

    modal.onDidDismiss(data => {
      this.getCategorie();
    })
  }

  deleteCategorie(categorie) {
      let alert = this.alertCtrl.create({
        title: "Supprimer la categorie "+categorie,
        buttons: [{
          text: 'Annuler',
          role: 'cancel'
        }, {
          text: 'Supprimer',
          handler: data => {
            return data;
          }
        }]
      });
    alert.present();

    alert.onDidDismiss(data => {
      this.db.executeSql('SELECT Nom, Categorie FROM restaurant WHERE Categorie LIKE "%'+categorie+'%" ', {})
        .then(res => {
          for (let i = 0; i < res.rows.length; i++) {
            let newCategorie = res.rows.item(i)['Categorie'].replace(categorie, '');
            this.db.executeSql('UPDATE restaurant SET Categorie=? WHERE Nom=?', [newCategorie, res.rows.item(i)['Nom']]);
          }
        });
      this.db.executeSql('DELETE FROM categorie WHERE Nom=?', [categorie]);
      this.getCategorie();
    });
  }

  addCategorie() {
    let modal = this.alertCtrl.create({
      title: 'Nom',
      inputs: [{
        name: 'nom',
        placeholder: 'Nom'
      }],
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
    modal.present();

    modal.onDidDismiss(data => {
      this.db.executeSql("INSERT INTO categorie (Nom) VALUES (\""+data.nom+"\");", {});
      this.getCategorie();
    })
  }
}
