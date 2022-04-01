(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bowl-details-bowl-details-module"], {
    /***/
    "1dCu":
    /*!***************************************************!*\
      !*** ./src/app/bowl-details/bowl-details.page.ts ***!
      \***************************************************/

    /*! exports provided: BowlDetailsPage */

    /***/
    function dCu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BowlDetailsPage", function () {
        return BowlDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bowl_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bowl-details.page.html */
      "x7RJ");
      /* harmony import */


      var _bowl_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bowl-details.page.scss */
      "ycOT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BowlDetailsPage = /*#__PURE__*/function () {
        function BowlDetailsPage() {
          _classCallCheck(this, BowlDetailsPage);

          this.tabs = "info";
        }

        _createClass(BowlDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BowlDetailsPage;
      }();

      BowlDetailsPage.ctorParameters = function () {
        return [];
      };

      BowlDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bowl-details',
        template: _raw_loader_bowl_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bowl_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BowlDetailsPage);
      /***/
    },

    /***/
    "76Cc":
    /*!*****************************************************!*\
      !*** ./src/app/bowl-details/bowl-details.module.ts ***!
      \*****************************************************/

    /*! exports provided: BowlDetailsPageModule */

    /***/
    function Cc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BowlDetailsPageModule", function () {
        return BowlDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _bowl_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bowl-details-routing.module */
      "xXbo");
      /* harmony import */


      var _bowl_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bowl-details.page */
      "1dCu");

      var BowlDetailsPageModule = function BowlDetailsPageModule() {
        _classCallCheck(this, BowlDetailsPageModule);
      };

      BowlDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bowl_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BowlDetailsPageRoutingModule"]],
        declarations: [_bowl_details_page__WEBPACK_IMPORTED_MODULE_6__["BowlDetailsPage"]]
      })], BowlDetailsPageModule);
      /***/
    },

    /***/
    "x7RJ":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bowl-details/bowl-details.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function x7RJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button></ion-back-button>\n\t\t\t</div>\n\t\t\t<ion-title>Bowl Details</ion-title>\n\t\t\t<div ml-auto>\n\t\t\t\t<ion-button fill=\"none\"><ion-icon name=\"arrow-redo-outline\"></ion-icon></ion-button>\n\t\t\t\t<ion-button toggle><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div >\n\t\t<ion-segment mode=\"ios\" [(ngModel)]=\"tabs\" segment>\n\t\t\t<ion-segment-button value=\"posts\">\n\t\t\t\t<ion-icon name=\"copy\"></ion-icon>\n\t\t\t\t<h6>Posts</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"info\">\n\t\t\t\t<ion-icon name=\"information\"></ion-icon>\n\t\t\t\t<h6>Information</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"search\">\n\t\t\t\t<ion-icon name=\"search\"></ion-icon>\n\t\t\t\t<h6>Search</h6>\n\t\t\t</ion-segment-button>\n\t\t</ion-segment>\n\t</div>\n\n\t\t<div feedPage [ngSwitch]=\"tabs\">\n\t\t\t<div *ngSwitchCase=\"'posts'\">\n\t\t\t\t\n\t\t\t\t<div posts>\n\t\t\t\t\t<div postinner class=\"ion-padding\">\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t<img src=\"assets/img/bowl1.png\"/>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<h2 routerLink=\"/otherprofile\">Ineat Official <span>8 min</span></h2>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\"><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<p desc>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t<ion-card class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<div commentcounts>\n\t\t\t\t\t\t\t\t\t<div posticons>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" hearticon><ion-icon name=\"heart\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"chatbubble-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"arrow-redo-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\" pl-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Liked <b>yanna_summer</b> and <b>12k more</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"ion-text-right\" pr-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Comments  <b>15</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<h2>Moa Rotunia . <span>2 min</span></h2>\n\t\t\t\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t\t\t\t\t<div btns>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">Like</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div postinner class=\"ion-padding\">\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t<img src=\"assets/img/bowl1.png\"/>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<h2 routerLink=\"/otherprofile\">Ineat Official <span>8 min</span></h2>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\"><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<p desc>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t<ion-card class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<div commentcounts>\n\t\t\t\t\t\t\t\t\t<div posticons>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" hearticon><ion-icon name=\"heart\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"chatbubble-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"arrow-redo-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\" pl-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Liked <b>yanna_summer</b> and <b>12k more</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"ion-text-right\" pr-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Comments  <b>15</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<h2>Moa Rotunia . <span>2 min</span></h2>\n\t\t\t\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t\t\t\t\t<div btns>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">Like</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div infoTab *ngSwitchCase=\"'info'\">\n\t\t\t\t<div titlePage>\n\t\t\t\t\t<h5>Technical Event Suppot</h5>\n\t\t\t\t\t<small>3 month ago</small>\n\t\t\t\t</div>\n\t\t\t\t<img src=\"assets/img/bowl2.jpg\" alt=\"\" mainImg>\n\t\t\t\t<div allmembers>\n\t\t\t\t\t<span><img src=\"assets/img/img1.jpg\" alt=\"\"><img src=\"assets/img/img2.jpg\" alt=\"\"><img src=\"assets/img/img3.jpg\" alt=\"\"><img src=\"assets/img/img4.jpg\" alt=\"\"><img src=\"assets/img/img5.jpg\" alt=\"\"> </span> <p>+ 253k members</p>\n\t\t\t\t</div>\n\t\t\t\t<p para>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n<br><br>\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n<br><br>\nLorem ipsum dolor sit amet, consectetuer adipiscing... </p>\n\t\t\t</div>\n\n\t\t\t<div searchTab *ngSwitchCase=\"'search'\">\n\t\t\t\t<div form>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<label>Search Topic</label>\n\t\t\t\t\t\t\t<ion-input value=\"\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h6>Related Topics</h6>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><ion-icon name=\"arrow-forward-outline\"></ion-icon> Contrary to popular</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><ion-icon name=\"arrow-forward-outline\"></ion-icon> long established\u2028</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><ion-icon name=\"arrow-forward-outline\"></ion-icon> Hampden-Sydney\u2028</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><ion-icon name=\"arrow-forward-outline\"></ion-icon> Bonorum et Malorum</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<ion-button btnsave>Search</ion-button>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "xXbo":
    /*!*************************************************************!*\
      !*** ./src/app/bowl-details/bowl-details-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: BowlDetailsPageRoutingModule */

    /***/
    function xXbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BowlDetailsPageRoutingModule", function () {
        return BowlDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bowl_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bowl-details.page */
      "1dCu");

      var routes = [{
        path: '',
        component: _bowl_details_page__WEBPACK_IMPORTED_MODULE_3__["BowlDetailsPage"]
      }];

      var BowlDetailsPageRoutingModule = function BowlDetailsPageRoutingModule() {
        _classCallCheck(this, BowlDetailsPageRoutingModule);
      };

      BowlDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BowlDetailsPageRoutingModule);
      /***/
    },

    /***/
    "ycOT":
    /*!*****************************************************!*\
      !*** ./src/app/bowl-details/bowl-details.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ycOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-button[toggle] {\n  min-width: 1px;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 6px;\n  width: 25px;\n  height: 25px;\n  --background: rgba(0,0,0, .1);\n  --border-radius: 100px;\n}\n\nion-header ion-button[toggle] ion-icon {\n  color: #666;\n  font-size: 15px;\n}\n\n[titlePage] {\n  padding: 15px 0px 10px;\n}\n\n[titlePage] h5 {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 0;\n}\n\n[titlePage] small {\n  font-size: 12px;\n  color: #777;\n}\n\n[titlePage] small:before {\n  content: \".\";\n  position: relative;\n  top: -3px;\n  font-size: 25px;\n  margin-right: 7px;\n}\n\nion-segment {\n  border-radius: 14px;\n  background: transparent;\n  box-shadow: none;\n  padding: 15px 0 0;\n}\n\nion-segment ion-segment-button {\n  --border-radius:14px;\n  color: #888;\n}\n\nion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow:none;\n  --indicator-color:transparent;\n  color: var(--ion-color-secondary);\n}\n\nion-segment ion-segment-button:before {\n  display: none;\n}\n\nion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 11.5px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\nion-segment ion-segment-button ion-icon {\n  font-size: 18px;\n}\n\n[padding] {\n  padding-bottom: 0;\n}\n\nul[mybowlsPage] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nul[mybowlsPage] li {\n  display: flex;\n  align-items: center;\n  margin: 0px 0 0;\n  padding: 15px 0;\n  border-bottom: 1px solid #eee;\n}\n\nul[mybowlsPage] li [bowlimg] {\n  margin-right: 20px;\n}\n\nul[mybowlsPage] li [bowlimg] img {\n  width: 90px;\n  min-width: 90px;\n  height: 90px;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nul[mybowlsPage] li h4 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\n\nul[mybowlsPage] li p {\n  font-size: 13px;\n  color: #888;\n  margin: 0;\n}\n\nul[mybowlsPage][explorePage] li {\n  align-items: flex-start;\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--ion-color-secondary);\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label ion-icon {\n  margin-right: 5px;\n}\n\nul[mybowlsPage][explorePage] li [btn-join] {\n  --padding-start:30px;\n  --padding-end:30px;\n  font-size: 12px;\n  margin: 15px 0 0;\n  min-height: 20px;\n  height: 34px;\n}\n\n[posts] [postinner] {\n  background: var(--ion-color-black);\n  border-bottom: 7px solid #eee;\n  padding: 10px 20px;\n}\n\n[posts] [postinner] [desc] {\n  margin-top: 0px;\n  line-height: 1.5;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n[posts] [postinner] ion-item {\n  --inner-padding-end:0px;\n  --background:transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-item ion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n[posts] [postinner] ion-item ion-label {\n  margin-left: 10px;\n  margin-top: 0px;\n}\n\n[posts] [postinner] ion-item ion-label h2 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span {\n  font-weight: 400;\n  font-size: 12px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span:before {\n  content: \".\";\n  position: relative;\n  top: -3px;\n  font-size: 25px;\n  color: #666;\n  margin-right: 5px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-white);\n  font-size: 12px;\n  padding: 4px 10px;\n  display: inline-block;\n  border-radius: 10px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons ion-icon {\n  transform: translateY(1px);\n  margin-right: 3px;\n}\n\n[posts] [postinner] ion-item ion-buttons[slot=\"end\"] {\n  background: rgba(0, 0, 0, 0.05);\n  color: #C4C4C4;\n  border-radius: 50%;\n  padding: 6px;\n  font-size: 14px;\n}\n\n[posts] [postinner] ion-card {\n  background: transparent;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card [postimg] img {\n  max-height: 250px;\n  min-height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 24px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a {\n  text-decoration: none;\n  font-size: 26px;\n  margin-right: 15px;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a[hearticon] {\n  color: var(--ion-color-secondary);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pl-0] {\n  padding-left: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pr-0] {\n  padding-right: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p {\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 400;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p b {\n  font-weight: 600;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item {\n  align-items: start;\n  --inner-padding-end:0px;\n  --background:transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-avatar {\n  width: 35px;\n  height: 35px;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label {\n  white-space: normal;\n  margin-left: 10px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label [btns] a {\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 600;\n  margin-right: 25px;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label h2 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label p {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n[infoTab] {\n  padding: 0 20px 20px;\n}\n\n[infoTab] [mainImg] {\n  width: 100%;\n  border-radius: 20px;\n}\n\n[infoTab] [para] {\n  font-size: 12px;\n  color: #666;\n  line-height: 150%;\n}\n\n[infoTab] [allmembers] {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n[infoTab] [allmembers] span img {\n  width: 28px;\n  height: 28px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  position: relative;\n  margin-left: -7px;\n}\n\n[infoTab] [allmembers] p {\n  font-size: 12px;\n  color: #999;\n  margin: 0 0 0 5px;\n}\n\n[searchTab] {\n  padding: 20px 20px 0;\n}\n\n[searchTab] [form] {\n  margin: 20px 0 0;\n}\n\n[searchTab] [form] ion-row {\n  margin: 10px 0 0;\n}\n\n[searchTab] [form] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[searchTab] [form] ion-row ion-col ion-input, [searchTab] [form] ion-row ion-col ion-textarea {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[searchTab] [form] ion-row ion-col h6 {\n  margin: 0 0 15px;\n  font-size: 14px;\n  color: #333;\n}\n\n[searchTab] [form] ion-row ion-col ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n[searchTab] [form] ion-row ion-col ul li {\n  margin-top: 6px;\n}\n\n[searchTab] [form] ion-row ion-col ul li a {\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  font-size: 13px;\n  display: flex;\n  text-transform: capitalize;\n  align-items: center;\n}\n\n[searchTab] [form] ion-row ion-col ul li a ion-icon {\n  margin-right: 10px;\n}\n\n[searchTab] [btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  /*width: 100%;*/\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jvd2wtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxjQUFjO0VBQ1gsWUFBVTtFQUNWLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUFhO0VBQ2Isc0JBQWdCO0FBRHRCOztBQVZBO0VBYU8sV0FBVztFQUNYLGVBQWU7QUFDdEI7O0FBRUE7RUFHQyxzQkFBcUI7QUFEdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVE7QUFDVjs7QUFFQTtFQUFFLGVBQWU7RUFDZixXQUFXO0FBRWI7O0FBRUE7RUFGRyxZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWdCO0FBSW5COztBQUFBO0VBQ0MsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWdCO0FBR2pCOztBQVBBO0VBTUUsb0JBQWdCO0VBQ2hCLFdBQVc7QUFLYjs7QUFaQTtFQVNHLDJCQUF1QjtFQUN2Qiw2QkFBa0I7RUFDbEIsaUNBQWlDO0FBT3BDOztBQWxCQTtFQWNHLGFBQWE7QUFRaEI7O0FBdEJBO0VBaUJHLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQVM1Qjs7QUE3QkE7RUF1QkcsZUFBZTtBQVVsQjs7QUFFQTtFQVBDLGlCQUFpQjtBQVNsQjs7QUFQQTtFQUNDLGdCQUFnQjtFQUNoQixVQUFTO0VBQ1QsU0FBUTtBQVVUOztBQWJBO0VBS0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFjO0VBQ2QsZUFBYztFQUNkLDZCQUE0QjtBQVk5Qjs7QUFyQkE7RUFXRyxrQkFBaUI7QUFjcEI7O0FBekJBO0VBYUksV0FBVTtFQUNWLGVBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFnQnJCOztBQWpDQTtFQXFCRyxl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QkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFnQjtBQTZCcEI7O0FBRUE7RUEzQkcsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBZ0I7QUE2Qm5COztBQUVBO0VBMUJDLG9CQUFtQjtBQTRCcEI7O0FBRUE7RUE1QkUsZ0JBQWU7QUE4QmpCOztBQUVBO0VBOUJHLGdCQUFlO0FBZ0NsQjs7QUFFQTtFQS9CSyxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFjO0FBaUNuQjs7QUFFQTtFQWhDSyxzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBWTtBQWtDakI7O0FBRUE7RUFqQ0ssZ0JBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztBQW1DaEI7O0FBRUE7RUFsQ0ssZ0JBQWdCO0VBQ2hCLFVBQVM7RUFDVCxTQUFRO0FBb0NiOztBQUVBO0VBcENNLGVBQWU7QUFzQ3JCOztBQUVBO0VBdENPLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBd0MxQjs7QUFFQTtFQXhDUSxrQkFBa0I7QUEwQzFCOztBQUVBO0VBbkNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBQTtFQUNBLGVBQWU7RUFDZixZQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7QUFxQ2IiLCJmaWxlIjoiYm93bC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0aW9uLWJ1dHRvbntcclxuXHRcdCZbdG9nZ2xlXXtcclxuXHRcdFx0bWluLXdpZHRoOiAxcHg7XHJcblx0XHQgICAgLS1wYWRkaW5nOiAwO1xyXG5cdFx0ICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdCAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG5cdFx0ICAgIG1hcmdpbjogMCA2cHg7XHJcblx0XHQgICAgd2lkdGg6IDI1cHg7XHJcblx0XHQgICAgaGVpZ2h0OiAyNXB4O1xyXG5cdFx0ICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjEpO1xyXG5cdFx0ICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0XHQgICAgaW9uLWljb257XHJcblx0XHQgICAgXHRjb2xvcjogIzY2NjtcclxuXHRcdCAgICBcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdCAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblt0aXRsZVBhZ2Vde1xyXG5cdHBhZGRpbmc6MTVweCAwcHggMTBweDtcclxuXHRoNXtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRtYXJnaW46MDtcclxuXHR9XHJcblx0c21hbGx7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdCY6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiLlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRvcDogLTNweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6N3B4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5pb24tc2VnbWVudHtcclxuXHRib3JkZXItcmFkaXVzOjE0cHg7XHJcblx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdHBhZGRpbmc6MTVweCAwIDA7XHJcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xyXG5cdFx0LS1ib3JkZXItcmFkaXVzOjE0cHg7XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdCYuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuXHRcdFx0LS1pbmRpY2F0b3ItYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHQtLWluZGljYXRvci1jb2xvcjp0cmFuc3BhcmVudDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOyBcclxuXHRcdH1cclxuXHRcdCY6YmVmb3Jle1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdFx0aDZ7XHJcblx0XHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0XHRmb250LXNpemU6IDExLjVweDtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdH1cclxuXHRcdGlvbi1pY29ue1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltwYWRkaW5nXXtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG51bFtteWJvd2xzUGFnZV17XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOjA7XHJcblx0bWFyZ2luOjA7XHJcblx0bGl7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbjowcHggMCAwO1xyXG5cdFx0cGFkZGluZzoxNXB4IDA7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0W2Jvd2xpbWdde1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6MjBweDtcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdHdpZHRoOjkwcHg7XHJcblx0XHRcdFx0bWluLXdpZHRoOjkwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg0e1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdG1hcmdpbjowIDAgNXB4O1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRjb2xvcjogIzg4ODtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdCZbZXhwbG9yZVBhZ2Vde1xyXG5cdFx0bGl7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRbYm93bGltZ117XHJcblx0XHRcdFx0bGFiZWx7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDo1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFtidG4tam9pbl17XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OjMwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDozMHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRtYXJnaW46MTVweCAwIDA7XHJcblx0XHRcdFx0bWluLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbltwb3N0c117XHJcblx0W3Bvc3Rpbm5lcl17XHJcblx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRib3JkZXItYm90dG9tOjdweCBzb2xpZCAjZWVlO1xyXG5cdFx0cGFkZGluZzoxMHB4IDIwcHg7XHJcblx0XHRbZGVzY117ICBcclxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRmb250LXNpemU6MTdweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdFx0fVxyXG5cdFx0aW9uLWl0ZW17XHJcblx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdG92ZXJmbG93OnZpc2libGU7XHJcblx0XHRcdGlvbi1hdmF0YXJ7XHJcblx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcdGgye1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDo1MDA7XHJcblx0XHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxMnB4O1xyXG5cdFx0XHRcdFx0XHQmOmJlZm9yZXtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OlwiLlwiO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR0b3A6IC0zcHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDo1cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206M3B4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWJ1dHRvbnN7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjNweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJde1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjA1KTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjQzRDNEM0O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpb24tY2FyZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0W3Bvc3RpbWddeyBcclxuXHRcdFx0XHRcdGltZ3tcclxuXHRcdFx0XHRcdFx0bWF4LWhlaWdodDoyNTBweDtcclxuXHRcdFx0XHRcdFx0bWluLWhlaWdodDoyNTBweDtcclxuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDpjb3ZlcjtcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czoyNHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tY2FyZC1jb250ZW50e1xyXG5cdFx0XHRcdFx0W2NvbW1lbnRjb3VudHNde1xyXG5cdFx0XHRcdFx0XHRbcG9zdGljb25zXXtcclxuXHRcdFx0XHRcdFx0XHRhe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsLjMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JltoZWFydGljb25dXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRbcGwtMF17XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRbcHItMF17XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDowcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRcdGJ7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDo2MDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlvbi1pdGVte1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XHJcblx0XHRcdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xyXG5cdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OnZpc2libGU7XHJcblx0XHRcdFx0XHRcdGlvbi1hdmF0YXJ7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpb24tbGFiZWx7XHJcblx0XHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6bm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0W2J0bnNde1xyXG5cdFx0XHRcdFx0XHRcdFx0YXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjI1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoMntcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gICBcclxuXHR9XHJcblxyXG5baW5mb1RhYl17XHJcblx0cGFkZGluZzowIDIwcHggMjBweDtcclxuXHRbbWFpbkltZ117XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0fVxyXG5cdFtwYXJhXXtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE1MCU7XHJcblx0fVxyXG5cdFthbGxtZW1iZXJzXXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0c3BhbntcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdHdpZHRoOjI4cHg7XHJcblx0XHRcdFx0aGVpZ2h0OjI4cHg7XHJcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0Oi03cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRcdG1hcmdpbjowIDAgMCA1cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltzZWFyY2hUYWJde1xyXG5cdHBhZGRpbmc6MjBweCAyMHB4IDA7XHJcblx0W2Zvcm1de1xyXG5cdFx0bWFyZ2luOjIwcHggMCAwO1xyXG5cdFx0aW9uLXJvd3tcclxuXHRcdFx0bWFyZ2luOjEwcHggMCAwO1xyXG5cdFx0XHRpb24tY29se1xyXG5cdFx0XHRcdGxhYmVse1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdG1hcmdpbjowIDAgOHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcclxuXHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRoNntcclxuXHRcdFx0XHRcdG1hcmdpbjowIDAgMTVweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bHtcclxuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRcdGxpe1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA2cHg7XHJcblx0XHRcdFx0XHRcdGF7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRpb24taWNvbntcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0W2J0bnNhdmVde1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdC8qd2lkdGg6IDEwMCU7Ki9cclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbToyMHB4O1xyXG5cdFx0bGVmdDogMjBweDtcclxuXHRcdHJpZ2h0OiAyMHB4O1xyXG5cdH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=bowl-details-bowl-details-module-es5.js.map