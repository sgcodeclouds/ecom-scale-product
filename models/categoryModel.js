const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type:String, 
    required:true
  },
  status: {
      type: Number,
      enum : [0,1],
      default: 1
  }
});

module.exports = mongoose.model('Category', categorySchema);