var React = require('react'),
  Button = require('./button'),
  ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open}); 
  },

  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  //function that is run only once (initialization of the dropdown)
  getInitialState: function() {
    return { open: false };
  },

  render: function() {
    var list = this.props.items.map(function (item) {
      return <ListItem 
                className={this.state.itemTitle === item ? "active": ""} 
                item={item} 
                whenItemClicked={this.handleItemClick}/>
    }.bind(this));
    return <div className="dropdown">
      <Button 
        whenClicked={this.handleClick} 
        title={this.state.itemTitle || this.props.title} 
        className="btn-default" 
        subTitleClassName="caret" />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")} >
          {list}
        </ul>
    </div>
  }
});