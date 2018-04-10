var express = require('express');
var router = express.Router();
var Candidature = require('../models/candidature');

/* GET users listing. */

router.get('/', function(req,res, next){
    Candidature.find({}, function(err,candidature){
        if(err) throw err;

        res.render('candidature', {listeCandidature: candidature})
    });
});

module.exports = router;