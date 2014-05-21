angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(mvAuth) {
      return mvAuth.authorizeCurrentUserForRoute('admin')
    }} //TODO:  add teacher property the same way to allow for checks and routes based on teacher role
  }

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup',{templateUrl: '/partials/account/signup',
      controller: 'mvSignupCtrl'
    });

});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
