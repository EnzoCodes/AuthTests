 (function() {
// Initialize Firebase
var config = {
apiKey: "AIzaSyAKovIgnElTXfZog6-eGf7X3vU1I7go6yI",
authDomain: "imagewordmatch.firebaseapp.com",
databaseURL: "https://imagewordmatch.firebaseio.com",
projectId: "imagewordmatch",
storageBucket: "imagewordmatch.appspot.com",
messagingSenderId: "621229379920"
};
firebase.initializeApp(config);


//
// var score = 0;
//
//
// points.addEventListener('click', function(event) {
//     score++
//     // Create storage reference for score
//
//     // Upload score
//
//     // Update score to screen
//
// });

    // Get elements
    const preObject = document.getElementById('object');

    // create references
    const dbRefObject = firebase.database().ref().child('object');

    //sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

}()); // Closing wrapper.



//  When a user registers for the game we want to save a 'score' object
//  to their dedicated node in our database.
// To do this we:
//  Create a node for each user under their account's uid property
//  sice it's garunteed to be a unique identifier.
//  While we will continue to save 'score' under a unique push ID
//  we'll also capture this ID and save it as an attribute in a main
//  'SCORES' object...


// @Override
// public void onMatch_In_Guess_Array(View score)
