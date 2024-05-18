const express = require('express');
const router = express.Router();
const {CreateProduct, GetAllProducts, GetProductFromId, UpdateProduct, DeleteProduct} = require('../controllers/product.controller.js');

// Save new product
router.post('/', CreateProduct);

// Get all products
router.get('/', GetAllProducts);

// Get Product from id
router.get('/:id', GetProductFromId);

// Update a product
router.put('/:id', UpdateProduct);

// Delete a product
router.delete('/:id', DeleteProduct);

module.exports = router;