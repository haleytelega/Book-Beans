const { Coffee } = require('../models');

const postdata = [
    {
        cafe_name: 'Donec posuerem.',
        city_name: 'Ottawa',
        user_id: 10
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 8
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 7
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 1
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 9
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 5
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 10
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 8
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 3
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 7
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 6
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        user_id: 4
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        user_id: 6
    },
    {
        cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        user_id: 7
    }
  ];


const seedPosts = () => Coffee.bulkCreate(postdata);

module.exports = seedPosts;