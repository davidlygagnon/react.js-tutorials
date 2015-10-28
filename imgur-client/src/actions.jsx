var Reflux = require('reflux');

// Action object, contains only action
module.exports = Reflux.createActions([
    'getTopics', // single action
    'getImages'
]);
