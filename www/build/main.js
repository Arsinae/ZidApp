webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = (function () {
    function HelloIonicPage() {
    }
    return HelloIonicPage;
}());
HelloIonicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hello-ionic',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to your first Ionic app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/hello-ionic/hello-ionic.html"*/
    }),
    __metadata("design:paramtypes", [])
], HelloIonicPage);

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZidanePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZidanePage = (function () {
    function ZidanePage() {
    }
    return ZidanePage;
}());
ZidanePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-zidane',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/zidane/zidane.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Zidane</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-slides pager>\n		<ion-slide>\n			<img style="height: 400px" src="assets/img/zidane.png"/>\n		</ion-slide>\n\n		<ion-slide>\n			<h2>====</h2>\n		</ion-slide>\n\n		<ion-slide>\n			<img src="assets/img/poulet.png"/>\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/zidane/zidane.html"*/
    }),
    __metadata("design:paramtypes", [])
], ZidanePage);

//# sourceMappingURL=zidane.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalizePage = (function () {
    function LocalizePage(geolocation, googleMaps, sqlite) {
        var _this = this;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.sqlite = sqlite;
        this.sqlite.create({
            name: 'restaurants.db',
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
        });
    }
    LocalizePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    LocalizePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.loadMap2();
        }).catch(function (error) {
            _this.a = 'Error getting location';
        });
    };
    LocalizePage.prototype.loadMap2 = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 15
            }
        };
        this.map = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMap */]('map', mapOptions);
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            console.log('Map is ready!');
            _this.db.executeSql('SELECT Nom, Lat, Lng FROM restaurant', {})
                .then(function (res) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.map.addMarker({
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
    };
    return LocalizePage;
}());
LocalizePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-localize',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/localize/localize.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Localize</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  {{a}}\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/localize/localize.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
], LocalizePage);

