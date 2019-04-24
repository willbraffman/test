angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('new', {
    url: '/page3',
    templateUrl: 'templates/new.html',
    controller: 'newCtrl'
  })

  .state('sources', {
    url: '/page4',
    templateUrl: 'templates/sources.html',
    controller: 'sourcesCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('neptune', {
    url: '/page5',
    templateUrl: 'templates/neptune.html',
    controller: 'neptuneCtrl'
  })

  .state('ultrasound', {
    url: '/page6',
    templateUrl: 'templates/ultrasound.html',
    controller: 'ultrasoundCtrl'
  })

  .state('sixLS', {
    url: '/page7',
    templateUrl: 'templates/sixLS.html',
    controller: 'sixLSCtrl'
  })

  .state('nine', {
    url: '/page8',
    templateUrl: 'templates/nine.html',
    controller: 'nineCtrl'
  })

  .state('search', {
    url: '/page9',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('bolders', {
    url: '/page11',
    templateUrl: 'templates/bolders.html',
    controller: 'boldersCtrl'
  })

  .state('addSource', {
    url: '/page10',
    templateUrl: 'templates/addSource.html',
    controller: 'addSourceCtrl'
  })

  .state('willbraffmanSRepo', {
    url: '/page12',
    templateUrl: 'templates/willbraffmanSRepo.html',
    controller: 'willbraffmanSRepoCtrl'
  })

  .state('gradient', {
    url: '/page13',
    templateUrl: 'templates/gradient.html',
    controller: 'gradientCtrl'
  })

  .state('snowboard', {
    url: '/page14',
    templateUrl: 'templates/snowboard.html',
    controller: 'snowboardCtrl'
  })

  .state('upgrades', {
    url: '/page15',
    templateUrl: 'templates/upgrades.html',
    controller: 'upgradesCtrl'
  })

  .state('login', {
    url: '/page16',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page17',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('sources2', {
    url: '/page18',
    templateUrl: 'templates/sources2.html',
    controller: 'sources2Ctrl'
  })

$urlRouterProvider.otherwise('')


});