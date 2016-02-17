var KeyActions = require('../actions/KeyActions'),
    KeyMap = require('../constants/KeyMap');

var keyDownCallback = function(e) {
  console.log("KeyListener KeyDown");
  KeyActions.keyPressed(KeyMap[e.keyCode]);
};

var keyUpCallback = function(e) {
  console.log("KeyListener KeyUp");
  KeyActions.keyUnpressed(KeyMap[e.keyCode]);
};

$(document).on("keydown", keyDownCallback);
$(document).on("keyup", keyUpCallback);
