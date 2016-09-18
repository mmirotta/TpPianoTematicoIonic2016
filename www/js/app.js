// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ngCordova','ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

  .state('tab.ingreso', {
      url: '/ingreso',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/tab-ingreso.html',
          controller: 'IngresoCtrl'
        }
      }
    })

    .state('tab.juego', {
      url: '/juego/:usuario',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/tab-juego.html',
          controller: 'JuegoCtrl'
        }
      }
    })

  .state('tab.perfil', {
    url: '/perfil',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })

  .state('tab.eleccion', {
    url: '/eleccion/:usuario',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-eleccion.html',
        controller: 'EleccionCtrl'
      }
    }
  })

  .state('tab.imagen', {
      url: '/imagen',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/tab-imagen.html',
          controller: 'ImagenCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/inicio');

});
