/*jshint esversion: 6 */
const mongoose = require('mongoose');


var User = new mongoose.Schema({
   // _id : mongoose.Schema.Types.ObjectId,
    fname:  String,
    lname:  String, 
    email: String,
    password:String,
    role:String,
    avatar:String

});


module.exports = mongoose.model('User', User);