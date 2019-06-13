const express = require('express');
const app = express();
const port = 9000;

function rootHandler (request, response){
    console.log('Root Handler');
    response.status(200);
    response.send('<h1>Root Handler</h1>');
}

function searchHandler(request, response){
    console.log('Search Handler');
    response.status(201);
    response.send('<h1>Search Handler</h1>');
}

function authenticationHandler(request, response){
    console.log(request.body);
    response.json(request.body);
}

app.use('/auth', express.json());
app.use('/assets', express.static('static'));
app.post('/auth', authenticationHandler);
app.all('/', rootHandler);
app.get('/search', searchHandler);

app.listen(port);