//# sourceMappingURL=localize.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addrestaurant_addrestaurant__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantListPage = (function () {
    function RestaurantListPage(navCtrl, alertCtrl, sqlite, modalCtrl, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.sqlite.create({
            name: 'restaurants.db',
            location: 'default'
        })
            .then(function (db) {
            _this.initializeDatabase(db);
        })
            .catch(function (e) { return console.log(e); });
    }
    RestaurantListPage.prototype.initializeDatabase = function (db) {
        this.database = db;
        this.refreshList();
    };
    RestaurantListPage.prototype.addRestaurant = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__addrestaurant_addrestaurant__["a" /* AddrestaurantPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data)
                _this.addRestaurantToDB(data, 1);
            _this.refreshList();
        });
    };
    RestaurantListPage.prototype.addRestaurantToDB = function (data, state) {
        var _this = this;
        this.http.get("https://maps.googleapis.com/maps/api/geocode/json", { 'key': 'AIzaSyC_wau-0xPQXdA9NnmPMQjtrH6TUQgGsCY',
            'address': data.address.replace(/ /g, "+") + '+Strasbourg' }, {})
            .then(function (res) {
            var test = JSON.parse(res.data);
            var lat = (test.results[0].geometry.location.lat) ? (test.results[0].geometry.location.lat) : 48.5833924;
            var lng = (test.results[0].geometry.location.lng) ? (test.results[0].geometry.location.lng) : 7.749747699999999;
            var city = (test.results[0].formatted_address).split(" ").splice(-2)[0].slice(1, -1);
            city = (city) ? city : "Strasbourg";
            _this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json", {
                'key': 'AIzaSyCMVZO6O4k9mYQT8au5kLTHfhBf3uopMCg', 'origins': '48.5833924,7.749747699999999',
                'destinations': String(lat) + ',' + String(lng), 'mode': 'walking'
            }, {})
                .then(function (pos) {
                var test = JSON.parse(pos.data);
                var time = (test.rows[0].elements[0].duration.value) ? (test.rows[0].elements[0].duration.value) : 600;
                time = Math.round(time / 60);
                var sql = 'INSERT INTO restaurant (Nom, Categorie, Adresse, City, Lat, Lng, Time) VALUES ("' +
                    data.name + '", "' + data.categorie + '", "' + data.address + '", "' + city + '", ' + lat + ', ' + lng + ', ' + time + ')';
                _this.database.executeSql(sql, {})
                    .then(function () {
                    var toast = _this.toastCtrl.create({
                        message: "Nouveau restaurant ajouté: " + data.name,
                        position: "top",
                        cssClass: "success",
                        duration: 2000
                    });
                    toast.present();
                    _this.refreshList();
                })
                    .catch(function () { return _this.createToastError(); });
            })
                .catch(function () { return _this.createToastError(); });
        })
            .catch(function (err) { return _this.createToastError(); });
    };
    RestaurantListPage.prototype.createToastError = function () {
        var toast = this.toastCtrl.create({
            message: "Echec de l'ajout du restaurant",
            position: "top",
            cssClass: "error",
            duration: 2000
        });
        toast.present();
    };
    RestaurantListPage.prototype.deleteRestaurantFromDB = function (name) {
        var _this = this;
        var sql = 'DELETE FROM restaurant WHERE Nom="' + name + '";';
        this.database.executeSql(sql, {})
            .then(function () {
            var toast = _this.toastCtrl.create({
                message: "Restaurant supprimé: " + name,
                position: "top",
                cssClass: "success",
                duration: 2000
            });
            toast.present();
        })
            .catch(function () {
            var toast = _this.toastCtrl.create({
                message: "Echec de la suppression du restaurant",
                position: "top",
                cssClass: "error",
                duration: 2000
            });
            toast.present();
        });
        this.refreshList();
    };
    RestaurantListPage.prototype.refreshList = function () {
        var _this = this;
        this.database.executeSql("SELECT * FROM restaurant;", {})
            .then(function (res) {
            _this.items = [];
            for (var i = 0; i < res.rows.length; i++) {
                var iconename = (res.rows.item(i)['Categorie'] == "Cancer") ? "medkit" : "nutrition";
                _this.items.push({
                    name: res.rows.item(i)['Nom'],
                    city: res.rows.item(i)['City'],
                    lat: res.rows.item(i)['Lat'],
                    lng: res.rows.item(i)['Lng'],
                    time: res.rows.item(i)['Time'],
                    icon: iconename
                });
            }
        })
            .catch(function (e) { return console.log(e); });
    };
    RestaurantListPage.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    };
    RestaurantListPage.prototype.chooseRestaurant = function () {
        this.shuffle(this.items);
        var alert = this.alertCtrl.create({
            title: 'Nous vous conseillons:',
            message: this.items[0].name,
            buttons: ['Bon appétit'],
            cssClass: "alertClass"
        });
        alert.present();
    };
    return RestaurantListPage;
}());
RestaurantListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant-list',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/restaurant-list/restaurant-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurant List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  {{a}}\n  <ion-list inset>\n   <ion-item-sliding *ngFor="let item of items">\n        <button ion-item>\n          <ion-icon name="{{item.icon}}" item-left></ion-icon>\n          <span> {{item.name}} </span>\n          <span item-end > {{item.time}} </span>\n        </button>\n     <ion-item-options>\n        <button ion-button color="danger" (click)="deleteRestaurantFromDB(item.name)">\n          <ion-icon name="close">\n            Supprimer\n          </ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div text-center>\n    <button ion-button (click)="chooseRestaurant()" round >Choisir</button>\n  </div>\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="addRestaurant()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/restaurant-list/restaurant-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
], RestaurantListPage);

//# sourceMappingURL=restaurant-list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddrestaurantPage = (function () {
    function AddrestaurantPage(params, viewCtrl, formBuilder, alertCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.newRestaurant = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            categorie: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddrestaurantPage.prototype.saveRestaurant = function () {
        if (this.newRestaurant.controls['name'].valid && this.newRestaurant.controls['categorie'].valid
            && this.newRestaurant.controls['address'].valid)
            this.viewCtrl.dismiss({
                name: this.newRestaurant.controls['name'].value,
                categorie: this.newRestaurant.controls['categorie'].value,
                address: this.newRestaurant.controls['address'].value
            });
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Impossible d'ajouter le restaurant",
                subTitle: 'Merci de remplir tous les champs!',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    AddrestaurantPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null);
    };
    return AddrestaurantPage;
}());
AddrestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addrestaurant',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/addrestaurant/addrestaurant.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Nouveau Restaurant\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="danger" >Annuler</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="newRestaurant" (ngSubmit)="saveRestaurant()">\n    <ion-list>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Catégorie</ion-label>\n        <ion-select  formControlName="categorie">\n          <ion-option value="Cancer">Cancer</ion-option>\n          <ion-option value="Sain">Sain</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Adresse</ion-label>\n        <ion-input type="text" formControlName="address"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button type="submit" block>Ajouter</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/addrestaurant/addrestaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddrestaurantPage);

//# sourceMappingURL=addrestaurant.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorizerestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorize_list__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategorizerestaurantPage = (function () {
    function CategorizerestaurantPage(sqlite, alertCtrl, modalCtrl) {
        var _this = this;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.sqlite.create({
            name: 'restaurants.db',
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            _this.getCategorie();
        });
    }
    CategorizerestaurantPage.prototype.getCategorie = function () {
        var _this = this;
        this.categorie = [];
        var sql = "SELECT DISTINCT(Nom) FROM categorie WHERE Nom!=\"\"";
        this.db.executeSql(sql, {})
            .then(function (res) {
            var _loop_1 = function (i) {
                _this.db.executeSql("SELECT COUNT(*) as count FROM restaurant WHERE Categorie LIKE \"%" + res.rows.item(i)['Nom'] + "%\";", {})
                    .then(function (result) {
                    _this.categorie.push({
                        name: res.rows.item(i)['Nom'],
                        count: result.rows.item(0)['count']
                    });
                })
                    .catch(function (err) { return _this.a += "not count"; });
            };
            for (var i = 0; i < res.rows.length; i++) {
                _loop_1(i);
            }
        })
            .catch(function (err) { return _this.a = "not select"; });
    };
    CategorizerestaurantPage.prototype.CategorizeList = function (categorie) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__categorize_list__["a" /* CategorizeListPage */], { categorie: categorie });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.getCategorie();
        });
    };
    CategorizerestaurantPage.prototype.deleteCategorie = function (categorie) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Supprimer la categorie " + categorie,
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel'
                }, {
                    text: 'Supprimer',
                    handler: function (data) {
                        return data;
                    }
                }]
        });
        alert.present();
        alert.onDidDismiss(function (data) {
            _this.db.executeSql('SELECT Nom, Categorie FROM restaurant WHERE Categorie LIKE "%' + categorie + '%" ', {})
                .then(function (res) {
                for (var i = 0; i < res.rows.length; i++) {
                    var newCategorie = res.rows.item(i)['Categorie'].replace(categorie, '');
                    _this.db.executeSql('UPDATE restaurant SET Categorie=? WHERE Nom=?', [newCategorie, res.rows.item(i)['Nom']]);
                }
            });
            _this.db.executeSql('DELETE FROM categorie WHERE Nom=?', [categorie]);
            _this.getCategorie();
        });
    };
    CategorizerestaurantPage.prototype.addCategorie = function () {
        var _this = this;
        var modal = this.alertCtrl.create({
            title: 'Nom',
            inputs: [{
                    name: 'nom',
                    placeholder: 'Nom'
                }],
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel'
                }, {
                    text: 'Valider',
                    handler: function (data) {
                        return (data);
                    }
                }]
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.db.executeSql("INSERT INTO categorie (Nom) VALUES (\"" + data.nom + "\");", {});
            _this.getCategorie();
        });
    };
    return CategorizerestaurantPage;
}());
CategorizerestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categorizerestaurant',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/categorizerestauraurant/categorizerestaurant.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurant List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  {{a}}\n  <ion-card *ngFor="let item of categorie; let i = index" (press)="deleteCategorie(item.name)"\n            (click)="CategorizeList(item.name)">\n    <img src="assets/img/{{i%2}}.png"/>\n    <div class="card-title">{{item.name}}</div>\n    <div class="card-subtitle">{{item.count}} Restaurants</div>\n  </ion-card>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="addCategorie()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/categorizerestauraurant/categorizerestaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]])
], CategorizerestaurantPage);

