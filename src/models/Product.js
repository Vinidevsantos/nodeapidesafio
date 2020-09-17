const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  preco: {
    type: String,
    require: false,
  },
  quantidade: {
    type: String,
    require: true,
  },
  situacao: {
    type: String,
    require: true,
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);