const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
//Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'))

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));

//route
app.get('/home', (req, res) => {
        res.render('home');
    })
    //route
app.get('/test', (req, res) => {
    res.render('test');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})