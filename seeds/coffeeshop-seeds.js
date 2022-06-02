const { Coffee } = require('../models');

const coffeedata = [
    {
        cafe_name: 'Starbucks Coffee',
        city_name: 'Ottawa',
        user_id: 10
    },
    {
        cafe_name: 'Tim Hortons',
        city_name: 'Toronto',
        user_id: 8
    },
    {
        cafe_name: 'Equator Coffee',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'Ciao Caffe',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'Bean Bagz Cafe',
        city_name: 'Toronto',
        user_id: 7
    },
    {
        cafe_name: 'Bridgehead Roastery and Coffeehouse',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'The Ministry of Coffee',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'NEO COFFEE BAR',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 9
    },
    {
        cafe_name: 'Strange Love Coffee',
        city_name: 'Toronto',
        user_id: 5
    },
    {
        cafe_name: 'Manic Coffee',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'HotBlack Coffee',
        city_name: 'Ottawa',
        user_id: 10
    },
    {
        cafe_name: 'Starbucks',
        city_name: 'Toronto',
        user_id: 8
    },
    {
        cafe_name: 'Rooster Coffee House',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'Propeller Coffee',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'Tim Hortons',
        city_name: 'Toronto',
        user_id: 7
    },
    {
        cafe_name: 'Mofer Coffee St. Clair',
        city_name: 'Windsor',
        user_id: 6
    },
    {
        cafe_name: 'Tucana Coffee',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'Café Qui Pense',
        city_name: 'Windsor',
        user_id: 6
    },
    {
        cafe_name: 'Starbucks CoffeeComment',
        city_name: 'Toronto',
        user_id: 7
    }
  ];


const seedCoffeeShops = () => Coffee.bulkCreate(coffeedata);

module.exports = seedCoffeeShops;