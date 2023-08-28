const emails = [
    'dong135790@gmail.com',
    'fakeEmail1@gmail.com',
    'fakeEmail2@gmail.com',
    'fakeEmail3@gmail.com',
    'fakeEmail4@gmail.com',
    'fakeEmail5@gmail.com',
    'fakeEmail6@gmail.com',
    'fakeEmail7@gmail.com',
    'fakeEmail8@gmail.com',
];

const reactions = [
    'happy',
    'sad',
    'lively',
    'hungry',
    'proud',
    'accomplished',
    'tired',
    'aloof',
    'No reaction'
]

const thoughts = [
    'No thoughts were formed during this time',
    'How did you manage to do this?',
    'That seems like a nice meal',
    'Who in the world did this?',
    'The view looks luxerious',
    'Harry Potter was and still is one of the best series to read',
    'Dumbledore was a great teacher, but had some moral flaws',
    'California is a very dry area to live in',
    'European countries would be a nice place for a vacation'

]

const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomReaction = (int) => {
    const results = [];
    for (let i = 0; i < int; i++){
        results.push({
            reactionBody: getRandomArrayItem(reactions)
        })
    }
    return results;
}
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++){
        results.push({
            thoughtText: getRandomArrayItem(thoughts)
        })
    }
    return results;
}

module.exports = {getRandomReaction, getRandomThought}