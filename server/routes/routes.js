const router = require('express').Router();
const { registerOrder, deleteOrder, getAllOrders, updateOrderTable, updateOrderProd } = require('../controllers/controlOrders');
const { registerProduit, updateProdName, updateProdPrice, updateProdTVA, getAllProd, updateProdDescr, deleteProd } = require('../controllers/controlProduits');
const { postTable, getAllTables, deleteTable } =  require('../controllers/controlTables');

//routes to Produits
router.post('/registerProd', registerProduit);
router.put('/updateProdName/:name', updateProdName);
router.put('/updateProdPrice/:_id', updateProdPrice);
router.put('/updateProdTVA/:_id', updateProdTVA);
router.put('/updateProdDesc/:_id', updateProdDescr);
router.delete('deleteProd/:_id', deleteProd);
router.get('/getAllProd/', getAllProd);

//routes to Tables
router.post('/postTable', postTable);
router.get('/getAllTables', getAllTables);
router.delete('/deleteTable/:_id', deleteTable);

//routes Orders
router.post('/registerOrder', registerOrder);
router.delete('/deleteOrder/:_id', deleteOrder);
router.get('/getAllOrders', getAllOrders)
router.put('/updateOrderTable/:_id', updateOrderTable);
router.put('/updateOrderProd/:_id', updateOrderProd);



module.exports = router;