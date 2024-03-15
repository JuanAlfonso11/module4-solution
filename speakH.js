(function() {
    // Create the helloSpeaker object
    var helloSpeaker = {
      speak: function(name) {
        console.log(speakWord + " " + name);
      }
    };
  
    // Expose helloSpeaker to the global scope
    window.helloSpeaker = helloSpeaker;
  })();