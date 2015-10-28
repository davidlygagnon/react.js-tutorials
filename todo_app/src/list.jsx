var React = require('react');
var ListItem = require('./listItem');

module.exports = React.createClass({
  render: function() {
    return <ul>
        {this.renderList()}
    </ul>
  },
  renderList: function() {
      if (!this.props.items || this.props.items.length === 0) {
        return <h4>Add a todo to get started</h4>
      } else {
        var children = [];
        for (var key in this.props.items) {
            var item = this.props.items[key];
            if (item && key !== '.key') {
              item.key = key;
              children.push(
                  <ListItem
                    item={item}
                    key={key}>
                  </ListItem>
                );
            }
        }
        return children;
      }
  }
});
