/**
 * Created by vanbu on 10-03-2017.
 * https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var path = require('path');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://vijay:mongo123@ds039484.mongolab.com:39484/vijay8090'); // connect to our database

var City     = require('./app/models/city');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

// more routes for our API will happen here

// on routes that end in /citys
// ----------------------------------------------------
router.route('/cities')

// create a city (accessed at POST http://localhost:8080/api/cities)
.post(function(req, res) {

        var city = new City();      // create a new instance of the City model
        city.city = req.body.name;  // set the city name (comes from the request)
        city.person = req.body.person;
        // save the city and check for errors
        city.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'City created!' });
        });

    })


    // get all the cities (accessed at GET http://localhost:8080/api/cities)
.get(function(req, res) {
     console.log("get all cities");
        City.find(function(err, cities) {
            if (err)
                res.send(err);

            res.json(cities);
        });
    });

// on routes that end in /city/:city_id
// ----------------------------------------------------
router.route('/cities/:city_id')

// get the city with that id (accessed at GET http://localhost:8080/api/cities/:city_id)
    .get(function(req, res) {
        City.findById(req.params.city_id, function(err, city) {
            if (err)
                res.send(err);
            res.json(city);
        });
    })

    // update the city with this id (accessed at PUT http://localhost:8080/api/cities/:city_id)
    .put(function(req, res) {

        // use our city model to find the city we want
        City.findById(req.params.city_id, function(err, city) {

            if (err)
                res.send(err);

            city.rank = req.body.rank;  // update the cities info

            // save the city
            city.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'City updated!' });
            });

        });
    })

    // delete the city with this id (accessed at DELETE http://localhost:8080/api/cities/:city_id)
    .delete(function(req, res) {
        City.remove({
            _id: req.params.city_id
        }, function(err, city) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

//app.use('/demo', express.static(path.join('./', 'dist')));
app.use('/demo/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);