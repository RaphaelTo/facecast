var express = require('express');
var router = express.Router();
var Offre = require('../models/offre');


router.get('/', function(req, res, next) { 
   // res.render('offre',{listeOffre :[]}); 
   //On va recup le schema
    Offre.find({}, function(err, offres){
        if(err) throw err;     
        //Le schema est exporté dans la listeOffre
        res.render('offre',{listeOffre: offres}); 
    });

   

});

module.exports = router;