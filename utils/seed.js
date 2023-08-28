const connection = require('../config/connection');
const { User, Thought } = require ('../models');
const { emails, getRandomName, getRandomThought, getRandomReaction } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing user
  await User.deleteMany({});

  // Create empty array to hold the user
  const user = [];

  for (let i = 0; i < 20; i++){
    user.push(usernames[i]);
  }

  for (let i = 0; i <20; i++) {
    await User.collection.insertOne({ username: user[i], email: emails[i] })
  }
});