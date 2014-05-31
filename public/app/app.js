angular.module('app', ['ngResource', 'ngRoute',"google-maps"]);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(mvAuth) {
      return mvAuth.authorizeCurrentUserForRoute('admin')
    }},
    user: {auth: function(mvAuth) {
          return mvAuth.authorizeAuthenticatedUserForRoute()
    }},
    teacher: {auth: function(mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('teacher')
    }}
  }

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup',{templateUrl: '/partials/account/signup',
      controller: 'mvSignupCtrl'
    })
    .when('/profile', { templateUrl: '/partials/account/profile',
        controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/events', { templateUrl: '/partials/events/event-list',
       controller: 'mvEventListCtrl'
    })

});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
