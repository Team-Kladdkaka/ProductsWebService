const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/products/list', controllers.getProducts);
router.get('/products/:product_id', controllers.getProduct);
router.get('/products/:product_id/styles', controllers.getStyles);
router.get('/products/:product_id/related', controllers.getRelated);

module.exports = router;