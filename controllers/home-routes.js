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
                attributes: ['id', 'comment_text']
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
            // console.log(allPosts);
            res.render('homepage', {
                coffeePosts,
                booksPosts,
                loggedIn: req.session.loggedIn
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


router.get('/book/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'bookClub_name', 'city_name', 'meeting_weekday', 'meeting_time', 'created_at'],
        include: [{
            model: BookComments,
            attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Bookclub found with this id' });
            return;
        }

        // serialize the data
        const bookPost = dbPostData.get({ plain: true });

        // pass data to template
        res.render('singleBook-post', { 
            bookPost,
            loggedIn: req.session.loggedIn 
        });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/coffee/:id', (req, res) => {
    Coffee.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'cafe_name', 'city_name', 'created_at'],
        include: [{
            model: CoffeeComments,
            attributes: ['id', 'comment_text', 'coffee_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Coffee Shop found with this id' });
            return;
        }

        // serialize the data
        const coffeePost = dbPostData.get({ plain: true });

        // pass data to template
        res.render('singleCoffee-post', { 
            coffeePost,
            loggedIn: req.session.loggedIn 
        });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;
