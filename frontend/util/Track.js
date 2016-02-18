var KeyActions = require('../actions/KeyActions');

function Track(attr) {
  this.name = attr.name;
  if (attr.roll) {
    this.roll = attr.roll;
  } else {
    this.roll = [];
  }

  var play = function() {
    if (this.interval) {
      return;
    }
    var playbackStartTime = (new Date().getTime());
    var currentNote = 0;
    var interval = setInterval(function() {
      if (currentNote < this.roll.length) {
        if (this.roll[currentNote].timeSlice < ((new Date()).getTime()) - playbackStartTime) {
          currentNote += 1;
          KeyActions.playNote(this.roll[currentNote].notes);
        }
      } else {
        clearInterval(interval);
        this.interval = undefined;
      }
    }, 10);
  };
}

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = (new Date()).getTime();
};

Track.prototype.addNotes = function (curNotes) {
  this.roll.push({
    timeSlice: ((new Date).getTime() - this.startTime),
    notes: curNotes
   });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

module.exports = Track;
