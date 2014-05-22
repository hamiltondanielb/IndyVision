angular.module('app').controller('mvMainCtrl', function($scope,mvCourse) {
    $scope.courses = mvCourse.query();
});