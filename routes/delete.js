var express = require('express');
var router = express.Router();
var Offre = require('../models/offre');
//Je vais créer une route deja prete avec delete ensuite je recup  id de l'offre 
var routeDelete = router.route('/delete');
//Créer une fonction avec la route qu'on a créer, qui va créer un objet du modele offre
routeDelete.get(function(req,res){
    var idOffre = new Offre({
        _id : req.params._id,
    })
});

//La des qu'il voit /delete/idoffre il rentre dedans
router.get('/:idOffre_id', function(req, res, next){
    console.log(req.params.idOffre_id);
    Offre.findByIdAndRemove(req.params.idOffre_id, function(err){
        if(err) throw err;
        //redirection sur la page offre
        res.redirect('/offre');
    })
});


module.exports = router;
