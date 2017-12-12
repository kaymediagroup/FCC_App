webpackJsonp([16],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\about-us\about-us.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitem.photo" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitem.loaded">\n\n  <div padding>\n  \n  <h1>{{subitem.heading}}</h1>\n    \n  <p class="text" [innerHTML]="subitem.description"></p>\n  <p class="text" [innerHTML]="subitem.description1"></p>\n  <p class="text" [innerHTML]="subitem.friendship"></p>\n  <p class="text" [innerHTML]="subitem.mission"></p>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\about-us\about-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_map_location_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BranchesPage = (function () {
    function BranchesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    // modal controller configuration for location maps
    BranchesPage.prototype.locationMap = function ($event, subitems) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__location_map_location_map__["a" /* LocationMapPage */], { subitems: subitems });
        modal.present();
    };
    return BranchesPage;
}());
BranchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-branches',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\branches\branches.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitem.photo" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitem.loaded">\n    \n<div padding>\n      \n  <h1>{{subitem.heading}}</h1>\n\n  <div>\n    <ion-slides pager paginationType="progress" spaceBetween="10px" zoom="true" slidesPerView="2" class="height">\n          \n      <ion-slide *ngFor="let subitems of subitem.locations" (tap)="locationMap($event, subitems)">\n            \n      <div class="swiper-zoom-container container">\n      <img class="opacity" [src]="subitems.photo" (load)="subitems.loaded = true" [hidden]="!subitems.loaded" />\n      <img class="opacity" src="assets/img/512PlaceHolderDark.png" [hidden]="subitems.loaded">\n    \n      <div class="branch">{{subitems.location}}</div>\n    \n      <div class="service">{{subitems.times}}</div>\n      </div>\n      \n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\branches\branches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
], BranchesPage);

//# sourceMappingURL=branches.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationMapPage = (function () {
    function LocationMapPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        // Property used for Firebase database link
        this.subitems = [];
        this.subitems = navParams.get('subitems');
    }
    LocationMapPage.prototype.convertStringToNumber = function (value) {
        return +value;
    };
    LocationMapPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return LocationMapPage;
}());
LocationMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location-map',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\location-map\location-map.html"*/'<ion-header>\n\n  <ion-navbar color="myYellow">\n    <ion-title>{{subitems.location}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="myDark" (tap)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-card> -->\n    <sebm-google-map\n      [latitude]="convertStringToNumber(subitems.map_lat)"\n      [longitude]="convertStringToNumber(subitems.map_lng)"\n      [zoom]="convertStringToNumber(subitems.map_zoom)">\n      <sebm-google-map-marker \n      [latitude]="convertStringToNumber(subitems.map_lat)" \n      [longitude]="convertStringToNumber(subitems.map_lng)">\n      </sebm-google-map-marker>\n    </sebm-google-map>\n  <!-- </ion-card> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\location-map\location-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], LocationMapPage);

//# sourceMappingURL=location-map.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EpisodePage = (function () {
    function EpisodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return EpisodePage;
}());
EpisodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-episode',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\episode\episode.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <iframe width="100%" height="315" [src]="subitem.videoURL | videos" frameborder="0" allowfullscreen></iframe>\n\n  <iframe class="player" [src]="subitem.audioURL | videos" width="100%" height="70" frameborder="0" scrolling="no"></iframe>\n\n  <div padding class="style">\n  \n    <h1>{{subitem.title}}</h1>\n\n    <h6>{{subitem.leader}}</h6>\n\n    <p class="date">{{subitem.day}}</p>\n\n    <p [innerHTML]="subitem.info"></p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\episode\episode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EpisodePage);

