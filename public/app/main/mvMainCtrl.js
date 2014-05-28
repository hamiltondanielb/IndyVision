angular.module('app').controller('mvMainCtrl', function($scope,mvCachedEvents) {
    $scope.events = mvCachedEvents.query();
});