var express = require('express');
var router = express.Router();
var Offre = require('../models/offre');


router.get('/', function(req, res, next){
    res.render('add', { title: 'Express'});
});

//Dès qu'il va voir /offre en plus dans la barre il va rentrer dedans
router.post('/offre', function(req, res){
    //On crée un tableau
    var tabNewUser=[];
    //On crée un objet Offre qui va recup les donnés du formulaire et on mets .body car c'est un POST si c'est un GET on mets .params
    var add = new Offre({
        nomEvent : req.body.nomEvent,
        typeEvent : req.body.typeEvent,
        dateDebut : req.body.dateDebut,
        nbJours : req.body.nbJours,
        roleDemande : req.body.roleDemande,
        nbFigurants : req.body.nbFigurants,
    
    })
    //On va ensuite mettre l'objet dans le tableau créer au dessus
    tabNewUser.push(add);
    //Ensuite on va inserer les valeur du tableau dans la base de donnée
    Offre.collection.insert(tabNewUser, function(err, offre){
        if(err){
            res.send("Erreur");
        }else{
            console.log("REussi");
            res.redirect('/offre');
        }
    })

    
});


module.exports = router;