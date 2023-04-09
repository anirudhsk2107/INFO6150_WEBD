
function TopButtons() {
  var cities = [
    {
      id: 1,
      title: 'Boston'
    }
  ];
  return React.createElement("div", {
    className: "flex items-center justify-around my-6"
  }, cities.map(function (city) {
    return React.createElement("button", {
      key: city.id,
      className: "text-white text-5xl font-medium font-size"
    }, city.title);
  }));
}

var React = require('react');

module.exports = TopButtons;
