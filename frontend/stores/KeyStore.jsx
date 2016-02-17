var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var KeyStore = new Store(AppDispatcher);
//callbacks = [keyChange]

var _keys = [];

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "PLAY_NOTE":
      KeyStore.playNote(payload);
      break;
    case "STOP_NOTE":
      KeyStore.stopNote(payload);
      break;
  }
};

KeyStore.playNote = function (payload) {
  if (_keys.indexOf(payload.noteName) === -1) {
    _keys.push(payload.noteName);
    this.__emitChange();
  }
};

KeyStore.stopNote = function (payload) {
  if (_keys.indexOf(payload.noteName) !== -1) {
    _keys.splice(_keys.indexOf(payload.noteName), 1);
    this.__emitChange();
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

module.exports = KeyStore;
