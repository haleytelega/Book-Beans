const Coffee = require('./Coffee');
const CoffeeComments = require('./CoffeeComments');
const Book = require('./Book')
const BookComments = require('./BookComments')
const User = require('./User')

Coffee.hasMany(CoffeeComments, {
    foreignKey: 'coffee_id'
});

module.exports = { Coffee, CoffeeComments, Book, BookComments, User };
