var React = require('react'),
    ReactDOM = require('react-dom'),
    Organ = require('./components/organ'),
    Note = require('./util/Note.js'),
    Key = require('./components/key');

require('./util/KeyListener.js');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Organ/>, document.getElementById('root'));
});