//# sourceMappingURL=episode.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectPage = (function () {
    function ConnectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return ConnectPage;
}());
ConnectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-connect',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\connect\connect.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitem.photo" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitem.loaded">\n  \n  <div padding>\n    \n  <h1>{{subitem.heading}}</h1>\n      \n  <p class="text" [innerHTML]="subitem.description"></p>\n  <p class="text" [innerHTML]="subitem.details"></p>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\connect\connect.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ConnectPage);

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsPage = (function () {
    function EventDetailsPage(navCtrl, navParams, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.item = navParams.get('item');
        this.item.startDate = new Date(this.item.startDate);
        this.item.endDate = new Date(this.item.endDate);
    }
    EventDetailsPage.prototype.convertStringToNumber = function (value) {
        return +value;
    };
    EventDetailsPage.prototype.createEvent = function () {
        this.calendar.createEventInteractively(this.item.title, this.item.eventLocation, this.item.notes, this.item.startDate, this.item.endDate).
            then(function () {
            console.log('Event Created!');
        })
            .catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    return EventDetailsPage;
}());
EventDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-event-details',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\event-details\event-details.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{item.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="item.photo" (load)="item.loaded = true" [hidden]="!item.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="item.loaded">\n  \n  <div padding>\n    \n  <h3>{{item.title}}</h3>\n    \n  <p class="info">{{item.day}}</p>\n\n  <ion-grid class="space">\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon class="icons" name="navigate"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <p class="address">{{item.address}}</p>\n      </ion-col>\n    </ion-row>\n        \n    <ion-row class="spaces">\n      <ion-col col-1>\n        <ion-icon class="icons" name="time"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <p class="address">{{item.times}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p class="info">{{item.details}}</p>\n  \n  <p class="text" [innerHTML]="item.info"></p>\n\n  <div align="center" padding>\n  \n  <a href="{{item.RegisterURL}}" onclick="window.open(this.href,\'_system\');return false;">\n    <button class="register" ion-button block color="myGreen" outline medium>Register Online!</button>  \n  </a> \n\n  <button class="calendar" icon-right ion-button block color="myGreen" medium (tap)="createEvent()">Add to Calendar<ion-icon class="iconCal" name="alarm"></ion-icon></button>\n  \n  </div>\n\n  </div>\n\n  <ion-card class="map">\n    <sebm-google-map\n      [latitude]="convertStringToNumber(item.map_lat)"\n      [longitude]="convertStringToNumber(item.map_lng)"\n      [zoom]="convertStringToNumber(item.map_zoom)">\n      <sebm-google-map-marker \n      [latitude]="convertStringToNumber(item.map_lat)" \n      [longitude]="convertStringToNumber(item.map_lng)">\n      </sebm-google-map-marker>\n    </sebm-google-map>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\event-details\event-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
], EventDetailsPage);

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadersPage = (function () {
    function LeadersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return LeadersPage;
}());
LeadersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-leaders',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\leaders\leaders.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>Leaders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="border" *ngFor="let subitems of subitem.leader">\n        \n    <img [src]="subitems.photo" (load)="subitems.loaded = true" [hidden]="!subitems.loaded" />\n    <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitems.loaded">\n    \n    <ion-card-content>\n          \n      <ion-card-title>\n        {{subitems.name}}\n      </ion-card-title>\n      <ion-row>\n        <ion-col class="branch">\n          {{subitems.branch}}\n        </ion-col>\n        <ion-col col-1>\n          <a href="{{subitems.social_link}}" onclick="window.open(this.href,\'_system\');return false;">\n            <ion-icon class="iconStyle" name={{subitems.social_icon}}></ion-icon>\n          </a>\n        </ion-col>\n      </ion-row>\n        \n    </ion-card-content>\n      \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\leaders\leaders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LeadersPage);

//# sourceMappingURL=leaders.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ministry_details_ministry_details__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MinistriesPage = (function () {
    function MinistriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    MinistriesPage.prototype.ministry = function ($event, subitems) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__ministry_details_ministry_details__["a" /* MinistryDetailsPage */], { subitems: subitems });
    };
    return MinistriesPage;
}());
MinistriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-ministries',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\ministries\ministries.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="border" *ngFor="let subitems of subitem.ministry" (tap)="ministry($event, subitems)">\n    <img [src]="subitems.image" (load)="subitems.loaded = true" [hidden]="!subitems.loaded" />\n    <img src="assets/img/396PlaceHolder.png" [hidden]="subitems.loaded">\n    <div class="titles">{{subitems.title}}</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\ministries\ministries.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], MinistriesPage);

