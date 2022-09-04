const express = require('express');
const hbs = require('hbs');
require('dotenv').config()

const app = express();
const port = process.env.PORT

// hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));       

app.get('/', (req, res) => {
    res.render('home',{
        title: 'Node App',
        author: 'Juan Nava'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        title: 'Node App',
        author: 'Juan Nava'
    });
});


app.get('/elements', (req, res) => {
    res.render('elements',{
        title: 'Node App',
        author: 'Juan Nava'
    });
});

app.listen(port)