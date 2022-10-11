const Produits = require('../models/modelProduit');

const registerProduit = (req, res) =>{

    //check if name is already used
    Produits.findOne({ name :  req.body.name }).then((prod) => {
        if(prod) {

            return res.status(400).json({name : "name is already used"});

        }else{

            //create new produit
            const name = req.body.name;
            const description = req.body.description;
            const price = req.body.price;
            const tva = req.body.tva;

            const newProd = new Produits({
                name, 
                description,
                price,
                tva
            });

            newProd.save()
            .then(() => res.json('Produit added'))
            .catch((err => res.status(400).json("Error" +err)))
        }
    })
};

const updateProdName = (req, res) => {
    Produits.findOneAndUpdate({ name : req.params.name }, {name : req.body.name })
    .then(() => res.json('Name is changed'))
    .catch((err => res.status(400).json("Error" +err)))
}

const updateProdPrice = (req, res) => {
    Produits.findOneAndUpdate({ _id : req.params._id }, { price : req.body.price })
    .then(() => res.json('Price is changed'))
    .catch((err => res.status(400).json("Error" +err)))
}

const updateProdTVA = (req, res) => {
    Produits.findOneAndUpdate({ _id : req.params._id }, { tva : req.body.tva })
    .then(() => res.json('TVA is changed'))
    .catch((err => res.status(400).json("Error" +err)))
}

const getAllProd = (req, res) => {
    Produits.find()
    .then((result) => res.json(result))
    .catch((err => res.status(400).json("Error" +err)))
}

module.exports = { 
    registerProduit,
    updateProdName,
    updateProdPrice,
    updateProdTVA,
    getAllProd

}