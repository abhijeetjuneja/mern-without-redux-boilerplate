var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose    = require('mongoose');
var path = require ('path');
let app = express();
// fs module, by default module for file management in nodejs
var fs = require('fs');

app.use(bodyParser.json());

//Application level middleware
app.use(function(req,res,next){
  var logs = {'Time of Request': Date.now(),
        'Requested Url'  : req.originalUrl,
        'Base Url'       : req.baseUrl,
        'Ip address'     : req.ip,
        'Method'         : req.method
  };
  console.log(logs);
  next();
});


mongoose.connect("mongodb://localhost/react-express-fullstack");

var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDB - connection error'));

//Open mongoose connection
mongoose.connection.once('open', function() {

  console.log("Database Connected");

});



// include all our model files
fs.readdirSync('./models').forEach(function(file){
  // check if the file is js or not
  if(file.indexOf('.js'))
    // if it is js then include the file from that folder into our express app using require
    require('./models/'+file);

});// end for each


// include controllers
fs.readdirSync('./controllers').forEach(function(file){
  if(file.indexOf('.js')){
    // include a file as a route variable
    var route = require('./controllers/'+file);
    //call controller function of each file and pass your app instance to it
    route.controllerFunction(app);

  }

});//end for each

app.listen(8000, () => console.log('Running on localhost:8000'));
