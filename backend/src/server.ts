import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json([
        'Luis',
        'Marcos'
    ])
})

app.listen(3333);