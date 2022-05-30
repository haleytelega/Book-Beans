const Coffee = require('./Coffee');
const CoffeeComments = require('./CoffeeComments');
const Book = require('./Book')
const BookComments = require('./BookComments')
const User = require('./User')


User.hasMany(Coffee, {
    foreignKey: 'user_id'
});

Coffee.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Book, { 
    foreignKey: 'user_id'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});


CoffeeComments.belongsTo(User, {
    foreignKey: 'user_id'
});

CoffeeComments.belongsTo(Coffee, {
    foreignKey: 'coffee_id'
});

User.hasMany(CoffeeComments, { 
    foreignKey: 'user_id'
});

Coffee.hasMany(CoffeeComments, {
    foreignKey: 'coffee_id'
});


BookComments.belongsTo(User, {
    foreignKey: 'user_id'
});

BookComments.belongsTo(Book, {
    foreignKey: 'book_id'
});

User.hasMany(BookComments, { 
    foreignKey: 'user_id'
});

Book.hasMany(BookComments, {
    foreignKey: 'book_id'
});


  



module.exports = { Coffee, CoffeeComments, Book, BookComments, User };
