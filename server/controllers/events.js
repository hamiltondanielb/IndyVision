var Event = require('mongoose').model('Event');

exports.getEvents = function(req,res){
    Event.find({}).exec(function(err,collection){
        res.send(collection);
    })
}