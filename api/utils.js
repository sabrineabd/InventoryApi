const Item = require('./schemas');

module.exports = {
  createItem: createItem
};

function createItem(body) {
  const item = {
    name: body.name,
    count: body.count
  };

  return new Item(item);
}