var express = require('express');
var app= express(),
    path = require('path'),
    exphbs = require('express-handlebars'),
    fs = require('fs'),
    compression = require('compression');
	
    app.use(compression());

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,x-access-token,Accept,Origin');

    // Set cache control header to eliminate cookies from cache
    res.setHeader('Cache-Control', 'no-cache="Set-Cookie, Set-Cookie2"');
    next();
});


//set up the view engine-Handelbars
app.set('views', path.join(__dirname, '/views'));

var hbs = exphbs.create({
    defaultLayout: 'main-layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.engine('html',  hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
	res.render('index', {
                        title: "Nginx Heroku Setup"
                    });
});




app.listen(port,ip, function() {
            console.log('server started on ' + port);
        });
