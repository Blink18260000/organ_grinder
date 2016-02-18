var React = require('react'),
    Note = require('../util/Note'),
    KeyListener = require('../util/KeyListener'),
    KeyActions = require('../actions/KeyActions'),
    KeyStore = require('../stores/KeyStore'),
    Key = require('./key'),
    TONES = require('../constants/Tones'),
    KeyMap = require('../constants/KeyMap'),
    Track = require('../util/Track');

var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: (new Track({name: "some track"}))};
  },

  componentDidMount: function () {
    this.KeyStoreToken = KeyStore.addListener(this.newKeys);
  },

  componentWillUnmount: function () {
    this.KeyStoreToken.remove();
  },

  render: function() {
    if (this.state.isRecording) {
      return (
        <div>
          <button onClick={this.ceaseRecording} className="stopButton">Stop</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.beginRecording} className="playButton">Start</button>
          <button onClick={this.playRecording} className="playButton">Play</button>
        </div>
      );
    }
  },

  beginRecording: function() {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  ceaseRecording: function() {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  playRecording: function() {
    this.state.track.play();
  },

  newKeys: function () {
    this.state.track.addNotes(KeyStore.all());
  }

});

module.exports = Recorder;
