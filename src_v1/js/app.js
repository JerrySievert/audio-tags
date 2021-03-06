document.addEventListener('DOMComponentsLoaded', function() {
    
    var oscillator = document.querySelector('audio-oscillator');
    var keyboard = document.querySelector('audio-keyboard');
    
    keyboard.addEventListener('noteon', function(e) {
        console.log('noteon event', e.detail.index);
        var index = e.detail.index | 0; // index comes as a string, cast it back into an integer
        var freq = MIDIUtils.noteToFrequency(index + 40); // 40 -> transpose to +C4
        oscillator.noteOn(freq);
    }, false);

    keyboard.addEventListener('noteoff', function(e) {
        oscillator.noteOff();
    }, false);
    
    /*oscillator.noteOn(440);

    setTimeout(function() {
        oscillator.noteOff();
    }, 1000);*/

}, false);
