var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var figurant = Schema({
    _id : Schema.Types.ObjectId,
    nomFig: String,
    prenomFig: String,
    ageFig: Number,
    emailFig: String,
    candidature : [{type : Schema.Types.ObjectId, ref:'Offre'}]
},{ collection: 'figurant' }); //Ceci permet de lier le schéma à la table

var Figurant = mongoose.model('Figurant', figurant);


module.exports = Figurant;
