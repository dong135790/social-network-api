const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // Must be between 1-280 char.
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        // Date
        type: Date,
        // Default value to current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: function () {
            return Date.now().toLocaleString();
        }
    },
    username: { type: String, required: true },
    // A "reaction" subdocument that is added to the parent document (thoughtSchema) as an array
    reaction: [reactionSchema],
    // array of nested co created with the reactionSchema
},
{
    toJSON: {
        virtuals: true,
    }
});

thoughtSchema.virtual('reactionCount').get(function () {
    return `${this.reactions.length} total reactions`;
})

// Creates a model called 'thought' that utilizes the thoughtSchema layout
const Thought = model('thought', thoughtSchema)

module.exports = Thought;