//# sourceMappingURL=ministries.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinistryDetailsPage = (function () {
    function MinistryDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Property used for Firebase database link
        this.subitems = [];
        this.subitems = navParams.get('subitems');
    }
    return MinistryDetailsPage;
}());
MinistryDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-ministry-details',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\ministry-details\ministry-details.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitems.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitems.photo" (load)="subitems.loaded = true" [hidden]="!subitems.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitems.loaded">\n\n  <div padding>\n    \n  <h1>{{subitems.title}}</h1>\n      \n  <p class="text" [innerHTML]="subitems.info"></p>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\ministry-details\ministry-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MinistryDetailsPage);

//# sourceMappingURL=ministry-details.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicPage = (function () {
    function MusicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.music = "videos";
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return MusicPage;
}());
MusicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-music',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\music\music.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top color="myRed">\n    <ion-segment color="myDark" [(ngModel)]="music">\n      <ion-segment-button value="videos">\n        {{subitem.video_title}}\n      </ion-segment-button>\n      <ion-segment-button value="audio">\n        {{subitem.audio_title}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div [ngSwitch]="music">\n\n  <div *ngFor="let subitems of subitem.videos">\n    <ion-card *ngSwitchCase="\'videos\'" class="border">\n      <iframe width="100%" height="315" [src]="subitems.videoURL | videos" frameborder="0" allowfullscreen></iframe>\n      <ion-card-content>\n        <ion-card-title>{{subitems.title}}</ion-card-title>\n        <p>{{subitems.artist}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngFor="let subitems of subitem.audio">\n    <ion-card *ngSwitchCase="\'audio\'" class="border">\n      <iframe width="100%" height="70" [src]="subitems.audioURL | videos" frameborder="0" allowfullscreen></iframe>\n      <ion-card-content>\n        <ion-card-title>{{subitems.title}}</ion-card-title>\n        <p>{{subitems.artist}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\music\music.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MusicPage);

//# sourceMappingURL=music.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__social_social__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_music__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tithing_tithing__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connect_connect__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ministries_ministries__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leaders_leaders__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__branches_branches__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MorePage = (function () {
    function MorePage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.more = [];
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('more').on('value', function (snapshot) {
            _this.more = snapshot.val();
        });
    }
    MorePage.prototype.about = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_us_about_us__["a" /* AboutUsPage */], { subitem: subitem });
    };
    MorePage.prototype.branches = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__branches_branches__["a" /* BranchesPage */], { subitem: subitem });
    };
    MorePage.prototype.leaders = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__leaders_leaders__["a" /* LeadersPage */], { subitem: subitem });
    };
    MorePage.prototype.ministries = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministries_ministries__["a" /* MinistriesPage */], { subitem: subitem });
    };
    MorePage.prototype.connect = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__connect_connect__["a" /* ConnectPage */], { subitem: subitem });
    };
    MorePage.prototype.tithing = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tithing_tithing__["a" /* TithingPage */], { subitem: subitem });
    };
    MorePage.prototype.music = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__music_music__["a" /* MusicPage */], { subitem: subitem });
    };
    MorePage.prototype.social = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__social_social__["a" /* SocialPage */], { subitem: subitem });
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\more\more.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>More</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager effect="coverflow">\n        \n    <ion-slide *ngFor="let subitem of more.about" (tap)="about($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n        \n        <div class="titles">{{subitem.title}}</div>\n                \n      </div>\n    </ion-slide>\n        \n    <ion-slide *ngFor="let subitem of more.branches" (tap)="branches($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n          \n        <div class="titles">{{subitem.title}}</div>\n                  \n      </div>\n    </ion-slide>\n\n    <ion-slide *ngFor="let subitem of more.leaders" (tap)="leaders($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n            \n        <div class="titles">{{subitem.title}}</div>\n                    \n      </div>\n    </ion-slide>\n\n    <ion-slide *ngFor="let subitem of more.ministries" (tap)="ministries($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n              \n        <div class="titles">{{subitem.title}}</div>\n                      \n      </div>\n    </ion-slide>\n      \n    <ion-slide *ngFor="let subitem of more.connect" (tap)="connect($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n              \n        <div class="titles">{{subitem.title}}</div>\n                      \n      </div>\n    </ion-slide>\n  \n    <ion-slide *ngFor="let subitem of more.tithing" (tap)="tithing($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n                \n        <div class="titles">{{subitem.title}}</div>\n                        \n      </div>\n    </ion-slide>\n\n    <ion-slide *ngFor="let subitem of more.music" (tap)="music($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n                \n        <div class="titles">{{subitem.title}}</div>\n                        \n      </div>\n    </ion-slide>\n\n    <ion-slide *ngFor="let subitem of more.social" (tap)="social($event, subitem)">\n      <div class="container">\n        <img [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="subitem.loaded">\n                \n        <div class="titles">{{subitem.title}}</div>\n                        \n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* NavParams */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialPage = (function () {
    function SocialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return SocialPage;
}());
SocialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-social',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\social\social.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitem.photo" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitem.loaded">\n    \n  <div padding>\n      \n  <h1>{{subitem.subtitle}}</h1>\n\n  </div>\n\n  <div>\n    <ion-slides effect="coverflow" slidesPerView="2">\n          \n      <ion-slide *ngFor="let subitems of subitem.platform">\n        <a href="{{subitems.url}}" onclick="window.open(this.href,\'_system\');return false;">\n          <img [src]="subitems.icon" (load)="subitems.loaded = true" [hidden]="!subitems.loaded" />\n          <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitems.loaded">\n        </a>\n      </ion-slide>\n      \n    </ion-slides>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\social\social.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SocialPage);

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TithingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TithingPage = (function () {
    function TithingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subitem = [];
        this.subitem = navParams.get('subitem');
    }
    return TithingPage;
}());
TithingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tithing',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\tithing\tithing.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{subitem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="subitem.photo" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="subitem.loaded">\n  \n  <div padding>\n    \n  <h1>{{subitem.heading}}</h1>\n      \n  <p class="text" [innerHTML]="subitem.description"></p>\n  <p class="text" [innerHTML]="subitem.banking"></p>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\tithing\tithing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TithingPage);

