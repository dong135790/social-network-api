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
                return /^[w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data)
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
    return `${this.friends.length} total friends`;
})

// Create a model named `User`
const User = model('user', userSchema)

// TODO: Create a new instance of the model including the subdocuments
const userData = [
    {
        name: 'Justin',
        email: 'Dong135790@gmail.com',
    },
    {},
];
// An unnamed function that is an expression (since its wrapped in () )
(async () => {
    await User.deleteMany({});

    await User
        .create({ userData })
        .then(data => console.log(data))
        .catch(err => console.error(err))
})

module.exports = User;