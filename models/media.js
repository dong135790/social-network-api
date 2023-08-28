const { Schema, Model } = require('mongoose');
// User schema defines the shape for user info.
// Child document/subdocument can be placed into a parent document
const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    thoughts: {

    },
    friends: {

    }
});

const Thought = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // Must be between 1-280 char.
    },
    createdAt: {
        // Date
        // Default value to current timestamp
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reaction: {
        // array of nested co created with the reactionSchema
    }
})