(function() { // IIFE - Step 1

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // STEP 10: Loop over the names array
    for (var i = 0; i < names.length; i++) {
  
      // STEP 11: Retrieve the first letter of the current name
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      // STEP 12: Compare the firstLetter and call appropriate speaker
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  
  })();