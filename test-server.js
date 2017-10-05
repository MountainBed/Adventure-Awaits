const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main', partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', 'handlebars');

//handlebars.registerPartial('our_partial', {})

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});