//# sourceMappingURL=tithing.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsArticlePage = (function () {
    function NewsArticlePage(navCtrl, navParams, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.item = navParams.get('item');
    }
    NewsArticlePage.prototype.share = function () {
        this.socialSharing.share(this.item.shareMessage, this.item.shareSubject, this.item.shareImage, this.item.shareLink).
            then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    return NewsArticlePage;
}());
NewsArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news-article',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\news-article\news-article.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{item.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="item.photo" (load)="item.loaded = true" [hidden]="!item.loaded" />\n  <img src="assets/img/512PlaceHolderDark.png" [hidden]="item.loaded">\n   \n  <div padding>\n\n  <h4>{{item.title}}</h4>\n\n  <ion-icon class="share" name="share-alt" (tap)="share()"></ion-icon>\n    \n  <p class="info">{{item.details}}</p>\n    \n  <p class="text" [innerHTML]="item.info"></p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\news-article\news-article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], NewsArticlePage);

//# sourceMappingURL=news-article.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_article_news_article__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = (function () {
    function NewsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.news = [];
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('news').on('value', function (snapshot) {
            _this.news = snapshot.val();
        });
    }
    NewsPage.prototype.newsArticle = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__news_article_news_article__["a" /* NewsArticlePage */], { item: item });
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-news',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let item of news" class="border" (tap)="newsArticle($event, item)">\n        \n    <img [src]="item.photo" (load)="item.loaded = true" [hidden]="!item.loaded" />\n    <img src="assets/img/512PlaceHolderDark.png" [hidden]="item.loaded">\n        \n    <ion-card-content>\n          \n      <ion-card-title>\n        {{item.title}}\n      </ion-card-title>\n      <ion-row>\n        <ion-col class="date">\n          {{item.date}}\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon name="document"></ion-icon>\n        </ion-col>\n      </ion-row>\n        \n    </ion-card-content>\n      \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\news\news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__episode_episode__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Http } from '@angular/http';
// import 'rxjs/Rx';
// import firebase from 'firebase';
var SeriesPage = (function () {
    function SeriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = [];
        this.item = navParams.get('item');
        // firebase.database().ref('sermons/episode').on('value', snapshot => {
        //   this.episode = snapshot.val();
        // });
    }
    SeriesPage.prototype.episodes = function ($event, subitem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__episode_episode__["a" /* EpisodePage */], { subitem: subitem });
    };
    return SeriesPage;
}());
SeriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-series',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\series\series.html"*/'<ion-header>\n\n  <ion-navbar color="myRed">\n    <ion-title>{{item.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img class="image" [src]="item.photo" />\n\n  <div padding>\n  \n  <h4>{{item.title}}</h4>\n\n  <p class="info">{{item.details}}</p>\n\n  <p class="text" [innerHTML]="item.description"></p>\n  \n  </div>\n\n  <div>\n  <ion-slides effect="coverflow" zoom="true" slidesPerView="2">\n      \n    <ion-slide *ngFor="let subitem of item.episode" (tap)="episodes($event, subitem)">\n        \n      <div class="swiper-zoom-container container">\n        <img class="opacity" [src]="subitem.image" (load)="subitem.loaded = true" [hidden]="!subitem.loaded" />\n        <img src="assets/img/512PlaceholderDark.png" [hidden]="subitem.loaded">\n\n        <div class="number">{{subitem.number}}</div>\n\n        <div class="titles">{{subitem.title}}</div>\n\n        <div class="leader">{{subitem.leader}}</div>\n\n        <div class="date">{{subitem.day}}</div>\n\n        <div class="icons">\n          <ion-grid>  \n            <ion-row align-items-start>\n              <ion-col><ion-icon name={{item.icon1}}></ion-icon></ion-col>\n              <ion-col><ion-icon name={{item.icon2}}></ion-icon></ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n  \n    </ion-slide>\n\n  </ion-slides>\n  </div>\n\n  <div padding>\n  <p class="info">{{item.length}}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\series\series.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], SeriesPage);

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		462,
		15
	],
	"../pages/branches/branches.module": [
		463,
		14
	],
	"../pages/connect/connect.module": [
		465,
		13
	],
	"../pages/episode/episode.module": [
		464,
		12
	],
	"../pages/event-details/event-details.module": [
		466,
		11
	],
	"../pages/leaders/leaders.module": [
		467,
		10
	],
	"../pages/location-map/location-map.module": [
		468,
		9
	],
	"../pages/ministries/ministries.module": [
		469,
		8
	],
	"../pages/ministry-details/ministry-details.module": [
		470,
		7
	],
	"../pages/more/more.module": [
		472,
		6
	],
	"../pages/music/music.module": [
		471,
		5
	],
	"../pages/news-article/news-article.module": [
		473,
		4
	],
	"../pages/news/news.module": [
		474,
		3
	],
	"../pages/series/series.module": [
		475,
		2
	],
	"../pages/social/social.module": [
		476,
		1
	],
	"../pages/tithing/tithing.module": [
		477,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bible_bible__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sermons_sermons__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_more__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.index = this.navParams.get('index');
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__sermons_sermons__["a" /* SermonsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__bible_bible__["a" /* BiblePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex= {{index}} color="myRed">\n  <ion-tab [root]="tab1Root" tabTitle="Sermons" tabIcon="play"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Events" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bible" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="News" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="apps"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_details_event_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsPage = (function () {
    function EventsPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = [];
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('events').on('value', function (snapshot) {
            _this.events = snapshot.val();
        });
    }
    EventsPage.prototype.event = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__event_details_event_details__["a" /* EventDetailsPage */], { item: item });
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-events',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\events\events.html"*/'<ion-header>\n  <ion-navbar color="myRed">\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager effect="coverflow">\n\n    <ion-slide *ngFor="let item of events" (tap)="event($event, item)">\n      \n      <div class="container">\n        <img [src]="item.image" (load)="item.loaded = true" [hidden]="!item.loaded" />\n        <img src="assets/img/800PlaceHolder.png" [hidden]="item.loaded">\n\n        <div class="event">{{item.title}}</div>\n\n        <div class="date">{{item.day}}</div>\n      </div>\n    \n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\events\events.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiblePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BiblePage = (function () {
    function BiblePage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bible = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('bible').on('value', function (snapshot) {
            _this.bible = snapshot.val();
        });
    }
    return BiblePage;
}());
BiblePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bible',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\bible\bible.html"*/'<ion-header>\n  <ion-navbar color="myRed">\n    <ion-title>\n      Bible\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of bible">\n  <iframe [src]="item.BibleURL | videos" height="100%" width="100%"></iframe>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\bible\bible.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], BiblePage);

