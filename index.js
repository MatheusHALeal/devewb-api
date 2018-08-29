const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/get', function(req, res) {
    res.send('Olá');
});

app.post('/post', function(req, res) {
    res.send('Post request');
});

app.put('/put', function(req, res) {
    res.send('Put request');
});

app.delete('/delete', function(req, res) {
    res.send('Delete request');
});
