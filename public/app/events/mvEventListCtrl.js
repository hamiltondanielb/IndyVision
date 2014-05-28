angular.module('app').controller('mvEventListCtrl',function($scope, mvCachedEvents){
    $scope.events = mvCachedEvents.query();

    $scope.sortOptions = [{value:"title",text:"Sort by Title"},
        {value:"published",text:"Sort by Publish Date"}];

    $scope.sortOrder = $scope.sortOptions[0].value;
});