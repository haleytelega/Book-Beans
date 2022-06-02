const { Book } = require('../models');

const bookdata = [
    {
        bookClub_name: 'Shelf Indulgence',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'7 PM',
        user_id: 10
    },
    {
        bookClub_name: 'On the Same Page',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'6 PM',
        user_id: 8
    },
    {
        bookClub_name: 'Readers Dozen',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'5 PM',
        user_id: 1
    },
    {
        bookClub_name: 'Between the Covers',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'4 PM',
        user_id: 4
    },
    {
        bookClub_name: 'Read It and Weep',
        city_name: 'Toronto',
        meeting_weekday:'Friday',
        meeting_time:'3 PM',
        user_id: 7
    },
    {
        bookClub_name: 'Reading Between the Spines',
        city_name: 'Ottawa',
        meeting_weekday:'Saturday',
        meeting_time:'2 PM',
        user_id: 4
    },
    {
        bookClub_name: 'Between the Lines',
        city_name: 'Windsor',
        meeting_weekday:'Sunday',
        meeting_time:'1 PM',
        user_id: 1
    },
    {
        bookClub_name: 'Better Read Than Dead',
        city_name: 'Windsor',
        meeting_weekday:'Monday',
        meeting_time:'12 PM',
        user_id: 1
    },
    {
        bookClub_name: 'It’s a Hardback Life',
        city_name: 'Windsor',
        meeting_weekday:'Tuesday',
        meeting_time:'11 AM',
        user_id: 9
    },
    {
        bookClub_name: 'Overbooked',
        city_name: 'Toronto',
        meeting_weekday:'Wednesday',
        meeting_time:'10 AM',
        user_id: 5
    },
    {
        bookClub_name: 'You Can’t Put Us Down',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'9 AM',
        user_id: 3
    },
    {
        bookClub_name: 'Textual Relations',
        city_name: 'Ottawa',
        meeting_weekday:'Friday',
        meeting_time:'9 PM',
        user_id: 10
    },
    {
        bookClub_name: 'Fiction Addiction',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'8 PM',
        user_id: 8
    },
    {
        bookClub_name: 'Peace and Quiet',
        city_name: 'Ottawa',
        meeting_weekday:'Sunday',
        meeting_time:'7 PM',
        user_id: 3
    },
    {
        bookClub_name: 'The Literary Ladies',
        city_name: 'Ottawa',
        meeting_weekday:'Monday',
        meeting_time:'6 PM',
        user_id: 3
    },
    {
        bookClub_name: 'The Book Warriors',
        city_name: 'Toronto',
        meeting_weekday:'Tuesday',
        meeting_time:'5 PM',
        user_id: 7
    },
    {
        bookClub_name: 'Outrage Book Club',
        city_name: 'Windsor',
        meeting_weekday:'Wednesday',
        meeting_time:'4 PM',
        user_id: 6
    },
    {
        bookClub_name: 'The Book Sisters',
        city_name: 'Ottawa',
        meeting_weekday:'Thursday',
        meeting_time:'3 PM',
        user_id: 4
    },
    {
        bookClub_name: 'The Bookworms',
        city_name: 'Windsor',
        meeting_weekday:'Friday',
        meeting_time:'2 PM',
        user_id: 6
    },
    {
        bookClub_name: 'All Booked',
        city_name: 'Toronto',
        meeting_weekday:'Saturday',
        meeting_time:'1 PM',
        user_id: 7
    }
];


const seedBookclubs = () => Book.bulkCreate(bookdata);

module.exports = seedBookclubs;