const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

app.engine('handlebars', handlebars({ defaultLayout: 'main', partialsDir: __dirname + '/views/partials/' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Include our CSS file
app.use(express.static(path.join(__dirname, '/public')));

//handlebars.registerPartial('our_partial', {})

app.get('/', function(req, res) {
    res.render('index');
});

app.post("/api/story", function(req, res) {
    console.log("Got it: " + req.body.genre);
    //Get database info and put it in 'story'
    /*Story.findOne(req, res);*/
    res.render('story', { story: data });
});

app.listen(3000, function() {
    console.log("Listening on Port 3000");
});