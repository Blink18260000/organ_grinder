var React = require('react'),
    Note = require('../util/Note'),
    KeyListener = require('../util/KeyListener'),
    KeyActions = require('../actions/KeyActions'),
    KeyStore = require('../stores/KeyStore'),
    TONES = require('../constants/Tones');

var Key = React.createClass({
  getInitialState: function () {
    return {freq: TONES[this.props.noteName], playing: false};
  },

  componentDidMount: function () {
    console.log(this.state);
    this.Note = new Note(this.state.freq);
    console.log(this.Note);
    this.KeyStoreToken = KeyStore.addListener(this.NewKeys);
  },

  componentWillUnmount: function () {
    this.KeyStoreToken.remove();
  },

  render: function() {
    return (<p>Potato Salad</p>);
  },

  NewKeys: function() {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1 && !this.state.playing) {
      this.Note.start();
      this.setState({playing: true});
    }
    if (this.state.playing && KeyStore.all().indexOf(this.props.noteName) === -1) {
      this.Note.stop();
      this.setState({playing: false});
    }
  }

});

module.exports = Key;