//# sourceMappingURL=bible.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SermonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__series_series__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SermonsPage = (function () {
    function SermonsPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sermons = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('sermons').on('value', function (snapshot) {
            _this.sermons = snapshot.val();
        });
        //     firebase.database().ref('sermons').on('value', snapshot => {
        //       snapshot.forEach(element =>{
        //         this.sermons.push({
        //           photo: element.val(),
        //       loaded: false
        //     })
        //   });
        // });
        // firebase.database().ref('sermons').on('value', snapshot => {
        //   for(let key in snapshot.val()){
        //     firebase.database().ref('sermons/' + key + '/loaded').set(false);
        //   }
        // });
    }
    SermonsPage.prototype.series = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__series_series__["a" /* SeriesPage */], { item: item });
    };
    return SermonsPage;
}());
SermonsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sermons',template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\sermons\sermons.html"*/'<ion-header>\n  <ion-navbar color="myRed">\n    <ion-title>Sermons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let item of sermons" class="border" (tap)="series($event, item)">\n    \n    <img [src]="item.photo" (load)="item.loaded = true" [hidden]="!item.loaded" />\n    <img src="assets/img/512PlaceHolderDark.png" [hidden]="item.loaded">\n\n    <ion-card-content>\n      \n      <ion-card-title>\n        {{item.title}}\n      </ion-card-title>\n      \n      <ion-row>\n        <ion-col class="date">\n          {{item.duration}}\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon name={{item.icon1}}></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon name={{item.icon2}}></ion-icon>\n        </ion-col>\n      </ion-row>\n    \n    </ion-card-content>\n  \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\pages\sermons\sermons.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SermonsPage);

