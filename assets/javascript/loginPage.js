    console.log("JavaScript Up!");

    var config = {
    apiKey: "AIzaSyAKovIgnElTXfZog6-eGf7X3vU1I7go6yI",
    authDomain: "imagewordmatch.firebaseapp.com",
    databaseURL: "https://imagewordmatch.firebaseio.com",
    projectId: "imagewordmatch",
    storageBucket: "imagewordmatch.appspot.com",
    messagingSenderId: "621229379920"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var user = firebase.auth().currentUser;
    var userIdentity = profile.uid;

    if (user != null) {
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
        });
    };

    // function scorePlus(uid, score, username) {
    //
    //     var postData = {
    //         author: username,
    //         uid: uid,
    //         score: 0
    //     };
    //
    //     // Get a new Key for new score?
    //     var moreScore = firebase.database().ref().child('score').push(1).key;
    //
    //     var updates = {};
    //     updates['/score/' + newScoreKey] = scoreData;
    //
    //     return firebase.database().ref().update(updates);
    // }


    // OR

    // When score++, make post = true, to activate this codeblock!

    // function toggleScore(scoreRef, uid) {
    //    scoreRef.transaction(function(post) {
    //        if (post) {
    //            if (post.score && post.score[uid]){
    //                post.scoreCount++;
    //            }
    //            post.stars[uid] = false;
    //        }
    //    });
    //    return post;
    //    }




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
