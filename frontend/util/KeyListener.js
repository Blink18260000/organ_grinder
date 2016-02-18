var KeyActions = require('../actions/KeyActions'),
    KeyMap = require('../constants/KeyMap');

var keyDownCallback = function(e) {
  KeyActions.keyPressed(KeyMap[e.keyCode]);
};

var keyUpCallback = function(e) {
  KeyActions.keyUnpressed(KeyMap[e.keyCode]);
};

$(document).on("keydown", keyDownCallback);
$(document).on("keyup", keyUpCallback);
