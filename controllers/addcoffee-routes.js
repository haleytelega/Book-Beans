const router = require('express').Router();
const { Coffee, CoffeeComments, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Coffee.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'cafe_name', 'city_name', 'user_id', 'created_at'],
        include: [{
            model: CoffeeComments,
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
    .then(dbCoffeeData => {
        const shops = dbCoffeeData.map(coffeeShop => coffeeShop.get({ plain: true }));
        res.render('add-coffeeshop', { shops, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;