var React = require('react'),
  Dropdown = require('./dropdown');
  
var options = {
  title: 'Choose a dessert', // button title
  items: [
    'Apple Pie',
    'Peach cobbler',
    'Coconut Cream Pie'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));