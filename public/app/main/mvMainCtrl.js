angular.module('app').controller('mvMainCtrl', function($scope,mvCachedEvents,$http) {
    $scope.map = {
        layers: {
            showTraffic: true
        },
        bounds: {
            northeast:{
                latitude: 41.7684,
                longitude: -88.158
            },
            southwest:{
                latitude: 37.7684,
                longitude: -84.158
            }
        },
        center: {
            latitude: 39.7684,
            longitude: -86.158
        },
        zoom:12,
        tickets: [
        ],
        accidents: [
        ]
    };

    $scope.Circle = {
        visible: true,
        editable: true,
        draggable: true,
        geodesic: true,
        stroke:{
            weight: 2,
            color:"#08B21F",
            opacity: 1
        },
        fill:{
            color:"#08B21F",
            opacity: 0.5
        },
        center:{
            latitude: 39.7684,
            longitude: -86.158
        },
        radius: 5199.95859
        };

    $scope.getLocations = function()
    {
        $http({method: 'GET', url: 'http://communities.socrata.com/resource/geug-a2k2.json?$limit=100&$where=within_circle(location_1,39.7684,-86.158,12100)&$order=offense_date%20desc'}).success(function(data)
        {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var newTickets =
                {
                    offense_date: data[i].offense_date,
                    location: data[i].location,
                    statute_description: data[i].statute_description,
                    infoWindow: {
                        coords: {
                            latitude: data[i].location_1.latitude,
                            longitude: data[i].location_1.longitude
                        },
                        options: {
                            disableAutoPan: true
                        },
                        show: false
                    },
                    options: {
                        title: data[i].statute_description,
                        icon: {
                            url: "../../img/Popo_tiny.png",
                            scaledSize:{
                                height:20,
                                width:25
                            }
                        }
                    },
                    marker:
                    {
                        latitude: data[i].location_1.latitude,
                        longitude: data[i].location_1.longitude
                    }
                };


                $scope.map['tickets'].push(newTickets);
            }
            //console.log($scope.map);
        });

        $http({method: 'GET', url: 'http://communities.socrata.com/resource/3iyy-dr5n.json?countydescr=marion&$limit=25&$order=colldte%20desc'}).success(function(data)
        {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var newAccident =
                {
                    colldte: data[i].colldte,
                    surfacetypecde_conddescr: data[i].surfacetypecde_conddescr,
                    location: data[i].rdwyclassdescr,
                    statute_description: data[i].mannercolldescr,
                    options: {
                        title: data[i].mannercolldescr,
                        icon: {
                            url: "http://cdn-img.easyicon.net/png/10837/1083701.png"
                        }
                    },
                    marker:
                    {
                        latitude: data[i].latdecimalnmb,
                        longitude: data[i].longdecimalnmb
                    }
                };


                $scope.map['accidents'].push(newAccident);
            }
            //console.log($scope.map);
        });
    }
});
