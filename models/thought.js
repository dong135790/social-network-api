const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
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
    username: { type: String, required: true },
    // A "reaction" subdocument that is added to the parent document (thoughtSchema) as an array
    reaction: [reactionSchema]
    // array of nested co created with the reactionSchema

});
const Thought = model('thought', thoughtSchema)

module.exports = Thought;
