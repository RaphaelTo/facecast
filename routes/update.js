var express = require('express');
var router = express.Router();
var Offre = require('../models/offre');


router.get('/:id', function(req, res,next){
    res.render('update', {title : 'Faire un update', id: req.params.id });
    console.log(req.params.id);
});

router.post('/modified/:id',function(req, res){
    Offre.findById(req.params.id, (err, offre) => {
        if(err){
            res.status(500).send(err);
        } else{
        
            Offre.update({_id: req.params.id},
                {
                    nomEvent : req.body.nomEvent || offre.nomEvent,
                    typeEvent : req.body.typeEvent || offre.typeEvent,
                    dateDebut : req.body.dateDebut || offre.dateDebut,
                    nbJours : req.body.nbJours || offre.nbJours,
                    roleDemande : req.body.roleDemande || offre.roleDemande,
                    nbFigurants : req.body.nbFigurants || offre.nbFigurants,
                }, function(err)  {
                if (err) res.status(500).send(err);

                //res.status(200).send(offre);
                res.redirect('/offre');
            console.log(offre);
            });
        }
    });
});
module.exports = router;