var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    title: {type: String, require: '{PATH} is required!'},
    featured: {type: Boolean, require: '{PATH} is required!'},
    published: {type: Date, require: '{PATH} is required!'},
    tags: [String]
});

var Event = mongoose.model('Event', eventSchema);

function createDefaultEvents(){
    Event.find({}).exec(function(err,collection){
        if(collection.length === 0){
            Event.create({title: 'Indy Civic Hackathon', featured: true, published: new Date('5/31/2014'), tags:["Coding", "Misc"]});
            Event.create({title: 'Indy 500', featured: true, published: new Date('5/25/2014'), tags:["Racing", "Sports"]});
            Event.create({title: 'Pacers vs. Heat', featured: false, published: new Date('5/28/2014'), tags:["Sports", "Basketball"]});
            Event.create({title: 'Jack Johnson', featured: false, published: new Date('6/1/2014'), tags:["Concert"]});
            Event.create({title: 'Indians Game', featured: true, published: new Date('5/29/2014'),  tags:["Sports","Baseball"]});
            Event.create({title: 'Indy Gun and Knife Show', featured: true, published: new Date('5/30/2014'), tags:["Event"]});
            Event.create({title: 'The Zombie Run Extreme/Black Ops: Indianapolis', featured: true, published: new Date('8/1/2014'),  tags:["Run"]});

        }
    })

}

exports.createDefaultEvents = createDefaultEvents;