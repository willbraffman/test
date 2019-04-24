angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.new', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/new.html',
        controller: 'newCtrl'
      }
    }
  })

  .state('tabsController.sources', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/sources.html',
        controller: 'sourcesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.neptune'
      2) Using $state.go programatically:
        $state.go('tabsController.neptune');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.neptune', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/neptune.html',
        controller: 'neptuneCtrl'
      },
      'tab2': {
        templateUrl: 'templates/neptune.html',
        controller: 'neptuneCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ultrasound'
      2) Using $state.go programatically:
        $state.go('tabsController.ultrasound');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('tabsController.ultrasound', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/ultrasound.html',
        controller: 'ultrasoundCtrl'
      },
      'tab2': {
        templateUrl: 'templates/ultrasound.html',
        controller: 'ultrasoundCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.sixLS'
      2) Using $state.go programatically:
        $state.go('tabsController.sixLS');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.sixLS', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/sixLS.html',
        controller: 'sixLSCtrl'
      },
      'tab2': {
        templateUrl: 'templates/sixLS.html',
        controller: 'sixLSCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.nine'
      2) Using $state.go programatically:
        $state.go('tabsController.nine');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.nine', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/nine.html',
        controller: 'nineCtrl'
      },
      'tab2': {
        templateUrl: 'templates/nine.html',
        controller: 'nineCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('bolders', {
    url: '/page11',
    templateUrl: 'templates/bolders.html',
    controller: 'boldersCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});