const { Schema, model } = require('mongoose');
// User schema defines the shape for user info.
// Child document/subdocument can be placed into a parent document
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // thoughts: thoughtSchema, reference the Thought Model
    // friends: {} Reference the User model (Self-Ref)
});

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