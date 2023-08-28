const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// const totalUser = async () => {
//     const numberofUser = await User.aggregate();
//     console.log('Number of Users: ' + numberofUser)
//     return numberofUser;
// }
// getAllUsers,
// getSingleUser,
// createUser,
// updateUser,
// deleteUser,
// addFriend,
// removeFriend,
module.exports = {
    // Get all Users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            const userObject = {
                user,
                // headCount: await totalUser(),
            };
            return res.json(userObject);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // GET single User by Id
    async getSingleUser(req, res) {
        try {
            const singleUser = await User.findOne({ _id: req.params.userId })

            if (!singleUser) {
                return res.status(404).json({ message: "No user with that Id" });
            }
            return res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    // POST Create User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    // Delete User based on Id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: "No User found with associated id." });
            }

            const thoughts = await Thought.deleteMany({ username: user.username });

            if (!thoughts) {
                return res.status(404).json({ message: "User deleted, but no thoughts found" });
            }

            res.json("User successfully deleted!")
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // PUT update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "Such User does not exists" });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
}