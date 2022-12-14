const Orders = require('../models/modelOrders');

const registerOrder = (req, res) => {
    
    const table = req.body.table;
    const produits = req.body.produits;
    const day = req.body.day;

    const newOrder = new Orders ({
        table, 
        produits, 
        day
    });

    newOrder.save()
    .then(() => res.json('Order added'))
    .catch((err => res.status(400).json("Error " +err)))
}

const deleteOrder = (req, res) => {
    Orders.findByIdAndDelete({_id : req.params._id})
    .then(()=> res.json('Order deleted'))
    .catch((err => res.status(400).json('Error ' +err)))
}

const getAllOrders = (req, res) => {
    Orders.find()
    .then((result) => res.json(result))
    .catch((err => res.status(400).json('Error ' +err)))
}

const updateOrderTable = (req, res) => {
    Orders.findOneAndUpdate({_id: req.params._id}, {table : req.body.table})
    .then(() => res.json('Table changed'))
    .catch((err => res.status(400).json('Error ' +err)))
}

const updateOrderProd = (req, res) => {
    Orders.findOneAndUpdate({_id: req.params._id}, {$push : {produits : req.body.produits}})
    .then(() => res.json('Order update'))
    .catch((err => res.status(400).json('Error ' +err)))
}

module.exports = {
    registerOrder,
    deleteOrder, 
    getAllOrders,
    updateOrderTable,
    updateOrderProd
}