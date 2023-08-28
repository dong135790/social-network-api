const { Schema, model } = require('mongoose');
// User schema defines the shape for user info.
// Child document/subdocument can be placed into a parent document
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (data) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(data)
            }
        }
    },
    // Reference the Thought Model
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    // Reference the User model (Self-Ref)
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }]
},
    {
        toJSON: {
            virtuals: true,
        }
    });


userSchema.virtual('friendCount').get(function () {
    return `${this.friends.length} Friend Count`;
})

// Create a model named `User`
const User = model('user', userSchema)

module.exports = User;