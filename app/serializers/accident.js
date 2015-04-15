import DS from "ember-data";

export default DS.RESTSerializer.extend({
  // First, restructure the top-level so it's organized by type
   // and the comments are listed under a post's `comments` key.
   extractArray: function(store, type, payload) {
     var accidents = payload;
     var comments = [];
     var postCache = {};

     accidents.forEach(function(accident, index) {
       accident.id = index;
     });

     payload = {accidents: payload };

     return this._super(store, type, payload);
   },

   normalizeHash: {
     // Next, normalize individual comments, which (after `extract`)
     // are now located under `comments`
     comments: function(hash) {
       hash.id = hash._id;
       hash.title = hash.comment_title;
       delete hash._id;
       delete hash.comment_title;
       return hash;
     }
   }
});
