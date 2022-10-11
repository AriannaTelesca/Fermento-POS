const router = require('express').Router();
const { registerProduit, updateProdName, updateProdPrice, updateProdTVA } = require('../controllers/controlProduits');

router.post('/registerProd', registerProduit);
router.put('/updateProdName/:_id', updateProdName);
router.put('/updateProdPrice/:_id', updateProdPrice);
router.put('/updateProdTVA', updateProdTVA);




module.exports = router;