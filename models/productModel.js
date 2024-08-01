const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  category_id: {
    type:Schema.Types.ObjectId, 
    ref:'Category',
    required:true
  },
  product_title:{
    type:String,
    required: true
  },
  product_image:{
    type:String,
  },
  product_base_price:{
    type: Number,
    required: true
  },
  product_regular_price:{
    type: Number,
    required: true,
  },
  status: {
      type: Number,
      enum : [0,1],
      default: 1
  }
});

module.exports = mongoose.model('Product', productSchema);