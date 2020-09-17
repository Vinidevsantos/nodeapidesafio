const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    // List pages
    const { page = 1 } = req.query;
    // List all products
    const products = await Product.paginate({}, { page, limit: 10});
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    // List product by Id
    return res.json(product);
  },

  async store(req, res) {
    // Create product
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    // Update product
    return res.json(product);
  },
  
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    // Delete Product
    return res.send();
  },

};