//# sourceMappingURL=categorizerestaurant.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorizeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategorizeListPage = (function () {
    function CategorizeListPage(params, viewCtrl, sqlite, alertCtrl) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.categorie = params.get('categorie');
        this.sqlite.create({
            name: 'restaurants.db',
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            _this.SelectList();
        });
    }
    CategorizeListPage.prototype.SelectList = function () {
        var _this = this;
        this.db.executeSql("SELECT * FROM restaurant WHERE Categorie LIKE \"%" + this.categorie + "%\";", {})
            .then(function (res) {
            _this.items = [];
            for (var i = 0; i < res.rows.length; i++) {
                var iconename = (_this.categorie == "Cancer") ? "medkit" : "nutrition";
                _this.items.push({
                    name: res.rows.item(i)['Nom'],
                    city: res.rows.item(i)['City'],
                    lat: res.rows.item(i)['Lat'],
                    lng: res.rows.item(i)['Lng'],
                    time: res.rows.item(i)['Time'],
                    icon: iconename
                });
            }
        })
            .catch(function (err) { return _this.a += "not selected"; });
    };
    CategorizeListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null);
    };
    CategorizeListPage.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    };
    CategorizeListPage.prototype.chooseRestaurant = function () {
        this.shuffle(this.items);
        var alert = this.alertCtrl.create({
            title: 'Nous vous conseillons:',
            message: this.items[0].name,
            buttons: ['Bon appétit'],
            cssClass: "alertClass"
        });
        alert.present();
    };
    CategorizeListPage.prototype.deleteRestaurantFromCategorie = function (name) {
        var _this = this;
        this.db.executeSql("SELECT Categorie FROM restaurant WHERE NOM=?", [name])
            .then(function (res) {
            var categorie = res.rows.item(0)['Categorie'].replace(_this.categorie, '');
            _this.db.executeSql("UPDATE restaurant SET Categorie=? WHERE Nom=?", [categorie, name]);
            _this.SelectList();
        });
    };
    CategorizeListPage.prototype.addRestaurant = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ajouter à la catégorie ' + this.categorie,
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel'
                }, {
                    text: 'Valider',
                    handler: function (data) {
                        return (data);
                    }
                }]
        });
        this.db.executeSql('SELECT Nom, Categorie FROM restaurant WHERE Categorie NOT LIKE "%' + this.categorie + '%";', {})
            .then(function (res) {
            for (var i = 0; i < res.rows.length; i++) {
                alert.addInput({
                    name: res.rows.item(i)['Nom'],
                    type: 'checkbox',
                    label: res.rows.item(i)['Nom'],
                    value: res.rows.item(i)['Nom']
                });
            }
            alert.present();
        });
        alert.onDidDismiss(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.db.executeSql('UPDATE restaurant SET Categorie=Categorie||"-' + _this.categorie + '" WHERE Nom= ?', [data[i]])
                    .then(function (res) { })
                    .catch(function (err) { });
            }
            _this.SelectList();
        });
    };
    return CategorizeListPage;
}());
CategorizeListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categorize-list',template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/pages/categorizerestauraurant/categorize-list.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{categorie}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  {{a}}\n\n  <ion-list inset>\n    <ion-item-sliding *ngFor="let item of items">\n      <button ion-item>\n        <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.name}}\n      </button>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteRestaurantFromCategorie(item.name)">\n          <ion-icon name="close">\n            Supprimer\n          </ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <div text-center>\n    <button ion-button (click)="chooseRestaurant()" round >Choisir</button>\n  </div>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="addRestaurant()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/pages/categorizerestauraurant/categorize-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CategorizeListPage);

