const router = require('express').Router();
const { Coffee, CoffeeComments, Book, BookComments, User  } = require('../models');

router.get('/', (req, res) => {
    Coffee.findAll({
        attributes: ['id', 'cafe_name', 'city_name', 'user_id', 'created_at'],
        include: [
        {
            model: CoffeeComments,
            attributes: ['id', 'comment_text']
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(dbCoffeeData => {
        const coffeePosts = dbCoffeeData.map(coffeePost => coffeePost .get({ plain: true }));
        Book.findAll({
            attributes: ['id', 'bookClub_name', 'city_name', 'meeting_weekday', 'meeting_time', 'user_id', 'created_at'],
            include: [
            {
                model: BookComments,
                attributes: ['id', 'book_text']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        })
        .then(dbBookData => {
            const booksPosts = dbBookData.map(bookPost => bookPost.get({ plain: true }));
            const allPosts = {coffeePosts, booksPosts};
            console.log(allPosts);
            res.render('homepage', {
                coffeePosts,
                booksPosts
                // loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
