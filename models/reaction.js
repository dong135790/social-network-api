const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
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
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

module.exports = reactionSchema;