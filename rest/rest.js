var express = require('express');
var router = express.Router();
var Candidature = require('../models/candidature');
var Figurant = require('../models/figurant');
var Offre = require('../models/offre');

router.get('/', function(req,res,next){
    res.send('Essaye /offre ou encore /candidature tu verra le résultat');
});

//Retourne en json le modele candidature
router.get('/candidature', function(req,res){
    Candidature.find({}, function(err,candidature){
        if(err) throw err;
        res.json(candidature);
    })
});
//Retourne en json le modele figurant
router.get('/figurant', function(req,res){
    Figurant.find({}, function(err,figurant){
        if(err) throw err;
        res.json(figurant);
    })
});
//Retourne en json le modele offre
router.get('/offre', function(req,res){
    Offre.find({}, function(err,offre){
        if(err) throw err;
        res.json(offre);
    })
});
//Retourne en json l'email
router.get('/:email', function(req,res){
    Figurant.find({emailFig: req.params.email}, function(err, email){
        res.json(email);
    });
});
//Retourne en json des information en fonction de l'api
router.get('/offre/:key', function(req,res){
    Offre.find({}, function(err, offre){

    })
});
module.exports = router;