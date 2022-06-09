const router = require('express').Router();
const { Book, BookComments, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Book.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'bookClub_name', 'city_name', 'meeting_weekday', 'meeting_time', 'user_id', 'created_at'],
        include: [{
            model: BookComments,
            attributes: ['id', 'comment_text'],
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
    .then(dbBookData => {
        const clubs = dbBookData.map(bookClub=> bookClub.get({ plain: true }));
        res.render('add-bookclub', { clubs, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;