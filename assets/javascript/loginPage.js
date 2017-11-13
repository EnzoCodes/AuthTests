//  (function() {
//
//
//
//
//
// }()); // Closing wrapper.



// Ways to save database
// set - write or replace data to a defined path, like messenger/users/<username>
// update - update some of the keys for a defined path without replacing all of the data
// push - add to a list of data in the database. every time you push a new NODE onto a list
//        your databse generates a unique key, like messages/users/<unique-user-id>/<username>
// transaction - Dont use this...

// final FirebaseDatabase database = FirebaseDatabase.getInstance();
// DatabaseReference ref = database.getReference("server/saving-data/fireblog");


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