//# sourceMappingURL=sermons.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_videos_videos__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_calendar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_three_dee_touch__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_events_events__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bible_bible__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sermons_sermons__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_news__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_more_more__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_series_series__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_episode_episode__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_details_event_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_news_article_news_article__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_social_social__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_music_music__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tithing_tithing__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_connect_connect__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ministries_ministries__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_leaders_leaders__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_branches_branches__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_about_us_about_us__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ministry_details_ministry_details__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_location_map_location_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_bible_bible__["a" /* BiblePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sermons_sermons__["a" /* SermonsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_series_series__["a" /* SeriesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_episode_episode__["a" /* EpisodePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_event_details_event_details__["a" /* EventDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_news_article_news_article__["a" /* NewsArticlePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_branches_branches__["a" /* BranchesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_leaders_leaders__["a" /* LeadersPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_ministries_ministries__["a" /* MinistriesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_connect_connect__["a" /* ConnectPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tithing_tithing__["a" /* TithingPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_music_music__["a" /* MusicPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_ministry_details_ministry_details__["a" /* MinistryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_location_map_location_map__["a" /* LocationMapPage */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_videos_videos__["a" /* VideosPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/branches/branches.module#BranchesPageModule', name: 'BranchesPage', segment: 'branches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/episode/episode.module#EpisodePageModule', name: 'EpisodePage', segment: 'episode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/connect/connect.module#ConnectPageModule', name: 'ConnectPage', segment: 'connect', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/leaders/leaders.module#LeadersPageModule', name: 'LeadersPage', segment: 'leaders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location-map/location-map.module#LocationMapPageModule', name: 'LocationMapPage', segment: 'location-map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ministries/ministries.module#MinistriesPageModule', name: 'MinistriesPage', segment: 'ministries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ministry-details/ministry-details.module#MinistryDetailsPageModule', name: 'MinistryDetailsPage', segment: 'ministry-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/music/music.module#MusicPageModule', name: 'MusicPage', segment: 'music', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news-article/news-article.module#NewsArticlePageModule', name: 'NewsArticlePage', segment: 'news-article', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tithing/tithing.module#TithingPageModule', name: 'TithingPage', segment: 'tithing', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDMgyfWT7Ur55veBZKf-QZyvWEiFh8USGs'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_bible_bible__["a" /* BiblePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sermons_sermons__["a" /* SermonsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_series_series__["a" /* SeriesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_episode_episode__["a" /* EpisodePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_event_details_event_details__["a" /* EventDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_branches_branches__["a" /* BranchesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_leaders_leaders__["a" /* LeadersPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_ministries_ministries__["a" /* MinistriesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_connect_connect__["a" /* ConnectPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tithing_tithing__["a" /* TithingPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_music_music__["a" /* MusicPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_news_article_news_article__["a" /* NewsArticlePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_ministry_details_ministry_details__["a" /* MinistryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_location_map_location_map__["a" /* LocationMapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_three_dee_touch__["a" /* ThreeDeeTouch */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_three_dee_touch__ = __webpack_require__(309);
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
    function MyApp(platform, statusBar, splashScreen, threeDeeTouch) {
        var _this = this;
        this.threeDeeTouch = threeDeeTouch;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
        //Firebase Configuration
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCRJHKSftektrLrpDzxqjomHLQNQQjfGFQ",
            authDomain: "fccapp-56738.firebaseapp.com",
            databaseURL: "https://fccapp-56738.firebaseio.com",
            projectId: "fccapp-56738",
            storageBucket: "fccapp-56738.appspot.com",
            messagingSenderId: "294458733240"
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //OneSignal Configuration
            /*var notificationOpenedCallback = function(jsonData) {
              console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
              };
          
              window["plugins"].OneSignal
                .startInit("c4422df4-810e-4d20-87a9-18e66dd2a569", "294458733240")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();*/
            //ThreeD Touch Configuration
            _this.threeDeeTouch.isAvailable().then(function (isAvailable) { return console.log('3D Touch available? ' + isAvailable); });
            _this.threeDeeTouch.watchForceTouches()
                .subscribe(function (data) {
                console.log('Force touch %' + data.force);
                console.log('Force touch timestamp: ' + data.timestamp);
                console.log('Force touch x: ' + data.x);
                console.log('Force touch y: ' + data.y);
            });
            var actions = [
                {
                    type: 'sermons',
                    title: 'View Sermons',
                    subtitle: 'Catch-up on video!',
                    iconType: 'play'
                },
                {
                    type: 'events',
                    title: 'myChurch Events',
                    subtitle: 'Past & Upcoming',
                    iconType: 'date'
                },
                {
                    type: 'news',
                    title: 'Church News',
                    subtitle: 'Read the Latest News',
                    iconType: 'message'
                },
                {
                    type: 'more',
                    title: 'More',
                    subtitle: 'More about myChurch',
                    iconType: 'add'
                }
            ];
            _this.threeDeeTouch.configureQuickActions(actions);
            _this.threeDeeTouch.onHomeIconPressed().subscribe(function (payload) {
                // returns an object that is the button you presed
                if (payload.type == 'sermons') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */], { index: "0" });
                }
                else if (payload.type == 'events') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */], { index: "1" });
                }
                else if (payload.type == 'news') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */], { index: "3" });
                }
                else if (payload.type == 'more') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */], { index: "4" });
                }
                ;
                console.log('Pressed the ${payload.title} button');
                console.log(payload.type);
            });
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\bruno\Documents\KayMedia\FCCApp_v1.1\FCC_App\FCCApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_three_dee_touch__["a" /* ThreeDeeTouch */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var VideosPipe = (function () {
    function VideosPipe(dom) {
        this.dom = dom;
    }
    VideosPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return VideosPipe;
}());
VideosPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'videos',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], VideosPipe);

//# sourceMappingURL=videos.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.js.map