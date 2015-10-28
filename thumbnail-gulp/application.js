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
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function (thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
      )
  }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function () {
    return React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "col-sm-6 col-md-4"}, 
        React.createElement("div", {className: "thumbnail"}, 
          React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, React.createElement("a", {href: "#", className: "btn btn-primary", role: "button"}, "Button"), " ", React.createElement("a", {href: "#", className: "btn btn-default", role: "button"}, "Button"))
          )
        )
      )
    )
  }
});
