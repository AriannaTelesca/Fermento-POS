require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = process.env.urlDB;

const exeRouter = require ('./routes/routes.js');

const app = express();
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
// app.use(express.json());
app.use(cors());

app.use('/', exeRouter);

mongoose.connect(mongoDB, { useUnifiedTopology: true ,  useNewUrlParser: true});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', ()=>{
    console.log('database connected');
})

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Fermento')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})