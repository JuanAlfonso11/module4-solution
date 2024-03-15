(function() {

    // STEP 7: Create 'byeSpeaker' object
    var byeSpeaker = {};
  
    // DO NOT attach speakWord to byeSpeaker
  
    // Existing speakWord variable
    var speakWord = "Good Bye";
  
    // STEP 8: Attach speak function to byeSpeaker object
    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    // STEP 9: Expose byeSpeaker object globally
    window.byeSpeaker = byeSpeaker;
  
  })();