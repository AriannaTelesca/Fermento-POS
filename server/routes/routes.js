const router = require('express').Router();
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



module.exports = router;