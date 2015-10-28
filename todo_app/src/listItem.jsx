var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://glaring-torch-9103.firebaseio.com/'

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);

  },
  render:function() {
    return <div className="input-group">
      <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}/>
      </span>
      <input type="text"
        disabled={this.state.done}
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button
            className="btn btn-default"
            onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  },
  changesButtons: function() {
    if (this.state.textChanged) {
      return [
          <button
            className="btn btn-default"
            onClick={this.handleSaveClick}
            >
            Save
          </button>,
          <button
            className="btn btn-default"
            onClick={this.handleUndoClick}
            >
            Undo
          </button>
        ]
    } else {
      return null;
    }
  },
  handleSaveClick: function() {
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },
  handleTextChange: function(event) {
      this.setState({
        text: event.target.value,
        textChanged: true
      });
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update); // firebase points to particular node. Calls update function to update this node
  },
  handleDeleteClick: function() {
    this.fb.remove();
  }
});