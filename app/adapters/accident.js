import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll: function(){
    return $.getJSON('http://communities.socrata.com/resource/3iyy-dr5n.json?countydescr=marion&$limit=25&$order=colldte%20desc');
  }
});
