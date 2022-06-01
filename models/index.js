const Coffee = require('./Coffee');
const CoffeeComments = require('./CoffeeComments');
const Book = require('./Book')
const BookComments = require('./BookComments')
const User = require('./User')


User.hasMany(Coffee, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Coffee.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


CoffeeComments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

CoffeeComments.belongsTo(Coffee, {
    foreignKey: 'coffee_id',
    onDelete: 'CASCADE'
});

User.hasMany(CoffeeComments, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Coffee.hasMany(CoffeeComments, {
    foreignKey: 'coffee_id',
    onDelete: 'CASCADE'
});


module.exports = { Coffee, CoffeeComments, Book, BookComments, User };
