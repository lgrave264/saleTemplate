var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

const person = 'luca';

// index page
app.get('/', function(req, res) {
    res.render('pages/index', {
        person
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('Server is listening on port 3000');