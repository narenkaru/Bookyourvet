angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('welcome', {
    url: '/page1',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('mainPage', {
    url: '/page2',
    templateUrl: 'templates/mainPage.html',
    controller: 'mainPageCtrl'
  })

  .state('loginPage', {
    url: '/page3',
    templateUrl: 'templates/loginPage.html',
    controller: 'loginPageCtrl'
  })

  .state('signUp', {
    url: '/page4',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('menu.homePage', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homePage.html',
        controller: 'homePageCtrl'
      }
    }
  })

  .state('menu.myPet', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myPet.html',
        controller: 'myPetCtrl'
      }
    }
  })

  .state('menu.addNewPet', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewPet.html',
        controller: 'addNewPetCtrl'
      }
    }
  })

  .state('menu.requestAnAppointment', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/requestAnAppointment.html',
        controller: 'requestAnAppointmentCtrl'
      }
    }
  })

  .state('menu.notification', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notification.html',
        controller: 'notificationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')


});