const router = require('express').Router();
const { Coffee, CoffeeComments, Book, BookComments  } = require('../models');

router.get('/', (req, res) => {
    Coffee.findAll({
        attributes: ['id', 'cafe_name', 'city_name'],
        include: 
        {
            model: CoffeeComments,
            attributes: ['id', 'comment_text']
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
           // loggedIn: req.session.body
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    Book.findAll({
        attributes: ['id', 'bookClub_name', 'city_name', 'meeting_weekday', 'meeting_time'],
        include: 
        {
            model: BookComments,
            attributes: ['id', 'book_text']
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
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