//# sourceMappingURL=categorize-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_zidane_zidane__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_localize_localize__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_list_restaurant_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addrestaurant_addrestaurant__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categorizerestauraurant_categorizerestaurant__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categorizerestauraurant_categorize_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule(sqlite) {
        var _this = this;
        this.sqlite = sqlite;
        this.sqlite.create({
            name: 'restaurants.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("CREATE TABLE IF NOT EXISTS restaurant (Nom TEXT, Categorie TEXT, Adresse TEXT, City TEXT, Lat INTEGER, Lng INTEGER, Time INTEGER);", {})
                .then(function () {
                db.executeSql("SELECT * FROM restaurant;", {})
                    .then(function (res) {
                    if (res.rows.length == 0)
                        _this.initializeDB(db);
                });
            });
        });
    }
    AppModule.prototype.initializeDB = function (db) {
        var _this = this;
        this.db = db;
        var arrayBase = this.initializeRestaurant();
        for (var i = 0; i < arrayBase.length; i++) {
            var sql = 'INSERT INTO restaurant (Nom, Categorie, Adresse, City, Lat, Lng, Time) VALUES ("' +
                arrayBase[i].name + '", "' + arrayBase[i].categorie + '", "' + arrayBase[i].address + '", "' + arrayBase[i].city + '", ' + arrayBase[i].lat +
                ', ' + arrayBase[i].lng + ', ' + arrayBase[i].time + ')';
            this.db.executeSql(sql, {});
            this.db.executeSql("CREATE TABLE IF NOT EXISTS categorie (Nom TEXT);", {})
                .then(function () {
                _this.db.executeSql("INSERT INTO categorie (Nom) VALUES (\"Cancer\");", {});
            });
        }
    };
    AppModule.prototype.initializeRestaurant = function () {
        var restaurants = [
            { name: "Saiko Chicken", categorie: "Cancer", address: "8 rue du Vieux Marché aux Vins", city: 'Strasbourg', lat: 48.58360070000001, lng: 7.7409376, time: 10 },
            { name: "Monoprix", categorie: "", address: "Place Kléber", city: 'Strasbourg', lat: 48.58327209999999, lng: 7.7451787, time: 4 },
            { name: "Subway", categorie: "", address: "9 Rue des Frères", city: 'Strasbourg', lat: 48.5827021, lng: 7.7522498, time: 4 },
            { name: "Cap'tain Flam", categorie: "", address: "9b Rue des Frères", city: 'Strasbourg', lat: 48.582733, lng: 7.7523836, time: 4 },
            { name: "Banette", categorie: "", address: "11 Rue des Frères", city: 'Strasbourg', lat: 48.5828283, lng: 7.752460699999999, time: 4 },
            { name: "Flam's", categorie: "", address: "29 Rue des Frères", city: 'Strasbourg', lat: 48.5824716, lng: 7.751331800000001, time: 4 },
            { name: "Tentations", categorie: "", address: "15 Rue des Sœurs", city: 'Strasbourg', lat: 48.5828239, lng: 7.753502399999999, time: 4 },
            { name: "Hot Dog City", categorie: "", address: "26 Rue des Frères", city: 'Strasbourg', lat: 48.5830171, lng: 7.753940399999999, time: 4 },
            { name: "Kebab Food", categorie: "", address: "37 Rue des Frères", city: 'Strasbourg', lat: 48.5831021, lng: 7.7539998, time: 5 },
            { name: "FEC", categorie: "", address: "17 Place St Étienne", city: 'Strasbourg', lat: 48.5829755, lng: 7.7544423, time: 5 },
            { name: "231 East Street", categorie: "", address: "3 Place St Étienne", city: 'Strasbourg', lat: 48.5831058, lng: 7.7543769, time: 5 },
            { name: "Burgers de Papa", categorie: "", address: "1 Place St Étienne", city: 'Strasbourg', lat: 48.5831192, lng: 7.754293700000001, time: 5 },
            { name: "Académie de la Bière Cathédrale", categorie: "", address: "29 Rue des Juifs", city: 'Strasbourg', lat: 48.5842117, lng: 7.753300299999999, time: 5 },
            { name: "Pizzeria Les 4 Saisons", categorie: "Cancer", address: "22 Rue Brûlée", city: 'Strasbourg', lat: 48.5848232, lng: 7.753807600000001, time: 6 },
            { name: "Nooï", categorie: "", address: "6 Passage de la Pomme de Pin", city: 'Strasbourg', lat: 48.5839483, lng: 7.7470173, time: 3 },
            { name: "Mac Donald's", categorie: "", address: "33 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5830168, lng: 7.7471474, time: 3 },
            { name: "Pomme de Pain", categorie: "", address: "6 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5830594, lng: 7.7468801, time: 3 },
            { name: "Brioche Dorée", categorie: "", address: "4 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5831306, lng: 7.7468801, time: 3 },
            { name: "Simply Market", categorie: "", address: "47 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5825856, lng: 7.7474455, time: 3 },
            { name: "Paul", categorie: "", address: "41/45 Rue des Grandes Arcades", city: 'Strasbourg', lat: 48.5827512, lng: 7.7467618, time: 2 },
            { name: "Made In France Nancy", categorie: "", address: "1 Rue Saint-Epvre", city: 'Nancy', lat: 48.6963429, lng: 6.179468099999999, time: 100519 }
        ];
        return restaurants;
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_zidane_zidane__["a" /* ZidanePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_localize_localize__["a" /* LocalizePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_list_restaurant_list__["a" /* RestaurantListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_addrestaurant_addrestaurant__["a" /* AddrestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_categorizerestauraurant_categorizerestaurant__["a" /* CategorizerestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_categorizerestauraurant_categorize_list__["a" /* CategorizeListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_zidane_zidane__["a" /* ZidanePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_localize_localize__["a" /* LocalizePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_list_restaurant_list__["a" /* RestaurantListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_addrestaurant_addrestaurant__["a" /* AddrestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_categorizerestauraurant_categorizerestaurant__["a" /* CategorizerestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_categorizerestauraurant_categorize_list__["a" /* CategorizeListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__["b" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__["a" /* FileChooser */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */]])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_zidane_zidane__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_localize_localize__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_restaurant_list_restaurant_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categorizerestauraurant_categorizerestaurant__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Liste des Restaurants', component: __WEBPACK_IMPORTED_MODULE_5__pages_restaurant_list_restaurant_list__["a" /* RestaurantListPage */] },
            { title: 'Carte', component: __WEBPACK_IMPORTED_MODULE_4__pages_localize_localize__["a" /* LocalizePage */] },
            { title: 'Categorie de restaurants', component: __WEBPACK_IMPORTED_MODULE_6__pages_categorizerestauraurant_categorizerestaurant__["a" /* CategorizerestaurantPage */] },
            { title: 'Secret', component: __WEBPACK_IMPORTED_MODULE_3__pages_zidane_zidane__["a" /* ZidanePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/huber_t/Cordova/zidapp/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/huber_t/Cordova/zidapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map