export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng("39.7684","-86.158"),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(container[0], options);

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

  }.on('didInsertElement')
});
