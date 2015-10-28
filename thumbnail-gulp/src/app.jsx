var React = require('react'),
  ThumbnailList = require('./thumbnail-list');
  
var options = {
    thumbnailData: [{
      title: 'Show Courses',
      number: 12,
      imageUrl: "https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png",
      header: "Learn React",
      description: "React is a fantastic new front end library for rending web pages!!!"
    }, {
      title: 'Show Courses',
      number: 25,
      imageUrl: "http://devstickers.com/assets/img/pro/jv81.png",
      header: "Learn Gulp",
      description: "Gulp will speed up your development workflow. :) Trust me :)"
    }]
  };

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));