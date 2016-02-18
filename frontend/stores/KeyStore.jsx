var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var KeyStore = new Store(AppDispatcher);
//callbacks = [keyChange]

var _keys = [];

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "PLAY_NOTE":
      KeyStore.playNote(payload.noteName);
      break;
    case "STOP_NOTE":
      KeyStore.stopNote(payload.noteName);
      break;
    case "SET_NOTES":
      KeyStore.setNotes(payload.notes);
      break;
  }
};

KeyStore.playNote = function (noteName) {
  if (_keys.indexOf(noteName) === -1) {
    _keys.push(noteName);
    this.__emitChange();
  }
};

KeyStore.stopNote = function (noteName) {
  if (_keys.indexOf(noteName) !== -1) {
    _keys.splice(_keys.indexOf(noteName), 1);
    this.__emitChange();
  }
};

KeyStore.setNotes = function (payload) {
  var notes = payload.notes;
  for (var i = 0; i < notes.length; i++) {
    if (_keys.indexOf(notes[i]) === -1) {
      this.playNote(notes[i]);
    }
  }
  for (i = 0; i < _keys.length; i++) {
    if (notes.indexOf(_keys[i]) === -1) {
      this.stopNote(_keys[i]);
    }
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

module.exports = KeyStore;
