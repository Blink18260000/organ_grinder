var React = require('react'),
    Note = require('../util/Note'),
    KeyListener = require('../util/KeyListener'),
    KeyActions = require('../actions/KeyActions'),
    KeyStore = require('../stores/KeyStore'),
    Key = require('./key'),
    TONES = require('../constants/Tones'),
    KeyMap = require('../constants/KeyMap'),
    Recorder = require('./recorder');

var Organ = React.createClass({

  render: function() {
    return(
      <ul>
        {
          Object.keys(KeyMap).map(function(key) {
            return <Key noteName={KeyMap[key]} key={KeyMap[key]}/>;
          })
        }
        <Recorder />
      </ul>
    );
  }

});

module.exports = Organ;
