import DS from 'ember-data';

export default DS.Model.extend({
  offense_date: DS.attr('date'),
  location: DS.attr('string'),
  statute_description: DS.attr('string'),
  //location_1:DS.attr('object')
}).reopenClass({
    FIXTURES: [
      {
        "id": 1,
        "statute" : "9-21-5-2(2)",
        "vio_type" : "IC",
        "location" : "I465",
        "dir_lane" : "NORTH",
        "statute_description" : "SPEEDING - EXCEEDING MAXIMUM 55 MPH/IFC",
        "mile_post" : "11.80",
        "location_1" : {
          "needs_recoding" : false,
          "longitude" : "-86.264443805637",
          "latitude" : "39.747874986342"
        },
        "offense_date" : "2014-05-18T00:00:00"
      },
      {
        "id": 2,
        "statute" : "9-24-19-1",
        "vio_type" : "IC",
        "location" : "I 465",
        "dir_lane" : "SOUTH",
        "statute_description" : "DRIVING WHILE PERMIT OR LICENSE SUSPENDED OR REVOKED/IFA",
        "mile_post" : "15.10",
        "location_1" : {
          "needs_recoding" : false,
          "longitude" : "-86.274339106365",
          "latitude" : "39.79561181983"
        },
        "offense_date" : "2014-05-18T00:00:00"
      }
    ]
});
