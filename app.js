const express = require('express'),
    app = express(),
    PORT = 4000 || process.env.PORT,
    date = new Date();

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: "Mohammad Taimoor Hussain | Instagram",
        followers: 900,
        follows: 10,
        date: date.toDateString()
    };

    res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: "Mohammad Taimoor Hussain | Facebook",
        followers: 12000,
        follows: 25,
        date: date.toDateString()
    };

    res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: "Mohammad Taimoor Hussain | Linkedin",
        followers: 5020,
        follows: 17,
        date: date.toDateString()
    };

    res.status(200).json(instaSocial);
});

app.get('/api/v1/uid/:uid/token/:token', (req, res) => {
    const token = req.params.token,
        uid = req.params.uid;

    res.status(200).json({
        uid,
        token,
        date: date.toDateString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});