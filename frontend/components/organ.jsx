var React = require('react'),
    Note = require('../util/Note'),
    KeyListener = require('../util/KeyListener'),
    KeyActions = require('../actions/KeyActions'),
    KeyStore = require('../stores/KeyStore'),
    Key = require('./key'),
    TONES = require('../constants/Tones');

var Organ = React.createClass({
  getInitialState: function () {
    return {notes: []};
  },

  componentDidMount: function () {
    KeyStore.addListener(this.keyChange);
  },

  render: function() {
    return (<p>potato</p>);
  },

  keyChange: function () {

  }

});

module.exports = Organ;
