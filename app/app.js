'use strict';

var app = angular.module('shopApp',[
    'ui.router',
  ]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/admin', {
      templateUrl: 'site/partials/admin-login.html',
      controller: 'AuthCtrl as ctrl'
    })
    .state('/dashboard', {
      templateUrl: 'site/partials/admin-main.html',
      controller: 'AdminCtrl as ctrl'
    })
    .state('/addedit', {
      templateUrl: 'site/partials/admin-addedit.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/add', {
      templateUrl: 'site/partials/admin-add.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/edit',{
      templateUrl: 'site/partials/admin-edit.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/orders', {
      templateUrl: 'site/partials/admin-orders.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/updateOrder',{
      templateUrl: 'site/partials/admin-ordersUpdate.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/main', {
      templateUrl: 'site/partials/shop-main.html',
      controller: 'ProductCtrl as ctrl'
    })
    .state('/product', {
      templateUrl: 'site/partials/shop-product.html',
      controller: 'ProductCtrl as ctrl'
     })
    .state('/item', {
      templateUrl: 'site/partials/shop-item.html',
      controller: 'ProductCtrl as ctrl'
    })
    .state ('/cart', {
      templateUrl: 'site/partials/shop-cart.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/checkout', {
      templateUrl: 'site/partials/shop-checkout.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('/submitOrder' {
      templateUrl:'site/partials/shop-submit.html',
      controller: 'OrderCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/main'
    });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});