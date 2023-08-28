const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// app.get('/api/users', async (req, res) => {
//     try {
//         const result = await User.find({});
//         res.status(200).json(result);
//     } catch (err) {
//         // Logs error
//         console.error(err);
//         // Send 500 status code so server dont crash in case of error + feedback
//         res.status(500).send(err);
//     }
// })

// Confirms that the database is open and connected to port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on ${PORT}!`);
    });
});