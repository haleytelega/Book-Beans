
const seedUsers =require('./user-seeds');
const seedBookclubs =require('./bookclub-seeds');
const seedCoffeeShops =require('./coffeeshop-seeds');
const seedBookclubComments =require('./bookclub-comments-seeds');
const seedCoffeeShopComments =require('./coffee-comment-seeds');




const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedBookclubs();
  console.log('--------------');

  await seedCoffeeShops();
  console.log('--------------');

  await seedBookclubComments();
  console.log('--------------');

  await seedCoffeeShopComments();
  console.log('--------------');


  process.exit(0);
};

seedAll();