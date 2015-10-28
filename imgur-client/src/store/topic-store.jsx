var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions], // if any of the action gets called, and we, the store, have the same function name as action called, then execute it.
  // object that contains configuration
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(result) {
        this.topics = result.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // trigger is a method by reflux, 'change' is event that happens,
    // this.topics is info we want to share
    this.trigger('change', this.topics);
  }
});
