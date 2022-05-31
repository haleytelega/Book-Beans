const { Book } = require('../models');

const postdata = [
    {
        bookClub_name: 'Donec posuerem.',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'7 PM',
        user_id: 10
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'6 PM',
        user_id: 8
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'5 PM',
        user_id: 1
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'4 PM',
        user_id: 4
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Friday',
        meeting_time:'3 PM',
        user_id: 7
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Saturday',
        meeting_time:'2 PM',
        user_id: 4
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Sunday',
        meeting_time:'1 PM',
        user_id: 1
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Monday',
        meeting_time:'12 pM',
        user_id: 1
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Tuesday',
        meeting_time:'11 AM',
        user_id: 9
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Wednesday',
        meeting_time:'10 AM',
        user_id: 5
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'9 AM',
        user_id: 3
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Friday',
        meeting_time:'9 PM',
        user_id: 10
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'8 PM',
        user_id: 8
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Sunday',
        meeting_time:'7 PM',
        user_id: 3
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'6 PM',
        user_id: 3
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'5 PM',
        user_id: 7
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'4 PM',
        user_id: 6
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'3 PM',
        user_id: 4
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Friday',
        meeting_time:'2 PM',
        user_id: 6
    },
    {
        Cafe_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'1 PM',
        user_id: 7
    }
  ];


const seedPosts = () => Book.bulkCreate(postdata);

module.exports = seedPosts;