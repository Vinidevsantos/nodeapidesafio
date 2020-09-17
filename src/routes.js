const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); // List all
routes.get('/products/:id', ProductController.show); // List by Id
routes.post('/products', ProductController.store); // Create product
routes.put('/products/:id', ProductController.update); // Update Product
routes.delete('/products/:id', ProductController.destroy); // Delete by Id

module.exports = routes;