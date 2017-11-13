 (function () {
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
    // var provider = new firebase.auth.GoogleAuthProvider(); Logging NULL!
    // console.log(provider); Logging NULL!
    var displayName;
    var email;
    var emailVerified;
    var photoURL;
    var uid = user.uid;
    var providerData;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user);
            console.log(user.uid);
            console.log(user.displayName);
        } else {
            console.log("YUCKIE");
        }
    });

    var userRef = firebase.database().ref('users/user');
    var userScoreRef = firebase.database().ref('users/user/score');

    document.getElementById('addPoints').onclick = function() {
        userScoreRef.transaction(function(currentScore) {
            return currentScore + 1;
        })
    };

    userRef.transaction(function(currentData) {
        if (currentData === null) {
            return { uid };
        } else {
            console.log('User #' + user.uid + 'already exists!');
            return; // ABORT
        }
        }, function(error, committed, snapshot) {
            if (error) {
                console.log('Transaction failed abnormally!', error);
            } else if (!committed) {
                console.log('We aboorted because user exists!');
            } else {
                console.log('User Added!');
            }
            console.log('User Data: ', snapshot.val());
        }
    });

}());

// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
// } else {
//     console.log("UUUUUHHHHHHH")
//     }
// });

// var userId = firebase.auth().currentUser.uid;
// var userIdentity = profile.uid;


// if (user != null) {
// user.providerData.forEach(function () {
//     console.log("Sign-in provider: " + provider.providerId);
//     console.log("  Provider-specific UID: " + provider.uid);
//     console.log("  Name: " + provider.displayName);
//     console.log("  Email: " + provider.email);
//     console.log("  Photo URL: " + provider.photoURL);
//     });
// };
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



// transction - update score

    firebase.database().ref('/users/' + userId)

    var userId = firebase.auth().currentUser.uid;

    fbUsers.child(userId + "/points")

    fbUsers = new Firebase("https://enzocodes.github.io/AuthTests/loggedIn.html");

//Users
    //UID
        //score.
