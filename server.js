const express = require('express');
const db = require('./config/connection');

const { addnamehere } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// add routes
app.get('/', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on ${PORT}!`);
    });
});