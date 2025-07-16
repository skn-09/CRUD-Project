// const express = require('express');
// const router = express.Router();

// const productController = require('../controllers/productController');

// // CRUD routes
// router.post('/', productController.createProduct);
// router.get('/', productController.getProducts);
// router.get('/:id', productController.getProductById);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);

// module.exports = router;


const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Show form
router.get('/add', productController.getForm);

// Handle form submit
router.post('/add', productController.createProduct);

// Product List
router.get('/list', productController.getProducts);

// Edit Product
router.get('/edit/:id', productController.getEditForm);
router.post('/edit/:id', productController.updateProduct);

// Delete Product
router.post('/delete/:id', productController.deleteProduct);

module.exports = router;

