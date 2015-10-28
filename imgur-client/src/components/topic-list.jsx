var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../store/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: [] // state starts with empty array.
    }
  },
  componentWillMount: function() {
    Actions.getTopics(); // note, this is defined as a string in Actions.jsx, but is turned into a function definition and can be called.
  },
  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function (topic) {
      return <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  },
  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
});