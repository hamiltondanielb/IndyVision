angular.module('app').controller('mvMainCtrl', function($scope,mvCachedEvents) {
    $scope.map = {
        center: {
            latitude: 39.7910,
            longitude: -86.1480
        },
        zoom: 8
    };
    $scope.events = mvCachedEvents.query();
});