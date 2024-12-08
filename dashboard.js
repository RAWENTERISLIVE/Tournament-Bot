const express = require('express');
const Tournament = require('./models/Tournament');

const app = express();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const tournaments = await Tournament.find();
    res.render('dashboard', { tournaments });
});

app.listen(process.env.DASHBOARD_PORT, () => {
    console.log(`Dashboard running on port ${process.env.DASHBOARD_PORT}`);
});
