var express = require('express');
var router = express.Router();
var History = require('../model/history.model');
var mongoose = require('mongoose');



module.exports = function (app) {

//Get All Sounds In Database
app.get('/', function(req, res, next) {
    History.find().exec().then(function (docs) {
        if (docs.length===0) res.status(200).json({error: "Nothing Found"});
        else res.status(200).json(docs);
    }).catch(function (err) {
        res.status(500).json({error: err})

    });
});



//Create New History
app.post('/',function (req,res){
    var email = req.body.email;
    var date = req.body.date ;
    var place = req.body.place;

    var history = new History({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        date : date,
        place: place
    });
    history.save().then(function (result){
        res.status(200).json({
            Message : "History Created",
            History : result
        });

    }).catch(function (err){
        res.status(500).json({
            err:err
        })
    } );


})
//find history by user
app.get('/:email',function (req,res) {
    var email = req.params.email;
    History.find({email:email}).exec().then(function(docs){
        if (docs.length===0) res.status(200).json({error: true,
            message: "No History Detected"});

        else res.status(200).json({history: docs,
                error: false});
    }).catch(function (err) {
        res.status(500).json({message: err,
            error: true})

    });
});
}

//module.exports = router;
