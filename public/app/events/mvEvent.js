angular.module('app').factory('mvEvent',function($resource){
    var EventResource = $resource('/api/events/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false}
    });
    return EventResource;
});