import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll: function(){
    return $.getJSON('http://communities.socrata.com/resource/geug-a2k2.json?$limit=100&$where=within_circle(location_1,39.7684,-86.158,12100)&$order=offense_date%20desc');
  }
});
