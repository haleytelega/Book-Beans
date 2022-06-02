const router = require('express').Router();
const { Coffee, CoffeeComments, User } = require('../models');

router.get('/', (req, res) => {
    Coffee.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'cafe_name', 'city_name'],
        include: [{
            model: CoffeeComments,
            attributes: ['comment_text'],
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
    .then(dbCoffeeData => {
        const posts = dbCoffeeData.map(post => post.get({ plain: true }));
        res.render('add-coffeeshop', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;