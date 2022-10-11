require('dotenv').config;
const mongoose = require("mongoose");
const mongoDb =  process.env.urlDB;

const fermentoDB = mongoose.createConnection(mongoDb);

const Produits = fermentoDB.model('Produits',
    new mongoose.Schema({
       name : {
        type : String,
        required : true
       },
       description : {
        type : String
       },
       price : {
        type : Number,
        required : true
       },
       tva : {
        type : Number,
        required : true
       }
    },
    {collection: 'produits'}
    )
);

module.exports = Produits;
