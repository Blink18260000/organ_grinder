var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function (noteName) {
    var payload = {actionType: "PLAY_NOTE", noteName: noteName};
    AppDispatcher.dispatch(payload);
  },

  keyUnpressed: function (noteName) {
    var payload = {actionType: "STOP_NOTE", noteName: noteName};
    AppDispatcher.dispatch(payload);
  }
};

module.exports = KeyActions;
