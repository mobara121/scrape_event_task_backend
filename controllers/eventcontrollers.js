var router = require('express').Router();
var sequelize = require('../db');
var Event = sequelize.import('../models/event.js');
const Op = require('sequelize').Op;

// router.post('/put', function(req, res){
//     res.send('Data go through?');
// })
//POST new product (admin only)
router.post('/create', (req, res) => {
    // var owner = req.user.id;

    Event.create({
        event_name: req.body.event.event_name,
        link: req.body.event.link,
        date: req.body.event.date,
        location: req.body.event.location,
        tel: req.body.event.location,

    })
    .then(event => res.status(200).json({
        event: event
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})
// GET all events
router.get('/get', function(req, res){

    Event.findAll({

    })
    .then(
        function findAllSuccess(data){
            res.json(data);
        },
        function findAllError(err){
            res.send(500, err.message);
        }
    );
})

//GET all events by zip
router.get('/get/:zip', function(req, res){
    var zip = req.params.zip;
    

    Event.findAll({
        where: {location: {[Op.like]:`%${zip}%`}}
    })
    .then(
        function findOneSuccess(data){
            res.json(data);
        },
        function findOneError(err){
            res.send(500, err.message);
        }
    );
})

//GET all events by free word
router.get('/getbyword/:freeWord', function(req, res){
    var freeWord = req.params.freeWord;
    

    Event.findAll({
        where: {event_name: {[Op.like]:`%${freeWord}%`}}
    })
    .then(
        function findOneSuccess(data){
            res.json(data);
        },
        function findOneError(err){
            res.send(500, err.message);
        }
    );
})

module.exports = router;