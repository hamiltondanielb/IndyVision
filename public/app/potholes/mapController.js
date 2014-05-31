var module = angular.module("mapApplication", ["google-maps"]);

module.controller('PotholeController',function ($scope, $http) {
    $scope.map = {
        center: {
            latitude: 39.79499,
            longitude: -86.1482
        },
        zoom:12,
        potholes: [
        ]
    };

    $scope.getLocations = function(numberofHoles)
    {
        console.log(numberofHoles);
        $http({method: 'GET', url: 'http://communities.socrata.com/resource/7dft-dfst.json?$limit='+numberofHoles}).success(function(data)
        {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var newPotHole =
                {
                    created_by: data[i].created_by,
                    marker:
                    {
                        latitude: data[i].geocoded_location.latitude,
                        longitude: data[i].geocoded_location.longitude
                    }
                };


                $scope.map['potholes'].push(newPotHole);
            }
            console.log($scope.map);
        });
    }
});