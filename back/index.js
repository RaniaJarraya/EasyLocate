// set up ======================================================================
var express = require('express');
var app = express(); 						
var mongoose = require('mongoose'); 				
var port = process.env.PORT || 3000; 				// set the port
var database = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
mongoose.Promise = global.Promise;

// configuration ===============================================================
mongoose.connect(database.localUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "50mb" })) 
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 

// routes ======================================================================
require('./routes/user')(app);
require('./routes/history')(app);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
