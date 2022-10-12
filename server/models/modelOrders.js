require('dotenv').config;
const mongoose = require("mongoose");
const mongoDb = process.env.urlDB;

const fermentoDB = mongoose.createConnection(mongoDb);

const Orders = fermentoDB.model('Orders',
    new mongoose.Schema({
        table : {
            type : mongoose.Schema.Types.ObjectId, ref : 'Tables'
        },
        produits : {
            type : [mongoose.Schema.Types.ObjectId], ref : 'Produits',
            required : true
        },
        day : {
            type : Number,
            required : true
        }
    },
    {timestamps : true},
    {collection : 'orders'})
);

module.exports = Orders;

