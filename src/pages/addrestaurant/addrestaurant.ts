import { Component } from '@angular/core';
import {AlertController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-addrestaurant',
  templateUrl: 'addrestaurant.html',
})
export class AddrestaurantPage {

  private newRestaurant: FormGroup;
  a: string;

  constructor(public params: NavParams, public viewCtrl: ViewController,
              private formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.newRestaurant = this.formBuilder.group({
      name: ['', Validators.required],
      categorie: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  saveRestaurant() {
    if (this.newRestaurant.controls['name'].valid && this.newRestaurant.controls['categorie'].valid
    && this.newRestaurant.controls['address'].valid)
      this.viewCtrl.dismiss({
        name: this.newRestaurant.controls['name'].value,
        categorie: this.newRestaurant.controls['categorie'].value,
        address: this.newRestaurant.controls['address'].value
      });
    else {
      let alert = this.alertCtrl.create({
        title: "Impossible d'ajouter le restaurant",
        subTitle: 'Merci de remplir tous les champs!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss(null);
  }
}
