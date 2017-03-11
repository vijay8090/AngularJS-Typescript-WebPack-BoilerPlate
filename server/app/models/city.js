/**
 * Created by vanbu on 10-03-2017.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CitySchema   = new Schema({
    city: String,
    person : String,
    rank: String
});

module.exports = mongoose.model('City', CitySchema);