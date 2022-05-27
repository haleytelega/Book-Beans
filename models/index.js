const Coffee = require('./Coffee');
const CoffeeComments = require('./CoffeeComments');

Coffee.hasMany(CoffeeComments, {
    foreignKey: 'coffee_id'
});

module.exports = { Coffee, CoffeeComments };