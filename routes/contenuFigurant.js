var express = require('express');
var router = express.Router();

var Figurant = require('../models/figurant');

router.get('/', function(req, res, next) { 
    
    Figurant.find({}, function(err,figurants) {
        if(err) throw err;

        res.render('figurant', {listeFigurant: figurants})
    });
});

module.exports = router;