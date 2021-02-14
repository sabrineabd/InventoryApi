const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  count: Number
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item: Item
}

// const newItem = new Item({ name: 'potato', count: 1 });
