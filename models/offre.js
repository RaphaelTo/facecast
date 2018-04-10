var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offre = Schema({
    _id : Schema.Types.ObjectId,
    nomEvent : String,
    typeEvent : String,
    dateDebut : String,
    nbJours : Number,
    roleDemande : String,
    nbFigurants : Number,
    figurants : [{type : Schema.Types.ObjectId, ref:'Figurant'}]
},{ collection: 'offre' }); //Ceci permet de lier le schéma à la table

var Offre = mongoose.model('Offre', offre);


module.exports = Offre;
