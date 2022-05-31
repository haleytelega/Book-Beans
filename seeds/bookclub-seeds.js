const { Book } = require('../models');

const bookdata = [
    {
        bookClub_name: 'Donec posuerem.',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'7 PM',
        user_id: 10
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'6 PM',
        user_id: 8
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'5 PM',
        user_id: 1
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'4 PM',
        user_id: 4
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Friday',
        meeting_time:'3 PM',
        user_id: 7
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Saturday',
        meeting_time:'2 PM',
        user_id: 4
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Sunday',
        meeting_time:'1 PM',
        user_id: 1
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Monday',
        meeting_time:'12 PM',
        user_id: 1
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Tuesday',
        meeting_time:'11 AM',
        user_id: 9
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Wednesday',
        meeting_time:'10 AM',
        user_id: 5
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'9 AM',
        user_id: 3
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Friday',
        meeting_time:'9 PM',
        user_id: 10
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'8 PM',
        user_id: 8
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Sunday',
        meeting_time:'7 PM',
        user_id: 3
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'6 PM',
        user_id: 3
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'5 PM',
        user_id: 7
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'4 PM',
        user_id: 6
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'3 PM',
        user_id: 4
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Windsor',
        meeting_weekday:'Friday',
        meeting_time:'2 PM',
        user_id: 6
    },
    {
        bookClub_name: 'Donec posuere.',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'1 PM',
        user_id: 7
    }
  ];


const seedBookclubs = () => Book.bulkCreate(bookdata);

module.exports = seedBookclubs;