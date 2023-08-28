const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// const totalthought = async () => {
//     const numberofthought = await Thought.aggregate();
//     console.log('Number of thoughts: ' + numberofthought)
//     return numberofthought;
// }
module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find();
            const thoughtObject = {
                thought,
                // headCount: await totalthought(),
            };
            return res.json(thoughtObject);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // GET single thought by Id
    async getSingleThought(req, res) {
        try {
            const singlethought = await Thought.findOne({ _id: req.params.thoughtId })

            if (!singlethought) {
                return res.status(404).json({ message: "No thought with that Id" });
            }
            return res.json(singlethought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    // POST Create thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    // Delete thought based on Id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: "No thought found with associated id." });
            }

            res.json("thought successfully deleted!")
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // PUT update thought by id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: "Such thought does not exists" });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
}