var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var Offre = require('offre');
var Figurant = require('models/figurant');
*/
var candidature = Schema({
    etatCandidature: String,
    idOffre: { type: Schema.Types.ObjectId, ref:'Offre'},
    idFigurant:{ type: Schema.Types.ObjectId, ref:'Figurant'}
}, { collection: 'etatCandidatureFigurant'});

var Candidature = mongoose.model('Candidature', candidature);

module.exports = Candidature;