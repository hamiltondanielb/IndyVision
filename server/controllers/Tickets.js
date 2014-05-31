exports.getTickets = function(req,res){
    var tickets=[];
    $http({method: 'GET', url: 'http://communities.socrata.com/resource/geug-a2k2.json?$limit=100&$where=within_circle(location_1,39.7684,-86.158,12100)&$order=offense_date%20desc'}).success(function(data)
    {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newTickets =
            {
                offense_date: data[i].offense_date,
                location: data[i].location,
                statute_description: data[i].statute_description,
                options: {
                    title: data[i].statute_description,
                    icon: {
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiSf2-DEg7dew2JFlsOYdtu1OyITImTfCDaOM27EvpqF13QvbSQ"
                    }
                },
                marker:
                {
                    latitude: data[i].location_1.latitude,
                    longitude: data[i].location_1.longitude
                }
            };


            tickets.push(newTickets);
        }
        console.log($scope.map);
    });
    res.send(tickets);
}