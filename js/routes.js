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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.new'
      2) Using $state.go programatically:
        $state.go('tabsController.new');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.new', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/new.html',
        controller: 'newCtrl'
      },
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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.bolders'
      2) Using $state.go programatically:
        $state.go('tabsController.bolders');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
  .state('tabsController.bolders', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/bolders.html',
        controller: 'boldersCtrl'
      },
      'tab2': {
        templateUrl: 'templates/bolders.html',
        controller: 'boldersCtrl'
      }
    }
  })

  .state('tabsController.addSource', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/addSource.html',
        controller: 'addSourceCtrl'
      }
    }
  })

  .state('tabsController.willbraffmanSRepo', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/willbraffmanSRepo.html',
        controller: 'willbraffmanSRepoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.gradient'
      2) Using $state.go programatically:
        $state.go('tabsController.gradient');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
      /page1/tab3/page13
  */
  .state('tabsController.gradient', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/gradient.html',
        controller: 'gradientCtrl'
      },
      'tab2': {
        templateUrl: 'templates/gradient.html',
        controller: 'gradientCtrl'
      },
      'tab3': {
        templateUrl: 'templates/gradient.html',
        controller: 'gradientCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.snowboard'
      2) Using $state.go programatically:
        $state.go('tabsController.snowboard');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('tabsController.snowboard', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/snowboard.html',
        controller: 'snowboardCtrl'
      },
      'tab2': {
        templateUrl: 'templates/snowboard.html',
        controller: 'snowboardCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.upgrades'
      2) Using $state.go programatically:
        $state.go('tabsController.upgrades');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
  */
  .state('tabsController.upgrades', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/upgrades.html',
        controller: 'upgradesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/upgrades.html',
        controller: 'upgradesCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});