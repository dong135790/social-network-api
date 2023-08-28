const connection = require('../config/connection');
const { User, Thought } = require ('../models');
const { emails, usernames, getRandomThought, getRandomReaction } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing user
  await User.deleteMany({});

  // Create empty array to hold the user
  const users = [];

  for (let i = 0; i < 9; i++){
    users.push(usernames[i]);
  }
// Insert into the User Model
  for (let i = 0; i <9; i++) {
    await User.collection.insertOne({ username: users[i], email: emails[i] })
  }
// Insert into the Thought model
  for (let i = 0; i < 9; i++) {
    await Thought.collection.insertOne({
        thoughtText: getRandomThought(),
        username: users[Math.floor(Math.random() * users.length)],
        reactions: getRandomReaction(),
    })
  }

  console.table(usernames);
  console.info("Seeding complete!");
  process.exit(0);
});