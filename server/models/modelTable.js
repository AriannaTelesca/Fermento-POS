require('dotenv').config;
const mongoose = require('mongoose');
const mongoDb = process.env.urlDB;

const fermentoDB = mongoose.createConnection(mongoDb);

const Tables = fermentoDB.model('Table',
    new mongoose.Schema({
        name : {
            type : String,
            required : true
        }
    },
    {collection : 'tables'}
    )
);

module.exports = Tables;


